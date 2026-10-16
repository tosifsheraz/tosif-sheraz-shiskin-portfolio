"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Award,
  CircleCheckBig,
  Languages,
  Linkedin,
  Loader2,
  MailX,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/portfolio/section-heading";
import {
  contactChannels,
  inquiryTypes,
  profile,
  socials,
} from "@/lib/portfolio";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "email" | "inquiryType" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; inquiryType: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2 || name.length > 80) errors.name = "Please enter your name (2–80 characters).";
  if (!EMAIL_RE.test(email) || email.length > 120) errors.email = "Please enter a valid email address.";
  if (!inquiryTypes.includes(values.inquiryType as (typeof inquiryTypes)[number]))
    errors.inquiryType = "Please choose an inquiry type.";
  if (message.length < 10 || message.length > 2000)
    errors.message = "Your message should be between 10 and 2,000 characters.";
  return errors;
}

function ChannelIcon({ title }: { title: string }) {
  const cls = "h-4 w-4";
  if (title === "Fastest Channels") return <Send className={cls} aria-hidden="true" />;
  if (title === "Working Languages") return <Languages className={cls} aria-hidden="true" />;
  return <CircleCheckBig className={cls} aria-hidden="true" />;
}

export function Contact() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    inquiryType: "Business Inquiry",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = React.useState<string>("");

  const messageLength = values.message.trim().length;

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setFieldErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          inquiryType: values.inquiryType,
          message: values.message.trim(),
        }),
      });
      const body = (await res.json().catch(() => null)) as
        | { ok: boolean; message?: string; error?: string; issues?: { fieldErrors?: Record<string, string[]> } }
        | null;

      if (res.ok && body?.ok) {
        setStatus("success");
        setServerMessage(body.message ?? "Message received — Tosif will get back to you soon.");
        setValues({ name: "", email: "", inquiryType: "Business Inquiry", message: "" });
        return;
      }

      if (res.status === 400 && body?.issues?.fieldErrors) {
        const mapped: FieldErrors = {};
        for (const [k, v] of Object.entries(body.issues.fieldErrors)) {
          if (v && v[0]) mapped[k as keyof FieldErrors] = v[0];
        }
        setFieldErrors(mapped);
      }
      setStatus("error");
      setServerMessage(body?.error ?? "Something went wrong. Please try again or reach out on LinkedIn.");
    } catch {
      setStatus("error");
      setServerMessage("Network error — please check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28" aria-label="Contact">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something worth shipping."
          description="Business inquiries, technology consulting, freelance projects, partnerships, training and speaking — this form reaches Tosif directly, and every message gets a personal reply."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* ------------------------- Info column ------------------------- */}
          <div className="flex flex-col gap-4">
            {contactChannels.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  <ChannelIcon title={c.title} />
                  {c.title}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{c.primary}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.secondary}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Professional Profiles
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border px-3.5 py-2.5 text-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <span className="flex items-center gap-2.5 text-foreground">
                      {s.label === "LinkedIn" ? (
                        <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
                      ) : s.label === "Fiverr" ? (
                        <span
                          className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-black text-primary-foreground"
                          aria-hidden="true"
                        >
                          fi
                        </span>
                      ) : (
                        <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                      )}
                      {s.label}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                      {s.handle}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ------------------------- Form column ------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="card-sheen relative rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            {status === "success" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center" role="status">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CircleCheckBig className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">Message sent.</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {serverMessage}
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setStatus("idle");
                    setServerMessage("");
                  }}
                  className="mt-6 rounded-full"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-name">Your name</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                      className={cn(fieldErrors.name && "border-destructive focus-visible:ring-destructive/30")}
                    />
                    {fieldErrors.name && (
                      <p id="contact-name-error" className="text-xs text-destructive">{fieldErrors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-email">Email address</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                      className={cn(fieldErrors.email && "border-destructive focus-visible:ring-destructive/30")}
                    />
                    {fieldErrors.email && (
                      <p id="contact-email-error" className="text-xs text-destructive">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-type">Inquiry type</Label>
                  <Select value={values.inquiryType} onValueChange={(v) => update("inquiryType", v)}>
                    <SelectTrigger
                      id="contact-type"
                      className="w-full"
                      aria-invalid={Boolean(fieldErrors.inquiryType)}
                    >
                      <SelectValue placeholder="Choose a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldErrors.inquiryType && (
                    <p className="text-xs text-destructive">{fieldErrors.inquiryType}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="contact-message">Message</Label>
                    <span
                      className={cn(
                        "text-[11px] tabular-nums",
                        messageLength > 2000 ? "text-destructive" : "text-muted-foreground"
                      )}
                      aria-live="polite"
                    >
                      {messageLength} / 2,000
                    </span>
                  </div>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project, timeline, and what success looks like…"
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                    className={cn(
                      "resize-none thin-scrollbar",
                      fieldErrors.message && "border-destructive focus-visible:ring-destructive/30"
                    )}
                  />
                  {fieldErrors.message && (
                    <p id="contact-message-error" className="text-xs text-destructive">{fieldErrors.message}</p>
                  )}
                </div>

                {status === "error" && serverMessage ? (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    <MailX className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{serverMessage}</span>
                  </div>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="group mt-1 h-12 w-full rounded-full text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 sm:w-auto sm:px-10"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </>
                  )}
                </Button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Your details are stored securely and used only to reply to your inquiry —
                  never shared, never spammed. Prefer social? Reach {profile.firstName} via the
                  profiles listed on the left.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
