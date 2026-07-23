'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS, PortfolioItem } from '@/lib/data';
import Lightbox from '@/components/ui/Lightbox';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioTeaserSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const heroItem = PORTFOLIO_ITEMS[0];
  const sideItems = PORTFOLIO_ITEMS.slice(1, 5);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-ivory-surface/30 border-t border-ivory-border relative overflow-hidden">
      
      {/* ATMOSPHERIC GLOW BACKGROUND ORB */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3 text-left">
            <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
              Portfolio &amp; Lookbook
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Recent <span className="italic font-normal text-terracotta">Studio Lookbook.</span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 text-xs font-sans font-medium tracking-widest text-terracotta hover:text-terracotta-hover uppercase border-b border-terracotta/40 pb-1"
          >
            <span>Explore All Lookbook Entries</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Hero Look with PARALLAX SCROLL (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedItem(heroItem)}
            className="lg:col-span-7 group cursor-pointer space-y-4"
          >
            <div className="relative h-[380px] sm:h-[480px] md:h-[540px] lg:h-[580px] w-full rounded-2xl overflow-hidden bg-ivory-surface shadow-warm border border-taupe/30">
              <ParallaxImage
                src={heroItem.image}
                alt={heroItem.title}
                offsetY={40}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 text-ivory space-y-2 text-left pointer-events-none z-10">
                <div className="text-[11px] font-sans font-medium text-terracotta-light uppercase tracking-widest">
                  {heroItem.category} · By {heroItem.architect}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold">
                  {heroItem.title}
                </h3>
                <p className="text-xs text-ivory/80 font-sans line-clamp-2">
                  {heroItem.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stacked Looks (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
            {sideItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer flex items-center space-x-4 p-3.5 rounded-2xl bg-ivory-card border border-taupe/30 hover:border-terracotta/40 transition-colors shadow-warm"
              >
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-ivory-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="96px"
                  />
                </div>

                <div className="space-y-1 pr-2 text-left">
                  <div className="text-[10px] font-sans font-medium text-terracotta uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal leading-snug group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-muted-text font-sans line-clamp-1">
                    {item.technique}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
