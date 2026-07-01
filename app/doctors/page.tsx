'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DOCTORS, SPECIALTIES } from '@/lib/dataStore';
import { Search, Star, ShieldCheck, Calendar, Filter } from 'lucide-react';

export default function DoctorsIndexPage() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('all');

  const filtered = DOCTORS.filter(doc => {
    const spec = doc.specialty || doc.departmentSlug;
    const matchSearch = doc.name.toLowerCase().includes(search.toLowerCase()) || spec.toLowerCase().includes(search.toLowerCase()) || doc.qualification.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === 'all' || doc.departmentSlug === deptFilter;
    return matchSearch && matchDept;
  });

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Medical Faculty Directory</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Find Your Doctor & Book Real-Time Slots
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Our senior specialists are board-certified leaders in their respective clinical fields.
        </p>

        {/* Search & Filter Bar */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className="sm:col-span-2 relative">
            <Search className="w-5 h-5 absolute top-3.5 left-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search doctor by name, qualification, or procedure..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-sm font-bold text-navy-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="all">All Specialties (20)</option>
              {SPECIALTIES.map(sp => (
                <option key={sp.id} value={sp.slug}>{sp.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((doc) => (
          <div key={doc.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between overflow-hidden">
            <div>
              <div className="relative h-64 bg-slate-100">
                <img src={doc.photoUrl} alt={doc.name} className="w-full h-full object-cover object-top" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow">
                    <ShieldCheck className="w-3 h-3" /> Available Today
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-extrabold text-navy-900 shadow flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{doc.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-black text-emerald-600 uppercase tracking-wider block mb-1">
                  {doc.designation} ({doc.specialty || doc.departmentSlug})
                </span>
                <h2 className="font-extrabold text-xl text-navy-900">{doc.name}</h2>
                <p className="text-xs text-slate-500 font-semibold mt-1">{doc.qualification}</p>
                <p className="text-sm text-slate-600 mt-3 line-clamp-2">{doc.bio}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-xs font-bold text-slate-700">
                  <span>Exp: {doc.experienceYr} Yrs</span>
                  <span>Consult Fee: ₹{doc.consultFee}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex gap-3">
              <Link href={`/doctors/${doc.slug}`} className="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs text-center">
                View Profile
              </Link>
              <Link href={`/appointments?doc=${doc.id}`} className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs text-center shadow flex items-center justify-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Book Slot
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
