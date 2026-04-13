"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Globe } from "lucide-react";
import { personalInfo, education } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#04040e] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-blue-400 font-mono text-sm tracking-widest mb-3">01. ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-xl" />
              <div className="relative bg-[#080820]/80 border border-blue-500/15 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-slate-300 text-base leading-relaxed mb-6">{personalInfo.bio}</p>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin size={15} className="text-blue-400" />
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={16} className="text-blue-400" />
                <span className="text-slate-400 text-sm font-medium">Languages</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{lang.name}</p>
                      <p className="text-blue-400 text-xs">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 3} variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/20 group-hover:to-cyan-600/20 transition-all duration-500 blur-sm" />
                  <div className="relative flex gap-4 p-5 rounded-xl border border-blue-500/15 bg-[#080820]/50 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm leading-snug mb-1">{edu.degree}</h4>
                      <p className="text-blue-300 text-sm">{edu.institution}</p>
                      <p className="text-slate-500 text-xs mt-1 font-mono">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[{ value: "3+", label: "Years Research" }, { value: "4+", label: "Projects" }, { value: "1", label: "IEEE Paper" }].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl border border-blue-500/15 bg-blue-500/5">
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
