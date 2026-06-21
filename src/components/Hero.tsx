"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import BrandMotif from "./BrandMotif";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const stats = [
  { value: "₦805M+", label: "Capital deployed" },
  { value: "5+", label: "Portfolio companies" },
  { value: "3", label: "Sectors backed" },
];

const trustTags = ["Growth Capital", "Advisory", "Operating Support"];

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReduced ? 0 : 80]
  );
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReduced ? 0 : -60]
  );

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };
  const lineUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-navy-deep text-white"
    >
      {/* Background field */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy-deep to-navy" />
        {/* olive glow (top-left) */}
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-olive/25 blur-[120px] animate-drift" />
        {/* gold glow (bottom-right) */}
        <div className="absolute -bottom-48 -right-32 h-[40rem] w-[40rem] rounded-full bg-gold/15 blur-[140px] animate-drift" />
        {/* interwoven-arrow motif, bleeding off the right edge */}
        <BrandMotif className="pointer-events-none absolute -right-24 top-1/2 hidden h-[44rem] w-[44rem] -translate-y-1/2 opacity-[0.07] lg:block" />
        {/* grain */}
        <div className="bg-grain absolute inset-0 opacity-[0.18] mix-blend-soft-light" />
        {/* vignette toward edges */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,rgba(8,14,28,0.65)_100%)]" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20 lg:px-12 lg:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.32fr_1fr] lg:gap-8"
        >
          {/* Left column */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              variants={lineUp}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-olive" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-olive">
                African Capital &amp; Investment
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-serif font-light leading-[0.95] tracking-tight text-white [text-wrap:balance]">
              <span className="block overflow-hidden">
                <motion.span
                  variants={lineUp}
                  className="block text-5xl sm:text-6xl lg:text-[4.6rem]"
                >
                  Fueling the
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={lineUp}
                  className="block text-5xl sm:text-6xl lg:text-[4.6rem]"
                >
                  Future of
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1">
                <motion.span
                  variants={lineUp}
                  className="-ml-1 block bg-linear-to-r from-olive via-gold-soft to-gold bg-clip-text pr-2 text-6xl italic text-transparent sm:text-7xl lg:text-[5.4rem]"
                >
                  African Enterprise
                </motion.span>
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              variants={lineUp}
              className="mt-7 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg"
            >
              We partner with ambitious entrepreneurs and high-growth companies
              across the continent — providing strategic capital, advisory, and
              operational support to scale transformative businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={lineUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-gold-soft hover:shadow-xl hover:shadow-gold/30"
              >
                Apply for Funding
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={lineUp}
              className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6"
            >
              {trustTags.map((tag, i) => (
                <div key={tag} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="h-1 w-1 rounded-full bg-olive/60" />
                  )}
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/45">
                    {tag}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — layered image + floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
            className="relative mx-auto hidden w-full max-w-md lg:block"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/40"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523365154888-8a758819b722?q=80&w=1600&auto=format&fit=crop')",
                }}
              />
              {/* grade toward navy so the image fuses with the field */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/30 to-transparent" />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </motion.div>

            {/* Floating gold KPI card */}
            <motion.div
              style={{ y: cardY }}
              className="animate-float-soft absolute -left-10 top-10 w-44 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/30 backdrop-blur-md"
            >
              <p className="font-serif text-[32px] text-center text-white">
                {stats[0].value}
              </p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/55">
                {stats[0].label}
              </p>
            </motion.div>

            {/* Floating dual-stat card */}
            <motion.div
              style={{ y: imageY }}
              className="animate-float-soft-delay absolute -bottom-8 -right-8 w-52 rounded-2xl border border-white/10 bg-navy/70 p-5 shadow-xl shadow-black/40 backdrop-blur-md"
            >
              <div className="flex items-end justify-between gap-4">
                {stats.slice(1).map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl font-medium text-white">
                      {s.value}
                    </p>
                    <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/50">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile stat row (replaces the offset cards on small screens) */}
          <motion.div
            variants={lineUp}
            className="grid grid-cols-3 gap-3 lg:hidden"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm"
              >
                <p className="font-serif text-2xl font-medium  text-gold">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-white/55">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-label="Scroll to explore"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <motion.span
            animate={prefersReduced ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </span>
      </motion.a>

      {/* soft fade into the next (cream) section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
