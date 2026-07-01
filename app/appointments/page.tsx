import React, { Suspense } from 'react';
import AppointmentWizard from '@/components/booking/AppointmentWizard';
import { Calendar, ShieldCheck, Clock } from 'lucide-react';

export const metadata = {
  title: 'Book Online Consultation | Aarogya Multi-Specialty Hospital',
  description: 'Schedule real-time OPD appointments across 20 super-specialty institutes with instant digital QR pass confirmation.'
};

export default function AppointmentsPage() {
  return (
    <div className="py-12 px-6 bg-slate-100 min-h-[85vh]">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Real-Time Appointment Booking
        </h1>
        <p className="text-slate-600 text-sm mt-2">
          Select your specialty institute, choose from our senior consultants, and generate your priority OPD QR ticket in seconds.
        </p>
      </div>

      <Suspense fallback={<div className="p-12 text-center text-navy-800 font-bold">Loading Booking Engine...</div>}>
        <AppointmentWizard />
      </Suspense>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs">
          <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
          <span><strong>Zero Waiting Time:</strong> Digital ticket holders receive direct OPD entry.</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs">
          <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
          <span><strong>Verified Specialists:</strong> Direct access to senior clinical chairs.</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs">
          <Calendar className="w-5 h-5 text-navy-800 shrink-0" />
          <span><strong>Flexible Rescheduling:</strong> Change or cancel slots online 24/7.</span>
        </div>
      </div>
    </div>
  );
}
