"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const contactLinks = [
  { icon: Mail, label: "Email", value: "ayoubi192003@gmail.com", href: `mailto:${personalInfo.email}`, description: "Send me an email", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/20 hover:border-blue-400/50", iconColor: "text-blue-400" },
  { icon: Github, label: "GitHub", value: `@${personalInfo.githubUsername}`, href: personalInfo.github, description: "Check my repositories", color: "from-slate-500/20 to-slate-600/20", border: "border-slate-500/20 hover:border-slate-400/50", iconColor: "text-slate-300" },
  { icon: Linkedin, label: "LinkedIn", value: `in/${personalInfo.linkedinUsername}`, href: personalInfo.linkedin, description: "Connect professionally", color: "from-blue-600/20 to-blue-700/20", border: "border-blue-600/20 hover:border-blue-500/50", iconColor: "text-blue-400" },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, description: "Call or text me", color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/20 hover:border-green-400/50", iconColor: "text-green-400" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#060614] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-700/15 blur-3xl" />
        <motion.div animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-blue-400 font-mono text-sm tracking-widest mb-3">06. CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            I am actively looking for a <span className="text-blue-300 font-medium">CIFRE thesis</span> in applied AI for computer vision,
            and open to research collaborations and engineering opportunities.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="mb-12 relative group">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative bg-[#080820]/80 border border-blue-500/20 rounded-2xl p-10 text-center backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-900/40">
              <Send size={26} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Open to Opportunities</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
              Whether you have a research proposal, a job offer, or just want to talk ML & Data Science — my inbox is always open.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-6">
              <MapPin size={14} className="text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,99,235,0.5)" }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-900/40"
            >
              <Mail size={17} />
              Send me an Email
            </motion.a>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 2} variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group flex flex-col gap-3 p-5 rounded-xl border ${link.border} bg-[#080820]/80 backdrop-blur-sm transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center border border-white/5`}>
                <link.icon size={18} className={link.iconColor} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{link.label}</p>
                <p className={`text-xs font-mono mt-0.5 ${link.iconColor}`}>{link.value}</p>
                <p className="text-slate-500 text-xs mt-1">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
