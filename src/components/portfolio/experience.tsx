"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { educationHistory, experience, profile } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border/60 bg-muted/30 py-20 md:py-28"
      aria-label="Experience and education history"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience & Education" title="The road so far" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* ---------------------------- Timeline ---------------------------- */}
          <ol className="relative space-y-10 border-l-2 border-border pl-6">
            {experience.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: EASE }}
                className="relative"
              >
                {/* Timeline dot — centered on the border line */}
                <span
                  className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium text-foreground/90">{item.org}</p>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                    {item.type}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>

          {/* ---------------------------- Side cards ---------------------------- */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.06, ease: EASE }}
              className="card-sheen rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                Education
              </h3>
              <ul className="mt-3 space-y-4">
                {educationHistory.map((entry) => (
                  <li key={entry.institution}>
                    <p className="font-display text-sm font-semibold text-foreground">
                      {entry.institution}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {entry.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Languages className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                Languages
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/90">
                {profile.languages.join(" · ")}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Client communication in English
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="rounded-2xl border border-primary/30 bg-primary/5 p-6"
            >
              <h3 className="font-display text-base font-semibold text-foreground">
                Want the full story?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Detailed case studies, references and background are available on request.
              </p>
              <Button
                asChild
                className="group mt-5 h-10 rounded-full px-5 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <a href="#contact">
                  Get in touch
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
