"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

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
    <footer className="bg-foreground text-white/70">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-12">
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">
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
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent-orange focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-accent-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-orange/90"
            >
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Address */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-orange">
                <span className="font-serif text-lg font-bold text-white">
                  B
                </span>
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Batty Capital
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Batty Capital is an African investment firm focused on scaling
              high-potential enterprises through strategic capital deployment,
              export partnerships, and technology advisory.
            </p>
            <div className="mt-6 text-sm text-white/40">
              <p>14 Victoria Island Business District</p>
              <p>Lagos, Nigeria</p>
              <p className="mt-2">invest@battycapital.com</p>
            </div>
          </div>

          {/* Strategies */}
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Strategies
            </h5>
            <ul className="space-y-3">
              {footerLinks.strategies.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Firm
            </h5>
            <ul className="space-y-3">
              {footerLinks.firm.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-orange"
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
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Batty Capital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Cookie Policy
            </a>
          </div>
          {/* Back to top */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-accent-orange hover:bg-accent-orange/10"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-white/50" />
          </a>
        </div>
      </div>
    </footer>
  );
}
