'use client';

import React, { useState } from 'react';
import { MapPin, PhoneCall, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Connect With Us</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Campus Directory & Contact Deck
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Our main quaternary campus is located in the heart of the Metropolis Medical District with 24/7 emergency helicopter helipad access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-navy-900 text-white space-y-4 shadow-xl">
          <PhoneCall className="w-8 h-8 text-rose-400 animate-pulse" />
          <h3 className="font-extrabold text-xl">24/7 Trauma Command Center</h3>
          <p className="text-xs text-slate-300">Acute cardiac arrest, stroke thrombolysis, and emergency ambulance dispatch.</p>
          <a href="tel:+918888810800" className="text-2xl font-black text-rose-400 block pt-2">+91 88888 10800</a>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
          <MapPin className="w-8 h-8 text-emerald-600" />
          <h3 className="font-extrabold text-xl text-navy-900">Main Campus Address</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Healthcare Boulevard, Medical District Sector 12,<br />
            Metropolis, MH 400001, India.<br />
            (Opposite Central Metro Interchange)
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
          <Mail className="w-8 h-8 text-teal-600" />
          <h3 className="font-extrabold text-xl text-navy-900">Digital Inquiries Desk</h3>
          <p className="text-xs text-slate-600">For corporate paneling, international second opinion reports, and medical careers.</p>
          <a href="mailto:contact@aarogyahospital.com" className="text-sm font-bold text-emerald-700 block pt-2">contact@aarogyahospital.com</a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-navy-900 mb-6">Send a Confidential Medical Inquiry</h2>
          
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp *</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Department / Subject</label>
                <input type="text" placeholder="e.g. Second Opinion for Robotic Knee Surgery" className="w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message / Clinical Symptoms *</label>
                <textarea rows={4} required placeholder="Describe symptoms or upload links to past reports..." className="w-full p-4 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Transmit Secure Message
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="font-extrabold text-2xl text-navy-900">Inquiry Transmitted!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Our Patient Relationship team has received your inquiry and will revert with priority consultation slots within 2 hours.
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-full min-h-[400px] bg-slate-100 relative">
          {/* Interactive Styled Map Simulation */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent flex flex-col justify-end p-8 text-white space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-[10px] font-extrabold uppercase tracking-wider w-max">
              GPS Navigation Active
            </span>
            <h4 className="font-black text-xl">Aarogya Multi-Specialty Main Campus</h4>
            <p className="text-xs text-slate-300">Directly connected to Metropolis Underground Railway Gate 4.</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="py-3 rounded-xl bg-white text-navy-900 font-extrabold text-xs text-center block shadow hover:bg-emerald-50"
            >
              Open in Google Maps Navigation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
