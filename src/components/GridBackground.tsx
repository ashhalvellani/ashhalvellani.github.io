"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 240, 255, 0.15) 0%, transparent 50%)",
        }}
      />
      {/* Animated gradient orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 42, 109, 0.3) 0%, transparent 70%)",
          top: "20%",
          right: "10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
