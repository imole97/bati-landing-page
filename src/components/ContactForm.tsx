"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import BrandMotif from "./BrandMotif";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Office",
    value: "Block 13, Rivtaf Golf Estate, Port Harcourt",
  },
  { icon: Mail, label: "Email", value: "invest@bativille.com" },
  { icon: Phone, label: "Phone", value: "+234 806 333 0341" },
];

const fieldClass =
  "w-full border-b border-white/15 bg-transparent py-3 text-sm text-white transition-colors duration-300 placeholder:text-white/30 focus:border-gold";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-32"
    >
      {/* Brand field */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy-deep to-navy" />
        <div className="absolute -top-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-olive/15 blur-[130px]" />
        <div className="absolute -bottom-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-gold/12 blur-[140px]" />
        <BrandMotif className="pointer-events-none absolute -left-20 bottom-0 hidden h-[34rem] w-[34rem] opacity-[0.06] lg:block" />
        <div className="bg-grain absolute inset-0 opacity-[0.15] mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Left: Info */}
          <ScrollReveal direction="left">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-olive" />
              <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.32em] text-olive">
                Get in Touch
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
              Let&apos;s Build{" "}
              <span className="bg-linear-to-r from-olive via-gold-soft to-gold bg-clip-text italic text-transparent">
                Together
              </span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-cream-muted sm:text-lg">
              Whether you&apos;re seeking growth capital, exploring export
              partnerships, or looking for strategic advisory support, tell us
              about your business and we&apos;ll find the right structure to
              accelerate your growth.
            </p>

            <div className="mt-10 space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <d.icon size={16} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/70">
                      {d.label}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="space-y-7 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md lg:p-10"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/45"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="Ciroma Adekunle"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/45"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="ciroma@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/45"
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/45"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${fieldClass} resize-none`}
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <div className="space-y-4 pt-1">
                {error && (
                  <p className="text-sm font-medium text-red-400">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={submitted || isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-sm font-semibold text-navy-deep shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-gold-soft hover:shadow-xl hover:shadow-gold/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitted ? (
                    "Message Sent ✓"
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
