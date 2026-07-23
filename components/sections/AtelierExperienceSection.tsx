'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VolumeX, Car, Droplet, Coffee } from 'lucide-react';

const AMENITIES = [
  {
    icon: VolumeX,
    title: 'Acoustic Suite Privacy',
    description: 'Each chair resides in a private, linen-draped suite. Minimal ambient sound, silent hairdryers, and 1-on-1 attention allow you to truly unwind.',
    tag: 'TRANQUILITY',
  },
  {
    icon: Car,
    title: 'Complimentary Private Valet',
    description: 'Pull up directly to our entrance on 100 Feet Road. Our private valet team will handle your vehicle, making arrival completely seamless.',
    tag: 'CONVENIENCE',
  },
  {
    icon: Droplet,
    title: 'Mineral-Free RO Wash Bowls',
    description: 'Bengaluru hard water ruins color integrity. All our shampoo stations use reverse-osmosis purified water to eliminate mineral and metal buildup.',
    tag: 'HAIR HEALTH',
  },
  {
    icon: Coffee,
    title: 'Atelier Tea & Coffee Pantry',
    description: 'Enjoy freshly whisked Kyoto ceremonial matcha, single-origin pour-overs, organic tisanes, and seasonal warm linen towels during your session.',
    tag: 'COMFORT',
  },
];

export default function AtelierExperienceSection() {
  return (
    <section className="py-20 sm:py-24 bg-ivory-surface/40 border-y border-ivory-border relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-taupe/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4 text-left">
          <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
            The Atelier Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-snug sm:leading-tight">
            Designed for <span className="italic font-normal text-terracotta">uncompromising comfort</span> and quiet care.
          </h2>
          <p className="font-sans font-normal text-charcoal/85 tracking-[0.015em] sm:text-base md:text-lg leading-relaxed">
            From purified water wash bowls to private valet service, every detail has been intentionally crafted around your peace of mind.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-embossed-3d p-6 rounded-2xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-terracotta/10 rounded-xl text-terracotta border border-terracotta/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="pill-glass-tag text-[9px] font-sans font-semibold tracking-wider text-terracotta px-2.5 py-0.5 rounded-full uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-charcoal">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-muted-text text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
