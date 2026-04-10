"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "MENU", href: "#menu" },
  { name: "AMBIENCE", href: "#ambience" },
  { name: "VISIT", href: "#visit" },
];

export default function Navbar() {
  const [activeSegment, setActiveSegment] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simple scroll spy logic for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSegment(section.toUpperCase());
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-0 right-0 z-50 px-8 flex items-center justify-end pointer-events-none">
      {/* floating-pill-nav-right */}
      <nav className="pointer-events-auto bg-brand-deep/90 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl flex items-center">
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => {
            const isActive = activeSegment === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSegment(link.name)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-[10px] tracking-widest font-bold transition-all duration-500 flex flex-col items-center gap-1",
                  isActive 
                    ? "bg-brand-cream text-brand-deep scale-105 shadow-lg" 
                    : "text-brand-cream/60 hover:text-brand-cream"
                )}
              >
                {/* Decorative Dot */}
                <span className={cn(
                    "w-1 h-1 rounded-full transition-all duration-500",
                    isActive ? "bg-brand-deep" : "bg-transparent group-hover:bg-brand-cream/30"
                )} />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-brand-cream p-2 px-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-6 right-6 bg-brand-deep/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl md:hidden pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                    "text-xl font-heading font-bold pb-2 border-b border-white/5",
                    activeSegment === link.name ? "text-brand-accent" : "text-brand-cream/60"
                )}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveSegment(link.name);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
