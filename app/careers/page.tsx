'use client';

import React, { useState } from 'react';
import { Briefcase, Award, CheckCircle2, Stethoscope, HeartPulse, Send, X } from 'lucide-react';

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    { title: 'Consultant Interventional Cardiologist', dept: 'Cardiology Institute', exp: '8-12 Years Post DM/DNB', loc: 'Main Campus, Metropolis', type: 'Full-Time' },
    { title: 'Senior Robotic Surgery Fellow', dept: 'Modular Surgical OTs', exp: '3+ Years Post M.Ch', loc: 'Main Campus, Metropolis', type: 'Full-Time' },
    { title: 'ACLS Trained ICU Charge Nurse', dept: 'Level 1 Critical Care', exp: '4-6 Years B.Sc Nursing', loc: 'Trauma Deck', type: 'Rotational Shifts' },
    { title: 'Molecular Pathologist & Quality Officer', dept: 'NABL Diagnostics Lab', exp: '5+ Years Post MD Path', loc: 'Main Campus Lab', type: 'Full-Time' },
    { title: 'International Patient Relationship Manager', dept: 'Medical Tourism Desk', exp: '4+ Years Healthcare Admin', loc: 'Airport Concierge Hub', type: 'Full-Time' }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setActiveJob(null);
    }, 3000);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Join Our Healing Legacy</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Careers at Aarogya Hospital
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Work alongside internationally acclaimed medical pioneers in an ultra-modern robotic surgical environment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-2">
          <Award className="w-8 h-8 text-emerald-600" />
          <h3 className="font-extrabold text-navy-900 text-lg">Continuous Academic Research</h3>
          <p className="text-xs text-slate-600">Funded clinical trials, international journal publications, and surgical fellowship programs.</p>
        </div>
        <div className="p-6 rounded-3xl bg-teal-50 border border-teal-200 space-y-2">
          <HeartPulse className="w-8 h-8 text-teal-600" />
          <h3 className="font-extrabold text-navy-900 text-lg">Comprehensive Benefits</h3>
          <p className="text-xs text-slate-600">100% medical coverage for self and family, child tuition subsidy, and housing assistance.</p>
        </div>
        <div className="p-6 rounded-3xl bg-navy-50 border border-navy-200 space-y-2">
          <Stethoscope className="w-8 h-8 text-navy-800" />
          <h3 className="font-extrabold text-navy-900 text-lg">Cutting-Edge Infrastructure</h3>
          <p className="text-xs text-slate-600">Access to 4th Gen Da Vinci suites, AI diagnostic tools, and modular laminar OTs.</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-navy-900">Current Open Clinical & Admin Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-extrabold uppercase">
                  {job.dept}
                </span>
                <h3 className="font-extrabold text-xl text-navy-900 mt-2">{job.title}</h3>
                <p className="text-xs text-slate-500 mt-1">Eligibility: {job.exp} | Location: {job.loc} | {job.type}</p>
              </div>
              <button
                onClick={() => setActiveJob(job.title)}
                className="px-6 py-3 rounded-2xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shrink-0 shadow"
              >
                Apply Online Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeJob && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-200 shadow-2xl relative">
            <button onClick={() => setActiveJob(null)} className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>

            {!applied ? (
              <form onSubmit={handleApply} className="space-y-4">
                <h3 className="font-extrabold text-lg text-navy-900">Application: {activeJob}</h3>
                <p className="text-xs text-slate-500">Submit your ATS CV directly to the Chief Medical HR Officer.</p>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input type="text" required placeholder="Dr. / Mr. / Ms. Name" className="w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input type="email" required placeholder="name@example.com" className="w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Resume / CV Link (LinkedIn / Google Drive) *</label>
                  <input type="url" required placeholder="https://linkedin.com/in/..." className="w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>

                <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow">
                  Transmit Application to HR Portal
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-extrabold text-xl text-navy-900">Application Submitted!</h3>
                <p className="text-xs text-slate-600">Our HR Recruitment committee will review your credentials and contact you within 5 working days.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
