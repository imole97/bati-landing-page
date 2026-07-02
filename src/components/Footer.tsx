"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo-trimmed.png";

const footerLinks = {
  strategies: [
    { label: "Export Partnership", href: "#approach" },
    { label: "Technology Advisory", href: "#approach" },
    { label: "Growth Financing", href: "#approach" },
    { label: "Industry Focus", href: "#portfolio" },
  ],
  firm: [
    { label: "About Us", href: "#about" },
    { label: "Our Approach", href: "#approach" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white/70">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light" />
      <div className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-olive/8 blur-[120px]" />

      {/* Newsletter Strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-12">
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-olive">
              Newsletter
            </span>
            <h4 className="mt-2 font-serif text-2xl font-light text-white">
              Stay Informed
            </h4>
            <p className="mt-1 text-sm text-white/50">
              Get our quarterly investment insights delivered to your inbox.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md items-center gap-3 sm:w-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-gold-soft"
            >
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Address */}
          <div className="lg:col-span-2">
            {/* Contrast plate keeps the dark logo legible on the dark footer */}
            <div className="inline-block rounded-lg bg-white px-3 py-2 ring-1 ring-white/20">
              <div className="relative aspect-[470/71] w-[176px]">
                <Image
                  fill
                  className="object-contain"
                  src={logo}
                  alt="BATIVILLE"
                />
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              BATIVILLE Trading Co is an African investment firm focused on
              scaling high-potential enterprises through strategic capital
              deployment, export partnerships, and technology advisory.
            </p>
            <div className="mt-6 text-sm text-white/70">
              <p>Block 13, Rivtaf Golf Estate</p>
              <p>Port Harcourt, Nigeria.</p>
              <p className="mt-2 text-gold/80">invest@bativille.com</p>
            </div>
          </div>

          {/* Strategies */}
          <div>
            <h5 className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/70">
              Strategies
            </h5>
            <ul className="space-y-3">
              {footerLinks.strategies.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h5 className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/70">
              Firm
            </h5>
            <ul className="space-y-3">
              {footerLinks.firm.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <p className="font-mono text-[0.66rem] tracking-wide text-white/30">
            © {new Date().getFullYear()} BATIVILLE Trading Co. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-gold"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-gold"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-gold"
            >
              Cookie Policy
            </a>
          </div>
          {/* Back to top */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-gold hover:bg-gold/10"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-white/50" />
          </a>
        </div>
      </div>
    </footer>
  );
}
