"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Premium Kerala Chaya"
          fill
          className="object-cover brightness-[0.8] transform scale-100"
          priority
        />
        {/* Subtle left-to-right gradient to ensure text readability while keeping the subject clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/80 via-brand-deep/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/40 via-transparent to-brand-cream/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center justify-start text-left">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-8 max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image 
              src="/images/logo/chaayalogo.png" 
              alt="Chayya Branding" 
              width={240} 
              height={80} 
              className="h-16 md:h-20 w-auto brightness-0 invert opacity-90 mb-4"
            />
          </motion.div>

          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-brand-accent font-semibold tracking-widest uppercase text-xs md:text-sm"
            >
              Calicut's Green Sip of Comfort
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-brand-cream leading-[1.1] text-balance">
              Brewed with <br /> <span className="text-brand-accent">Calicut Soul</span>
            </h1>
            
            <p className="max-w-xl text-brand-cream/80 text-lg md:text-xl font-light leading-relaxed text-balance">
              Experience the warmth of Kerala tea culture through the eyes of Calicut. Handcrafted flavors made for slow conversations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <Link
              href="#menu"
              className="w-full sm:w-auto bg-brand-primary text-brand-cream px-10 py-4 rounded-full text-lg font-semibold hover:bg-brand-deep transition-all duration-300 shadow-xl"
            >
              Explore Menu
            </Link>
            <Link
              href="#visit"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-brand-cream px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Find Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block"
      >
        <Link href="#about" className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-brand-cream text-xs uppercase tracking-tighter">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent" />
        </Link>
      </motion.div>

      {/* Subtle Leaf Decorative (SVG) */}
      <div className="absolute top-1/4 -left-12 opacity-20 rotate-45 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90C10 50 40 10 90 10C50 10 10 40 10 90Z" stroke="#D9BE96" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
