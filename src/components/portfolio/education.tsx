"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  HeartHandshake,
  Linkedin,
  Map,
  Mountain,
  Rocket,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { education } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const focusIcons = [Rocket, Linkedin, Bot, Map];
const communityIcons = [Users, Mountain, Building2, HeartHandshake];

/** Renders `text` with the first occurrence of `word` in gold gradient. */
function GoldWord({ text, word }: { text: string; word: string }) {
  const index = text.indexOf(word);
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <span className="text-gradient-gold">{word}</span>
      {text.slice(index + word.length)}
    </>
  );
}

export function Education() {
  return (
    <section
      id="education"
      className="border-y border-border/60 bg-muted/30 py-20 md:py-28"
      aria-label="Digital education and community mentorship"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={education.eyebrow}
          title={education.title}
          description={education.intro}
        />

        {/* --------------------------- Focus areas --------------------------- */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {education.focusAreas.map((area, i) => {
            const Icon = focusIcons[i % focusIcons.length];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: EASE }}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-foreground">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {area.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ------------------------- Community panel ------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="card-sheen relative mt-14 overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10"
        >
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              {education.community.eyebrow}
            </span>
            <h3 className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
              <GoldWord text={education.community.title} word="ecosystem" />
            </h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:gap-8">
              {education.community.points.map((point, i) => {
                const Icon = communityIcons[i % communityIcons.length];
                return (
                  <div key={point.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-foreground">
                        {point.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {point.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
