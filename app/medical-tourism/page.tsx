import React from 'react';
import { Globe, Plane, ShieldCheck, HeartHandshake, PhoneCall, CheckCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'International Medical Tourism Concierge | Aarogya Hospital',
  description: 'World-class quaternary medical care at 60-80% lower cost than USA/Europe. Dedicated airport pick-up, language translators, and visa assistance.'
};

export default function MedicalTourismPage() {
  const steps = [
    { step: '01', title: 'Free Medical Opinion & Cost Estimate', desc: 'Share your medical records online. Our multidisciplinary specialists review reports and provide detailed treatment plan & visa letter within 24 hours.' },
    { step: '02', title: 'Medical Visa Assistance & Flight Concierge', desc: 'Our dedicated embassy liaison team facilitates urgent medical visa letters and coordinates airport pick-up with ambulance or luxury vehicle.' },
    { step: '03', title: 'Dedicated International Guest Relationship Officer', desc: 'Personal coordinator assigned for translation, dietary preferences (Halal/Kosher/Continental), and local accommodation for attendant.' },
    { step: '04', title: 'Post-Discharge Recovery & Tele-Followup', desc: 'Complimentary fit-to-fly assessment and lifetime virtual video follow-ups once you return home.' }
  ];

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Globe className="w-3.5 h-3.5" /> Global Healthcare Destination
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              International Patient Concierge & Medical Travel
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              We welcome patients from over 45 countries, delivering internationally benchmarked robotic surgical care at 60-80% lower costs than US, UK, and Europe.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/appointments" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-lg">
                Request Second Medical Opinion
              </Link>
              <a href="tel:+918888810800" className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400" /> WhatsApp International Desk
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-900/80 p-8 rounded-3xl border border-white/20 space-y-4 shadow-2xl">
            <h3 className="font-extrabold text-xl text-emerald-400">Why Patients Fly to Aarogya</h3>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> JCI Accredited Modular Operating Theaters</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 0% Wait Time for Heart Transplant & Joint Replacements</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Multi-lingual Translators (Arabic, French, Russian, Swahili)</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Complimentary Airport Pickup & Guest House Booking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold text-navy-900 text-center mb-14">Your Seamless International Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 relative">
              <span className="text-4xl font-black text-emerald-600/20 block">{st.step}</span>
              <h3 className="font-extrabold text-lg text-navy-900">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
