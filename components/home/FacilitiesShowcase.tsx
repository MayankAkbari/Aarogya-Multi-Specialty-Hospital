'use client';

import React from 'react';
import { Cpu, ShieldPlus, Activity, HeartPulse, Droplets, CheckCircle2 } from 'lucide-react';

export default function FacilitiesShowcase() {
  const facilities = [
    {
      title: 'Modular Laminar Airflow OTs',
      desc: '12 dedicated operating theaters equipped with HEPA filters ensuring zero surgical site infection rates.',
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
      tag: 'Robotic Ready'
    },
    {
      title: 'Level IV Neonatal & PICU',
      desc: 'Specialized ventilation and continuous hemodynamic monitoring units saving pre-term infants under 600g.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      tag: 'Advanced Life Support'
    },
    {
      title: '3T MRI & 128-Slice CT Lab',
      desc: 'Rapid AI-assisted neuro and cardiac imaging delivering sub-millimeter precision reports within 45 minutes.',
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
      tag: '24/7 Operational'
    },
    {
      title: 'NABL Accredited Blood Bank & Component Lab',
      desc: 'Single donor platelet apheresis and automated cross-matching available round the clock for emergency trauma.',
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      tag: 'Apheresis Enabled'
    }
  ];

  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Medical Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            World-Class Quaternary Medical Technology Suite
          </h2>
          <p className="text-slate-200 font-medium text-sm sm:text-base">
            Equipped with world-class diagnostics, automated laboratories, and ultra-sterile modular surgical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.title}
              className="group rounded-3xl overflow-hidden bg-navy-900 border border-navy-800 shadow-xl flex flex-col sm:flex-row hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="sm:w-2/5 h-56 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src={fac.img}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-emerald-400 border border-white/10">
                  {fac.tag}
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-white group-hover:text-emerald-400 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-slate-200 text-sm mt-3 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-2 text-xs text-slate-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>JCI Infection Shield Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
