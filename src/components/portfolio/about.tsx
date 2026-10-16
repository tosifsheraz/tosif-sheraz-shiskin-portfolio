"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Globe, Hammer, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { about, profile } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const valueIcons = [Hammer, Users, ShieldCheck, Globe];

export function About() {
  return (
    <section
      id="about"
      className="border-y border-border/60 bg-muted/30 py-20 md:py-28"
      aria-label="About Tosif Sheraz"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ------------------------- Working photo ------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Offset frame */}
            <div
              className="absolute -inset-3 rounded-[2rem] border border-primary/20"
              aria-hidden="true"
            />
            <div className="card-sheen relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-black/10">
              <Image
                src={profile.workingShot}
                alt={profile.workingShotAlt}
                width={960}
                height={1280}
                sizes="(max-width: 1024px) 90vw, 440px"
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating caption chip */}
            <div
              className="absolute -bottom-5 left-5 hidden items-center gap-2.5 rounded-xl border border-border bg-card/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:flex"
              aria-hidden="true"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Briefcase className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold text-foreground">On the job</p>
                <p className="text-[10px] text-muted-foreground">
                  Client delivery &amp; mentoring
                </p>
              </div>
            </div>
          </motion.div>

          {/* --------------------------- Narrative --------------------------- */}
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              className="mb-8 md:mb-10"
            />

            <div className="space-y-4">
              {about.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: 0.06 * i, ease: EASE }}
                  className="text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.values.map((value, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: 0.06 * i, ease: EASE }}
                    className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-sm font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {value.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
