"use client";

import ScrollReveal from "./ScrollReveal";
import { Handshake, Cpu, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  topBar: string;
  linkColor: string;
}

const pillars: Pillar[] = [
  {
    icon: Handshake,
    title: "Export Partnership",
    description:
      "We bridge the gap between African producers and global markets, structuring export deals that unlock new revenue streams and build lasting international trade relationships.",
    iconBg: "bg-[#d4772c]/10",
    iconColor: "text-[#d4772c]",
    topBar: "bg-[#d4772c]",
    linkColor: "text-[#d4772c]",
  },
  {
    icon: Cpu,
    title: "Technology Advisory",
    description:
      "Our technology arm helps portfolio companies adopt scalable digital infrastructure — from ERP systems and logistics tech to AI-powered analytics — to drive operational efficiency.",
    iconBg: "bg-[#1b4965]/10",
    iconColor: "text-[#1b4965]",
    topBar: "bg-[#1b4965]",
    linkColor: "text-[#1b4965]",
  },
  {
    icon: TrendingUp,
    title: "Growth Financing",
    description:
      "We deploy flexible capital structures tailored for African markets — including mezzanine debt, equity partnerships, and revenue-based financing — to fuel sustainable expansion.",
    iconBg: "bg-[#2d6a4f]/10",
    iconColor: "text-[#2d6a4f]",
    topBar: "bg-[#2d6a4f]",
    linkColor: "text-[#2d6a4f]",
  },
];

export default function BusinessPillars() {
  return (
    <section id="approach" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Our Approach
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Three Pillars of Growth
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent-orange" />
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Our integrated approach combines capital, expertise, and
              connections to create compounding value for our portfolio
              companies.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl lg:p-10">
                {/* Accent top bar */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full ${pillar.topBar} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${pillar.iconBg}`}
                >
                  <pillar.icon
                    size={28}
                    className={pillar.iconColor}
                    strokeWidth={1.5}
                  />
                </div>
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
                {/* Learn More */}
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${pillar.linkColor} transition-colors hover:text-accent-orange`}
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
