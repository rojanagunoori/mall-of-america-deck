"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen w-full  overflow-y-auto"
      //className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="min-h-screen py-20 px-6 md:px-16 lg:px-24">
        {/* 🎥 Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover scale-110 brightness-[0.6]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />

        {/* ✨ Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24">
          {/* Tag (NEW – premium touch) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: loaded ? 0.7 : 0, y: loaded ? 0 : 10 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-xs text-white/50"
          >
            Mall of America
          </motion.p>

          {/* Headline (UPGRADED) */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight max-w-4xl"
          >
            More Than a Mall. <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              A Global Destination.
            </span>
          </motion.h1>

          {/* Subtitle (refined) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 0.85 : 0, y: loaded ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            100M+ annual visitors. Retail, luxury, entertainment, and culture —
            all in one destination that drives global attention.
          </motion.p>

          {/* Stats Row (IMPROVED spacing + style) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-12 flex flex-wrap gap-10"
          >
            <Stat label="Annual Visitors" value="100M+" />
            <Stat label="Global Brands" value="500+" />
            <Stat label="Attractions" value="50+" />
          </motion.div>

          {/* CTA (UPGRADED premium) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-14 flex items-center gap-6"
          >
            <button
              className="px-8 py-4 bg-[#D4AF37] text-black rounded-full font-medium 
          hover:scale-105 transition-all duration-300 
          shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              Explore Opportunities
            </button>

            <button className="text-white/70 hover:text-white text-sm transition">
              Watch Overview →
            </button>
          </motion.div>
        </div>

        {/* ⬇ Premium Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-10 bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-full h-full bg-white"
            />
          </div>
        </motion.div>
        {/* ⬇ Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
        >
          <span className="text-xs tracking-widest uppercase mb-2">
            Scroll to Enter
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

/* 📊 Premium Stat */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl md:text-4xl font-light">{value}</span>
      <span className="text-xs uppercase tracking-widest text-white/40 mt-1">
        {label}
      </span>
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";

// export default function HeroSection() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       {/* 🎥 Background Video */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover scale-110"
//         autoPlay
//         muted
//         loop
//         playsInline
//         poster="/images/hero-fallback"
//       >
//         <source src="/videos/dubai-mall-hero.mp4" type="video/mp4" />
//       </video>

//       {/* 🌑 Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

//       {/* ✨ Content */}
//       <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24">
//         {/* Main Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-tight max-w-4xl"
//         >
//           The World’s Most Visited Destination
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed"
//         >
//           100M+ annual visitors. Global retail. Luxury. Entertainment. A
//           platform where brands don’t just exist — they dominate attention.
//         </motion.p>

//         {/* Stats Row */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: loaded ? 1 : 0 }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="mt-10 flex flex-wrap gap-6 text-white"
//         >
//           <Stat label="Annual Visitors" value="100M+" />
//           <Stat label="Global Brands" value="1,200+" />
//           <Stat label="Luxury Flagships" value="200+" />
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
//           transition={{ delay: 0.9, duration: 1 }}
//           className="mt-12 flex items-center gap-6"
//         >
//           <button className="px-6 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition">
//             Explore the Experience
//           </button>

//           <button className="text-white/70 hover:text-white text-sm transition">
//             Book a Partnership →
//           </button>
//         </motion.div>
//       </div>

//       {/* ⬇ Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
//       >
//         <span className="text-xs tracking-widest uppercase mb-2">
//           Scroll to Enter
//         </span>
//         <ChevronDown className="w-5 h-5 animate-bounce" />
//       </motion.div>
//     </section>
//   );
// }

// /* 📊 Stat Component */
// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex flex-col">
//       <span className="text-2xl md:text-3xl font-light">{value}</span>
//       <span className="text-xs uppercase tracking-wider text-white/60">
//         {label}
//       </span>
//     </div>
//   );
// }
