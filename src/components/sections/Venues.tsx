"use client";

import { motion } from "framer-motion";

const venues = [
  {
    title: "Performing Arts Center",
    description:
      "A world-class venue designed for concerts, shows, and cultural performances with large-scale audience capacity.",
    image: "/images/ai/venue-theater.jpeg",
    stat: "Live Performances & Shows",
  },
  {
    title: "Expo & Convention Space",
    description:
      "Flexible exhibition halls for corporate events, brand showcases, and global conventions.",
    image: "/images/ai/venue-expo.jpeg",
    stat: "Large-Scale Brand Events",
  },
  {
    title: "Immersive Activation Zones",
    description:
      "Open-format spaces designed for product launches, experiential activations, and audience engagement.",
    image: "/images/ai/venue-activation.jpeg",
    stat: "High-Impact Experiences",
  },
];

export default function Venues() {
  return (
    <section
      id="venues"
      className="h-screen w-full  overflow-y-auto"
      // className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="min-h-screen py-20 px-6 md:px-16 lg:px-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Global Events
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
            Purpose-built venues enable large-scale experiences — from concerts
            and conventions to immersive brand activations.
          </motion.p>

          {/* Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
            {venues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden border border-white/10 bg-white/5"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover scale-110 group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-light">{item.title}</h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 text-xs uppercase tracking-widest text-white/40">
                    {item.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24 border-t border-white/10 pt-10 max-w-3xl"
          >
            <p className="text-xl text-white/80 leading-relaxed">
              More than retail — a platform where global audiences gather and
              brands create moments that scale beyond physical space.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
