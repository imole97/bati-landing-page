"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <ScrollReveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Get in Touch
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s Build
              <span className="text-accent-green"> Together</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Whether you&apos;re seeking growth capital, exploring export
              partnerships, or looking for strategic advisory support —
              we&apos;d love to hear from you. Tell us about your business and
              we&apos;ll find the right structure to accelerate your growth.
            </p>
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Office</p>
                <p className="mt-1 text-sm text-muted">
                  14 Victoria Island Business District
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="mt-1 text-sm text-muted">
                  invest@battycapital.com
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <p className="mt-1 text-sm text-muted">+234 (0)1 234 5678</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 rounded-2xl bg-background p-8 lg:p-10"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
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
                  className="w-full border-b-2 border-border bg-transparent py-3 text-sm text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-accent-blue"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
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
                  className="w-full border-b-2 border-border bg-transparent py-3 text-sm text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-accent-blue"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-b-2 border-border bg-transparent py-3 text-sm text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-accent-green"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
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
                  className="w-full resize-none border-b-2 border-border bg-transparent py-3 text-sm text-foreground transition-colors duration-300 placeholder:text-muted/50 focus:border-accent-green"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg disabled:opacity-70"
              >
                {submitted ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
