"use client";

import { motion } from "framer-motion";

const leasingPaths = [
  {
    title: "Luxury Flagship Stores",
    description:
      "Premium storefronts in high-visibility zones designed for global luxury brands seeking iconic presence.",
    stat: "High Net Worth Audience",
  },
  {
    title: "Retail Tenancy",
    description:
      "Flexible retail spaces optimized for global and mid-tier brands targeting consistent footfall and conversion.",
    stat: "Mass Market Reach",
  },
  {
    title: "Pop-up & Experiential Spaces",
    description:
      "Short-term activations for product launches, seasonal campaigns, and brand storytelling experiences.",
    stat: "High Engagement Zones",
  },
];

export default function Leasing() {
  return (
    <section
      id="leasing"
      className="h-screen w-full  overflow-y-auto"
      // className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="min-h-screen py-20 px-6 md:px-16 lg:px-24">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl"
          >
            Leasing Designed for{" "}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Global Brands
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
            Multiple leasing pathways tailored for luxury brands, high-volume
            retailers, and experiential campaigns.
          </motion.p>

          {/* Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
            {leasingPaths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative border border-white/10 bg-white/5 p-8 overflow-hidden hover:border-white/30 transition"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-light">{item.title}</h3>

                  <p className="mt-4 text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-8 text-xs uppercase tracking-widest text-white/40">
                    {item.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between gap-6"
          >
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest">
                Leasing Availability
              </p>
              <p className="text-2xl font-light mt-2">
                Prime Spaces Available Year-Round
              </p>
            </div>

            <button className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition">
              Request Leasing Deck →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
