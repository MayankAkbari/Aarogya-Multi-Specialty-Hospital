'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SPECIALTIES } from '@/lib/dataStore';
import { ArrowRight, Sparkles, Stethoscope, Heart, Brain, ShieldAlert, Bone, Baby, UserCheck, Activity, Droplet, Eye, Wind, Ear, Smile, Scissors, Shield } from 'lucide-react';

export default function SpecialtiesSlider() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const displayed = selectedCategory === 'all' ? SPECIALTIES.slice(0, 9) : SPECIALTIES;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Centers of Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              20 Quaternary Super-Specialty Institutes
            </h2>
          </div>
          <Link
            href="/specialties"
            className="inline-flex items-center gap-2 font-extrabold text-sm text-emerald-600 hover:text-emerald-700 group shrink-0"
          >
            Explore All 20 Specialties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Featured 9 Institutes
          </button>
          <button
            onClick={() => setSelectedCategory('full')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'full'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            View Complete 20 Specialties Catalog
          </button>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((sp) => (
            <Link
              key={sp.id}
              href={`/specialties/${sp.slug}`}
              className="group p-7 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-emerald-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 group-hover:border-emerald-300 group-hover:bg-emerald-50 flex items-center justify-center text-navy-800 group-hover:text-emerald-600 transition-all shadow-sm">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-extrabold text-navy-700 shadow-sm">
                    {sp.stats.surgeries}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl text-navy-900 group-hover:text-emerald-700 transition-colors">
                  {sp.name}
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed line-clamp-2">
                  {sp.shortDesc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Head: <strong className="text-navy-800">{sp.headDoctor}</strong></span>
                  <span className="text-emerald-600 font-bold">{sp.stats.successRate} Success</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-navy-800 group-hover:text-emerald-600">
                <span>View Treatments & Doctors</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
