"use client";

import { motion } from "framer-motion";

const visions = [
  {
    title: "AI-Powered Visitor Experience",
    description:
      "Real-time personalization of shopping journeys, recommendations, and navigation based on visitor behavior.",
  },
  {
    title: "Smart Retail Intelligence",
    description:
      "AI-driven analytics for tenants to optimize store placement, pricing strategy, and customer engagement.",
  },
  {
    title: "Immersive Digital Layer",
    description:
      "AR/VR-enabled experiences that merge physical retail with digital storytelling and brand interaction.",
  },
];

export default function FutureAI() {
  return (
    <section
      id="future"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Floating AI grid effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl"
        >
          The Future of{" "}
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Intelligent Retail
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed"
        >
          Beyond physical retail — a connected, AI-driven ecosystem that
          transforms how visitors experience, engage, and spend.
        </motion.p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {visions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 bg-white/5 p-8 overflow-hidden hover:border-white/30 transition"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <h3 className="text-xl font-light">{item.title}</h3>

                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/10 pt-10 max-w-3xl"
        >
          <p className="text-xl text-white/80 leading-relaxed">
            This is not just a retail destination — it is an evolving,
            intelligent ecosystem designed for the next generation of global
            commerce.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
