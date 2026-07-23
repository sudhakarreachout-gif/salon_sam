'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Experiences' },
  { id: 'hair-architecture', label: 'Hand-Cut Texture' },
  { id: 'dimensional-color', label: 'Bespoke Colour' },
  { id: 'scalp-therapy', label: 'Kyoto Head Spa' },
  { id: 'bridal-atelier', label: 'Bridal Atelier' },
];

export default function ServicesPreviewSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header & Category Filters - Symmetrically Aligned (lg:items-center) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 sm:mb-16 space-y-6 lg:space-y-0">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
              SELECTED SERVICES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Curated <span className="italic font-normal text-terracotta">Studio Offerings.</span>
            </h2>
          </div>

          {/* Equal Internal Pill Padding & Geometrically Balanced Text Orientation */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-sans text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 inline-flex items-center justify-center text-center leading-none rounded-full transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'btn-terracotta-luxury text-ivory font-medium shadow-md'
                    : 'btn-liquid-glass-ivory text-muted-text hover:text-charcoal'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Menu Items List with 3D Embossed Cards */}
        <div className="space-y-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-embossed-3d pb-8 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-6 group px-5 sm:px-8 rounded-2xl"
            >
              <div className="space-y-2 max-w-2xl text-left">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-sans text-terracotta font-medium tracking-wider uppercase">
                  <span>{service.duration}</span>
                  <span>·</span>
                  <span className="text-muted-text">{service.subtitle}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal group-hover:text-terracotta transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Price & Action: User-Favorite Frosted Glass Action Button */}
              <div className="flex items-center space-x-6 justify-between md:justify-end shrink-0 pt-2 md:pt-0 border-t md:border-0 border-ivory-border/60">
                <div className="text-left md:text-right">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-charcoal">{service.price}</div>
                  <div className="text-[10px] font-sans text-muted-text uppercase tracking-wider">Complete Price</div>
                </div>

                <Link
                  href={`/booking?service=${encodeURIComponent(service.id)}`}
                  className="btn-liquid-glass-ivory text-charcoal hover:text-terracotta inline-flex items-center justify-center leading-none text-xs font-medium px-5 py-2.5 rounded-full group border border-taupe/40 whitespace-nowrap space-x-1.5"
                >
                  <span>Reserve</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Services Link */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-sans font-medium tracking-widest text-terracotta hover:text-terracotta-hover uppercase border-b border-terracotta/40 pb-1"
          >
            <span>View Complete Studio Menu &amp; Technique Notes</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
