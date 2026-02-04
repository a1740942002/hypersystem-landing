'use client';

import { Globe, Users, Zap } from 'lucide-react';
import { LOGO_URL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="py-20 px-8 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-4">
          <img src={LOGO_URL} alt="HyperSystem Logo" className="h-10 md:h-12 w-auto" />
          <span className="font-black text-slate-400 uppercase tracking-widest text-sm">
            © 2026 HYPER TECH GROUP
          </span>
        </div>
        <div className="flex gap-10 text-slate-300">
          <button
            className="hover:text-blue-600 transition-colors"
            aria-label="Language"
          >
            <Globe size={20} />
          </button>
          <button
            className="hover:text-blue-600 transition-colors"
            aria-label="Community"
          >
            <Users size={20} />
          </button>
          <button
            className="hover:text-blue-600 transition-colors"
            aria-label="Features"
          >
            <Zap size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
