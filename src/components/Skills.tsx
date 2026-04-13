"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

type SkillItem = { name: string; icon: string };

function SkillCategory({ title, items, delay, accent }: { title: string; items: SkillItem[]; delay: number; accent: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={delay} variants={fadeUp} className="relative group">
      <div className={`absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${accent}`} />
      <div className="relative bg-[#080820]/80 border border-blue-500/15 rounded-2xl p-7 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full">
        <h3 className="text-base font-semibold text-white mb-5 flex items-center gap-3">
          <span className="w-2 h-5 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay * 0.07 + i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/12 hover:border-blue-400/40 transition-all duration-200 cursor-default"
            >
              <span className="text-sm">{skill.icon}</span>
              <span className="text-xs text-slate-300 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const categories = [
    { title: "Programming Languages", items: skills.languages, delay: 1, accent: "from-blue-600/20 to-indigo-600/20" },
    { title: "Data Science & AI", items: skills.dataAi, delay: 2, accent: "from-cyan-600/20 to-blue-600/20" },
    { title: "Databases & Big Data", items: skills.dbBigData, delay: 3, accent: "from-indigo-600/20 to-cyan-600/20" },
    { title: "Tools & Infrastructure", items: skills.tools, delay: 4, accent: "from-blue-600/20 to-cyan-600/20" },
  ];

  return (
    <section id="skills" className="py-28 bg-[#060614] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-blue-400 font-mono text-sm tracking-widest mb-3">02. SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Arsenal</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A broad toolkit for building data-driven models, scalable pipelines, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <SkillCategory key={cat.title} {...cat} />
          ))}
        </div>

        {/* Soft skills */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp} className="mt-5">
          <div className="relative bg-[#080820]/80 border border-blue-500/15 rounded-2xl p-7 backdrop-blur-sm">
            <h3 className="text-base font-semibold text-white mb-5 flex items-center gap-3">
              <span className="w-2 h-5 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["Teamwork", "Adaptability", "Curiosity", "Self-motivated", "Research mindset", "Problem-solving"].map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/15 transition-all cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
