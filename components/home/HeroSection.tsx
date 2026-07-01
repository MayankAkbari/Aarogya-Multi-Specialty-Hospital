'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, PhoneCall, ShieldCheck, HeartPulse, Sparkles, ArrowRight, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-950 text-white pt-12 pb-24 lg:py-28">
      {/* Background Glow & Mesh */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Emotional Message & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              World-Class Quaternary Healthcare
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Advanced Medical Excellence. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Compassionate Healing.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Aarogya Multi-Specialty Hospital combines 25+ years of trusted medical legacy with ultra-modern robotic surgical suites, Level 1 24/7 trauma resuscitation, and internationally acclaimed super-specialists under one roof.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/appointments"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base shadow-premium flex items-center justify-center gap-3 transition-transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book Instant Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+918888810800"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-base flex items-center justify-center gap-3 transition-all"
              >
                <PhoneCall className="w-5 h-5 text-rose-400 animate-pulse" />
                24/7 Emergency: 10800
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-extrabold text-2xl sm:text-3xl text-white">50,000+</span>
                <span className="text-xs text-emerald-400 font-semibold uppercase">Happy Patients</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-l border-white/10 pl-4">
                <span className="font-extrabold text-2xl sm:text-3xl text-white">150+</span>
                <span className="text-xs text-teal-400 font-semibold uppercase">Senior Specialists</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-l border-white/10 pl-4">
                <span className="font-extrabold text-2xl sm:text-3xl text-white">99.4%</span>
                <span className="text-xs text-sky-400 font-semibold uppercase">Surgical Success</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hospital Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-navy-800">
              <img
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80"
                alt="Aarogya Robotic Surgery Suite"
                className="w-full h-80 sm:h-96 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-xl text-navy-900 border border-white/40 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold text-sm text-emerald-700">
                    <HeartPulse className="w-4 h-4 text-emerald-600 animate-pulse" />
                    Live OPD Status: Open
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                    Zero Wait Time
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Connect instantly with our multidisciplinary specialists. Walk-ins welcome or skip the line with digital QR booking.
                </p>
              </div>
            </div>

            {/* Floating Glass Badge */}
            <div className="absolute -top-6 -right-4 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-xl border border-white/20 shadow-2xl animate-bounce">
              <Activity className="w-8 h-8 text-emerald-400" />
              <div>
                <p className="text-xs font-bold text-white">MAKO & Da Vinci</p>
                <p className="text-[10px] text-slate-300">Robotic Suites Enabled</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
