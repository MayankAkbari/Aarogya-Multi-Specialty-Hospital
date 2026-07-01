'use client';

import React, { useState } from 'react';
import { DOCTORS } from '@/lib/dataStore';
import { UserPlus, Star, Clock, CheckCircle2 } from 'lucide-react';

export default function AdminDoctorsPage() {
  const [docs, setDocs] = useState(DOCTORS);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-navy-900">Clinical Faculty Management</h1>
          <p className="text-xs text-slate-500">View roster, toggle consultation hours, and manage OPD fee structures.</p>
        </div>
        <button
          onClick={() => alert("Simulated Modal: Add New Clinical Director functionality.")}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow flex items-center gap-2 shrink-0"
        >
          <UserPlus className="w-4 h-4" /> Add Specialist Roster
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc) => (
          <div key={doc.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="flex gap-4">
              <img src={doc.photoUrl} alt={doc.name} className="w-16 h-16 rounded-2xl object-cover" />
              <div>
                <h3 className="font-extrabold text-base text-navy-900">{doc.name}</h3>
                <span className="text-xs font-semibold text-emerald-600 block">{doc.designation}</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">{doc.qualification}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Consultation Fee:</span>
                <strong className="text-navy-900">₹{doc.consultFee}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Experience:</span>
                <strong className="text-navy-900">{doc.experienceYr} Yrs</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Active Slots:</span>
                <div className="flex flex-wrap gap-1">
                  {doc.availableSlots.map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> OPD Active
              </span>
              <button
                onClick={() => alert(`Roster schedule updated for ${doc.name}`)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-800 text-xs font-bold"
              >
                Edit Roster
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
