import React from 'react';
import { SPECIALTIES, DOCTORS } from '@/lib/dataStore';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Stethoscope, CheckCircle2, Calendar, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

export async function generateStaticParams() {
  return SPECIALTIES.map((sp) => ({
    slug: sp.slug,
  }));
}

export default async function SpecialtyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const specialty = SPECIALTIES.find(s => s.slug === resolvedParams.slug);
  if (!specialty) return notFound();

  const deptDoctors = DOCTORS.filter(d => d.departmentSlug === specialty.slug);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-navy-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <Link href="/specialties" className="text-xs font-bold text-emerald-400 hover:underline">
              ← Back to All Specialties
            </Link>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{specialty.name}</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{specialty.description}</p>
            <div className="flex items-center gap-4 pt-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                {specialty.stats.surgeries} Successful Interventions
              </span>
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
                {specialty.stats.successRate} Clinical Success Rate
              </span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center max-w-xs w-full space-y-4">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">Immediate OPD Consultation</span>
            <p className="text-sm text-slate-200">Connect with senior faculty today with zero waiting time.</p>
            <Link
              href={`/appointments?dept=${specialty.slug}`}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 font-bold text-sm block shadow-lg hover:scale-105 transition"
            >
              Book Priority Slot
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Key Procedures */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Advanced Clinical Procedures & Treatments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialty.treatments.map((trt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-sm font-bold text-navy-800">
                  <span>{trt}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-xl text-navy-900">Why Choose This Institute at Aarogya?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Equipped with dedicated laminar airflow surgical suites, 4K endoscopic towers, and AI-assisted surgical planning software, our institute delivers superior patient recovery times with minimal hospital stays. Every treatment adheres strictly to international Joint Commission protocols.
            </p>
          </div>
        </div>

        {/* Right Col: Doctors in this Department */}
        <div className="space-y-6">
          <h3 className="font-extrabold text-xl text-navy-900">Senior Faculty Specialists</h3>
          {deptDoctors.length > 0 ? (
            deptDoctors.map((doc) => (
              <div key={doc.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="flex gap-4 items-center">
                  <img src={doc.photoUrl} alt={doc.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-bold text-base text-navy-900">{doc.name}</h4>
                    <span className="text-xs font-semibold text-emerald-600 block">{doc.designation}</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">{doc.experienceYr} Yrs Experience</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex gap-2">
                  <Link href={`/doctors/${doc.slug}`} className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-bold text-center">
                    Profile
                  </Link>
                  <Link href={`/appointments?doc=${doc.id}`} className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center">
                    Book Slot
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 text-center text-sm text-slate-500">
              Senior consultants available on rotation. Click below for instant OPD booking.
            </div>
          )}

          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-center space-y-3 shadow-xl">
            <UserCheck className="w-10 h-10 mx-auto" />
            <h4 className="font-extrabold text-lg">Need a Second Opinion?</h4>
            <p className="text-xs text-emerald-100 leading-relaxed">
              Upload your MRI, biopsy, or existing blood reports for multidisciplinary tumor board or senior faculty evaluation.
            </p>
            <Link href="/contact" className="inline-block px-6 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs shadow">
              Upload Reports Online
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
