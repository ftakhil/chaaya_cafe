"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./section-heading";
import { cn } from "@/lib/utils";

const menuData = [
  {
    category: "Chaya Specials",
    items: [
      { name: "Classic Kerala Chaya", price: "₹25", desc: "Strong, smooth, and comfort in every sip." },
      { name: "Suleimani Twist", price: "₹30", desc: "Light, fragrant, and inspired by Malabar evenings." },
      { name: "Cardamom Milk Tea", price: "₹35", desc: "Aromatic blend of fresh pods and premium CTC." },
      { name: "Masala Chai", price: "₹40", desc: "Spiced perfection with ginger and cloves." },
    ],
  },
  {
    category: "Local Bites",
    items: [
      { name: "Pazhampori", price: "₹20", desc: "Traditional banana fritters, golden and crisp." },
      { name: "Ulli Vada", price: "₹15", desc: "Spicy onion fritters, the perfect tea companion." },
      { name: "Meat Cutlet", price: "₹45", desc: "Home-style recipe with Calicut spices." },
      { name: "Ela Ada", price: "₹30", desc: "Steamed rice cake in banana leaf." },
    ],
  },
  {
    category: "Modern Sips",
    items: [
      { name: "Cold Coffee", price: "₹90", desc: "Creamy, rich, and perfectly chilled." },
      { name: "Mint Lime Cooler", price: "₹50", desc: "Refreshing zest for warm afternoons." },
      { name: "Affogato", price: "₹120", desc: "Where dessert meets your caffeine hit." },
      { name: "Blue Pea Iced Tea", price: "₹80", desc: "Visual delight with refreshing floral notes." },
    ],
  },
];

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  return (
    <section id="menu" className="py-24 px-6 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading 
            title="Our Signature Sips & Bites" 
            subtitle="A stylish selection of Malabar favorites and modern cafe classics."
            className="mb-0"
          />
          
          <div className="flex flex-wrap gap-2">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  activeCategory === cat.category 
                    ? "bg-brand-primary text-brand-cream shadow-md"
                    : "bg-brand-secondary/20 text-brand-primary hover:bg-brand-secondary/30"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
        >
          {menuData.find(c => c.category === activeCategory)?.items.map((item, idx) => (
            <div key={idx} className="group flex justify-between items-start border-b border-brand-secondary/10 pb-6 hover:border-brand-primary/40 transition-colors">
              <div className="space-y-1">
                <h4 className="text-xl font-heading font-bold text-brand-deep group-hover:text-brand-primary transition-colors">
                  {item.name}
                </h4>
                <p className="text-sm text-brand-primary/60 italic leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="text-lg font-bold text-brand-primary font-heading">
                {item.price}
              </span>
            </div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
            <p className="text-brand-primary/50 text-sm mb-6 uppercase tracking-widest">More flavors waiting for you at the cafe</p>
            <button className="border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-brand-cream px-10 py-3 rounded-full transition-all duration-300">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
}
