"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CloudCog,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, socials, stats } from "@/lib/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

function SocialIcon({ label }: { label: string }) {
  const common = "h-[18px] w-[18px]";
  switch (label) {
    case "LinkedIn":
      return <Linkedin className={common} aria-hidden="true" />;
    case "Fiverr":
      return (
        <span
          className="text-[11px] font-black leading-none tracking-tighter"
          aria-hidden="true"
        >
          fi.
        </span>
      );
    default:
      return <Award className={common} aria-hidden="true" />;
  }
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36" aria-label="Introduction">
      {/* Backdrop: faint grid + warm radial glow */}
      <div className="bg-grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(620px 340px at 78% 8%, oklch(0.806 0.176 70.08 / 0.16), transparent 70%), radial-gradient(500px 300px at 12% 22%, oklch(0.806 0.176 70.08 / 0.07), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* ------------------------------ Copy ------------------------------ */}
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for consulting &amp; freelance projects
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-display text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground"
            >
              {profile.roles.join(" · ")}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-3 font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.4rem]"
            >
              Tosif <span className="text-gradient-gold">Sheraz</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-foreground/90"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-full px-7 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <a href="#contact">
                  Let&apos;s Work Together
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-sm font-semibold border-border hover:border-primary/40 hover:bg-primary/5"
              >
                <a href="#projects">Explore My Work</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Tosif Sheraz on ${s.label} (${s.handle})`}
                    title={`${s.label} — ${s.handle}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <SocialIcon label={s.label} />
                  </a>
                ))}
              </div>
              <span className="hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {profile.location}
              </p>
            </motion.div>
          </div>

          {/* ---------------------------- Portrait ---------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Offset frame */}
            <div
              className="absolute -inset-3 rounded-[2rem] border border-primary/20 md:-inset-4"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-4 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="card-sheen relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-black/10">
              <Image
                src={profile.portrait}
                alt={profile.portraitAlt}
                width={1024}
                height={1536}
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="h-auto w-full object-cover object-top"
              />
              {/* Bottom identity strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 pt-14">
                <p className="font-display text-base font-semibold text-white">
                  {profile.name}
                </p>
                <p className="text-xs text-white/75">
                  {profile.title} · {profile.location}
                </p>
              </div>
            </div>

            {/* Floating card: cloud stack */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 hidden items-center gap-2.5 rounded-xl border border-border bg-card/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:flex md:-left-8"
              aria-hidden="true"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <CloudCog className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold text-foreground">AWS · Azure · GCP</p>
                <p className="text-[10px] text-muted-foreground">Cloud &amp; DevOps Engineering</p>
              </div>
            </motion.div>

            {/* Floating card: community */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute -right-3 bottom-24 hidden items-center gap-2.5 rounded-xl border border-border bg-card/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:flex md:-right-7"
              aria-hidden="true"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold text-foreground">5,256+ community</p>
                <p className="text-[10px] text-muted-foreground">Digital skills &amp; mentorship</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ---------------------------- Stats band ---------------------------- */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-20 md:grid-cols-4"
          aria-label="Key professional statistics"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-6 md:px-6">
              <dt className="order-2 mt-1 text-xs font-medium leading-snug text-muted-foreground md:mt-2">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {s.value}
              </dd>
              <p className="order-3 mt-1.5 hidden text-[11px] leading-snug text-muted-foreground/80 sm:block">
                {s.detail}
              </p>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="h-16 md:h-24" aria-hidden="true" />
    </section>
  );
}
