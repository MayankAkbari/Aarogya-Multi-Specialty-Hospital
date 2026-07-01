'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Award, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Brand Info & Accreditations */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1">
              <img src="/logo.png" alt="Aarogya Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight leading-none block">AAROGYA</span>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">Multi-Specialty Hospital</span>
            </div>
          </div>
          <p className="text-slate-200 font-medium text-sm leading-relaxed">
            Premier quaternary healthcare provider offering 20+ super-specialty institutes, modular robotic surgical OTs, and compassionate patient care under one roof.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 border border-navy-700 text-xs font-semibold text-emerald-400">
              <Award className="w-4 h-4" /> JCI Gold Seal
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 border border-navy-700 text-xs font-semibold text-teal-400">
              <ShieldCheck className="w-4 h-4" /> NABH Accredited
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Centers of Excellence
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href="/specialties/cardiology" className="hover:text-emerald-400 transition-colors">Cardiology & Cardiac Surgery</Link></li>
            <li><Link href="/specialties/neurology" className="hover:text-emerald-400 transition-colors">Neurosciences & Spine</Link></li>
            <li><Link href="/specialties/oncology" className="hover:text-emerald-400 transition-colors">Medical & Robotic Oncology</Link></li>
            <li><Link href="/specialties/orthopedics" className="hover:text-emerald-400 transition-colors">Robotic Joint Replacement</Link></li>
            <li><Link href="/specialties/pediatrics" className="hover:text-emerald-400 transition-colors">Pediatrics & Level IV NICU</Link></li>
            <li><Link href="/specialties" className="text-emerald-400 font-semibold hover:underline flex items-center gap-1 pt-1">View All 20 Specialties <ArrowRight className="w-3.5 h-3.5" /></Link></li>
          </ul>
        </div>

        {/* Col 3: Patient Resources */}
        <div>
          <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            Patient Portal & Guides
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href="/appointments" className="hover:text-emerald-400 transition-colors">Book Doctor Appointment</Link></li>
            <li><Link href="/health-packages" className="hover:text-emerald-400 transition-colors">Preventive Health Checkups</Link></li>
            <li><Link href="/insurance-tpa" className="hover:text-emerald-400 transition-colors">Cashless Insurance & TPA Partners</Link></li>
            <li><Link href="/patient-services" className="hover:text-emerald-400 transition-colors">Room Tariffs & Online Reports</Link></li>
            <li className="pt-2">
              <Link 
                href="/admin/login" 
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <ShieldCheck className="w-4 h-4" /> Sign In to Admin Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Emergency & Location */}
        <div>
          <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            24/7 Emergency Deck
          </h4>
          <div className="space-y-3.5 text-sm text-slate-300">
            <div className="p-3.5 rounded-2xl bg-navy-800/80 border border-navy-700 space-y-1">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">Trauma Hotline (24x7)</span>
              <a href="tel:+918888810800" className="font-extrabold text-lg text-white block hover:text-rose-400 transition-colors">+91 88888 10800</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-300">Healthcare Boulevard, Medical District, Metropolis - 400001, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-400 shrink-0" />
              <span className="text-slate-300">contact@aarogyahospital.com</span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-200 font-medium">
        <p>© {new Date().getFullYear()} Aarogya Multi-Specialty Hospital. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/about" className="hover:text-slate-200">Privacy Policy</Link>
          <Link href="/about" className="hover:text-slate-200">Patient Bill of Rights</Link>
          <Link href="/about" className="hover:text-slate-200">HIPAA Compliance</Link>
        </div>
      </div>
    </footer>
  );
}
