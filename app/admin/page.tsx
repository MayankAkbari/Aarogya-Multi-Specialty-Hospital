'use client';

import React, { useEffect, useState } from 'react';
import { getLocalAppointments, AppointmentBooking } from '@/lib/dataStore';
import { Calendar, Users, Activity, DollarSign, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [appointments, setAppointments] = useState<AppointmentBooking[]>([]);

  useEffect(() => {
    setAppointments(getLocalAppointments());
  }, []);

  const totalRevenue = appointments.reduce((acc, curr) => acc + 1800, 425000);
  const confirmedCount = appointments.filter(a => a.status === 'CONFIRMED').length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">Executive Clinical Dashboard</h1>
        <p className="text-xs text-slate-500 mt-1">Real-time monitoring of OPD traffic, Level 1 Emergency trauma alerts, and revenue metrics.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-navy-900 block">{appointments.length}</span>
          <span className="text-xs font-bold text-slate-500">Total OPD Bookings</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <CheckCircle className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-navy-900 block">{confirmedCount}</span>
          <span className="text-xs font-bold text-slate-500">Confirmed & Ticket Issued</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-navy-900 block">40 / 40</span>
          <span className="text-xs font-bold text-slate-500">ICU Bed Occupancy (100%)</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-navy-900 block">₹{(totalRevenue / 100000).toFixed(2)}L</span>
          <span className="text-xs font-bold text-slate-500">Estimated Today's Revenue</span>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-navy-900">Recent OPD Bookings Pipeline</h2>
          <Link href="/admin/appointments" className="text-xs font-bold text-emerald-600 hover:underline">
            Manage All Bookings →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase">
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Date & Slot</th>
                <th className="py-3 px-4">Token QR ID</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.slice(0, 5).map((app) => (
                <tr key={app.id} className="border-b border-slate-100 hover:bg-slate-50 font-medium">
                  <td className="py-3.5 px-4 font-bold text-navy-900">{app.patientName} ({app.age}Y, {app.gender})</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-semibold">{app.doctorName}</td>
                  <td className="py-3.5 px-4">{app.date} at {app.slotTime}</td>
                  <td className="py-3.5 px-4 font-mono">{app.ticketQrToken}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                      app.status === 'CONFIRMED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {app.status}
                    </span>
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
