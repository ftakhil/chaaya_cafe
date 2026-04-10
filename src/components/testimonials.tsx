"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Feels like Kerala, but with a fresh café vibe. The tea is exactly how I like it—strong and aromatic.",
    author: "Aditi Nair",
    role: "Regular Community Member",
  },
  {
    text: "The kind of place you visit once and keep coming back to. The Calicut evening soul is captured perfectly here.",
    author: "Faisal Rahman",
    role: "Local Food Explorer",
  },
  {
    text: "Loved the calm green look and the local flavours. It's my new favourite spot to work and relax.",
    author: "Sarah Verghese",
    role: "Freelance Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="What Chayya Feels Like" 
          subtitle="Don't just take our word for it. Hear from the community that makes Chayya special."
          className="text-center mx-auto items-center flex flex-col"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-[40px] shadow-lg border border-brand-secondary/10 flex flex-col justify-between h-full group hover:shadow-2xl transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                    <Quote size={24} />
                </div>
                <p className="text-xl font-heading text-brand-deep leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity">
                  "{t.text}"
                </p>
              </div>
              <div className="pt-8 border-t border-brand-secondary/10 mt-8">
                <h4 className="font-bold text-brand-primary">{t.author}</h4>
                <p className="text-xs text-brand-primary/60 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
