'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <nav className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-widest text-white uppercase font-sans">
            Lyzern<span className="text-[#D053FF]">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.02]">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-black shadow-md' 
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}