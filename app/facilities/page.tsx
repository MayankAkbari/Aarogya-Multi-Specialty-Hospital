import React from 'react';
import { Cpu, ShieldCheck, Activity, HeartPulse, Droplets, Bed, Scissors, FlaskConical } from 'lucide-react';

export const metadata = {
  title: 'Quaternary Medical Infrastructure & Facilities | Aarogya Hospital',
  description: 'Explore our 12 modular HEPA surgical suites, 4th Gen Da Vinci robotic tower, Level IV ICU monitoring, and NABL blood apheresis center.'
};

export default function FacilitiesPage() {
  const list = [
    { name: '4th Gen Da Vinci Xi Robotic Surgical Tower', desc: 'Allows surgeons to perform complex gastro, uro, and gynecology procedures with 10x 3D magnification and wristed robotic articulation.', img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80', tag: 'Sub-mm Precision' },
    { name: 'MAKO Robotic Arm Orthopedic Suite', desc: 'Pre-operative CT 3D modeling guides joint replacement cuts to the exact degree, enabling patients to walk within 4 hours post-op.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', tag: 'Same Day Rehab' },
    { name: 'Biplane Cath Lab & Hybrid Neuro OT', desc: 'Simultaneous imaging and endovascular intervention for acute stroke thrombolysis and complex aortic aneurysm stenting.', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', tag: 'Golden Hour' },
    { name: 'TrueBeam STx Linear Accelerator', desc: 'Ultra-fast stereotactic radiosurgery targeting tumors with sub-millimeter tracking while sparing adjacent healthy organ tissue.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', tag: 'RapidArc Oncology' },
    { name: '40-Bed Level 1 Critical Care & ECMO ICU', desc: 'Individual isolation cubicles with laminar air changes, continuous hemodiafiltration (CRRT), and bedside ECMO machines.', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', tag: '1:1 Nurse Ratio' },
    { name: 'Automated Pneumatic Lab & Apheresis Center', desc: 'High-throughput robotic sample transport tubes connecting OTs and ER directly to pathology analyzers within seconds.', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', tag: '24/7 NABL Lab' }
  ];

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Medical Technology</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Next-Generation Clinical Infrastructure
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          We invest continuously in breakthrough medical technologies that redefine recovery times and clinical outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {list.map((fac, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
            <div className="h-64 relative overflow-hidden bg-slate-100">
              <img src={fac.img} alt={fac.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-4 left-4 bg-navy-900/90 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow">
                {fac.tag}
              </div>
            </div>
            <div className="p-8">
              <h2 className="font-extrabold text-2xl text-navy-900 group-hover:text-emerald-700 transition">{fac.name}</h2>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">{fac.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
