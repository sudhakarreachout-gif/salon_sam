'use client';

import React, { useState } from 'react';
import { ATELIER_INFO } from '@/lib/data';
import { MessageSquare, MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${ATELIER_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Salonz Concierge, I would like to inquire about session availability at Pali Hill.'
  )}`;

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-b border-ivory-border">
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
            Studio Location &amp; Concierge
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal leading-tight">
            Pali Hill Studio Contact.
          </h1>
          <p className="text-base text-muted-text leading-relaxed font-sans">
            Have questions regarding bridal consultations, custom hair colour, or private suite reservations? Connect directly with our concierge team.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Map (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* WhatsApp Box */}
            <div className="p-6 bg-ivory-surface/60 border border-ivory-border rounded-lg space-y-4 shadow-terracotta-glow">
              <div className="flex items-center space-x-2 text-terracotta font-sans text-xs uppercase font-medium tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </div>
              <p className="text-xs text-muted-text font-sans">
                For quick availability queries or photo consultations before booking, message our concierge on WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-terracotta text-ivory font-sans text-xs font-medium px-5 py-2.5 rounded-full hover:bg-terracotta-hover transition-colors group shadow-terracotta-glow"
              >
                <span>Open WhatsApp Chat (+91 98200 47821)</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Address & Hours */}
            <div className="bg-ivory-surface/40 p-6 border border-ivory-border rounded-lg space-y-6 font-sans text-xs">
              <div className="space-y-2">
                <div className="text-terracotta font-sans text-xs uppercase font-medium tracking-wider flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Studio Location</span>
                </div>
                <p className="text-charcoal leading-relaxed">
                  {ATELIER_INFO.address}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-terracotta font-sans text-xs uppercase font-medium tracking-wider flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Operating Hours</span>
                </div>
                <div className="space-y-1 text-muted-text">
                  {ATELIER_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-ivory-border/50 py-1">
                      <span>{h.days}</span>
                      <span className="text-charcoal font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-muted-text">Phone:</span>
                  <p className="text-charcoal font-medium">{ATELIER_INFO.phone}</p>
                </div>
                <div>
                  <span className="text-muted-text">Email:</span>
                  <p className="text-charcoal font-medium">{ATELIER_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[280px] w-full rounded-lg overflow-hidden border border-ivory-border relative bg-ivory-surface shadow-warm">
              <iframe
                title="Salonz Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.439818816827!2d72.82728907597148!3d19.062831852277497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9115b80a56d%3A0xb35a09bf9583b27b!2sPali%20Hill%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(20%) contrast(90%) opacity(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 bg-ivory-surface/40 border border-ivory-border p-8 rounded-lg space-y-6 shadow-warm">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal">
                Send a Message
              </h2>
              <p className="text-xs text-muted-text font-sans mt-1">
                Reach out directly to our Pali Hill concierge team.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 font-sans text-xs">
                <div className="w-12 h-12 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-terracotta font-sans uppercase font-medium text-sm tracking-wider">Message Dispatched</div>
                <p className="text-muted-text max-w-sm mx-auto">
                  Thank you. Our concierge will review your message and reply within 2 hours during studio operating hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs">
                <div className="space-y-1.5">
                  <label className="block text-charcoal font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Varma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs focus:border-terracotta outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-charcoal font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs focus:border-terracotta outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-charcoal font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs focus:border-terracotta outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-charcoal font-medium">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your hair goals, bridal timeline, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs focus:border-terracotta outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracotta-hover text-ivory font-medium py-3.5 rounded-full transition-all shadow-terracotta-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Concierge</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
