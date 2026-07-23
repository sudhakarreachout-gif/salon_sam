'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { ArrowUpRight } from 'lucide-react';

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[82vh] md:min-h-[88vh] py-12 sm:py-16 md:py-20 lg:py-24 flex items-center overflow-hidden">
      
      {/* ATMOSPHERIC GLOW BACKGROUND ORBS */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-terracotta/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-taupe/25 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Word-by-Word Playfair Display Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left">
            
            {/* Perfectly Aligned Editorial Location Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-terracotta uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              <span>100ft Road · Indiranagar, Bengaluru</span>
            </motion.div>

            {/* Playfair Display Extra Bold Word-by-Word Entrance Animation */}
            <motion.h1
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.2rem] 2xl:text-[7rem] font-black text-charcoal leading-[1.05] sm:leading-[1.03] tracking-tight"
            >
              <motion.span variants={wordVariants} className="inline-block mr-3">
                Bespoke
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-3">
                Hair
              </motion.span>
              <br />
              <motion.span variants={wordVariants} className="inline-block italic font-normal text-terracotta mr-3">
                &amp; Sculptural
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block italic font-normal text-terracotta">
                Colour.
              </motion.span>
            </motion.h1>

            {/* Warm Body Copy with Sensory Italic Accents */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-sm sm:text-base md:text-lg text-muted-text leading-relaxed font-sans font-normal max-w-xl"
            >
              We created Salonz for those who desire <span className="italic font-serif text-charcoal">serene</span>, one-on-one care without the rush of a commercial salon floor. Hosted in private linen suites, your hair is cut dry to your natural texture and painted with <span className="italic font-serif text-charcoal">organic clay pigments</span>.
            </motion.p>

            {/* Toned-Down Modern Luxury Terracotta CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 pt-2"
            >
              <Link
                href="/booking"
                className="btn-terracotta-luxury inline-flex items-center justify-center space-x-2 text-ivory font-sans text-xs font-medium px-8 sm:px-9 py-3.5 sm:py-4 rounded-full group"
              >
                <span>Reserve Your Session</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="btn-liquid-glass-ivory inline-flex items-center justify-center space-x-2 text-charcoal text-xs font-medium px-7 sm:px-8 py-3.5 sm:py-4 rounded-full"
              >
                <span>View Services Menu</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: PARALLAX EDITORIAL IMAGE CONTAINER (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative h-[380px] sm:h-[480px] md:h-[540px] lg:h-[560px] xl:h-[600px] w-full rounded-2xl overflow-hidden bg-ivory-surface shadow-warm border border-ivory-border">
              {/* SMOOTH PARALLAX SCROLL IMAGE */}
              <ParallaxImage
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200"
                alt="Salonz High-End Hair Texture and Balayage"
                priority
                offsetY={45}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 bg-ivory/95 backdrop-blur-sm border border-taupe/30 rounded-xl shadow-lg z-10 pointer-events-none">
                <div className="text-[10px] sm:text-[11px] font-sans font-medium text-terracotta uppercase tracking-widest mb-1">
                  Smoked Slate &amp; Honey Balayage
                </div>
                <p className="text-xs text-muted-text font-sans leading-relaxed">
                  Freehand clay painting designed for <span className="italic font-serif text-charcoal">seamless grow-out</span> under ambient natural light.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
