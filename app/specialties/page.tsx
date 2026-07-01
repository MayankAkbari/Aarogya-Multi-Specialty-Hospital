'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SPECIALTIES } from '@/lib/dataStore';
import { Search, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SpecialtiesIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = SPECIALTIES.filter(sp => 
    sp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sp.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sp.treatments.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Centers of Clinical Excellence</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Explore Our 20 Super-Specialty Institutes
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Every institute is headed by American and European fellowship-trained directors supported by advanced robotic surgical infrastructure.
        </p>

        <div className="pt-4 max-w-md mx-auto relative">
          <Search className="w-5 h-5 absolute top-4 left-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search procedure, organ, or specialty (e.g. LASIK, Heart, Robotic)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((sp) => (
          <Link
            key={sp.id}
            href={`/specialties/${sp.slug}`}
            className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                  {sp.stats.surgeries}
                </span>
              </div>

              <h2 className="font-extrabold text-xl text-navy-900 group-hover:text-emerald-700 transition-colors">
                {sp.name}
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {sp.shortDesc}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Key Procedures:</p>
                {sp.treatments.slice(0, 3).map((trt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{trt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
              <span>View Institute Details & Doctors</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
