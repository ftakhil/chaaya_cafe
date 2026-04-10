"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function MadeForCalicut() {
  return (
    <section className="py-24 px-6 bg-brand-deep text-brand-cream relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale invert">
         <Image 
            src="/images/calicut.png" 
            alt="textured background" 
            fill 
            className="object-cover"
         />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="w-full md:w-1/2 space-y-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block bg-brand-accent text-brand-deep px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
            >
                Calicut Born & Bred
            </motion.div>
            
            <SectionHeading 
                title="Made for Calicut" 
                subtitle="From quick evening chai stops to long conversations over snacks, Calicut has always had a culture of gathering around flavour."
                light
            />
            
            <div className="space-y-6 text-brand-cream/80 text-lg leading-relaxed italic border-l-2 border-brand-accent/30 pl-8">
                <p>
                    "Chayya brings that spirit into a fresh café experience shaped by Kerala’s warmth and the city’s rhythm. A place where every sip feels local, and every visit feels like home."
                </p>
            </div>
            
            <div className="flex gap-4 pt-4">
                <span className="px-5 py-2 rounded-full border border-brand-cream/20 text-xs font-medium uppercase tracking-widest bg-brand-primary/20">Calicut Born</span>
                <span className="px-5 py-2 rounded-full border border-brand-cream/20 text-xs font-medium uppercase tracking-widest bg-brand-primary/20">Kerala Inspired</span>
                <span className="px-5 py-2 rounded-full border border-brand-cream/20 text-xs font-medium uppercase tracking-widest bg-brand-primary/20">Locally Loved</span>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-[450px] relative rounded-[60px] overflow-hidden shadow-2xl skew-y-2 border-8 border-brand-primary/30"
        >
            <Image
                src="/images/calicut.png"
                alt="Calicut City Soul"
                fill
                className="object-cover"
            />
        </motion.div>
      </div>
    </section>
  );
}
