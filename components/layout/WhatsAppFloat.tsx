'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Stethoscope, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(`Hello Aarogya Hospital AI Concierge, my inquiry is: "${message}"`);
    window.open(`https://wa.me/918888810800?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-navy-800 to-emerald-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Aarogya AI Concierge</h4>
                <span className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online 24/7 Support
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-slate-50 text-sm max-h-72 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 text-slate-700 shadow-sm">
              👋 Welcome to Aarogya Multi-Specialty Hospital! How can we assist you today?
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 text-slate-700 shadow-sm space-y-2">
              <p className="font-medium text-xs text-navy-800 uppercase tracking-wider">Quick Actions:</p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/appointments" onClick={() => setIsOpen(false)} className="p-2 text-center rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-xs hover:bg-emerald-100 transition">
                  Book OPD Appointment
                </Link>
                <Link href="/health-packages" onClick={() => setIsOpen(false)} className="p-2 text-center rounded-xl bg-teal-50 text-teal-700 font-semibold text-xs hover:bg-teal-100 transition">
                  Health Packages
                </Link>
                <a href="tel:+918888810800" className="p-2 text-center rounded-xl bg-rose-50 text-rose-700 font-semibold text-xs hover:bg-rose-100 transition col-span-2 flex items-center justify-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5" /> Call Trauma Hotline
                </a>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question or symptom..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition shrink-0 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/40"
        aria-label="Toggle AI Concierge Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
