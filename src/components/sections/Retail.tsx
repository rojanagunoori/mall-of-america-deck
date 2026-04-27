"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const brands = [
  { name: "Apple", category: "Technology" },
  { name: "Zara", category: "Fashion" },
  { name: "Nike", category: "Sportswear" },
  { name: "H&M", category: "Fashion" },
  { name: "Adidas", category: "Sportswear" },
  { name: "Sephora", category: "Beauty" },
];

export default function RetailSection() {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  return (
    <section
      id="retail"
      className="relative w-full bg-black text-white py-32 overflow-hidden"
    >
      {/* 🎥 Background Video (IMPORTANT UPGRADE) */}

      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/retail-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />

      {/* Header */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-light tracking-tight"
        >
          A Global Retail Ecosystem
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white/70 text-lg max-w-2xl"
        >
          The world’s most powerful brands don’t just sell here — they define
          presence here. This is where global retail leadership is concentrated.
        </motion.p>
      </div>

      {/* 🔥 Brand Grid (UPGRADED) */}
      <div className="relative z-10 mt-20 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setActiveBrand(index)}
              onMouseLeave={() => setActiveBrand(null)}
              className="relative flex flex-col items-center justify-center 
              border border-white/10 bg-white/5 backdrop-blur-xl
              p-6 h-32 cursor-pointer transition-all duration-300
              hover:bg-white/10 hover:border-white/30 hover:scale-105"
            >
              {/* Brand Name */}
              <div className="text-white text-lg font-medium tracking-wide">
                {brand.name}
              </div>

              {/* Category */}
              <span className="text-xs text-white/40 mt-2">
                {brand.category}
              </span>

              {/* Glow Effect */}
              {activeBrand === index && (
                <motion.div
                  layoutId="brandGlow"
                  className="absolute inset-0 bg-white/10 blur-xl"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 BIG STAT STRIP (UPGRADED) */}
      <div className="relative z-10 mt-32 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-12">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest">
              Retail Scale
            </p>
            <p className="text-3xl font-light mt-2">1,200+ Brands</p>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest">
              Audience Quality
            </p>
            <p className="text-3xl font-light mt-2">
              Global High-Spend Visitors
            </p>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest">
              Positioning
            </p>
            <p className="text-3xl font-light mt-2">
              World-Class Retail Platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
