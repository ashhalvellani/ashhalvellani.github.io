// "use client";

// import { motion } from "framer-motion";
// import { FileDown } from "lucide-react";

// export default function Resume() {
//   return (
//     <section id="resume" className="relative py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto z-10">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="font-['Orbitron'] text-2xl md:text-3xl font-bold mb-16 text-gray-100"
//       >
//         <span className="text-cyan-400">04</span> Resume
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#16161f] to-[#1e1e2a] hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300"
//       >
//         <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
//           <FileDown className="w-10 h-10 text-cyan-400" />
//         </div>
//         <div className="flex-1 text-center md:text-left">
//           <h3 className="font-['Orbitron'] text-xl font-semibold mb-2">Download My Resume</h3>
//           <p className="text-gray-400 mb-6">
//             Get a PDF copy of my full resume, including detailed experience, skills, and
//             projects.
//           </p>
//           <a
//             href="/resume.pdf"
//             download
//             className="inline-flex items-center gap-2 px-6 py-3 font-['Orbitron'] font-semibold text-sm bg-cyan-500 text-[#0a0a0f] rounded hover:bg-cyan-400 transition-all hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
//           >
//             <FileDown size={18} />
//             Download PDF
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
