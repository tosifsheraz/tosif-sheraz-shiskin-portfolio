"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { company, profile } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function Company() {
  return (
    <section id="company" className="py-20 md:py-28" aria-label="Core Elite Experts company">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* -------------------------- Founder photo -------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              className="absolute -bottom-6 -right-4 h-44 w-44 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="card-sheen relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-black/10">
              <Image
                src={profile.founderShot}
                alt={profile.founderShotAlt}
                width={1145}
                height={1374}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* ----------------------------- Details ----------------------------- */}
          <div>
            <SectionHeading
              eyebrow={company.eyebrow}
              title={company.name}
              description={company.positioning}
              className="mb-8 md:mb-10"
            />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.06, ease: EASE }}
              className="text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              {company.description}
            </motion.p>

            {/* What I lead */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
            >
              <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                What I lead
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {company.leadershipPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CircleCheckBig
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company services */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="mt-8 rounded-2xl border border-border bg-muted/40 p-5"
            >
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                <Building2 className="h-4 w-4 text-primary" aria-hidden="true" />
                Company services
              </h3>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {company.companyServices.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/85"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.24, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <Button
                asChild
                className="group h-11 rounded-full px-6 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  Visit {company.websiteLabel}
                  <ArrowUpRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Button>
              <span className="text-xs text-muted-foreground">{company.legalName}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
              className="mt-7 border-t border-border/60 pt-4 text-xs italic leading-relaxed text-muted-foreground"
            >
              {company.transparencyNote}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
