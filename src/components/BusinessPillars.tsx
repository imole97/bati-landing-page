"use client";

import ScrollReveal from "./ScrollReveal";
import BrandMotif from "./BrandMotif";
import { Handshake, Cpu, TrendingUp, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const inputs = ["Capital", "Expertise", "Connections"];

interface Pillar {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  accent: string;
  bar: string;
  number: string;
}

const pillars: Pillar[] = [
  {
    index: "01",
    icon: Handshake,
    title: "Export Partnership",
    description:
      "We bridge the gap between African producers and global markets, structuring export deals that unlock new revenue streams and build lasting international trade relationships.",
    iconBg: "bg-olive/12",
    accent: "text-olive-deep",
    bar: "bg-olive",
    number: "text-olive/15",
  },
  {
    index: "02",
    icon: Cpu,
    title: "Technology Advisory",
    description:
      "Our technology arm helps portfolio companies adopt scalable digital infrastructure — from ERP systems and logistics tech to AI-powered analytics — to drive operational efficiency.",
    iconBg: "bg-navy/10",
    accent: "text-navy",
    bar: "bg-navy",
    number: "text-navy/12",
  },
  {
    index: "03",
    icon: TrendingUp,
    title: "Growth Financing",
    description:
      "We deploy flexible capital structures tailored for African markets — including mezzanine debt, equity partnerships, and revenue-based financing — to fuel sustainable expansion.",
    iconBg: "bg-gold/15",
    accent: "text-gold",
    bar: "bg-gold",
    number: "text-gold/20",
  },
];

export default function BusinessPillars() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-olive/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Bespoke header */}
        <ScrollReveal>
          <div className="relative">
            {/* Brand signature anchoring the header */}
            <BrandMotif className="pointer-events-none absolute -top-10 right-0 hidden h-44 w-44 opacity-[0.10] lg:block" />

            <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-10">
              {/* Title block */}
              <div className="lg:col-span-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-olive" />
                  <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.32em] text-olive-deep">
                    Our Approach
                  </span>
                </div>
                <h2 className="font-serif text-4xl font-light leading-[1.0] tracking-tight text-foreground sm:text-5xl lg:text-[3.7rem]">
                  Three Pillars
                  <br />
                  of <span className="italic text-navy">Growth</span>
                </h2>
              </div>

              {/* Thesis: the three inputs that compound into value */}
              <div className="lg:col-span-5">
                <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                  One integrated mandate — combining the three forces that
                  compound value for the companies we back.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                  {inputs.map((input, i) => (
                    <div key={input} className="flex items-center gap-4">
                      {i > 0 && (
                        <span className="h-px w-5 bg-border" aria-hidden="true" />
                      )}
                      <span className="flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-foreground/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                        {input}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seating rule */}
            <div className="mt-10 h-px w-full bg-linear-to-r from-border via-border to-transparent lg:mt-14" />
          </div>
        </ScrollReveal>

        {/* Pillar cards — vertically staggered */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7 lg:mt-20">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.12}>
              <div
                className={`group relative h-full overflow-hidden rounded-[1.5rem] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-navy/10 lg:p-9 ${
                  i === 1 ? "md:mt-10" : ""
                }`}
              >
                {/* Top accent bar grows on hover */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full origin-left scale-x-0 ${pillar.bar} transition-transform duration-500 group-hover:scale-x-100`}
                />
                {/* Oversized index numeral */}
                <span
                  className={`pointer-events-none absolute -top-2 right-5 font-serif text-7xl font-light leading-none ${pillar.number} transition-colors duration-500`}
                >
                  {pillar.index}
                </span>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconBg} transition-transform duration-500 group-hover:scale-105`}
                >
                  <pillar.icon
                    size={26}
                    className={pillar.accent}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center gap-1.5 text-sm font-semibold ${pillar.accent}`}
                >
                  Learn more
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
