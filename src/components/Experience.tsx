"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const colorMap: Record<string, { border: string; badge: string; dot: string; tag: string }> = {
  blue: {
    border: "border-blue-500/30",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    dot: "bg-blue-500 shadow-blue-500/50",
    tag: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  cyan: {
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    dot: "bg-cyan-500 shadow-cyan-500/50",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  indigo: {
    border: "border-indigo-500/30",
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    dot: "bg-indigo-500 shadow-indigo-500/50",
    tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#04040e] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-blue-400 font-mono text-sm tracking-widest mb-3">03. EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">History</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Research and industry internships where I applied state-of-the-art ML & data science.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-cyan-500/20 to-transparent hidden md:block" />
          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color] ?? colorMap.blue;
              return (
                <motion.div key={exp.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-5 top-6 w-6 h-6 rounded-full items-center justify-center z-10 bg-[#04040e]">
                    <div className={`w-3.5 h-3.5 rounded-full shadow-lg ${colors.dot}`} />
                  </div>

                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
                    className={`relative group bg-[#080820]/80 border ${colors.border} rounded-2xl p-7 backdrop-blur-sm hover:bg-[#080820] transition-all duration-300`}
                  >
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-500 blur-sm -z-10" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={13} className="text-blue-400" />
                          <span className="text-blue-300 font-semibold text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 sm:text-right">
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:justify-end">
                          <Calendar size={12} />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:justify-end">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.description.map((point, j) => (
                        <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className={`text-xs px-2.5 py-1 rounded-md border font-mono ${colors.tag}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
