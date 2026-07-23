import React from 'react';
import Image from 'next/image';
import StudioFAQSection from '@/components/sections/StudioFAQSection';
import BookingCTASection from '@/components/sections/BookingCTASection';
import FloatingConciergePill from '@/components/ui/FloatingConciergePill';

export const metadata = {
  title: 'Story & Space | Salonz Studio',
  description: 'Learn about Salonz Indiranagar studio sanctuary in Bengaluru and our philosophy of dry hand-sculpted texture.',
};

export default function AboutPage() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 border-b border-ivory-border">
        <div className="max-w-3xl space-y-4 text-left">
          <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
            Story &amp; Sanctuary
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Created as a refuge from the commercial salon rush.
          </h1>
          <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans font-normal">
            Founded on 100 Feet Road, Indiranagar, Bengaluru, Salonz was built on a simple promise: to offer an atmosphere of quiet luxury where your hair is given undivided attention and thoughtful craft.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-muted-text leading-relaxed font-sans text-left">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              The Indiranagar Studio Sanctuary
            </h2>

            <p>
              In conventional salons, clients are often subjected to loud noise, ringing phones, and stylists juggling three clients at once. We wanted something entirely different — a serene space where you can unwind completely.
            </p>

            <p>
              Our studio features private linen-draped suites ensuring absolute privacy. When you sit in your suite, your specialist remains focused solely on you throughout your session.
            </p>

            <div className="p-5 sm:p-6 bg-ivory-surface/60 border-l-2 border-terracotta rounded-r-lg space-y-2">
              <div className="text-[11px] font-sans font-medium text-terracotta uppercase tracking-wider">
                Founder Note · Marcus Lin
              </div>
              <blockquote className="font-serif text-base sm:text-lg text-charcoal italic">
                &ldquo;Hair cut dry reveals how it naturally behaves every single day. We shape hair to fall gracefully with gravity rather than forcing it with heavy styling products.&rdquo;
              </blockquote>
            </div>

            <p>
              Every colour formula is prepared individually in our open pigment counter using low-ammonia clay lighteners and lipid-restoring glazes. We believe hair should feel even better than it looks.
            </p>
          </div>

          <div className="lg:col-span-5 relative w-full">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-ivory-surface shadow-warm border border-ivory-border">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000"
                alt="Salonz Studio Space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 bg-ivory/95 backdrop-blur-sm border border-ivory-border rounded-lg text-xs">
                <span className="text-terracotta font-sans font-medium uppercase text-[10px] tracking-wider">Private Studio Suites</span>
                <p className="text-muted-text text-xs mt-1 font-sans">
                  Acoustic linen draping ensuring quiet comfort during your session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="bg-ivory-surface/40 py-16 sm:py-20 border-y border-ivory-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-12 text-left">
            <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase mb-2">
              Materiality &amp; Space
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Elements of Our Environment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs">
            <div className="bg-ivory p-6 border border-ivory-border rounded-xl space-y-2 shadow-warm text-left">
              <div className="font-serif text-base sm:text-lg font-bold text-charcoal">Unbleached Linen</div>
              <p className="text-muted-text leading-relaxed">
                Natural flax drapes absorb acoustics and soften overhead light into warm ambient glows.
              </p>
            </div>

            <div className="bg-ivory p-6 border border-ivory-border rounded-xl space-y-2 shadow-warm text-left">
              <div className="font-serif text-base sm:text-lg font-bold text-charcoal">Aged Verdigris</div>
              <p className="text-muted-text leading-relaxed">
                Patina brass fixtures reflect our appreciation for organic, enduring beauty over fleeting trends.
              </p>
            </div>

            <div className="bg-ivory p-6 border border-ivory-border rounded-xl space-y-2 shadow-warm text-left">
              <div className="font-serif text-base sm:text-lg font-bold text-charcoal">Smoked Slate</div>
              <p className="text-muted-text leading-relaxed">
                Neutral slate worktops ensure hair color tones are evaluated accurately under natural light.
              </p>
            </div>

            <div className="bg-ivory p-6 border border-ivory-border rounded-xl space-y-2 shadow-warm text-left">
              <div className="font-serif text-base sm:text-lg font-bold text-charcoal">Tokyo Shears</div>
              <p className="text-muted-text leading-relaxed">
                Hand-forged Japanese stainless steel shears cut hair fibers cleanly without splitting delicate ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StudioFAQSection />
      <BookingCTASection />
      <FloatingConciergePill />
    </div>
  );
}
