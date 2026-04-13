"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

/* ── Particle canvas ─────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.45 + 0.1,
      color: Math.random() > 0.5 ? "37,99,235" : "6,182,212",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37,99,235,${0.12 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ── Typing effect ───────────────────────────────────── */
function TypingText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), deleting ? 400 : 1600);
      return () => clearTimeout(t);
    }
    const current = texts[index];
    const speed = deleting ? 40 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else { setPause(true); setDeleting(true); }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else { setDeleting(false); setIndex((i) => (i + 1) % texts.length); setPause(true); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, index, pause, texts]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}

/* ── Hero ────────────────────────────────────────────── */
export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#04040e]"
    >
      {/* Gradient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/12 blur-3xl"
        />
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-800/10 blur-3xl"
        />
      </div>

      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* ── Text side ── */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">
                Open to CIFRE thesis opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
            >
              <span className="text-white">Ibrahim</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                Al Ayoubi
              </span>
            </motion.h1>

            {/* Static title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-2 font-mono"
            >
              Data Scientist
            </motion.p>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-cyan-300 font-mono h-8 mb-7"
            >
              <TypingText texts={personalInfo.subtitles} />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-slate-400 text-base leading-relaxed mb-9"
            >
              Specializing in{" "}
              <span className="text-blue-300 font-medium">Machine Learning</span> &{" "}
              <span className="text-cyan-300 font-medium">Computer Vision</span>.
              Applied research at INRIA &amp; DVRC. Building state-of-the-art models
              for image segmentation and multimodal AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-9"
            >
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-900/40"
              >
                View My Work
              </motion.button>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-xl border border-blue-500/40 text-blue-300 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                { href: `tel:${personalInfo.phone}`, icon: Phone, label: "Phone" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  title={label}
                  className="w-11 h-11 rounded-xl border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-blue-300 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Profile photo side ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #2563eb, #06b6d4, #2563eb, transparent, #2563eb)",
                opacity: 0.5,
              }}
            />
            {/* Glow blur */}
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/30 blur-2xl"
            />
            {/* Photo container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-2xl shadow-blue-900/50">
              {!imgError ? (
                <Image
                  src="/profile.jpg"
                  alt="Ibrahim Al Ayoubi"
                  fill
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                /* Fallback: initials avatar */
                <div className="w-full h-full bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white select-none">IA</span>
                </div>
              )}
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-[#080820]/90 border border-blue-500/30 backdrop-blur-md shadow-lg whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-blue-200 font-medium">ML Engineer · Paris</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
