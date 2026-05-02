// // page.tsx
// import Hero from "@/components/sections/Hero";
// import WhyMOA from "@/components/sections/WhyMOA";
// import { i } from "framer-motion/client";
// import Retail from "@/components/sections/Retail";
// import Entertainment from "@/components/sections/Entertainment";
// import Dining from "@/components/sections/Dining";
// import Events from "@/components/sections/Events";
// import Venues from "@/components/sections/Venues";
// import Leasing from "@/components/sections/Leasing";
// import CTA from "@/components/sections/CTA";
// import Navbar from "@/components/ui/Navbar";
// import FutureAI from "@/components/sections/FutureAI";

// export default function Home() {
//   return (
//     <main className="bg-primary">
//       <Navbar />

//       {/* 1. 🎬 Cinematic Hook */}
//       <Hero />

//       {/* 2. 📊 Why this matters (data credibility) */}
//       <WhyMOA />

//       {/* 3. 🛍 Retail power */}
//       <Retail />

//       {/* 4. 🍽 Lifestyle layer */}
//       <Dining />

//       {/* 5. 🎢 Experience layer (differentiator) */}
//       <Entertainment />

//       {/* 6. 🏟 Venue credibility */}
//       <Venues />

//       {/* 7. 🎤 Events = MONEY section */}
//       <Events />
//       <FutureAI />

//       {/* 8. 🏢 Leasing (conversion) */}
//       <Leasing />

//       {/* 9. 📩 Final action */}
//       <CTA />
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/sections/Hero";
import WhyMOA from "@/components/sections/WhyMOA";
import Retail from "@/components/sections/Retail";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Venues from "@/components/sections/Venues";
import Events from "@/components/sections/Events";
import Leasing from "@/components/sections/Leasing";
import CTA from "@/components/sections/CTA";
import FutureAI from "@/components/sections/FutureAI";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  Hero,
  WhyMOA,
  Retail,
  Dining,
  Entertainment,
  Venues,
  Events,
  FutureAI,
  Leasing,
  CTA,
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const CurrentSlide = slides[index];

  // ⌨️ Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setIndex((i) => Math.min(i + 1, slides.length - 1));
      }
      if (e.key === "ArrowLeft") {
        setIndex((i) => Math.max(i - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Slide */}
      {/* <div className="relative z-10">
        <CurrentSlide key={index} />
      </div> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="h-screen flex items-center"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicator */}
      <p className="absolute top-6 left-6 z-50 text-white/60 text-xs tracking-widest uppercase">
        {index + 1} / {slides.length}
      </p>

      {/* Navigation */}
      <div className="absolute bottom-10 right-10 flex items-center gap-3 z-50">
        {/* Prev */}
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className={`px-6 py-3 rounded-full transition-all duration-300 border backdrop-blur-md
      ${
        index === 0
          ? "border-white/10 text-white/30 bg-white/5 cursor-not-allowed"
          : "border-white/20 text-white/80 bg-white/5 hover:bg-white hover:text-black"
      }`}
        >
          Prev
        </button>

        {/* Next */}
        <button
          onClick={() => setIndex((i) => Math.min(i + 1, slides.length - 1))}
          disabled={index === slides.length - 1}
          className={`px-6 py-3 rounded-full transition-all duration-300
      ${
        index === slides.length - 1
          ? "bg-white/10 text-white/30 cursor-not-allowed"
          : "bg-white text-black hover:scale-105 active:scale-95"
      }`}
        >
          Next
        </button>
      </div>
    </main>
  );
}
