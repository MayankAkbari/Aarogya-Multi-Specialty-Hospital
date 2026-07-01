'use client';

import React, { useEffect, useState } from 'react';
import { getLocalAppointments, AppointmentBooking } from '@/lib/dataStore';
import { Search, CheckCircle, XCircle, Calendar } from 'lucide-react';

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<AppointmentBooking[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setAppointments(getLocalAppointments());
  }, []);

  const handleStatusChange = (id: string, newStatus: AppointmentBooking['status']) => {
    const updated = appointments.map(a => a.id === id ? { ...a, status: newStatus } : a);
    setAppointments(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('aarogya_appointments', JSON.stringify(updated));
    }
  };

  const filtered = appointments.filter(a =>
    a.patientName.toLowerCase().includes(query.toLowerCase()) ||
    a.doctorName.toLowerCase().includes(query.toLowerCase()) ||
    a.ticketQrToken.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-navy-900">Appointments CRM Management</h1>
          <p className="text-xs text-slate-500">Review, confirm, reschedule, or cancel patient OPD slots.</p>
        </div>
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 absolute top-3 left-3.5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Patient or QR Token..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-black uppercase">
                <th className="py-3.5 px-4">QR Pass ID</th>
                <th className="py-3.5 px-4">Patient Info</th>
                <th className="py-3.5 px-4">Doctor & Dept</th>
                <th className="py-3.5 px-4">Date & Slot</th>
                <th className="py-3.5 px-4">Symptoms</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((app) => (
                <tr key={app.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-4 font-mono font-bold text-navy-900">{app.ticketQrToken}</td>
                  <td className="py-4 px-4">
                    <strong className="text-navy-900 block">{app.patientName}</strong>
                    <span className="text-[11px] text-slate-400">{app.patientPhone} | {app.age}Y</span>
                  </td>
                  <td className="py-4 px-4 font-semibold text-emerald-700">{app.doctorName}</td>
                  <td className="py-4 px-4">{app.date} | {app.slotTime}</td>
                  <td className="py-4 px-4 text-slate-500 max-w-xs truncate">{app.symptoms || 'Routine Checkup'}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                      app.status === 'CONFIRMED' ? 'bg-emerald-100 text-emerald-800' :
                      app.status === 'CANCELLED' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right space-x-2">
                    {app.status !== 'CONFIRMED' && (
                      <button
                        onClick={() => handleStatusChange(app.id, 'CONFIRMED')}
                        className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold"
                        title="Confirm Booking"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    {app.status !== 'CANCELLED' && (
                      <button
                        onClick={() => handleStatusChange(app.id, 'CANCELLED')}
                        className="p-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold"
                        title="Cancel Booking"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
