"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Agro-Allied",
    subtitle: "Global Commodities Trading",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Logistics & Supply Chain",
    subtitle: "Moving Africa forward",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Digital & Print Tech",
    subtitle: "Innovation at scale",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
];

const partnerLogos = [
  "Dangote Group",
  "Flutterwave",
  "Andela",
  "Paystack",
  "Jumia",
  "Kuda Bank",
  "Interswitch",
  "Cowrywise",
];

const advisors = [
  {
    name: " Ethics Point Financial Services ",
    initials: "EPFS",
    role: "Finance",
  },
  {
    name: "TWC (The Wright Capital)",
    initials: "TWC",
    role: "Investment Management",
  },
  { name: "Phillad Consulting", initials: "PC", role: "Consulting" },
  {
    name: "Forxus One Enterprise",
    initials: "FOE",
    role: "Technology & Digital",
  },
];

export default function IndustryFocus() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[26rem] w-[26rem] rounded-full bg-gold/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Bespoke header */}
        <ScrollReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-olive" />
                <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.32em] text-olive-deep">
                  Portfolio &amp; Focus
                </span>
              </div>
              <h2 className="font-serif text-4xl font-light leading-[1.0] tracking-tight text-foreground sm:text-5xl lg:text-[3.7rem]">
                Industries We <span className="italic text-navy">Champion</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted sm:text-lg">
              We invest with conviction in the sectors building Africa&apos;s
              real economy — where capital and operating depth compound fastest.
            </p>
          </div>
        </ScrollReveal>

        {/* Industry Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.title} delay={i * 0.12}>
              <div className="group relative h-[24rem] overflow-hidden rounded-[1.5rem] sm:h-[27rem]">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  style={{ backgroundImage: `url('${industry.image}')` }}
                />
                {/* Navy grade overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/40 to-navy-deep/5 transition-opacity duration-500 group-hover:from-navy-deep" />
                <div className="bg-grain absolute inset-0 opacity-[0.12] mix-blend-soft-light" />

                {/* Hover arrow chip */}
                <div className="absolute right-5 top-5 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full border border-white/25 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-white" />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-gold">
                    {industry.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-white sm:text-[1.7rem]">
                    {industry.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Partner Logos Marquee */}
        {/* <ScrollReveal delay={0.2}>
          <div className="mt-24 lg:mt-28">
            <p className="mb-8 text-center font-mono text-[0.66rem] uppercase tracking-[0.28em] text-muted">
              Trusted by leading African enterprises
            </p>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />
              <div className="animate-marquee flex w-max items-center gap-14">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <span
                    key={`${logo}-${i}`}
                    className="whitespace-nowrap text-lg font-semibold text-foreground/25 transition-colors duration-500 hover:text-navy"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal> */}

        {/* Advisory Network */}
        <ScrollReveal delay={0.15}>
          <div className="mt-24 lg:mt-28">
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-olive-deep">
                The Backbone Behind It
              </span>
              <h3 className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                Our Advisory Network
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-border bg-linear-to-br from-card to-background shadow-sm transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-navy/10">
                    <span className="font-serif text-2xl font-medium text-navy">
                      {advisor.initials}
                    </span>
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-olive ring-4 ring-background transition-colors duration-500 group-hover:bg-gold" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-foreground">
                    {advisor.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                    {advisor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
