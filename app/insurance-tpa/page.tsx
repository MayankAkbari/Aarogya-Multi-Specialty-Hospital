'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileText, HelpCircle, PhoneCall } from 'lucide-react';

export default function InsuranceTPAPage() {
  const [tpaQuery, setTpaQuery] = useState('');

  const tpaList = [
    'Star Health & Allied Insurance', 'HDFC ERGO General Insurance', 'ICICI Lombard General Insurance',
    'Care Health Insurance (Religare)', 'Niva Bupa Health Insurance', 'Bajaj Allianz General Insurance',
    'Medi Assist India TPA Pvt. Ltd.', 'MDIndia Health Insurance TPA', 'Paramount Health Services & TPA',
    'Vidal Health Insurance TPA', 'Heritage Health Insurance TPA', 'Genins India Insurance TPA',
    'New India Assurance Co. Ltd.', 'United India Insurance Co.', 'Oriental Insurance Company',
    'FHPL Health Insurance TPA', 'Aditya Birla Health Insurance', 'SBI General Insurance'
  ];

  const filtered = tpaList.filter(t => t.toLowerCase().includes(tpaQuery.toLowerCase()));

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Financial Transparency</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          100% Cashless Insurance & TPA Desk
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          We are directly paneled with 30+ leading insurance providers and Third Party Administrators (TPAs) across India.
        </p>
      </div>

      {/* 4-Step Claim Workflow */}
      <div className="mb-20">
        <h2 className="text-2xl font-extrabold text-navy-900 mb-8 text-center">4-Step Cashless Hospitalization Workflow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Pre-Authorization Request', desc: 'Present your insurance e-card and photo ID at our dedicated TPA Helpdesk 48 hours prior to planned admission.' },
            { step: '02', title: 'Medical Evaluation Submission', desc: 'Our insurance coordinators compile clinical reports and estimated surgical tariffs directly to the TPA portal.' },
            { step: '03', title: 'Instant Approval Sanction', desc: 'Upon TPA verification, initial credit sanction letter is issued. Emergency trauma cases receive 4-hour priority clear.' },
            { step: '04', title: 'Smooth Cashless Discharge', desc: 'Post procedure, final bills are forwarded digitally. You only pay for non-payable dietary or consumable items.' }
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 relative space-y-3">
              <span className="text-3xl font-black text-emerald-600/30 block">{s.step}</span>
              <h3 className="font-extrabold text-lg text-navy-900">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Searchable TPA Directory */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900">Empaneled Insurance Network</h2>
            <p className="text-xs text-slate-500 mt-1">Search to verify your insurance provider paneling status.</p>
          </div>
          <input
            type="text"
            value={tpaQuery}
            onChange={(e) => setTpaQuery(e.target.value)}
            placeholder="Search TPA or Insurance Name..."
            className="px-4 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-sm max-w-xs w-full focus:bg-white focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {filtered.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 flex items-center gap-3 text-xs font-bold text-navy-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center p-8 rounded-3xl bg-navy-900 text-white space-y-3">
        <h3 className="font-extrabold text-xl">Need Help with Corporate Policy or Reimbursement Claims?</h3>
        <p className="text-xs text-slate-300">Call our 24/7 Insurance & Corporate Billing Helpdesk directly.</p>
        <a href="tel:+918888810800" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow mt-2">
          <PhoneCall className="w-4 h-4" /> Dial TPA Coordinator: +91 88888 10800
        </a>
      </div>
    </div>
  );
}
