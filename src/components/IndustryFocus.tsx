"use client";

import ScrollReveal from "./ScrollReveal";

const industries = [
  {
    title: "Agro-Allied",
    subtitle: "Farm to Global Market",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Logistics & Supply Chain",
    subtitle: "Moving Africa Forward",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Digital & Print Tech",
    subtitle: "Innovation at Scale",
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
    name: "Amara Okafor",
    initials: "AO",
    role: "Trade Finance",
    ringColor: "ring-[#d4772c]/30",
    bgColor: "bg-[#d4772c]/10",
    textColor: "text-[#d4772c]",
  },
  {
    name: "Emeka Nwosu",
    initials: "EN",
    role: "Agribusiness Strategy",
    ringColor: "ring-[#2d6a4f]/30",
    bgColor: "bg-[#2d6a4f]/10",
    textColor: "text-[#2d6a4f]",
  },
  {
    name: "Fatima Bello",
    initials: "FB",
    role: "Technology & Digital",
    ringColor: "ring-[#1b4965]/30",
    bgColor: "bg-[#1b4965]/10",
    textColor: "text-[#1b4965]",
  },
  {
    name: "David Mensah",
    initials: "DM",
    role: "Logistics & Operations",
    ringColor: "ring-[#d4772c]/30",
    bgColor: "bg-[#d4772c]/10",
    textColor: "text-[#d4772c]",
  },
];

export default function IndustryFocus() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
              Portfolio & Focus
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Industries We Champion
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent-green" />
          </div>
        </ScrollReveal>

        {/* Industry Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.title} delay={i * 0.15}>
              <div className="group relative h-80 overflow-hidden rounded-2xl sm:h-96">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${industry.image}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent-orange">
                    {industry.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                    {industry.title}
                  </h3>
                  <div className="mt-4 h-0.5 w-12 rounded-full bg-accent-orange transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Partner Logos Marquee */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Trusted by Leading African Enterprises
            </p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
              {/* Marquee track */}
              <div className="animate-marquee flex w-max items-center gap-16">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div
                    key={`${logo}-${i}`}
                    className="flex h-12 items-center justify-center px-4 grayscale transition-all duration-500 hover:grayscale-0"
                  >
                    <span className="whitespace-nowrap text-lg font-semibold text-foreground/25 transition-colors duration-500 hover:text-accent-blue">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Advisory Team */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20">
            <h3 className="mb-10 text-center font-serif text-2xl font-bold text-foreground">
              Our Advisory Network
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full ring-2 ${advisor.ringColor} ${advisor.bgColor}`}
                  >
                    <span
                      className={`font-serif text-2xl font-bold ${advisor.textColor}`}
                    >
                      {advisor.initials}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {advisor.name}
                  </p>
                  <p className="text-xs text-muted">{advisor.role}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
