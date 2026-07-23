import React from 'react';
import { TESTIMONIALS } from '@/lib/data';
import BookingCTASection from '@/components/sections/BookingCTASection';

export const metadata = {
  title: 'Client Reflections | Salonz Studio',
  description: 'Read authentic client reflections and hair transformation experiences from architects, curators, and producers visiting Salonz Pali Hill.',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-b border-ivory-border">
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
            Client Reflections
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal leading-tight">
            Real stories from people who value time, craft, and hair health.
          </h1>
          <p className="text-base text-muted-text leading-relaxed font-sans">
            Every entry below comes from a client hosted in our private Pali Hill studio suites.
          </p>
        </div>
      </section>

      {/* Pull Quotes List */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="space-y-6 border-l-2 border-terracotta/40 pl-8 py-2"
            >
              <blockquote className="font-serif text-xl sm:text-2xl font-normal text-charcoal leading-snug">
                &ldquo;{item.fullReview}&rdquo;
              </blockquote>

              <div className="space-y-1 font-sans text-xs">
                <div className="font-semibold text-charcoal">{item.clientName}</div>
                <div className="text-muted-text">{item.profession} · {item.serviceReceived}</div>
                <div className="text-muted-text text-[11px]">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingCTASection />
    </div>
  );
}
