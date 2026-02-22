"use client";

import ScrollReveal from "./ScrollReveal";
import { TrendingUp, Globe, Users, DollarSign } from "lucide-react";

const stats = [
  { value: "$120M+", label: "Capital Deployed", icon: DollarSign },
  { value: "45+", label: "Partner Companies", icon: Users },
  { value: "12", label: "African Markets", icon: Globe },
  { value: "3.5x", label: "Avg. Portfolio Growth", icon: TrendingUp },
];

export default function WhyNigeria() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Split Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Narrative */}
          <ScrollReveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-orange">
              Why Africa
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              The Continent&apos;s Most Dynamic
              <span className="text-accent-green"> Investment Frontier</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Nigeria and the broader African continent represent one of the
              last great untapped investment frontiers. With a youthful,
              fast-growing population exceeding 1.4 billion, rapidly expanding
              digital infrastructure, and a burgeoning middle class, the
              opportunity to deploy capital at scale is unparalleled.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              At Batty Capital, we understand the nuances of operating in this
              environment. Our deep local networks, regulatory expertise, and
              sector-specific knowledge allow us to identify and nurture
              high-potential enterprises that global investors often overlook —
              delivering outsized returns while catalyzing real economic growth.
            </p>
            <a
              href="#approach"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition-colors hover:text-accent-orange"
            >
              Explore Our Approach
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </ScrollReveal>

          {/* Right: Geometric Visual */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center">
              {/* Decorative geometric circles */}
              <div className="relative h-80 w-80 sm:h-96 sm:w-96">
                {/* Orange circle fragment */}
                <div className="absolute top-0 left-0 h-64 w-64 overflow-hidden rounded-full border-4 border-accent-orange/20 sm:h-72 sm:w-72">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-accent-orange/10" />
                </div>
                {/* Blue circle fragment */}
                <div className="absolute right-0 bottom-0 h-52 w-52 overflow-hidden rounded-full border-4 border-accent-blue/20 sm:h-60 sm:w-60">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-accent-blue/10" />
                </div>
                {/* Green accent dot */}
                <div className="absolute top-8 right-8 h-16 w-16 rounded-full bg-accent-green/20 backdrop-blur-md" />
                <div className="absolute bottom-12 left-12 h-8 w-8 rounded-full bg-accent-orange/30" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 shadow-sm lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-accent-orange/20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-4 text-center"
              >
                <stat.icon
                  size={20}
                  className="mb-3 text-accent-orange"
                  strokeWidth={1.5}
                />
                <span className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
