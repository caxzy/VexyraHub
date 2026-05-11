import React from 'react';
import { Hammer, Wallet, Terminal, Lock } from 'lucide-react';

export default function MaintenancePage() {
  // Podaj tutaj swój prawdziwy adres Monero
  const moneroAddress = "4Ad65Ztn...twój_adres_monero";

  return (
    <div className="min-h-screen bg-[#050505] text-slate-400 font-mono flex flex-col items-center justify-center p-6">
      
      {/* GŁÓWNY PANEL */}
      <div className="max-w-2xl w-full border border-white/5 bg-white/[0.02] rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
        
        {/* Dekoracyjne światło w tle */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* IKONA STANU */}
          <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-8 animate-pulse">
            <Hammer size={32} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
            SYSTEM UNDER MAINTENANCE
          </h1>
          
          <p className="text-sm md:text-base mb-12 leading-relaxed max-w-md">
            Velo's Hub is currently being upgraded for better performance and privacy. 
            We will be back online shortly.
          </p>

          {/* SEKCOJA MONERO */}
          <div className="w-full bg-black/40 border border-white/5 rounded-2xl p-6 mb-8 text-left">
            <div className="flex items-center gap-2 text-orange-500 mb-4 text-xs font-bold uppercase tracking-widest">
              <Wallet size={16} />
              <span>Support Development (XMR)</span>
            </div>
            
            <p className="text-[10px] md:text-xs text-slate-500 mb-3 break-all font-mono bg-black/50 p-3 rounded-lg border border-white/5 select-all">
              {moneroAddress}
            </p>
            
            <div className="flex items-center gap-2 text-[10px] text-slate-600">
              <Lock size={12} />
              <span>Private & Untraceable Donations</span>
            </div>
          </div>

          {/* LINKI */}
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-white transition-all"
            >
            </a>
            <div className="flex items-center gap-2 px-4 py-2 text-xs text-slate-600">
              <Terminal size={14} /> 2026_BUILD_V1
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-[10px] text-slate-700 uppercase tracking-[0.2em]">
        Stay Anonymous. Stay Fast.
      </footer>
    </div>
  );
}