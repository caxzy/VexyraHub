import React from 'react';
import { Hammer, Wallet, Terminal, Lock } from 'lucide-react';

export default function MaintenancePage() {

  return (
    <div className="min-h-screen bg-[#050505] text-slate-400 font-mono flex flex-col items-center justify-center p-6">
      
      <div className="max-w-2xl w-full border border-white/5 bg-white/[0.02] rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
        
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C084FC] blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          
          <div className="w-16 h-16 bg-[#fff0] rounded-full flex items-center justify-center text-[#C084FC] mb-8 animate-pulse">
            <Hammer size={32} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
            UNDER MAINTENANCE
          </h1>
          
          <p className="text-sm md:text-base mb-12 leading-relaxed max-w-md">
        LyzernHub is currently under maintenance; we're learning the basics!
          </p>

          <div className="flex gap-4">
            <a 
              href="https://discord.com/invite/JVEWR9CGk5" 
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-white transition-all"
            >Our Discord Server!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}