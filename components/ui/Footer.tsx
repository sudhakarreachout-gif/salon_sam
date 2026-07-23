'use client';

import React from 'react';
import Link from 'next/link';
import { ATELIER_INFO } from '@/lib/data';
import { MessageSquare, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${ATELIER_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Salonz Concierge, I would like to inquire about session availability in Bengaluru.'
  )}`;

  return (
    <footer className="bg-ivory-surface/60 border-t border-ivory-border text-charcoal relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-ivory-border/70">
          
          {/* Col 1 */}
          <div className="space-y-4 text-left">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-charcoal">
                Salonz
              </span>
              <span className="block text-[10px] font-sans font-medium tracking-widest text-terracotta uppercase mt-0.5">
                Indiranagar · Bengaluru
              </span>
            </Link>
            <p className="text-xs text-muted-text leading-relaxed font-sans max-w-xs">
              A serene studio sanctuary for bespoke hair colour, hand-sculpted texture, and Kyoto botanical scalp revival.
            </p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-ivory hover:bg-ivory-surface text-terracotta border border-terracotta/30 hover:border-terracotta px-4 py-2 rounded-full text-xs font-medium transition-all group shadow-warm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-terracotta" />
              <span>WhatsApp Concierge</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Col 2 */}
          <div className="space-y-3 text-xs font-sans text-left">
            <h4 className="text-terracotta uppercase font-medium tracking-widest text-[11px]">
              Studio Directory
            </h4>
            <ul className="space-y-2 text-muted-text">
              <li>
                <Link href="/about" className="hover:text-charcoal transition-colors">
                  Story &amp; Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-charcoal transition-colors">
                  Services Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-charcoal transition-colors">
                  Portfolio &amp; Lookbook
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-charcoal transition-colors">
                  Resident Specialists
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-charcoal transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-charcoal transition-colors">
                  Reserve Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 text-xs font-sans text-left">
            <h4 className="text-terracotta uppercase font-medium tracking-widest text-[11px]">
              Location &amp; Contact
            </h4>
            <div className="space-y-2.5 text-muted-text leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span>{ATELIER_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <a href={`tel:${ATELIER_INFO.phone}`} className="hover:text-charcoal">
                  {ATELIER_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <a href={`mailto:${ATELIER_INFO.email}`} className="hover:text-charcoal">
                  {ATELIER_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3 text-xs font-sans text-left">
            <h4 className="text-terracotta uppercase font-medium tracking-widest text-[11px]">
              Studio Hours
            </h4>
            <div className="space-y-2 text-muted-text">
              {ATELIER_INFO.hours.map((h, i) => (
                <div key={i} className="border-b border-ivory-border/50 pb-1.5">
                  <div className="text-charcoal font-medium">{h.days}</div>
                  <div className="text-muted-text text-[11px]">{h.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-text space-y-3 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Salonz Studio. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            <span>Appointment Only</span>
            <span>·</span>
            <span>100ft Road, Indiranagar, Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
