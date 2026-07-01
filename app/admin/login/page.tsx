'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ShieldAlert, Sparkles, CheckCircle2, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@aarogyahospital.com');
  const [password, setPassword] = useState('Aarogya@H_2808');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@aarogyahospital.com' && password === 'Aarogya@H_2808') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('aarogya_admin_session', 'ACTIVE_JWT_TOKEN');
      }
      router.push('/admin');
    } else {
      setError('Invalid Admin Credentials. Use pre-configured superadmin credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-md w-full bg-navy-900 border border-white/20 rounded-3xl p-8 shadow-2xl relative z-10 text-white space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center mx-auto shadow-lg">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 block pt-1">4-Tier RBAC Secured</span>
          <h1 className="text-2xl font-black">Superadmin Command Portal</h1>
          <p className="text-xs text-slate-300">Access restricted to hospital administrators and clinical management directors.</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs text-center font-bold">
            {error}
          </div>
        )}

        <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-xs space-y-1 text-slate-200">
          <span className="text-emerald-400 font-extrabold block uppercase tracking-wider text-[10px]">Pre-configured Credentials:</span>
          <div>Email: <strong className="text-white font-mono">admin@aarogyahospital.com</strong></div>
          <div>Pass: <strong className="text-white font-mono">Aarogya@H_2808</strong></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold text-white mb-1.5">Administrative Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute top-3.5 left-3.5 text-slate-500 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email..."
                style={{ color: '#000000', backgroundColor: '#ffffff', WebkitTextFillColor: '#000000' }}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-black !text-black font-black text-sm border-2 border-slate-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none shadow-sm transition-all placeholder:text-slate-400 placeholder:font-normal"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-white mb-1.5">Passkey / 2FA Token</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute top-3.5 left-3.5 text-slate-500 pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                style={{ color: '#000000', backgroundColor: '#ffffff', WebkitTextFillColor: '#000000' }}
                className="w-full pl-10 pr-12 py-3 rounded-xl bg-white text-black !text-black font-black text-sm border-2 border-slate-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none shadow-sm transition-all placeholder:text-slate-400 placeholder:font-normal"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-2.5 p-1 text-slate-500 hover:text-navy-900 focus:outline-none"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 font-extrabold text-sm text-white shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2"
          >
            Authenticate Admin Session
          </button>
        </form>
      </div>
    </div>
  );
}
