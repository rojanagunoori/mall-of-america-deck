"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Global Brand Launches",
    description:
      "High-impact product unveilings and brand moments broadcast to millions.",
    image: "/images/ai/event-launch.jpeg",
    stat: "Global Media Reach",
  },
  {
    title: "Fashion & Luxury Shows",
    description: "Runway experiences featuring world-leading fashion houses.",
    image: "/images/ai/event-fashion.jpeg",
    stat: "Luxury Brand Activations",
  },
  {
    title: "Live Entertainment",
    description:
      "Concerts and performances that transform foot traffic into audiences.",
    image: "/images/ai/event-live.jpeg",
    stat: "High-Density Engagement",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="h-screen w-full  overflow-y-auto"
      //  className="relative w-full bg-black text-white overflow-hidden"
    >
      <div className="min-h-screen py-20 px-6 md:px-16 lg:px-24">
        {/* 🔥 HERO CINEMATIC LAYER */}
        <div className="relative h-[90vh] w-full">
          <img
            src="/images/ai/event-hero.jpeg"
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-20 pb-20">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-semibold leading-tight max-w-3xl"
            >
              A Global Stage for{" "}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Culture & Brands
              </span>
            </motion.h2>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Where brands don’t just appear — they perform, engage, and scale.
            </p>
          </div>
        </div>

        {/* 🔥 ORIGINAL GRID (kept but improved spacing) */}
        <div className="relative z-10 py-32 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group relative border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-light">{event.title}</h3>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6 text-xs uppercase tracking-widest text-white/40">
                  {event.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 INSIGHT STRIP (unchanged but cleaner spacing) */}
        <div className="relative z-10 pb-32 px-6 md:px-16 lg:px-24">
          <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest">
                Activation Scale
              </p>
              <p className="text-2xl font-light mt-2">
                Millions of Annual Impressions
              </p>
            </div>

            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest">
                Brand Utility
              </p>
              <p className="text-2xl font-light mt-2">
                Physical + Digital Amplification
              </p>
            </div>

            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest">
                Positioning
              </p>
              <p className="text-2xl font-light mt-2">
                Global Cultural Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
