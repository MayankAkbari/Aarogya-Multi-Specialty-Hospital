'use client';

import React from 'react';
import { Users, UserCheck, Bed, Scissors, Award } from 'lucide-react';

export default function StatsCounters() {
  const stats = [
    { label: 'Patients Served Successfully', val: '50,000+', icon: Users, sub: 'Across OPD & IPD institutes' },
    { label: 'Full-Time Senior Specialists', val: '150+', icon: UserCheck, sub: 'American & UK board trained' },
    { label: 'Multidisciplinary Inpatient Beds', val: '500+', icon: Bed, sub: 'Including 40 Level 1 ICU beds' },
    { label: 'Complex Surgeries Performed', val: '35,000+', icon: Scissors, sub: '99.4% overall success rate' },
    { label: 'Years of Trusted Medical Legacy', val: '25+', icon: Award, sub: 'JCI Gold & NABH accredited' }
  ];

  return (
    <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {stats.map((st) => {
            const IconComponent = st.icon;
            return (
              <div key={st.label} className="p-6 rounded-3xl bg-navy-800/60 border border-navy-700/60 backdrop-blur-md flex flex-col items-center justify-center space-y-2 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 mb-2">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-400">
                  {st.val}
                </span>
                <p className="font-bold text-sm text-slate-200">{st.label}</p>
                <p className="text-[11px] text-slate-200 font-bold">{st.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
