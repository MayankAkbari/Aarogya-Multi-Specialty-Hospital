'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope, Bed, Ambulance, Activity, Scissors, FlaskConical, ArrowRight } from 'lucide-react';

export default function QuickServicesGrid() {
  const services = [
    {
      title: 'Outpatient (OPD)',
      desc: 'Instant specialized consultations with zero waiting time across 20 clinical institutes.',
      icon: Stethoscope,
      href: '/appointments',
      color: 'from-blue-500 to-navy-600',
      badge: 'Immediate Slots'
    },
    {
      title: 'Inpatient Care (IPD)',
      desc: 'Luxurious private suites, twin sharing & general suites equipped with smart vitals monitoring.',
      icon: Bed,
      href: '/patient-services',
      color: 'from-emerald-500 to-teal-600',
      badge: '500+ Beds'
    },
    {
      title: '24/7 Level 1 Emergency',
      desc: 'Golden-hour trauma resuscitation, acute stroke thrombolysis & cardiac cath intervention.',
      icon: Ambulance,
      href: 'tel:+918888810800',
      color: 'from-rose-500 to-red-600',
      badge: 'Hotline 10800'
    },
    {
      title: 'Critical Care & ICU',
      desc: '1:1 nurse ratio, continuous hemodynamic monitoring, CRRT & ECMO life support units.',
      icon: Activity,
      href: '/facilities',
      color: 'from-amber-500 to-orange-600',
      badge: '40 Modular ICU Beds'
    },
    {
      title: 'Modular Robotic OTs',
      desc: 'Laminar airflow suites featuring Da Vinci surgical towers and MAKO orthopedic arms.',
      icon: Scissors,
      href: '/treatments',
      color: 'from-purple-500 to-indigo-600',
      badge: 'Sub-mm Precision'
    },
    {
      title: '24/7 Diagnostics & Labs',
      desc: '3T MRI, 128-Slice CT, automated molecular pathology & NABL accredited blood bank.',
      icon: FlaskConical,
      href: '/health-packages',
      color: 'from-teal-500 to-cyan-600',
      badge: 'Home Sample Ready'
    }
  ];

  return (
    <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => {
          const IconComponent = srv.icon;
          return (
            <Link
              key={srv.title}
              href={srv.href}
              className="liquid-glass-card p-6 rounded-3xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${srv.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-bold border border-navy-100">
                    {srv.badge}
                  </span>
                </div>
                <h3 className="font-extrabold text-xl text-navy-900 group-hover:text-emerald-700 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                <span>Explore Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
