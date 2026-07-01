'use client';

import React, { useState, useEffect } from 'react';
import { SPECIALTIES, DOCTORS, saveLocalAppointment, AppointmentBooking } from '@/lib/dataStore';
import { useSearchParams } from 'next/navigation';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, CheckCircle, Sparkles, ArrowRight, ArrowLeft, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppointmentWizard() {
  const searchParams = useSearchParams();
  const docParam = searchParams?.get('doc');
  const deptParam = searchParams?.get('dept');

  const [step, setStep] = useState<number>(1);

  // Form state
  const [selectedDeptSlug, setSelectedDeptSlug] = useState<string>(deptParam || 'cardiology');
  const [selectedDocId, setSelectedDocId] = useState<string>(docParam || 'doc-1');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [slotTime, setSlotTime] = useState<string>('10:15 AM');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [age, setAge] = useState<number>(35);
  const [gender, setGender] = useState<string>('Male');
  const [symptoms, setSymptoms] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<string>('HOSPITAL_COUNTER');

  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  // Update doc if dept changes
  const availableDoctors = DOCTORS.filter(d => d.departmentSlug === selectedDeptSlug);
  const currentDoc = DOCTORS.find(d => d.id === selectedDocId) || availableDoctors[0] || DOCTORS[0];

  useEffect(() => {
    if (docParam) {
      const found = DOCTORS.find(d => d.id === docParam);
      if (found) {
        setSelectedDocId(found.id);
        setSelectedDeptSlug(found.departmentSlug);
      }
    }
  }, [docParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const newBooking = saveLocalAppointment({
      patientName,
      patientPhone,
      patientEmail,
      age,
      gender,
      symptoms,
      departmentSlug: selectedDeptSlug,
      doctorId: currentDoc.id,
      doctorName: currentDoc.name,
      date,
      slotTime,
      status: 'CONFIRMED'
    });

    setConfirmedBooking(newBooking);
    setStep(4);
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto my-8">
      
      {/* Progress Header */}
      <div className="bg-navy-900 text-white p-6 sm:p-8 flex items-center justify-between border-b border-navy-800">
        <div>
          <span className="text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Instant Digital Booking
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Schedule Your OPD Consultation
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step === s
                  ? 'bg-emerald-600 text-white shadow-lg scale-110'
                  : step > s
                  ? 'bg-emerald-800 text-emerald-300'
                  : 'bg-navy-800 text-slate-500'
              }`}
            >
              {step > s ? '✓' : s}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-3">
                1. Select Specialty Institute
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-60 overflow-y-auto p-1">
                {SPECIALTIES.map((sp) => (
                  <button
                    key={sp.id}
                    type="button"
                    onClick={() => {
                      setSelectedDeptSlug(sp.slug);
                      const docs = DOCTORS.filter(d => d.departmentSlug === sp.slug);
                      if (docs.length > 0) setSelectedDocId(docs[0].id);
                    }}
                    className={`p-3.5 rounded-2xl border text-left text-xs font-bold transition-all ${
                      selectedDeptSlug === sp.slug
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {sp.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-3">
                2. Choose Senior Specialist
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-4 transition-all ${
                      selectedDocId === doc.id
                        ? 'bg-navy-900 border-navy-900 text-white shadow-md'
                        : 'bg-white border-slate-200 hover:border-emerald-500 text-navy-900'
                    }`}
                  >
                    <img src={doc.photoUrl} alt={doc.name} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">{doc.name}</h4>
                      <p className={`text-[11px] ${selectedDocId === doc.id ? 'text-emerald-300' : 'text-slate-500'}`}>
                        {doc.qualification}
                      </p>
                      <span className="text-[10px] font-extrabold text-amber-500 mt-1 block">
                        ★ {doc.rating} | Fee: ₹{doc.consultFee}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md flex items-center gap-2 hover:scale-105 transition"
              >
                Continue to Date & Slot <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-900 font-medium">
              <Stethoscope className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Consulting with <strong>{currentDoc.name}</strong> ({currentDoc.designation})</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-2">
                  Select Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-300 font-bold text-sm text-navy-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-2">
                  Available 15-Minute Slots
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {currentDoc.availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSlotTime(slot)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                        slotTime === slot
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-emerald-500'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md flex items-center gap-2 hover:scale-105 transition"
              >
                Proceed to Patient Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-navy-900 text-white flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block">Appointment Summary:</span>
                <span className="font-extrabold text-emerald-400">{currentDoc.name}</span> | {date} at {slotTime}
              </div>
              <div className="text-right">
                <span className="text-slate-400 block">Consultation Fee:</span>
                <span className="font-extrabold text-base text-white">₹{currentDoc.consultFee}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Patient Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute top-3.5 left-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Mobile Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute top-3.5 left-3.5 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (For PDF QR Ticket)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute top-3.5 left-3.5 text-slate-400" />
                  <input
                    type="email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full px-3 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brief Symptoms / Clinical Notes (Optional)</label>
              <textarea
                rows={2}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe any discomfort, existing reports, or previous medications..."
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-2">Payment Preference</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`p-3.5 rounded-2xl border cursor-pointer flex items-center gap-2 text-xs font-bold transition ${
                  paymentMode === 'HOSPITAL_COUNTER' ? 'bg-emerald-50 border-emerald-600 text-emerald-900' : 'bg-slate-50 border-slate-200'
                }`}>
                  <input type="radio" name="pay" checked={paymentMode === 'HOSPITAL_COUNTER'} onChange={() => setPaymentMode('HOSPITAL_COUNTER')} />
                  Pay at Hospital OPD Counter
                </label>
                <label className={`p-3.5 rounded-2xl border cursor-pointer flex items-center gap-2 text-xs font-bold transition ${
                  paymentMode === 'ONLINE_UPI' ? 'bg-emerald-50 border-emerald-600 text-emerald-900' : 'bg-slate-50 border-slate-200'
                }`}>
                  <input type="radio" name="pay" checked={paymentMode === 'ONLINE_UPI'} onChange={() => setPaymentMode('ONLINE_UPI')} />
                  Online UPI / Cards (Instant Slot Lock)
                </label>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm shadow-xl hover:scale-105 transition flex items-center gap-2"
              >
                Confirm & Generate Digital QR Ticket <CheckCircle className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {step === 4 && confirmedBooking && (
          <div className="text-center py-6 space-y-6 animate-in zoom-in duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-12 h-12" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-widest">
                Appointment Confirmed
              </span>
              <h3 className="font-black text-3xl text-navy-900 mt-2">
                Thank You, {confirmedBooking.patientName}!
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Your consultation slot has been reserved. A confirmation SMS & WhatsApp token has been dispatched to <strong className="text-navy-900">{confirmedBooking.patientPhone}</strong>.
              </p>
            </div>

            {/* Digital QR Boarding Pass Card */}
            <div className="max-w-md mx-auto rounded-3xl bg-gradient-to-b from-navy-900 to-navy-950 text-white p-6 shadow-2xl border-2 border-emerald-500/40 text-left space-y-4">
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <div>
                  <span className="text-[10px] text-emerald-400 font-extrabold uppercase">Aarogya Digital Pass</span>
                  <h4 className="font-black text-lg">{confirmedBooking.doctorName}</h4>
                </div>
                <div className="p-2 rounded-xl bg-white text-navy-900">
                  <QrCode className="w-10 h-10" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Date & Slot:</span>
                  <strong className="text-emerald-300">{confirmedBooking.date} | {confirmedBooking.slotTime}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Ticket Token:</span>
                  <strong className="text-white font-mono">{confirmedBooking.ticketQrToken}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Patient Info:</span>
                  <strong className="text-white">{confirmedBooking.patientName} ({confirmedBooking.age}Y, {confirmedBooking.gender})</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Reporting Gate:</span>
                  <strong className="text-teal-400">Main Campus, Reception Deck A</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 rounded-2xl bg-navy-900 text-white font-bold text-xs shadow-md"
              >
                Print / Save QR Pass
              </button>
              <button
                onClick={() => { setStep(1); setConfirmedBooking(null); }}
                className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs shadow-md"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
