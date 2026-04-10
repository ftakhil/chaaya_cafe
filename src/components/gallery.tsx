"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

const images = [
  { src: "/images/about.png", alt: "Cafe Ambience", span: "row-span-2 col-span-2" },
  { src: "/images/hero.png", alt: "Chai Preparation", span: "row-span-1 col-span-1" },
  { src: "/images/menu.png", alt: "Snacks", span: "row-span-1 col-span-1" },
  { src: "/images/calicut.png", alt: "Calicut Identity", span: "row-span-1 col-span-2" },
];

export default function Gallery() {
  return (
    <section id="ambience" className="py-24 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="The Space, The Mood, The Pause" 
          subtitle="Take a look at the atmosphere we've created for your slow morning coffee and evening tea talks."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-[600px] md:h-[800px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "relative overflow-hidden rounded-[32px] group",
                img.span
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-heading text-xl font-bold">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Utility to handle types in the component
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
