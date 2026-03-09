"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "Jan - Aug 2025",
    title: "Software Engineer Co-op",
    company: "BC Liquor Distribution Branch",
    description:
      "Upgraded three enterprise Java/Spring Boot applications by refactoring deprecated APIs and updating dependencies. Implemented a SAML 2.0 single sign-on solution across 10 internal applications and improved deployment reliability using Jenkins CI/CD and WildFly across environments supporting 500+ retail stores.",
  },
  {
    period: "May - Aug 2023",
    title: "Software Test Engineer Co-op",
    company: "Epic Safety",
    description:
      "Improved reliability of IoT devices and a React-based cloud platform by designing and executing 200+ automated and manual tests, achieving 95% test coverage and identifying 50+ defects before release. Diagnosed critical firmware issues through hardware simulation and log analysis in Keil μVision.",
  },
  // {
  //   period: "2019 — 2021",
  //   title: "Junior Developer",
  //   company: "Starter Company",
  //   description:
  //     "Contributed to full-stack development projects. Gained expertise in React, Node.js, and cloud platforms.",
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-['Orbitron'] text-2xl md:text-3xl font-bold mb-16 text-gray-100"
      >
        <span className="text-cyan-400">01</span> Experience
      </motion.h2>

      <div className="relative pl-8 md:pl-10 border-l-2 border-cyan-500/20">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pb-12 last:pb-0 group"
          >
            <motion.div
              className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
              whileHover={{ scale: 1.3 }}
            />
            <motion.div
              className="p-6 rounded-lg border border-cyan-500/20 bg-[#16161f] hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)] transition-all duration-300 group-hover:translate-x-2"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm text-cyan-400 tracking-wider">{exp.period}</span>
              <h3 className="font-['Orbitron'] text-xl font-semibold mt-2">{exp.title}</h3>
              <p className="text-pink-500 font-semibold mt-1">{exp.company}</p>
              <p className="text-gray-400 mt-3 leading-relaxed">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
