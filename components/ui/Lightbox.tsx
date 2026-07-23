'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Scissors } from 'lucide-react';
import { PortfolioItem } from '@/lib/data';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-ivory border border-ivory-border max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg shadow-2xl flex flex-col md:flex-row z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-ivory/80 text-charcoal hover:text-terracotta p-2 rounded-full border border-ivory-border transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-full md:w-3/5 h-[350px] md:h-auto min-h-[300px] bg-ivory-surface">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-ivory">
            <div className="space-y-4">
              <div className="text-[11px] font-sans font-medium text-terracotta uppercase tracking-widest">
                {item.category} Lookbook
              </div>

              <h3 className="font-serif text-2xl font-bold text-charcoal leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-muted-text leading-relaxed font-sans">
                {item.description}
              </p>

              <div className="pt-4 border-t border-ivory-border space-y-3 font-sans text-xs text-charcoal">
                <div className="flex items-center justify-between">
                  <span className="text-muted-text flex items-center space-x-1.5">
                    <Scissors className="w-3.5 h-3.5 text-terracotta" />
                    <span>Technique:</span>
                  </span>
                  <span className="font-medium">{item.technique}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-text flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-terracotta" />
                    <span>Specialist:</span>
                  </span>
                  <span className="font-medium">{item.architect}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-ivory-border">
              <a
                href={`/booking?service=${encodeURIComponent(item.title)}`}
                className="w-full flex items-center justify-center bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs font-medium py-3 rounded-full transition-colors shadow-terracotta-glow"
              >
                Request This Look
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
