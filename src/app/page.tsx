import React from 'react';
import { Hammer, Wallet, Terminal, Lock } from 'lucide-react';

export default function MaintenancePage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl w-full border border-white/[0.03] bg-[#0A0A0A] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#C084FC]/05 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#D053FF]/08 rounded-full flex items-center justify-center text-[#D053FF] mb-10 ring-1 ring-[#D053FF]/20 animate-pulse">
            <Hammer size={40} strokeWidth={1.5} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tighter leading-tight">
            UNDER MAINTENANCE
          </h1>
          
          <p className="text-sm md:text-base mb-14 leading-relaxed max-w-md text-slate-500 font-sans">
            Vexyra is currently under maintenance; we're learning the basics! 
            We will be back online shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="https://discord.gg/JVEWR9CGk5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 bg-[#111111] hover:bg-[#161616] border border-white/[0.03] rounded-xl text-xs text-white transition-all duration-300 font-sans group"
            >
              <span>Our Discord Server!</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700">
              <Terminal size={14} />
              <span>DEVBUILD:0.051</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}