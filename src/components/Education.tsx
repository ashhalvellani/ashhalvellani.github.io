"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-['Orbitron'] text-2xl md:text-3xl font-bold mb-16 text-gray-100"
      >
        <span className="text-cyan-400">03</span> Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 p-6 md:p-8 rounded-lg border border-cyan-500/20 bg-[#16161f] hover:border-pink-500/30 hover:shadow-[0_0_25px_rgba(255,42,109,0.08)] transition-all duration-300"
      >
        <div className="flex-shrink-0 font-semibold text-pink-500 tracking-wider">
          2021 — 2025
        </div>
        <div className="flex-1">
          <h3 className="font-['Orbitron'] text-xl font-semibold">
            Bachelor of Science in Computing Science
          </h3>
          <p className="text-cyan-400/80 font-semibold mt-1">Simon Fraser University</p>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Graduated with distinction <br />
            Focus areas: Algorithms, Computer Architecture, Computational Linguistics, Data Mining, ML
          </p>
        </div>
      </motion.div>
    </section>
  );
}
