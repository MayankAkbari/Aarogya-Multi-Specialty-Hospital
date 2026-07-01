'use client';

import React, { useState } from 'react';
import { INITIAL_REVIEWS, saveLocalReview, Review } from '@/lib/dataStore';
import { Star, CheckCircle2, MessageSquarePlus, X } from 'lucide-react';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [patientName, setPatientName] = useState('');
  const [treatment, setTreatment] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !comment) return;

    const newRev = saveLocalReview({
      patientName,
      treatment: treatment || 'General Consultation',
      rating,
      comment,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });

    setReviews([newRev, ...reviews]);
    setModalOpen(false);
    setPatientName('');
    setComment('');
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Voice of Our Patients</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1">
            Verified Patient Testimonials
          </h1>
          <p className="text-slate-600 text-sm mt-1">Read honest feedback from over 50,000+ patients treated at Aarogya.</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg flex items-center gap-2 shrink-0"
        >
          <MessageSquarePlus className="w-4 h-4" /> Share Your Healing Experience
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic leading-relaxed">"{rev.comment}"</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-navy-900 flex items-center gap-1">
                  {rev.patientName} <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </h4>
                <span className="text-[11px] text-emerald-700 font-medium">{rev.treatment}</span>
              </div>
              <span className="text-[10px] text-slate-400">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-200 shadow-2xl relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-extrabold text-xl text-navy-900 mb-2">Submit Patient Review</h3>
            <p className="text-xs text-slate-500 mb-4">Note: All reviews undergo moderation by our Clinical Quality team before publication.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input type="text" required value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="e.g. Priya Nair" className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Treatment / Procedure Received</label>
                <input type="text" value={treatment} onChange={(e) => setTreatment(e.target.value)} placeholder="e.g. Total Knee Replacement" className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Overall Satisfaction Rating</label>
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value={5}>★★★★★ 5 Stars (Exceptional Care)</option>
                  <option value={4}>★★★★☆ 4 Stars (Very Good)</option>
                  <option value={3}>★★★☆☆ 3 Stars (Satisfactory)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Detailed Feedback *</label>
                <textarea rows={3} required value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Describe your experience with our doctors, nursing care, and cleanliness..." className="w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow">
                Publish Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
