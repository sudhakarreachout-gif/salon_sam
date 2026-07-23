'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3 text-left">
            <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
              Client Experiences
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Unedited Client Reflections.
            </h2>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center space-x-2 text-xs font-sans font-medium tracking-widest text-terracotta hover:text-terracotta-hover uppercase border-b border-terracotta/40 pb-1"
          >
            <span>Read All Client Reflections</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large-Format Editorial Pull-Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-6 border-l-2 border-terracotta/40 pl-6 sm:pl-8 py-2 text-left"
            >
              <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-charcoal leading-relaxed">
                &ldquo;{item.fullReview}&rdquo;
              </blockquote>

              <div className="space-y-1 font-sans text-xs">
                <div className="font-semibold text-charcoal">{item.clientName}</div>
                <div className="text-muted-text">{item.profession} · {item.serviceReceived}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
