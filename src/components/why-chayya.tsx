"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Coffee, Store, Heart, Users } from "lucide-react";

const features = [
  {
    title: "Kerala-inspired drinks",
    desc: "Freshly brewed teas and café specials with local character and aromatic spices.",
    icon: Coffee,
  },
  {
    title: "Calicut comfort food",
    desc: "Small bites and snacks that feel both nostalgic and new, crafted with love.",
    icon: Store,
  },
  {
    title: "A calm green space",
    desc: "A café atmosphere designed for slow mornings and evening talks amidst nature.",
    icon: Heart,
  },
  {
    title: "Made for connection",
    desc: "Meet, work, pause, and unwind in one welcoming space that belongs to the city.",
    icon: Users,
  },
];

export default function WhyChayya() {
  return (
    <section className="py-24 px-6 bg-brand-deep text-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Why People Come Back" 
          subtitle="It's more than just a cup of tea. It's the experience of finding home in a corner of Calicut."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-brand-primary/20 backdrop-blur-sm border border-brand-secondary/10 p-8 rounded-3xl hover:bg-brand-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
              <p className="text-brand-cream/70 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative leaf overlay */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-y-1/4 scale-150">
        <svg width="400" height="400" viewBox="0 0 100 100">
           <path d="M0 100C30 70 40 40 100 0C70 40 40 70 0 100Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
