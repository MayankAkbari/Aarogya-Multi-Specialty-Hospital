'use client';

import React, { useState } from 'react';
import { INITIAL_REVIEWS } from '@/lib/dataStore';
import { Star, Play, Quote, CheckCircle2, X } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialSection() {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-2">
              Verified Patient Recovery Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Healing Lives with Trust & Excellence
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setVideoModal(true)}
              className="px-5 py-2.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs flex items-center gap-2 hover:bg-rose-100 transition shadow-sm"
            >
              <Play className="w-4 h-4 fill-rose-600" /> Watch Video Recovery Stories
            </button>
            <Link
              href="/reviews"
              className="px-5 py-2.5 rounded-2xl bg-navy-900 text-white font-bold text-xs hover:bg-navy-800 transition shadow-sm"
            >
              Submit Your Story
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INITIAL_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 pointer-events-none" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-navy-900 flex items-center gap-1">
                    {rev.patientName}
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </h4>
                  <span className="text-[11px] text-emerald-700 font-semibold">{rev.treatment}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal Simulation */}
        {videoModal && (
          <div className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-navy-900 rounded-3xl max-w-2xl w-full p-6 border border-white/20 shadow-2xl relative text-white">
              <button
                onClick={() => setVideoModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-xl mb-2 flex items-center gap-2">
                <Play className="w-5 h-5 text-rose-500 fill-rose-500" />
                Featured Video Testimonial
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Capt. Rakesh Malhotra recounts his post-op recovery after Robotic CABG bypass surgery.
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-950 border border-navy-800 flex items-center justify-center group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Video story thumbnail"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
