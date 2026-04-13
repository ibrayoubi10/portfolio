"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Clock } from "lucide-react";
import { publications, certifications } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Publications() {
  return (
    <section id="publications" className="py-28 bg-[#04040e] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-blue-400 font-mono text-sm tracking-widest mb-3">05. RESEARCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Publications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Certifications</span>
          </h2>
        </motion.div>

        {/* Publications */}
        <div className="mb-12">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
            <BookOpen size={20} className="text-blue-400" />
            Research Papers
          </motion.h3>
          {publications.map((pub, i) => (
            <motion.div key={pub.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 2} variants={fadeUp}
              whileHover={{ y: -4 }} className="group relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/15 group-hover:to-cyan-600/15 blur-sm transition-all duration-500" />
              <div className="relative bg-[#080820]/80 border border-blue-500/20 rounded-2xl p-7 backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-blue-500/10 text-blue-300 border-blue-500/30">
                    <Award size={11} />{pub.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-amber-500/10 text-amber-300 border-amber-500/30">
                    <Clock size={11} />{pub.status} — {pub.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">{pub.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.topics.map((topic) => (
                    <span key={topic} className="text-xs px-2.5 py-1 rounded-md border font-medium bg-blue-500/10 text-blue-300 border-blue-500/20">{topic}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}
            className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
            <Award size={20} className="text-blue-400" />
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 6} variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }} className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/15 group-hover:to-cyan-600/15 blur-sm transition-all duration-500" />
                <div className="relative flex gap-4 items-start bg-[#080820]/80 border border-blue-500/15 rounded-xl p-5 backdrop-blur-sm hover:border-blue-500/30 transition-all">
                  <div className="text-3xl flex-shrink-0">{cert.icon}</div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</p>
                    <p className="text-blue-400 text-xs font-medium mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium ${cert.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"}`}>
                        {cert.status === "Completed" ? "✓" : "⏳"} {cert.status}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
