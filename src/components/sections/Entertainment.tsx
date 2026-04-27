"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const attractions = [
  {
    title: "Dubai Aquarium & Underwater Zoo",
    description:
      "A 10-million-liter suspended aquarium featuring a walk-through tunnel and marine ecosystem experience.",
    video: "/videos/aquarium.mp4",
    stat: "140+ Species",
  },
  {
    title: "Dubai Fountain",
    description:
      "A choreographed water, light, and music spectacle visible from the heart of Downtown Dubai.",
    video: "/videos/fountain.mp4",
    stat: "World’s Largest Choreographed Fountain",
  },
  {
    title: "Dubai Ice Rink",
    description:
      "An Olympic-sized ice rink offering year-round skating experiences in a desert city.",
    video: "/videos/ice-rink.mp4",
    stat: "2,500 sqm Ice Surface",
  },
];

export default function Entertainment() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="entertainment"
      className="relative w-full bg-black text-white overflow-hidden py-32"
    >
      {/* Background cinematic layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Header */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light tracking-tight"
        >
          Attractions That Drive Global Footfall
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white/70 text-lg max-w-2xl"
        >
          Visitors don’t just come to shop. They come for world-class
          experiences that transform the mall into a destination.
        </motion.p>
      </div>

      {/* Main Cinematic Viewer */}
      <div className="relative z-10 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24">
        {/* 🎥 Video Panel */}
        <div className="relative h-[500px] overflow-hidden border border-white/10">
          <video
            key={active}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={attractions[active].video} type="video/mp4" />
          </video>

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* stat badge */}
          <div className="absolute bottom-6 left-6">
            <p className="text-sm uppercase tracking-widest text-white/60">
              Highlight
            </p>
            <p className="text-xl font-light mt-1">
              {attractions[active].stat}
            </p>
          </div>
        </div>

        {/* 📍 Content Selector */}
        <div className="flex flex-col justify-center space-y-6">
          {attractions.map((item, index) => (
            <motion.div
              key={item.title}
              onClick={() => setActive(index)}
              whileHover={{ scale: 1.02 }}
              className={`
                cursor-pointer p-6 border transition-all duration-300
                ${
                  active === index
                    ? "border-white/40 bg-white/5"
                    : "border-white/10 hover:border-white/20"
                }
              `}
            >
              <h3 className="text-xl font-light">{item.title}</h3>

              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 text-xs uppercase tracking-widest text-white/40">
                Click to explore
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom insight strip */}
      <div className="relative z-10 mt-24 px-6 md:px-16 lg:px-24">
        <div className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest">
              Experience Density
            </p>
            <p className="text-2xl font-light mt-2">
              Multi-Day Visitor Engagement
            </p>
          </div>

          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest">
              Global Differentiation
            </p>
            <p className="text-2xl font-light mt-2">
              Retail + Theme-Grade Attractions
            </p>
          </div>

          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest">
              Commercial Impact
            </p>
            <p className="text-2xl font-light mt-2">
              Increased Dwell Time & Spend
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
