"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-6 px-6 border-t border-cyan-500/20 text-center text-gray-500 text-sm z-10"
    >
      AV · © {new Date().getFullYear()}
    </motion.footer>
  );
}
