"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/cafa_exterior.png"
              alt="Chayya Cafe Ambience"
              fill
              className="object-cover"
            />
            {/* Kerala Arch Overlay */}
            <div className="absolute inset-0 border-[20px] border-brand-cream/10 pointer-events-none rounded-2xl" />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-brand-primary p-8 rounded-2xl shadow-xl text-brand-cream hidden md:block">
            <p className="text-3xl font-heading font-bold">100%</p>
            <p className="text-xs uppercase tracking-widest opacity-80">Naadan Warmth</p>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <SectionHeading 
            title="A Cup Rooted in Kerala" 
            subtitle="Inspired by the timeless habit of stopping for a chaya in Kerala, Chayya is our way of bringing that comfort into a modern café experience in Calicut."
          />
          
          <div className="space-y-6 text-brand-deep/80 leading-relaxed text-lg">
            <p>
              Chayya isn't just a cafe; it’s a tribute to the evening culture of Calicut—where conversations flow as smoothly as the tea. We’ve blended traditional flavors with a fresh, green-themed atmosphere designed for slow mornings and connection-filled evenings.
            </p>
            <p>
              From the aroma of freshly brewed Suleimani to the nostalgia of hand-drawn chai steam, every detail is crafted to make you feel local at heart, no matter where you're from.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-1">
              <h4 className="text-xl font-heading font-bold text-brand-primary underline decoration-brand-accent underline-offset-8 decoration-2">Local Roots</h4>
              <p className="text-sm opacity-70">Deeply connected to Calicut's culture.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-heading font-bold text-brand-primary underline decoration-brand-accent underline-offset-8 decoration-2">Modern Mood</h4>
              <p className="text-sm opacity-70">A fresh space for work and pause.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative SVG Pattern */}
      <div className="absolute -top-24 -right-24 text-brand-secondary opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
           <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
