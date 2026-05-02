"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { number: 100, suffix: "M+", label: "Annual Visitors" },
  { number: 5.6, suffix: "M sq ft", label: "Retail Space" },
  { number: 500, suffix: "+", label: "Global Brands" },
  { number: 50, suffix: "+", label: "Attractions" },
];

export default function WhyMOA() {
  const ref = useRef(null);

  // 👇 triggers when section comes into view
  const isInView = useInView(ref, {
    margin: "-100px",
  });

  return (
    <section
      id="why"
      className="h-screen w-full  overflow-y-auto"
      // className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="min-h-screen py-20 px-6 md:px-16 lg:px-24">
        {/* 🌑 Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* ✨ Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight"
          >
            Why This{" "}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Destination Wins
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
            Scale, reach, and cultural relevance combine to create one of the
            most powerful commercial ecosystems in the world.
          </motion.p>

          {/* 📊 Stats */}
          <div
            ref={ref}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                {/* Number */}
                <div className="text-4xl md:text-5xl font-light">
                  <AnimatedCounter
                    value={stat.number}
                    suffix={stat.suffix}
                    trigger={isInView}
                  />
                </div>

                {/* Label */}
                <div className="mt-2 text-xs uppercase tracking-widest text-white/40">
                  {stat.label}
                </div>

                {/* Hover line */}
                <div className="mt-4 h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* 💬 Bottom Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-24 border-t border-white/10 pt-10 max-w-3xl"
          >
            <p className="text-xl text-white/80 leading-relaxed">
              A destination where global brands, entertainment, and culture
              intersect — creating unmatched exposure, scale, and opportunity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
