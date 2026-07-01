import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-slate-50">
      <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">404 Error</span>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mt-2">
        Page Not Found
      </h1>
      <p className="text-slate-600 text-sm sm:text-base max-w-md mt-3 leading-relaxed">
        We could not locate the clinical or administrative page you requested. It may have been moved or archived.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition"
        >
          <Home className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
