"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { ArrowRight } from "lucide-react";

export default function FeaturedSpecials() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Today's Favourites" 
          subtitle="Hand-picked sips and bites that our regular community loves the most."
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 relative group rounded-[40px] overflow-hidden shadow-2xl h-[500px]"
          >
            <Image
              src="/images/menu.png"
              alt="Signature Specials"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/80 via-brand-deep/20 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-brand-cream space-y-4">
              <span className="bg-brand-accent text-brand-deep px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                Must Try
              </span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold max-w-md">The Evening Chai Platter</h3>
              <p className="max-w-sm text-brand-cream/80 text-lg leading-relaxed">
                A selection of Pazhampori, Ulli Vada, and Cutlet served with our signature Malabar Ginger Chai.
              </p>
              <button className="flex items-center gap-2 group/btn font-semibold pt-4">
                <span>Order Now</span>
                <ArrowRight className="transition-transform group-hover/btn:translate-x-2" />
              </button>
            </div>
          </motion.div>

          {/* Side Specials */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-brand-secondary/10 border border-brand-secondary/20 p-8 rounded-[40px] flex-1 flex flex-col justify-center space-y-4"
            >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary">
                    <span className="font-heading font-bold text-xl">01</span>
                </div>
                <h4 className="text-2xl font-heading font-bold text-brand-deep">Suleimani Twist</h4>
                <p className="text-brand-primary/70">A light Malabar classic infused with mint and fresh lemon zest.</p>
                <span className="text-brand-primary font-bold text-xl">₹30</span>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="bg-brand-primary border border-brand-primary/20 p-8 rounded-[40px] flex-1 flex flex-col justify-center space-y-4 text-brand-cream"
            >
                <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-deep">
                    <span className="font-heading font-bold text-xl">02</span>
                </div>
                <h4 className="text-2xl font-heading font-bold">Cold Coffee Brew</h4>
                <p className="text-brand-cream/70">Signature 12-hour brew with local coffee beans and creamy milk.</p>
                <span className="text-brand-accent font-bold text-xl">₹90</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
