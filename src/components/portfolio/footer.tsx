"use client";

import Link from "next/link";
import { Award, Linkedin, MapPin } from "lucide-react";
import { footer, navLinks, profile, socials } from "@/lib/portfolio";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <Linkedin className="h-4 w-4" aria-hidden="true" />;
  if (label === "Fiverr")
    return (
      <span
        className="text-[10px] font-black leading-none tracking-tighter"
        aria-hidden="true"
      >
        fi.
      </span>
    );
  return <Award className="h-4 w-4" aria-hidden="true" />;
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
                {profile.initials}
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                {profile.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.blurb}
            </p>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {profile.location}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Tosif Sheraz on ${s.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-semibold text-foreground">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <div>
            <h2 className="font-display text-sm font-semibold text-foreground">Business</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://coreeliteexperts.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Core Elite Experts ↗
                </a>
              </li>
              <li>Core Elite Experts Pvt Ltd</li>
              <li>Cloud &amp; DevOps services</li>
              <li>Web &amp; software delivery</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
          <p className="text-xs text-muted-foreground/70">{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
