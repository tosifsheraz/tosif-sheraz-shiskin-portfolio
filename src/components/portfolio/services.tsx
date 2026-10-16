"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Cloud,
  Compass,
  Container,
  Globe,
  GraduationCap,
  Workflow,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { services } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

type IconType = ComponentType<{ className?: string }>;

const serviceIcons: Record<string, IconType> = {
  "cloud-infrastructure": Cloud,
  containers: Container,
  "cicd-gitops": Workflow,
  "devops-troubleshooting": Wrench,
  "web-software": Globe,
  consulting: Compass,
  training: GraduationCap,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28" aria-label="Services offered">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          description="Seven problem-first engagement types. Every service starts from the challenge you are facing — and ends with a deliverable you can rely on in production."
        />

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.id] ?? Cloud;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.06 * (i % 3), ease: EASE }}
                className="card-sheen flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {service.personal ? (
                    <span className="whitespace-nowrap rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                      Delivered personally
                    </span>
                  ) : (
                    <span className="whitespace-nowrap rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                      via Core Elite Experts
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
                  {service.title}
                </h3>

                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    The problem
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    {service.problem}
                  </p>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.value}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {deliverable}
                    </li>
                  ))}
                </ul>

                <div className="mb-5 mt-4 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-auto border-t border-border/60 pt-3.5 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground/75">Best for</span>
                  {" — "}
                  {service.bestFor}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
