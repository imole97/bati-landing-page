"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowRight, TrendingUp, Globe, Users, DollarSign } from "lucide-react";

const stats = [
  { value: "₦805M+", label: "Capital Deployed", icon: DollarSign },
  { value: "5+", label: "Partner Companies", icon: Users },
  { value: "3", label: "African Markets", icon: Globe },
  { value: "3.5x", label: "Avg. Portfolio Growth", icon: TrendingUp },
];

export default function WhyNigeria() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Ambient brand texture */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[30rem] w-[30rem] rounded-full bg-olive/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Split Section */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* Left: Narrative */}
          <ScrollReveal direction="left">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-olive" />
              <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.32em] text-olive-deep">
                Why Africa
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Great Businesses Can Be
              <span className="bg-linear-to-r from-olive-deep to-olive bg-clip-text italic text-transparent">
                Found Anywhere
              </span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We believe successful investing begins with understanding a
              business, its people, and its long-term prospects.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Africa continues to present opportunities for businesses that
              operate with integrity, serve essential markets, and possess the
              capacity to grow responsibly over time. Rather than chasing
              trends, we focus on identifying companies with strong fundamentals
              and supporting them through long-term partnerships.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              At Bativille Trading Company, our objective is simple: invest in
              quality businesses, support capable leaders, and help create
              lasting value for all stakeholders.
            </p>
            <a
              href="#approach"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-olive-deep"
            >
              <span className="relative">
                Explore Our Approach
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight
                size={16}
                className="text-gold transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </ScrollReveal>

          {/* Right: Layered editorial visual */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative mx-auto w-full max-w-md">
              {/* Offset frame behind */}
              <div className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border border-gold/40" />
              {/* Olive accent shape */}
              <div className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-olive/15 backdrop-blur-sm" />

              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-2xl shadow-navy/15">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-deep/45 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="animate-float-soft absolute -bottom-6 -left-6 w-44 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-navy/15">
                <p className="font-serif text-4xl font-medium text-navy">
                  1.4B<span className="text-gold">+</span>
                </p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                  Population across the continent
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Band — dark, echoes the hero */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-24 overflow-hidden rounded-3xl bg-navy-deep px-6 py-12 lg:mt-28 lg:px-12">
            <div className="bg-grain absolute inset-0 opacity-[0.15] mix-blend-soft-light" />
            <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-olive/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />

            <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col lg:items-center lg:px-8 lg:text-center"
                >
                  <stat.icon
                    size={18}
                    className="mb-4 text-olive"
                    strokeWidth={1.5}
                  />
                  <span className="font-serif text-[2rem] font-light text-white sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/55">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
