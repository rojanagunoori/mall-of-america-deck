"use client";

import { motion } from "framer-motion";

const diningSpots = [
  {
    title: "Fine Dining Experiences",
    description:
      "Elevated culinary destinations featuring globally recognized chefs and luxury dining concepts.",
    image: "/images/ai/dining-luxury.jpeg",
  },
  {
    title: "Casual & Social Dining",
    description:
      "Vibrant restaurants and cafés designed for social gatherings, everyday moments, and high footfall.",
    image: "/images/ai/dining-casual.jpeg",
  },
  {
    title: "Food Attractions",
    description:
      "Unique food concepts and immersive culinary zones that drive repeat visits and extended stays.",
    image: "/images/ai/dining-experience.jpeg",
  },
];

export default function Dining() {
  return (
    <section
      id="dining"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* 🌑 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl"
        >
          Dining as a{" "}
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Destination
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
          From luxury dining to high-energy food experiences, culinary offerings
          are a major driver of time spent and consumer engagement.
        </motion.p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {diningSpots.map((item, index) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/10 pt-10 max-w-3xl"
        >
          <p className="text-xl text-white/80 leading-relaxed">
            Dining transforms visitors into long-stay guests — increasing
            spending, engagement, and repeat visits.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
