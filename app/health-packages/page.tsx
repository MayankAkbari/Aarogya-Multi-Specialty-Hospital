'use client';

import React, { useState } from 'react';
import { HEALTH_PACKAGES } from '@/lib/dataStore';
import { CheckCircle2, Calendar, ShieldCheck, Sparkles, Home } from 'lucide-react';
import Link from 'next/link';

export default function HealthPackagesPage() {
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Preventive Diagnostics</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Executive Health Checkup Packages
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          All checkups include complimentary home blood sample collection and fasting breakfast buffet at our campus lounge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HEALTH_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl bg-white border p-8 flex flex-col justify-between transition relative ${
              pkg.isPopular ? 'border-emerald-500 shadow-2xl scale-102' : 'border-slate-200 shadow-sm'
            }`}
          >
            {pkg.isPopular && (
              <span className="absolute -top-3.5 left-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Most Popular
              </span>
            )}

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{pkg.testCount} Lab Parameters</span>
              <h2 className="font-extrabold text-2xl text-navy-900 mt-1">{pkg.name}</h2>
              <p className="text-xs text-slate-500 mt-1">{pkg.tagline}</p>

              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-baseline gap-2">
                <span className="font-black text-3xl text-navy-900">₹{pkg.price}</span>
                <span className="text-sm text-slate-400 line-through">₹{pkg.originalPrice}</span>
              </div>

              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-bold text-navy-800 uppercase tracking-wider">What's Covered:</p>
                {pkg.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
              <p className="text-[11px] text-slate-400">Best for: {pkg.recommendedFor}</p>
              <button
                onClick={() => { setSelectedPkg(pkg.name); setBookingSuccess(true); }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Schedule Home Sample Collection
              </button>
            </div>
          </div>
        ))}
      </div>

      {bookingSuccess && (
        <div className="mt-12 p-8 rounded-3xl bg-emerald-50 border border-emerald-300 max-w-2xl mx-auto text-center space-y-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="font-extrabold text-2xl text-navy-900">Sample Collection Request Registered!</h3>
          <p className="text-sm text-slate-700">
            Our phlebotomist team will call your registered number within 15 minutes to confirm exact address and morning fasting slot for <strong className="text-navy-900">{selectedPkg}</strong>.
          </p>
          <button onClick={() => setBookingSuccess(false)} className="px-6 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs mt-2">
            Close Notification
          </button>
        </div>
      )}
    </div>
  );
}
