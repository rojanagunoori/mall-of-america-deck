"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Why", href: "#why" },
  { label: "Retail", href: "#retail" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Events", href: "#events" },
  { label: "Leasing", href: "#leasing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div
        className={`flex items-center justify-between px-6 py-4 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.jpeg"
            alt="MOA Deck Logo"
            className="h-8 w-auto object-contain"
          />
        </div>
        {/* <div className="text-white text-sm tracking-widest uppercase">MOA</div> */}

        {/* Links */}
        <div
          className="flex items-center gap-4 md:gap-8 text-sm text-white/70"
          //className="hidden md:flex items-center gap-8 text-sm text-white/70"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="relative group"
            >
              <span className="group-hover:text-white transition">
                {item.label}
              </span>

              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition">
          Partner
        </button>
      </div>
    </div>
  );
}
