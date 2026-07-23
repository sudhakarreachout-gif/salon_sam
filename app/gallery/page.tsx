'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_ITEMS, PortfolioItem } from '@/lib/data';
import Lightbox from '@/components/ui/Lightbox';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import BookingCTASection from '@/components/sections/BookingCTASection';
import FloatingConciergePill from '@/components/ui/FloatingConciergePill';
import { Eye } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Lookbook Looks' },
  { id: 'cuts', label: 'Hand-Cut Texture' },
  { id: 'color', label: 'Smoked Balayage' },
  { id: 'treatment', label: 'Head Spa' },
  { id: 'bridal', label: 'Bridal Atelier' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 border-b border-ivory-border">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
              Portfolio &amp; Lookbook
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Real hair photographed in ambient studio light.
            </h1>
            <p className="text-sm text-muted-text leading-relaxed font-sans font-normal">
              No digital retouching filters or artificial heavy sprays. Every image documents genuine hair texture and dimensional color created at Salonz Indiranagar.
            </p>
          </div>

          {/* Equal Internal Pill Padding & Geometrically Balanced Text Orientation */}
          <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs">
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
      </section>

      {/* BEFORE & AFTER INTERACTIVE TRANSFORMATION SLIDER */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 border-b border-ivory-border">
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000"
          afterImage="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200"
          beforeLabel="Before: Brassy Mineral Buildup"
          afterLabel="After: Smoked Slate Balayage"
          title="Interactive Hair Transformation Preview"
          subtitle="Drag slider handle left or right to see true studio color results"
        />
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-ivory-surface h-[380px] sm:h-[420px] shadow-warm border border-ivory-border"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 bg-ivory/80 backdrop-blur-md p-2 rounded-full border border-ivory-border text-charcoal group-hover:text-terracotta transition-colors">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory space-y-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 text-left">
                <div className="text-[10px] font-sans font-medium text-terracotta-light uppercase tracking-widest">
                  {item.category} · By {item.architect}
                </div>

                <h3 className="font-serif text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-xs text-ivory/80 font-sans line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />

      <BookingCTASection />
      <FloatingConciergePill />
    </div>
  );
}
