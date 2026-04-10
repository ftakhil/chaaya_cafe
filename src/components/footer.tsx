import Link from "next/link";
import { ExternalLink, X, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-cream pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">
        {/* Brand Side */}
        <div className="w-full md:w-1/3 space-y-8">
          <Link href="#home" className="text-4xl font-heading font-bold text-brand-accent">
            Chayya
          </Link>
          <p className="text-brand-cream/60 leading-relaxed text-lg">
            A modern Calicut café rooted in Kerala's tea culture, blending local warmth, handcrafted flavours, and a calm green atmosphere.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-accent hover:text-brand-deep transition-all duration-300">
                <ExternalLink size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-accent hover:text-brand-deep transition-all duration-300">
                <ExternalLink size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-accent hover:text-brand-deep transition-all duration-300">
                <X size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/6 space-y-8">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-brand-accent font-heading">Explore</h4>
            <div className="flex flex-col space-y-4">
                <Link href="#home" className="text-brand-cream/60 hover:text-brand-accent transition-colors">Home</Link>
                <Link href="#about" className="text-brand-cream/60 hover:text-brand-accent transition-colors">Our Story</Link>
                <Link href="#menu" className="text-brand-cream/60 hover:text-brand-accent transition-colors">Menu</Link>
                <Link href="#ambience" className="text-brand-cream/60 hover:text-brand-accent transition-colors">Ambience</Link>
                <Link href="#visit" className="text-brand-cream/60 hover:text-brand-accent transition-colors">Visit Us</Link>
            </div>
        </div>

        {/* Contact info */}
        <div className="w-full md:w-1/3 space-y-8">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-brand-accent font-heading">Contact</h4>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4 text-brand-cream/60">
                    <MapPin size={18} className="text-brand-accent" />
                    <span>Beach Road, Calicut, Kerala</span>
                </div>
                <div className="flex items-center gap-4 text-brand-cream/60">
                    <Phone size={18} className="text-brand-accent" />
                    <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 text-brand-cream/60">
                    <Mail size={18} className="text-brand-accent" />
                    <span>hello@chayyacafe.com</span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-cream/10 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/40 uppercase tracking-widest relative z-10">
        <p>© 2026 Chayya Cafe. All rights reserved.</p>
        <p>Made with love in Calicut</p>
      </div>

      {/* Background Decorative */}
      <div className="absolute -bottom-24 -left-24 text-brand-accent opacity-5 rotate-12 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
          </svg>
      </div>
    </footer>
  );
}
