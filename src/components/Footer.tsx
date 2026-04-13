"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-[#04040e] border-t border-blue-500/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            className="font-mono text-lg font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {personalInfo.firstName}
            </span>
            <span className="text-white">.</span>
            <span className="text-blue-300 text-sm">dev</span>
          </motion.button>

          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Ibrahim Al Ayoubi — Built with{" "}
            <Heart size={12} className="text-blue-500 fill-blue-500" />{" "}
            using Next.js & Tailwind
          </p>

          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github, icon: Github },
              { href: personalInfo.linkedin, icon: Linkedin },
              { href: `mailto:${personalInfo.email}`, icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800/30 flex items-center justify-center text-slate-400 hover:text-blue-300 hover:border-blue-500/40 transition-all"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
