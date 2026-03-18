"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ${
              scrolled ? "bg-accent-blue" : "bg-white/20 backdrop-blur-sm"
            }`}
          >
            <span
              className={`font-serif text-lg font-bold ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              B
            </span>
          </div>
          <span
            className={`font-serif text-xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            BATIVILLE Trading Co
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-accent-orange ${
                scrolled ? "text-foreground/70" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-accent-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-orange/90 hover:shadow-lg md:inline-block"
        >
          Partner With Us
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X
              size={24}
              className={scrolled ? "text-foreground" : "text-white"}
            />
          ) : (
            <Menu
              size={24}
              className={scrolled ? "text-foreground" : "text-white"}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-white md:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6"
              aria-label="Close menu"
            >
              <X size={28} className="text-foreground" />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-serif text-2xl font-semibold text-foreground transition-colors hover:text-accent-orange"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-accent-orange px-8 py-3 text-base font-semibold text-white"
            >
              Partner With Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
