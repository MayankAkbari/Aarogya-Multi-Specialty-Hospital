'use client';

import React from 'react';
import Link from 'next/link';
import { HEALTH_PACKAGES } from '@/lib/dataStore';
import { CheckCircle2, Sparkles, Calendar, ShieldCheck } from 'lucide-react';

export default function PackageComparison() {
  const displayed = HEALTH_PACKAGES.slice(0, 3);

  return (
    <section className="py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Preventive Healthcare
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Curated Diagnostic Health Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Early detection saves lives. Choose comprehensive full-body checkups with complimentary home blood collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {displayed.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between p-8 ${
                pkg.isPopular
                  ? 'border-emerald-500 shadow-2xl scale-105 z-10'
                  : 'border-slate-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {pkg.testCount} Diagnostic Tests Included
                </span>
                <h3 className="font-extrabold text-2xl text-navy-900 mt-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {pkg.tagline}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-baseline gap-2">
                  <span className="font-black text-3xl text-navy-900">₹{pkg.price}</span>
                  <span className="text-sm text-slate-400 line-through font-semibold">₹{pkg.originalPrice}</span>
                  <span className="ml-auto text-xs font-extrabold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-extrabold text-navy-800 uppercase tracking-wider">Included Parameter Highlights:</p>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                <p className="text-[11px] text-slate-400 font-medium">Recommended for: {pkg.recommendedFor}</p>
                <Link
                  href={`/health-packages?pkg=${pkg.id}`}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-md ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white'
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Book Checkup Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/health-packages"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-300 hover:border-emerald-500 text-navy-900 font-extrabold text-sm shadow-sm hover:shadow-md transition"
          >
            Explore All Health Packages & Home Sample Collection
          </Link>
        </div>

      </div>
    </section>
  );
}
