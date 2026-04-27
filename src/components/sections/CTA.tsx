"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-black text-white py-40 overflow-hidden"
    >
      {/* 🌌 Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* ✨ Radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-6xl">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl"
        >
          Be Where the World{" "}
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Shows Up
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed"
        >
          Join a destination where brands don’t just exist — they scale,
          dominate attention, and create global impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <button className="px-8 py-4 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-white/90 transition">
            Start Leasing Conversation
          </button>

          <button className="px-8 py-4 border border-white/20 text-white text-sm rounded-full hover:bg-white/10 transition">
            Download Deck
          </button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Global Reach
            </p>
            <p className="text-xl mt-2 text-white/80">
              Millions of visitors annually
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Brand Power
            </p>
            <p className="text-xl mt-2 text-white/80">
              Home to world-leading brands
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Opportunity
            </p>
            <p className="text-xl mt-2 text-white/80">
              Retail, events, and partnerships
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
