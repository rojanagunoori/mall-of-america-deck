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

export default function Home() {
  return (
    <>
      <Hero />
      <WhyMOA />
      <Retail />
      <Entertainment />
      <Dining />
      <Events />
      <Venues />
      <Leasing />
      <CTA />
    </>
  );
}
