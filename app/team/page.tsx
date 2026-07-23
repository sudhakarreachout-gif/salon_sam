import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/lib/data';
import BookingCTASection from '@/components/sections/BookingCTASection';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Resident Specialists | Salonz Studio',
  description: 'Meet our resident specialists at Salonz Bandra West: Marcus Lin (Vidal Sassoon trained), Priya Nair (Colour Chemistry), and Kenji Sato (Kyoto Trichology).',
};

export default function TeamPage() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-b border-ivory-border">
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
            Resident Specialists
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal leading-tight">
            One specialist. Dedicated completely to your session.
          </h1>
          <p className="text-base text-muted-text leading-relaxed font-sans">
            At Salonz, your assigned specialist conducts the initial consultation, executes the cut, formulates the pigment, and performs the final dry-styling. No junior assistant swaps midway through.
          </p>
        </div>
      </section>

      {/* Profiles List */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-16">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            id={member.id}
            className="bg-ivory-surface/50 border border-ivory-border rounded-xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-terracotta/40 transition-colors shadow-warm"
          >
            {/* Image (4 cols) */}
            <div className="lg:col-span-4 relative h-[380px] sm:h-[450px] w-full rounded-xl overflow-hidden bg-ivory-surface shadow-warm border border-ivory-border">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-ivory/95 backdrop-blur-sm p-3 rounded-lg font-sans text-[11px] font-medium text-terracotta border border-ivory-border">
                Experience: {member.experience}
              </div>
            </div>

            {/* Info (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="text-[11px] font-sans font-medium text-terracotta uppercase tracking-widest mb-1">
                  {member.role}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                  {member.name}
                </h2>
                <div className="text-xs font-sans text-muted-text mt-1">
                  Specialty: {member.specialty}
                </div>
              </div>

              <blockquote className="p-4 bg-ivory border-l-2 border-terracotta text-xs font-serif italic text-charcoal">
                &ldquo;{member.quote}&rdquo;
              </blockquote>

              <p className="text-sm text-muted-text leading-relaxed font-sans">
                {member.bio}
              </p>

              <div className="pt-2">
                <div className="text-xs font-sans text-charcoal uppercase font-medium tracking-wider mb-2">
                  Signature Lookbook Specializations:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-sans text-muted-text">
                  {member.portfolioHighlight.map((h, i) => (
                    <span key={i} className="bg-ivory border border-ivory-border px-3 py-1 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/booking?architect=${encodeURIComponent(member.id)}`}
                  className="inline-flex items-center space-x-2 bg-terracotta hover:bg-terracotta-hover text-ivory text-xs font-medium px-6 py-3 rounded-full transition-all shadow-terracotta-glow"
                  data-cursor="BOOK"
                >
                  <span>Reserve with {member.name}</span>
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
