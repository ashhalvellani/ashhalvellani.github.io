"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "NLP Movie Genre Classification System",
    description:
      "Built an NLP classification pipeline to predict movie genres from plot summaries using the IMDb Genres dataset, comparing TF-IDF + Logistic Regression with a fine-tuned DistilBERT transformer model.",
    githubUrl: "http://github.com/ashhalvellani/movie-genre-classification",
    tags: ["Python", "Scikit-learn", "Hugging Face", "PyTorch", "Pandas"],
    icon: "◇",
  },
  {
    title: "Miner Adventure ",
    description:
      "Collaborated in a 4-person Agile team to develop a 2D maze-chase game in Java, implementing AI pathfinding with the A* algorithm, collision detection, and dynamic map/obstacle mechanics.",
    githubUrl: "https://github.com/ashhalvellani/miner-adventure",
    tags: ["Java", "Maven", "Swing", "JUnit"],
    icon: "{}",
  },
  {
    title: "Expense Tracker",
    description:
      "Developed a full-stack expense tracking web application using the MERN stack, enabling users to record, manage, and visualize financial transactions.",
    githubUrl: "https://github.com/ashhalvellani/",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    icon: "</>",
  },
  {
    title: "NYC Airbnb Price Analysis & Prediction",
    description:
      "Performed exploratory data analysis on 50k+ NYC Airbnb listings and built a machine learning models to predict prices based on various features.",
    githubUrl: "https://github.com/ashhalvellani/airbnb-price-analysis",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    icon: "⚙",
  },
  {
    title: "Coffee Consumption & Preference Analysis",
    description:
      "Analyzed 4,000+ survey responses from the Great American Coffee Taste Test dataset to explore relationships between demographics, economic factors, and coffee consumption habits.",
    githubUrl: "https://github.com/ashhalvellani/coffee-taste-test-analysis",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    icon: "⚙",
  },
  {
    title: "S-Talk Chat Service",
    description:
      "Built a terminal-based peer-to-peer chat application in C using UDP sockets, enabling real-time communication between clients through a multithreaded architecture with POSIX threads.",
    githubUrl: "https://github.com/ashhalvellani/s-talk",
    tags: ["C", "UDP", "POSIX Threads"],
    icon: "{}",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-['Sora'] text-2xl md:text-3xl font-bold mb-12 text-gray-100"
      >
        <span className="text-cyan-400">02</span> Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative p-5 rounded-lg border border-cyan-500/20 bg-[#16161f] overflow-hidden hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-4">
              <span className="font-['Sora'] text-2xl text-cyan-400/60">{project.icon}</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-pink-500 transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
            <h3 className="font-['Sora'] text-lg font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-0.5 rounded border border-cyan-500/20 bg-cyan-500/5 text-cyan-400/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
