import React from 'react';
import { Award, ShieldCheck, Heart, Users, CheckCircle2, Sparkles, Building2, Stethoscope } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Aarogya Hospital | 25+ Years of Clinical Legacy',
  description: 'Learn about Aarogya Multi-Specialty Hospital’s mission, JCI/NABH accreditations, leadership team, and robotic healthcare innovations.'
};

export default function AboutPage() {
  const leadership = [
    { name: 'Dr. Ojaswi R. Innovation', role: 'Founder & Chairman', exp: '35+ Years in Quaternary Healthcare Administration', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80' },
    { name: 'Dr. Rajeshwar Sharma', role: 'Vice Chairman & Chief Medical Director', exp: 'Interventional Cardiology Pioneer', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Mrs. Shivansh Admin', role: 'Chief Executive Officer (CEO)', exp: 'Healthcare Systems Architect & Strategist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Our Legacy & Values
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Healing Humanity with Advanced Science & Compassion
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            For over 25 years, Aarogya Multi-Specialty Hospital has stood as a beacon of hope, pioneering robotic surgeries, organ transplants, and affordable healthcare.
          </p>
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-xl text-navy-900">Our Mission</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To provide ethical, transparent, and ultra-advanced medical treatment to patients from all walks of life without compromising on human dignity or clinical perfection.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-navy-900 text-white flex items-center justify-center">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-xl text-navy-900">Our Vision</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To become global leaders in super-specialty healthcare research, robotic minimally invasive interventions, and holistic preventive community wellness.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-xl text-navy-900">Quality Standards</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Accredited by JCI (Joint Commission International) and NABH Gold Seal, maintaining strict 0% hospital-acquired infection protocols in our laminar OTs.
          </p>
        </div>
      </div>

      {/* Leadership Board */}
      <div className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Medical Governance</span>
            <h2 className="text-3xl font-extrabold text-navy-900 mt-1">Visionary Leadership Board</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                <img src={leader.img} alt={leader.name} className="w-full h-72 object-cover object-top" />
                <div className="p-6 text-center space-y-1">
                  <h3 className="font-extrabold text-lg text-navy-900">{leader.name}</h3>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">{leader.role}</span>
                  <p className="text-xs text-slate-500 pt-2">{leader.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accreditations CTA */}
      <div className="py-16 max-w-7xl mx-auto px-6 text-center">
        <h3 className="font-black text-2xl text-navy-900 mb-6">Ready to Experience Trusted Clinical Care?</h3>
        <div className="flex justify-center gap-4">
          <Link href="/appointments" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-lg">
            Schedule Consultation Now
          </Link>
          <Link href="/specialties" className="px-8 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-sm">
            Explore 20 Specialties
          </Link>
        </div>
      </div>
    </div>
  );
}
