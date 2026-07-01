'use client';

import React, { useState } from 'react';
import { Bed, FileText, Download, CheckCircle2, ShieldAlert, Lock } from 'lucide-react';

export default function PatientServicesPage() {
  // Room Calculator State
  const [roomType, setRoomType] = useState('PREMIUM_SUITE');
  const [days, setDays] = useState<number>(3);

  const roomRates: Record<string, { name: string; rate: number; desc: string }> = {
    GENERAL_WARD: { name: 'General Air-Conditioned Ward (4 Bed Unit)', rate: 3500, desc: 'Shared motorized beds with individual curtain privacy and central oxygen lines.' },
    TWIN_SHARING: { name: 'Twin Sharing Executive Ward', rate: 6500, desc: 'Spacious 2-bed suite with separate attendant couch and motorized recliner.' },
    PRIVATE_ROOM: { name: 'Deluxe Private Patient Suite', rate: 11000, desc: 'Private room with dedicated attendant bed, smart TV, attached luxury bath, and work desk.' },
    PREMIUM_SUITE: { name: 'Presidential Quaternary Suite', rate: 18500, desc: 'Two-room suite with private lounge for visitors, dining area, butler service, and nurse call alert.' },
    ICU_BED: { name: 'Level 1 Modular ICU / CCU Bed', rate: 22000, desc: '1:1 dedicated nursing, continuous invasive hemodynamic vitals monitoring, and HEPA air filter.' }
  };

  // Lab Report Portal State
  const [uhid, setUhid] = useState('');
  const [mobile, setMobile] = useState('');
  const [reportFound, setReportFound] = useState(false);

  const handleFetchReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uhid || !mobile) return;
    setReportFound(true);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Inpatient & Online Services</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Patient Care & Interactive Portal
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Calculate estimated room stay tariffs or download your verified electronic pathology & radiology reports securely.
        </p>
      </div>

      {/* Grid: Room Calculator & Reports Portal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Room Tariff Calculator */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <Bed className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-extrabold text-navy-900">Interactive Room Tariff Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-2">Select Accommodation Tier</label>
              <div className="space-y-2">
                {Object.entries(roomRates).map(([key, val]) => (
                  <div
                    key={key}
                    onClick={() => setRoomType(key)}
                    className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                      roomType === key ? 'bg-emerald-50 border-emerald-500 shadow-sm' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm text-navy-900">{val.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{val.desc}</p>
                    </div>
                    <span className="font-extrabold text-emerald-700 text-sm shrink-0 ml-4">₹{val.rate}/Day</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-2">Estimated Duration of Stay: {days} Days</label>
              <input
                type="range"
                min="1"
                max="14"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 text-white flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Estimated Room Charge ({days} Days):</span>
              <strong className="text-2xl font-black text-emerald-400">₹{(roomRates[roomType].rate * days).toLocaleString()}</strong>
            </div>
            <span className="text-[10px] text-slate-300 max-w-xs text-right">
              *Includes routine nursing care, dietitian-formulated meals, and room utility charges.
            </span>
          </div>
        </div>

        {/* Secure Online Lab Reports Portal */}
        <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <FileText className="w-6 h-6 text-teal-600" />
            <h2 className="text-xl font-extrabold text-navy-900">Online Lab Reports Portal</h2>
          </div>

          <form onSubmit={handleFetchReport} className="space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your registered Hospital UHID / Bill Number and Mobile Number to view or download digital diagnostic reports.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Patient UHID / Bill ID *</label>
              <input
                type="text"
                required
                value={uhid}
                onChange={(e) => setUhid(e.target.value)}
                placeholder="e.g. AAR-2026-89102"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Registered Mobile Number *</label>
              <input
                type="tel"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" /> Authenticate & Access Reports
            </button>
          </form>

          {reportFound && (
            <div className="p-5 rounded-2xl bg-white border border-emerald-400 space-y-3 animate-in zoom-in duration-300 shadow-md">
              <div className="flex items-center justify-between text-xs font-bold text-navy-900">
                <span>CBC & Comprehensive Lipid Panel</span>
                <span className="text-emerald-600 font-extrabold">Verified NABL</span>
              </div>
              <p className="text-[11px] text-slate-500">Report Date: Today, 08:30 AM | Dr. Pathologist Signature Verified</p>
              <button
                onClick={() => alert("Simulated PDF Download: Report AAR-2026-89102.pdf downloaded successfully.")}
                className="w-full py-2.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-emerald-700" /> Download Official PDF Report
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
