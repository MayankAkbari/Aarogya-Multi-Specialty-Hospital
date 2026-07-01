'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Scissors, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TreatmentsPage() {
  const [query, setQuery] = useState('');

  const treatments = [
    { name: 'Robotic CABG Coronary Bypass', dept: 'Cardiology', stay: '4-5 Days', costEst: '₹2,50,000 - ₹3,80,000', tag: 'Robotic Precision' },
    { name: 'Total Knee Replacement (MAKO Robotic)', dept: 'Orthopedics', stay: '3 Days', costEst: '₹1,80,000 - ₹2,90,000', tag: 'Same-Day Walk' },
    { name: 'Awake Craniotomy Brain Tumor Resection', dept: 'Neurology', stay: '6 Days', costEst: '₹3,20,000 - ₹4,50,000', tag: 'Neuronavigation' },
    { name: 'TrueBeam STx Radiotherapy Session', dept: 'Oncology', stay: 'Day Care', costEst: '₹45,000 / cycle', tag: 'Sub-mm Targeting' },
    { name: 'Laparoscopic Nephrectomy & Renal Transplant', dept: 'Nephrology', stay: '7 Days', costEst: '₹4,000,000+', tag: 'Living Donor' },
    { name: 'Bariatric Gastric Sleeve Surgery', dept: 'Gastroenterology', stay: '2 Days', costEst: '₹2,10,000 - ₹3,00,000', tag: 'Metabolic Reset' },
    { name: 'LASIK & Bladeless Femto Eye Surgery', dept: 'Ophthalmology', stay: 'Day Care', costEst: '₹60,000 - ₹1,10,000', tag: '10-Min Procedure' },
    { name: 'Cochlear Implant & Pediatric Ear Surgery', dept: 'ENT', stay: '2 Days', costEst: '₹5,50,000 - ₹8,00,000', tag: 'Speech Therapy' }
  ];

  const filtered = treatments.filter(t => t.name.toLowerCase().includes(query.toLowerCase()) || t.dept.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Surgical & Clinical Index</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Procedures & Transparent Cost Estimator
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          All surgical interventions are conducted in laminar HEPA suites with cashless TPA insurance approvals.
        </p>

        <div className="pt-4 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 absolute top-3.5 left-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search procedure name or specialty (e.g. Bypass, Knee, LASIK)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((trt, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  {trt.dept}
                </span>
                <span className="text-[11px] font-extrabold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full">
                  {trt.tag}
                </span>
              </div>
              <h3 className="font-extrabold text-xl text-navy-900">{trt.name}</h3>
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Avg Hospital Stay:</span>
                  <strong className="text-navy-900 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-600" /> {trt.stay}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Package Cost Guide:</span>
                  <strong className="text-navy-900">{trt.costEst}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Cashless with 30+ TPAs</span>
              <Link href="/appointments" className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center gap-1.5 shadow">
                Schedule Consultation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
