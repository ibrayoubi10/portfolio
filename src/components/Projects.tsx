"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { projects } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const colorMap: Record<string, { gradient: string; border: string; tag: string; highlight: string }> = {
  blue: { gradient: "from-blue-600/20 to-cyan-600/20", border: "border-blue-500/20", tag: "bg-blue-500/10 text-blue-300 border-blue-500/20", highlight: "text-blue-400" },
  cyan: { gradient: "from-cyan-600/20 to-blue-600/20", border: "border-cyan-500/20", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", highlight: "text-cyan-400" },
  indigo: { gradient: "from-indigo-600/20 to-blue-600/20", border: "border-indigo-500/20", tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20", highlight: "text-indigo-400" },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#060614] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-blue-400 font-mono text-sm tracking-widest mb-3">04. PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Research and engineering projects showcasing applied ML and computer vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const colors = colorMap[project.color] ?? colorMap.blue;
            return (
              <motion.div
                key={project.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative flex flex-col"
              >
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${colors.gradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative flex flex-col h-full bg-[#080820]/90 border ${colors.border} rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded-md">{project.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <p className={`text-sm font-medium mb-3 ${colors.highlight}`}>{project.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                        <Star size={11} className={colors.highlight} />
                        {h}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className={`text-xs px-2 py-0.5 rounded-md border font-mono ${colors.tag}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp} className="text-center mt-12">
          <motion.a
            href="https://github.com/ibrayoubi10" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.3)" }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
          >
            <ExternalLink size={17} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
