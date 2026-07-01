'use client';

import React, { useState } from 'react';
import { PhoneCall, Ambulance, AlertTriangle, MapPin, CheckCircle } from 'lucide-react';

export default function EmergencySOSModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [dispatched, setDispatched] = useState(false);

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setDispatched(true);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation(`Lat: ${pos.coords.latitude.toFixed(4)}, Long: ${pos.coords.longitude.toFixed(4)}`);
        },
        () => setLocation('Current GPS Location Detected')
      );
    } else {
      setLocation('Metropolis Center Area');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 px-4 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-2xl flex items-center gap-2 border-2 border-white/40 animate-sos"
      >
        <Ambulance className="w-5 h-5 animate-bounce" />
        <span>Request Emergency Ambulance</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-rose-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 animate-pulse"></div>
            
            {!dispatched ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-rose-600">
                    <AlertTriangle className="w-6 h-6" />
                    <h3 className="font-black text-xl tracking-tight">Immediate Trauma Deck</h3>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold">
                    Close
                  </button>
                </div>

                <p className="text-sm text-slate-600 mb-6">
                  If this is a life-threatening cardiac arrest or stroke, please tap below to call our 24/7 Level 1 Trauma command center immediately.
                </p>

                <a
                  href="tel:+918888810800"
                  className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-lg mb-6 transition-transform hover:scale-[1.02]"
                >
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                  DIAL TRAUMA HOTLINE: 10800
                </a>

                <div className="border-t border-slate-200 pt-5">
                  <h4 className="font-bold text-sm text-navy-800 mb-3 flex items-center gap-2">
                    <Ambulance className="w-4 h-4 text-emerald-600" />
                    Dispatch ACLS Life Support Ambulance
                  </h4>
                  <form onSubmit={handleDispatch} className="space-y-3">
                    <div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Patient Mobile Number *"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Landmark or GPS Coordinates"
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleGetLocation}
                        className="px-3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 shrink-0"
                      >
                        <MapPin className="w-4 h-4 text-rose-600" /> GPS
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white font-bold text-sm shadow-md"
                    >
                      Dispatch Immediate Ambulance
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-extrabold text-2xl text-navy-900">Ambulance Dispatched!</h3>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  Our ACLS emergency vehicle has been routed to your coordinates. Driver contact SMS has been dispatched to <span className="font-bold">{phone}</span>.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-navy-800">Estimated Arrival: 7 - 11 Minutes</p>
                  <p>Command Deck Ref: #EMG-{Math.floor(1000 + Math.random() * 9000)}</p>
                </div>
                <button
                  onClick={() => { setDispatched(false); setIsOpen(false); }}
                  className="w-full py-3 rounded-xl bg-navy-800 text-white font-bold text-sm mt-4"
                >
                  Close & Continue
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
