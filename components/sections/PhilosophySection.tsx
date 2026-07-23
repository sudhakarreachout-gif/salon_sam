'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    title: 'Dedicated 1-on-1 Sessions',
    description: 'We host limited private sessions across our Indiranagar suites. Your specialist remains with you from consultation to final dry-styling — zero apprentice handoffs or rushed double-booking.',
    tag: 'INDIVIDUAL CARE',
  },
  {
    title: 'Dry Hand-Sculpted Cutting',
    description: 'Wet hair hides cowlicks, weight distribution, and natural wave direction. We shape your hair dry to observe how it moves when you walk, ensuring your cut looks effortless without 40 minutes of morning styling.',
    tag: 'PRECISION CRAFT',
  },
  {
    title: 'Low-Ammonia Pigment Science',
    description: 'Our colorists use organic clay lighteners and lipid-restoring glazes that protect your hair shaft integrity. Colors are painted freehand to melt into your natural base for months of seamless grow-out.',
    tag: 'HAIR INTEGRITY',
  },
  {
    title: 'Kyoto Scalp & Follicle Rituals',
    description: 'Healthy, radiant hair begins at the scalp. Our 75-minute head spa combines Kyoto shiatsu pressure points with ultrasonic botanical mist to clear micro-inflammation and restore natural scalp harmony.',
    tag: 'FOLLICLE HEALTH',
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-ivory-surface/40 border-y border-ivory-border relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-taupe/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4 text-left">
          <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
            OUR STUDIO VALUES
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-snug sm:leading-tight">
            Designed for those who appreciate <span className="italic font-normal text-terracotta">quiet care</span>, unhurried craft, and genuine hair health.
          </h2>
          <p className="font-sans font-normal text-charcoal/85 tracking-[0.015em] sm:text-base md:text-lg leading-relaxed">
            Most commercial salons operate on volume — rushing twenty clients a day through assembly lines. At Salonz, we built an atmosphere of <span className="italic font-serif text-charcoal font-medium">quiet luxury</span> where time, privacy, and hair integrity come first.
          </p>
        </div>

        {/* Pillars Grid with 3D Embossed Cards & Glass Tag Pills (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {PILLARS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-embossed-3d p-6 sm:p-8 rounded-2xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <span className="pill-glass-tag text-[10px] font-sans font-semibold tracking-wider text-terracotta px-3.5 py-1 rounded-full uppercase">
                    {item.tag}
                  </span>
                </div>
                <p className="font-sans font-normal text-muted-text text-xs sm:text-sm leading-relaxed tracking-[0.01em]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
