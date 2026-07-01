'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DOCTORS, Doctor } from '@/lib/dataStore';
import { Star, Calendar, Clock, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function DoctorShowcase() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const featuredDoctors = DOCTORS.slice(0, 6);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-2">
              World-Renowned Medical Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Meet Our Senior Clinical Directors
            </h2>
          </div>
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 font-extrabold text-sm text-emerald-600 hover:text-emerald-700 group shrink-0"
          >
            Search & Filter All Specialists
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={doc.photoUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Available Today
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-navy-900 shadow-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{doc.rating}</span>
                    <span className="text-slate-400 font-normal">({doc.reviewCount})</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-black text-emerald-600 uppercase tracking-wider block mb-1">
                    {doc.designation}
                  </span>
                  <h3 className="font-extrabold text-xl text-navy-900 group-hover:text-emerald-700 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    {doc.qualification}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">Experience: <strong className="text-navy-900">{doc.experienceYr} Yrs</strong></span>
                    <span className="font-medium text-slate-500">Fee: <strong className="text-navy-900">₹{doc.consultFee}</strong></span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <Link
                  href={`/doctors/${doc.slug}`}
                  className="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs text-center transition"
                >
                  View Profile
                </Link>
                <Link
                  href={`/appointments?doc=${doc.id}`}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs text-center shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Slot
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
