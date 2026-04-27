// page.tsx
import Hero from "@/components/sections/Hero";
import WhyMOA from "@/components/sections/WhyMOA";
import { i } from "framer-motion/client";
import Retail from "@/components/sections/Retail";
import Entertainment from "@/components/sections/Entertainment";
import Dining from "@/components/sections/Dining";
import Events from "@/components/sections/Events";
import Venues from "@/components/sections/Venues";
import Leasing from "@/components/sections/Leasing";
import CTA from "@/components/sections/CTA";
import Navbar from "@/components/ui/Navbar";
import FutureAI from "@/components/sections/FutureAI";

export default function Home() {
  return (
    <main className="bg-primary">
      <Navbar />

      {/* 1. 🎬 Cinematic Hook */}
      <Hero />

      {/* 2. 📊 Why this matters (data credibility) */}
      <WhyMOA />

      {/* 3. 🛍 Retail power */}
      <Retail />

      {/* 4. 🍽 Lifestyle layer */}
      <Dining />

      {/* 5. 🎢 Experience layer (differentiator) */}
      <Entertainment />

      {/* 6. 🏟 Venue credibility */}
      <Venues />

      {/* 7. 🎤 Events = MONEY section */}
      <Events />
      <FutureAI />

      {/* 8. 🏢 Leasing (conversion) */}
      <Leasing />

      {/* 9. 📩 Final action */}
      <CTA />
    </main>
  );
}
