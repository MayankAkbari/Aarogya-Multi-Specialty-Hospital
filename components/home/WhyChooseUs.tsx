'use client';

import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Clock, Cpu, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Internationally Acclaimed Specialists',
      desc: 'Our faculty comprises directors and chairs trained at premier medical institutes globally including Johns Hopkins, London, and Germany.',
      icon: Award
    },
    {
      title: 'Robotic & AI-Driven Technology',
      desc: 'Equipped with 4th Gen Da Vinci surgical towers, MAKO joint replacement arms, and biplane neuronavigation suites.',
      icon: Cpu
    },
    {
      title: 'Affordable Transparent Healthcare',
      desc: 'Fixed package pricing, cashless insurance tie-ups with 30+ TPAs, and zero hidden costs to ensure complete peace of mind.',
      icon: ShieldCheck
    },
    {
      title: '24/7 Rapid Emergency Response',
      desc: 'Dedicated ACLS ambulances and emergency room specialists trained in golden-hour stroke and trauma resuscitation.',
      icon: Clock
    },
    {
      title: 'Patient-Centric Healing Environment',
      desc: 'Designed with healing greenery, natural daylight, silent ICU monitoring, and compassionate nursing care.',
      icon: HeartHandshake
    },
    {
      title: 'Multidisciplinary Tumor Boards',
      desc: 'Complex clinical cases reviewed collaboratively by cardiologists, oncologists, surgeons, and radiologists.',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-slate-100/60 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Why Choose Aarogya</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Setting the Benchmark for Quaternary Clinical Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We fuse precision medical science with deeply empathetic human care, delivering world-class recovery outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((rsn) => {
            const Icon = rsn.icon;
            return (
              <div
                key={rsn.title}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-apple transition-all group relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-navy-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {rsn.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {rsn.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
