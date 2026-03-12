"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-6 md:px-12 lg:px-24 pt-24 pb-16 max-w-7xl mx-auto z-10">
      <div className="flex-1 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm md:text-base text-cyan-400 tracking-[0.25em] uppercase mb-4 font-medium"
        >
          Software Engineer · Full-Stack Developer
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Sora'] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5"
        >
          <span className="text-gray-100">Hello,</span>
          <br />
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Ashhal Vellani
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
        >
          Computer Science graduate from Simon Fraser University.<br />
          Passionate about elegant solutions and cutting-edge technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-['Sora'] font-semibold text-sm tracking-wider bg-cyan-500 text-[#0a0a0f] rounded hover:bg-cyan-400 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:-translate-y-0.5"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-['Sora'] font-semibold text-sm tracking-wider border-2 border-cyan-500 text-cyan-400 rounded hover:bg-cyan-500/10 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#experience"
          className="flex flex-col items-center gap-2 text-cyan-400/70 hover:text-cyan-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-['Sora'] font-medium tracking-widest">SCROLL</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
