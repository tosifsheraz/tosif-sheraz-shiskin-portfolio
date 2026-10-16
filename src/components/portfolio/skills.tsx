"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Cloud,
  GraduationCap,
  Handshake,
  Languages,
  ServerCog,
} from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { skillGroups } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

type IconType = ComponentType<{ className?: string }>;

const groupIcons: Record<string, IconType> = {
  "Cloud Platforms": Cloud,
  "DevOps & Automation": ServerCog,
  "Business & Leadership": Briefcase,
  "Freelancing & Client Management": Handshake,
  "Education & Mentoring": GraduationCap,
  Languages: Languages,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28" aria-label="Skills and tools">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="A practical toolkit, business-first"
          description="Tools and capabilities chosen for one reason: they help clients ship reliably — and help people build careers that last."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.title] ?? Cloud;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.06 * (i % 3), ease: EASE }}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
