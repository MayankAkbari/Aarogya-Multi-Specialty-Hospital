'use client';

import React from 'react';
import { PhoneCall, Clock, Ambulance, ShieldAlert } from 'lucide-react';

export default function EmergencyTopBar() {
  return (
    <div className="bg-navy-900 text-white text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium text-emerald-400">
            <Clock className="w-3.5 h-3.5" />
            24/7 Level 1 Trauma & Emergency Care
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Ambulance className="w-3.5 h-3.5 text-teal-400" />
            Advanced ACLS Life Support Ambulances Ready
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+918888810800"
            className="flex items-center gap-1.5 font-bold text-rose-400 hover:text-rose-300 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
            Trauma Hotline: +91 88888 10800
          </a>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-medium">JCI & NABH Accredited Super-Specialty</span>
        </div>
      </div>
    </div>
  );
}
