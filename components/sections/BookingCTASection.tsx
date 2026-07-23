'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function BookingCTASection() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-charcoal text-ivory relative overflow-hidden">
      {/* Background Subtle Terracotta Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[250px] sm:h-[300px] bg-terracotta/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center space-y-6 sm:space-y-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-sans font-medium tracking-widest text-terracotta-light uppercase"
        >
          Reserve Your Visit
        </motion.div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-snug">
          Experience unhurried hair care in our quiet Indiranagar sanctuary.
        </h2>

        <p className="text-sm sm:text-base text-ivory/70 max-w-xl mx-auto font-sans leading-relaxed">
          Select your desired service, choose your specialist, and confirm your private suite session online or directly with our concierge.
        </p>

        <div className="pt-3 flex justify-center">
          <Link
            href="/booking"
            className="btn-terracotta-luxury w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-ivory text-xs font-medium px-8 py-4 rounded-full group"
          >
            <span>Reserve Your Session</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
