import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import BookingCTASection from '@/components/sections/BookingCTASection';
import { Clock, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Services Menu & Experience Guide | Salonz Studio Bengaluru',
  description: 'Explore full pricing in INR, durations, and technique descriptions for Precision Cuts, Balayage, Japanese Scalp Therapy, and Bridal Atelier at Salonz Indiranagar, Bengaluru.',
};

export default function ServicesPage() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 border-b border-ivory-border">
        <div className="max-w-3xl space-y-4 text-left">
          <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
            Services &amp; Pricing (Bengaluru)
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Thoughtfully written descriptions, transparent pricing.
          </h1>
          <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans font-normal">
            Every session listed below includes dedicated one-on-one consultation time, hair fiber analysis, botanical wash, and bespoke styling. Prices are complete in INR with zero hidden add-ons.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 space-y-8 sm:space-y-12">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-ivory-surface/50 border border-ivory-border rounded-xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-terracotta/40 transition-colors shadow-warm"
          >
            {/* Main Details (8 cols) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="text-[11px] font-sans font-medium text-terracotta uppercase tracking-widest">
                {service.category.replace('-', ' ')}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                {service.title}
              </h2>

              <p className="text-xs font-sans text-terracotta font-medium uppercase tracking-wider">
                {service.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                {service.description}
              </p>

              <div className="pt-3 space-y-2">
                <div className="text-xs font-sans text-charcoal uppercase font-medium tracking-wider">
                  Technique &amp; Care Details:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-sans text-muted-text">
                  {service.techniqueNotes.map((note, i) => (
                    <span key={i} className="bg-ivory border border-ivory-border px-3 py-1 rounded-full">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action (4 cols) */}
            <div className="lg:col-span-4 bg-ivory p-5 sm:p-6 rounded-xl border border-ivory-border space-y-6 flex flex-col justify-between h-full w-full">
              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-center justify-between border-b border-ivory-border pb-3">
                  <span className="text-muted-text">Session Duration:</span>
                  <span className="font-medium text-charcoal flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-terracotta" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-ivory-border pb-3">
                  <span className="text-muted-text">Complete Price:</span>
                  <span className="font-serif text-2xl font-bold text-charcoal">
                    {service.price}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted-text">
                  <span>Recommended Interval:</span>
                  <span className="text-charcoal font-medium">{service.recommendedInterval}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/booking?service=${encodeURIComponent(service.id)}`}
                  className="w-full flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs font-medium py-3 rounded-full transition-all shadow-terracotta-glow"
                >
                  <span>Reserve for {service.price}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <BookingCTASection />
    </div>
  );
}
