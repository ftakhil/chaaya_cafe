"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="w-full lg:w-1/2 space-y-12">
            <SectionHeading 
                title="Come by for a Cup" 
                subtitle="We're located in the heart of Calicut, ready to serve you a slice of home."
            />
            
            <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-cream transition-all duration-300">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-heading font-bold text-brand-deep">Find Us</h4>
                        <p className="text-brand-primary/70 leading-relaxed mt-1">12/450 Beach Road, Near Calicut Lighthouse,<br />Kozhikode, Kerala 673001</p>
                        <button className="text-brand-primary font-bold text-sm flex items-center gap-1 mt-3 hover:gap-2 transition-all">
                            Get Directions <ExternalLink size={14} />
                        </button>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-cream transition-all duration-300">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-heading font-bold text-brand-deep">Opening Hours</h4>
                        <p className="text-brand-primary/70 leading-relaxed mt-1">Mon - Fri: 8:00 AM - 10:00 PM<br />Sat - Sun: 9:00 AM - 11:00 PM</p>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-cream transition-all duration-300">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-heading font-bold text-brand-deep">Contact Us</h4>
                        <p className="text-brand-primary/70 leading-relaxed mt-1">+91 98765 43210<br />hello@chayyacafe.com</p>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <button className="bg-brand-deep text-brand-cream px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-brand-primary transition-all shadow-lg hover:shadow-xl group">
                    <span>Follow our journey</span>
                    <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                </button>
            </div>
          </div>

          {/* Map Placeholder / Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 h-[600px] bg-brand-secondary/10 rounded-[60px] relative overflow-hidden border border-brand-secondary/20 shadow-inner group"
          >
            {/* Artistic Map Concept */}
            <div className="absolute inset-0 flex items-center justify-center p-12 opacity-40 group-hover:opacity-60 transition-opacity">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-brand-primary/30">
                    <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="2" fill="currentColor" />
                    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.2" />
                    <path d="M0 50 L100 50 M50 0 L50 100" stroke="currentColor" strokeWidth="0.1" />
                </svg>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-t from-brand-secondary/20 to-transparent">
                <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-brand-cream mb-6 shadow-2xl animate-bounce">
                    <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-deep">We're here!</h3>
                <p className="text-brand-primary/60 max-w-xs mx-auto mt-2 italic font-medium">Ready to serve you the best tea in Calicut.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
