"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { freelancing, platformNote, socials } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function Freelancing() {
  const fiverr = socials.find((s) => s.label === "Fiverr");

  return (
    <section
      id="freelancing"
      className="py-20 md:py-28"
      aria-label="Freelancing and client work"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={freelancing.eyebrow}
          title={freelancing.title}
          description={freelancing.intro}
        />

        {/* ----------------------- Featured platform card ----------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="card-sheen relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              {fiverr ? (
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Fiverr · {fiverr.handle}
                </span>
              ) : null}
              <h3 className="mt-4 max-w-2xl font-display text-xl font-semibold leading-snug text-foreground md:text-2xl">
                {freelancing.fiverrTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {freelancing.fiverrAbout}
              </p>
            </div>
            {fiverr ? (
              <Button
                asChild
                className="group h-11 shrink-0 rounded-full px-6 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <a href={fiverr.href} target="_blank" rel="noopener noreferrer">
                  View my Fiverr profile
                  <ArrowUpRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            ) : null}
          </div>
        </motion.div>

        {/* --------------------------- Work types list --------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.06, ease: EASE }}
          className="mt-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
        >
          <h3 className="font-display text-base font-semibold text-foreground">
            What clients hire me for
          </h3>
          <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {freelancing.workTypes.map((workType) => (
              <li key={workType} className="flex items-start gap-2.5">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {workType}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ----------------------------- Approach ----------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
        >
          <h3 className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
            How I work
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {freelancing.approach.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: EASE }}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="font-mono text-xs font-semibold text-primary" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2.5 font-display text-sm font-semibold leading-snug text-foreground">
                  {step.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">{platformNote}</p>
      </div>
    </section>
  );
}
