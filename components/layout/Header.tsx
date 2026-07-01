'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, Calendar, ShieldCheck, Heart } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Specialties', href: '/specialties' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Packages', href: '/health-packages' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* 1. FIXED TOP-LEFT HOSPITAL LOGO (OUTSIDE NAVIGATION CONTAINER) */}
      <div className="fixed top-2.5 sm:top-3 left-4 sm:left-8 z-50 transition-all duration-300">
        <Link 
          href="/" 
          className="flex items-center justify-center group focus:outline-none"
          title="Aarogya Multi-Specialty Hospital Homepage"
        >
          <img 
            src="/logo.png" 
            alt="Aarogya Multi-Specialty Hospital Logo" 
            className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg" 
          />
        </Link>
      </div>

      {/* 2. FLOATING LIQUID GLASS NAVIGATION PILL (CONTAINING ONLY LINKS) */}
      <nav className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 hidden xl:flex items-center gap-1 px-6 py-2.5 rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-navy-900/85 backdrop-blur-2xl border border-white/20 shadow-2xl py-2 scale-95' 
          : 'bg-navy-900/70 backdrop-blur-xl border border-white/15 shadow-glass'
      }`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'text-white bg-gradient-to-r from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* 3. TOP RIGHT ACTION PILL (BOOK APPOINTMENT) & MOBILE MENU TRIGGER */}
      <div className="fixed top-4 sm:top-5 right-4 sm:right-8 z-50 flex items-center gap-2 sm:gap-3">
        <Link
          href="/appointments"
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4 shrink-0 stroke-[2.2]" />
          <span>Book Appointment</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-full bg-navy-900 text-white shadow-glass focus:outline-none ml-1"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 4. MOBILE / TABLET OVERLAY NAVIGATION */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-950/90 backdrop-blur-2xl flex flex-col justify-center items-center px-6 xl:hidden animate-in fade-in duration-300">
          <div className="w-full max-w-sm space-y-3 text-center">
            <p className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-4">
              Navigation Menu
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 rounded-2xl text-lg font-bold transition-all ${
                  pathname === link.href
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/appointments"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment Now
              </Link>
              <Link
                href="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-2xl bg-white/10 text-slate-300 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Admin Portal Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
