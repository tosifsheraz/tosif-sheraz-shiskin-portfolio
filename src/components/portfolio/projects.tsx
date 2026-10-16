"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { projectCategories, projects, projectsNote } from "@/lib/portfolio";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

type Category = (typeof projectCategories)[number];

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
        {label}
      </p>
      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="border-y border-border/60 bg-muted/30 py-20 md:py-28"
      aria-label="Selected projects and engagement types"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & engagement types"
          description="Filter by focus area — every card reflects real engagement types delivered for clients."
        />

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-colors"
                    : "rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                }
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Project cards */}
        <motion.div layout className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.35, delay: 0.04 * (i % 3), ease: EASE }}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div>
                  <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-4 space-y-3 border-t border-border/60 pt-4">
                  <DetailRow label="Challenge">{project.challenge}</DetailRow>
                  <DetailRow label="Approach">{project.approach}</DetailRow>
                  <DetailRow label="Outcome">{project.outcome}</DetailRow>

                  <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                    <User
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {project.role}
                  </p>

                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-foreground/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground"
        >
          {projectsNote}
        </motion.p>
      </div>
    </section>
  );
}
