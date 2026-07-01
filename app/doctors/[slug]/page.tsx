import React from 'react';
import { DOCTORS } from '@/lib/dataStore';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star, ShieldCheck, Calendar, Clock, Award, CheckCircle2, PhoneCall } from 'lucide-react';

export async function generateStaticParams() {
  return DOCTORS.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = DOCTORS.find(d => d.slug === resolvedParams.slug);
  if (!doc) return notFound();

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        <Link href="/doctors" className="text-xs font-bold text-emerald-600 hover:underline mb-6 inline-block">
          ← Back to Faculty Directory
        </Link>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Col: Photo & Credentials */}
          <div className="lg:col-span-5 bg-navy-900 text-white p-8 flex flex-col justify-between">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-square mb-6 border-2 border-white/20">
                <img src={doc.photoUrl} alt={doc.name} className="w-full h-full object-cover object-top" />
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                {doc.designation}
              </span>
              <h1 className="text-3xl font-black mt-2">{doc.name}</h1>
              <p className="text-sm text-slate-100 font-semibold mt-1">{doc.qualification}</p>
              <p className="text-xs text-emerald-400 mt-2">Department: {doc.specialty || doc.departmentSlug}</p>

              <div className="mt-6 pt-6 border-t border-navy-800 space-y-3 text-xs text-slate-100 font-medium">
                <div className="flex justify-between">
                  <span>Clinical Experience:</span>
                  <strong className="text-white">{doc.experienceYr}+ Years</strong>
                </div>
                <div className="flex justify-between">
                  <span>Consultation Fee:</span>
                  <strong className="text-emerald-400 font-extrabold text-sm">₹{doc.consultFee}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Patient Satisfaction:</span>
                  <strong className="text-amber-400 font-bold">★ {doc.rating} ({doc.reviewCount} Reviews)</strong>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-800 text-center">
              <a href="tel:+918888810800" className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white">
                <PhoneCall className="w-4 h-4 text-emerald-400" /> Need urgent assistance? Call Secretary Desk
              </a>
            </div>
          </div>

          {/* Right Col: Biography, Expertise & Direct Booking */}
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-navy-900 mb-3">Clinical Biography</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{doc.bio}</p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-navy-900 uppercase tracking-wider mb-3">
                  Areas of Specialized Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Minimally Invasive Interventions', 'Complex Patient Case Evaluation', 'Robotic Precision Protocols', 'Academic Medical Research'].map((item, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-100 text-navy-800 text-xs font-bold border border-slate-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-navy-900 uppercase tracking-wider mb-3">
                  Available Today's Consult Slots
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {doc.availableSlots.map((slot, i) => (
                    <div key={i} className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs font-bold text-emerald-800">
                      <Clock className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-base">Instant Priority Booking</h4>
                  <p className="text-xs text-slate-300">Lock your slot now and receive digital entry QR token.</p>
                </div>
                <Link
                  href={`/appointments?doc=${doc.id}&dept=${doc.departmentSlug}`}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 font-extrabold text-xs shadow-lg shrink-0 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Schedule Consultation
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
