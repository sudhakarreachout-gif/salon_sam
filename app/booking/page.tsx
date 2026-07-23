'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SERVICES, TEAM_MEMBERS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const TIME_SLOTS = [
  '10:00 IST',
  '11:30 IST',
  '13:00 IST',
  '14:30 IST',
  '16:00 IST',
  '17:30 IST',
];

function BookingFormContent() {
  const searchParams = useSearchParams();
  const preselectedServiceId = searchParams.get('service');
  const preselectedArchitectId = searchParams.get('architect');

  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES[0].id
  );
  const [selectedArchitectId, setSelectedArchitectId] = useState<string>(
    preselectedArchitectId || 'any'
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[0]);
  const [clientInfo, setClientInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [bookingConfirmation, setBookingConfirmation] = useState<any>(null);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const selectedArchitect = TEAM_MEMBERS.find((m) => m.id === selectedArchitectId);

  const handleNextStep = () => {
    setErrorMsg('');
    if (step === 4) {
      if (!clientInfo.fullName.trim() || !clientInfo.phone.trim()) {
        setErrorMsg('Please enter your name and contact phone number.');
        return;
      }
      submitReservation();
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const submitReservation = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: selectedServiceId,
          architectId: selectedArchitectId,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          clientInfo,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to complete reservation.');
      }

      setBookingConfirmation(data.booking);
      setStep(5);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
      {/* Header */}
      <div className="text-center mb-10 space-y-3">
        <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
          Studio Reservation
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal">
          Reserve Your Studio Session.
        </h1>
        <p className="text-sm text-muted-text max-w-lg mx-auto font-sans">
          Select your service, preferred specialist, and convenient time slot below.
        </p>
      </div>

      {/* Steps Indicator */}
      {step < 5 && (
        <div className="mb-10 flex items-center justify-between border-b border-ivory-border pb-6 font-sans text-xs">
          {[
            { num: 1, label: 'Service' },
            { num: 2, label: 'Specialist' },
            { num: 3, label: 'Date & Time' },
            { num: 4, label: 'Guest Details' },
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => s.num < step && setStep(s.num)}
              className={`flex items-center space-x-2 cursor-pointer transition-colors ${
                step === s.num
                  ? 'text-terracotta font-semibold'
                  : step > s.num
                  ? 'text-charcoal'
                  : 'text-taupe pointer-events-none'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  step === s.num
                    ? 'bg-terracotta text-ivory font-semibold'
                    : step > s.num
                    ? 'bg-ivory-surface text-terracotta border border-terracotta/40'
                    : 'bg-ivory-surface text-taupe'
                }`}
              >
                {step > s.num ? '✓' : s.num}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-xs font-sans rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="bg-ivory-surface/50 border border-ivory-border rounded-xl p-6 sm:p-10 shadow-warm relative">
        <AnimatePresence mode="wait">
          
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Select Studio Offering
                </h2>
                <p className="text-xs text-muted-text font-sans mt-1">
                  Choose the service for your private suite session.
                </p>
              </div>

              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`p-5 rounded-lg border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      selectedServiceId === service.id
                        ? 'bg-ivory border-terracotta shadow-terracotta-glow'
                        : 'bg-ivory/60 border-ivory-border hover:border-terracotta/40'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-serif font-bold text-lg text-charcoal">
                          {service.title}
                        </span>
                        {selectedServiceId === service.id && (
                          <span className="text-terracotta text-xs font-sans font-medium uppercase tracking-wider">● Selected</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-text font-sans max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-serif font-bold text-lg text-charcoal">{service.price}</div>
                      <div className="text-[11px] font-sans text-muted-text flex items-center space-x-1 justify-end">
                        <Clock className="w-3 h-3 text-terracotta" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Select Specialist
                </h2>
                <p className="text-xs text-muted-text font-sans mt-1">
                  Choose your dedicated specialist for this session.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setSelectedArchitectId('any')}
                  className={`p-6 rounded-lg border cursor-pointer transition-all ${
                    selectedArchitectId === 'any'
                      ? 'bg-ivory border-terracotta shadow-terracotta-glow'
                      : 'bg-ivory/60 border-ivory-border hover:border-terracotta/40'
                  }`}
                >
                  <div className="font-serif font-bold text-base text-charcoal mb-1">
                    First Available Specialist
                  </div>
                  <p className="text-xs text-muted-text font-sans">
                    Automatically pair with the specialist matching your preferred date and time.
                  </p>
                </div>

                {TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedArchitectId(member.id)}
                    className={`p-6 rounded-lg border cursor-pointer transition-all ${
                      selectedArchitectId === member.id
                        ? 'bg-ivory border-terracotta shadow-terracotta-glow'
                        : 'bg-ivory/60 border-ivory-border hover:border-terracotta/40'
                    }`}
                  >
                    <div className="font-serif font-bold text-base text-charcoal mb-1">
                      {member.name}
                    </div>
                    <div className="text-xs font-sans text-terracotta font-medium uppercase tracking-wider mb-1">
                      {member.role}
                    </div>
                    <p className="text-[11px] text-muted-text font-sans line-clamp-2">
                      {member.specialty}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Select Date &amp; Time Slot
                </h2>
                <p className="text-xs text-muted-text font-sans mt-1">
                  Private sessions scheduled to guarantee unhurried care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-sans text-terracotta font-medium uppercase tracking-wider">
                    Reservation Date:
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg font-sans text-sm focus:border-terracotta outline-none"
                  />
                  <p className="text-[10px] text-muted-text font-sans">
                    * Studio is closed Mondays.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-sans text-terracotta font-medium uppercase tracking-wider">
                    Time Slot:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-3 rounded-lg border font-sans text-xs transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-terracotta text-ivory font-medium border-terracotta shadow-terracotta-glow'
                            : 'bg-ivory text-muted-text border-ivory-border hover:border-terracotta/40'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Guest Contact Details
                </h2>
                <p className="text-xs text-muted-text font-sans mt-1">
                  Enter your details for session confirmation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-sans text-charcoal font-medium uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Devika Sharma"
                    value={clientInfo.fullName}
                    onChange={(e) => setClientInfo({ ...clientInfo, fullName: e.target.value })}
                    className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs font-sans focus:border-terracotta outline-none"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-sans text-charcoal font-medium uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98200 00000"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                    className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs font-sans focus:border-terracotta outline-none"
                    required
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-sans text-charcoal font-medium uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. devika@example.com"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                    className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs font-sans focus:border-terracotta outline-none"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-sans text-charcoal font-medium uppercase tracking-wider">
                    Special Hair Notes or History
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any past chemical treatments, scalp sensitivities, or desired style goals..."
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    className="w-full bg-ivory border border-ivory-border text-charcoal p-3.5 rounded-lg text-xs font-sans focus:border-terracotta outline-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 bg-ivory border border-ivory-border rounded-lg font-sans text-xs space-y-2">
                <div className="text-terracotta font-sans font-medium uppercase tracking-wider">Reservation Summary:</div>
                <div className="text-charcoal flex justify-between">
                  <span>Offering:</span>
                  <span>{selectedService.title} ({selectedService.price})</span>
                </div>
                <div className="text-charcoal flex justify-between">
                  <span>Specialist:</span>
                  <span>{selectedArchitect ? selectedArchitect.name : 'First Available'}</span>
                </div>
                <div className="text-charcoal flex justify-between">
                  <span>Date &amp; Time:</span>
                  <span>{selectedDate} at {selectedTimeSlot}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5 */}
          {step === 5 && bookingConfirmation && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-sans font-medium text-terracotta uppercase tracking-widest">
                  Reservation Received
                </div>
                <h2 className="font-serif text-3xl font-bold text-charcoal">
                  Session Reserved.
                </h2>
                <p className="text-xs text-muted-text font-sans max-w-md mx-auto">
                  Your reference code has been generated. Our concierge team at Pali Hill will contact you via WhatsApp shortly.
                </p>
              </div>

              <div className="max-w-md mx-auto bg-ivory border border-terracotta/40 p-6 rounded-lg font-sans text-xs text-left space-y-3 shadow-terracotta-glow">
                <div className="flex justify-between border-b border-ivory-border pb-2">
                  <span className="text-muted-text">Reference Code:</span>
                  <span className="font-sans font-bold text-terracotta tracking-wider">
                    {bookingConfirmation.referenceCode}
                  </span>
                </div>
                <div className="flex justify-between border-b border-ivory-border pb-2">
                  <span className="text-muted-text">Guest Name:</span>
                  <span className="font-semibold text-charcoal">{bookingConfirmation.clientName}</span>
                </div>
                <div className="flex justify-between border-b border-ivory-border pb-2">
                  <span className="text-muted-text">Assigned Suite:</span>
                  <span className="text-charcoal">{bookingConfirmation.suite}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-text">Scheduled:</span>
                  <span className="text-charcoal">{bookingConfirmation.date} @ {bookingConfirmation.timeSlot}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/"
                  className="inline-flex items-center space-x-2 bg-terracotta text-ivory font-sans text-xs font-medium px-6 py-3 rounded-full shadow-terracotta-glow"
                >
                  Return to Studio Homepage
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Buttons */}
        {step < 5 && (
          <div className="mt-10 pt-6 border-t border-ivory-border flex items-center justify-between font-sans text-xs">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex items-center space-x-2 text-muted-text hover:text-charcoal transition-colors"
                disabled={isSubmitting}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              disabled={isSubmitting}
              className="inline-flex items-center space-x-2 bg-terracotta hover:bg-terracotta-hover text-ivory font-medium px-6 py-3 rounded-full transition-all shadow-terracotta-glow"
              data-cursor="PROCEED"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Logging Reservation...</span>
                </>
              ) : (
                <>
                  <span>{step === 4 ? 'Confirm & Reserve Session' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <Loader2 className="w-8 h-8 text-terracotta animate-spin" />
        </div>
      }>
        <BookingFormContent />
      </Suspense>
    </div>
  );
}
