import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { inquiryTypes } from "@/lib/portfolio";

// Prisma requires the Node.js runtime (no Edge).
export const runtime = "nodejs";

/* ------------------------------ Validation ------------------------------ */

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be at most 80 characters."),
  email: z
    .string()
    .trim()
    .max(120, "Email must be at most 120 characters.")
    .email("Please enter a valid email address."),
  inquiryType: z.enum(inquiryTypes, "Please select a valid inquiry type."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be at most 2000 characters."),
});

type ContactInput = z.infer<typeof contactSchema>;

/* --------------------------- In-memory rate limit ----------------------- */
// Simple sliding-window limiter keyed by client IP. Counts submissions that
// pass validation (i.e. attempts that would reach the database). Resets on
// server restart by design — sufficient for a low-traffic contact form.

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

const submissionLog = new Map<string, number[]>();

function pruneExpired(timestamps: number[], now: number): number[] {
  return timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
}

function isRateLimited(key: string, now: number): boolean {
  const history = pruneExpired(submissionLog.get(key) ?? [], now);
  submissionLog.set(key, history);
  return history.length >= RATE_LIMIT_MAX_REQUESTS;
}

function recordSubmission(key: string, now: number): void {
  const history = pruneExpired(submissionLog.get(key) ?? [], now);
  history.push(now);
  submissionLog.set(key, history);

  // Keep the module-level map from growing without bound.
  if (submissionLog.size > 500) {
    for (const [existingKey, timestamps] of submissionLog) {
      if (pruneExpired(timestamps, now).length === 0) {
        submissionLog.delete(existingKey);
      }
    }
  }
}

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstHop = forwarded.split(",")[0]?.trim();
    if (firstHop) return firstHop;
  }
  return "unknown";
}

/* -------------------------------- Handlers ------------------------------ */

export async function POST(request: Request) {
  const now = Date.now();
  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey, now)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many messages sent. Please try again in a few minutes.",
      },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body. Expected JSON." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form fields.",
        issues: z.flattenError(parsed.error),
      },
      { status: 400 }
    );
  }

  const data: ContactInput = parsed.data;

  // Only valid submissions count against the rate limit.
  recordSubmission(clientKey, now);

  try {
    const created = await db.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        inquiryType: data.inquiryType,
        message: data.message,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: created.id,
        message: "Message received — Tosif will get back to you soon.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[/api/contact] Failed to save contact message:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our side. Please try LinkedIn or Fiverr instead.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Contact API operational" },
    { status: 200 }
  );
}
