"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  // { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-cyan-500/20" : "bg-transparent"
      }`}
    >
      <Link
        href="#"
        className="font-['Sora'] font-bold text-lg tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
      >
        // AV
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-['Sora'] text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-cyan-400"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-[280px] max-w-[80%] bg-[#0a0a0f]/98 backdrop-blur-xl border-l border-cyan-500/20 z-40 md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-['Sora'] text-base font-medium text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
