"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  {
    href: "mailto:ashhalvellani@outlook.com",
    icon: Mail,
    label: "ashhalvellani@outlook.com",
  },
  {
    href: "https://www.linkedin.com/in/ashhalvellani/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ashhalvellani",
    icon: Github,
    label: "GitHub",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-24 max-w-2xl mx-auto z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-['Orbitron'] text-2xl md:text-3xl font-bold mb-16 text-gray-100"
      >
        <span className="text-cyan-400">04</span> Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-['Orbitron'] text-xl mb-4">
          I&apos;d love to hear from you.
        </p>
        <p className="text-gray-400 mb-10">
          Open to new opportunities, collaborations, and interesting conversations. Reach out through
          any of the channels below.
        </p>
        <div className="flex flex-col gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-cyan-500/20 bg-[#16161f] hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400">
                <link.icon size={20} />
              </div>
              <span className="text-gray-100">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
