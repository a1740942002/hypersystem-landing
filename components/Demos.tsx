
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Language } from '../types';

interface DemoProps {
  lang: Language;
}

const DemoOverlay: React.FC<{ label: string }> = ({ label }) => (
  <div className="absolute top-6 left-6 z-20">
    <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full flex items-center gap-2.5 shadow-xl border border-white/20">
      <motion.div 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ repeat: Infinity, duration: 1.5 }} 
        className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255, 255, 255, 0.8)]" 
      />
      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
    </div>
  </div>
);

/**
 * Enhanced Image component that uses object-fit: contain with a black background
 * to create a professional "letterbox" full-screen frame effect.
 */
const SmartDemoImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black">
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setLoaded(true)}
        style={{ imageRendering: 'auto' }}
        className={`transition-all duration-1000 w-full h-full object-contain ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      />
    </div>
  );
};

export const TournamentDemo: React.FC<DemoProps> = ({ lang }) => {
  const t = translations[lang].demos;
  return (
    <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <SmartDemoImage 
        src="https://lh3.googleusercontent.com/d/116RCGHkq_0Lx-wZIVgirY0ZqGFV6SvDH" 
        alt="Tournament Management Dashboard" 
      />
      <DemoOverlay label={t.live} />
      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-slate-900/80 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_10px_#4F9013]" />
             <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Active Tournament Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CRMDemo: React.FC<DemoProps> = ({ lang }) => {
  const t = translations[lang].demos;
  return (
    <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <SmartDemoImage 
        src="https://lh3.googleusercontent.com/d/1_D5p3oBWYxOWuJw2rN08_K8ckvH3mA0K" 
        alt="CRM Management Interface" 
      />
      <DemoOverlay label="CRM 2.0" />
      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl shadow-2xl shadow-blue-600/20">
          <span className="text-[10px] font-black uppercase tracking-widest">Growth Engine Active</span>
        </div>
      </div>
    </div>
  );
};

export const OmniSyncDemo: React.FC<DemoProps> = ({ lang }) => {
  const t = translations[lang].demos;
  return (
    <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <SmartDemoImage 
        src="https://lh3.googleusercontent.com/d/1ahP9TiJu9W_aeAHuSSSb0h4fLC5_TIPi" 
        alt="Multi-Channel Synchronization" 
      />
      <DemoOverlay label={t.broadcast} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none" />
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
        <div className="space-y-1">
          <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">{t.syncing}</div>
          <div className="h-1.5 w-32 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-128, 128] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="h-full w-full bg-blue-600 shadow-[0_0_10px_#4F9013]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BIDemo: React.FC<DemoProps> = ({ lang }) => {
  const t = translations[lang].demos;
  return (
    <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <SmartDemoImage 
        src="https://lh3.googleusercontent.com/d/1C91PRc1-hjuJ4nseUnYOFKzGVU5n1bni" 
        alt="Business Intelligence Insights" 
      />
      <DemoOverlay label="BI INSIGHTS" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export const PlayerSideDemo: React.FC<DemoProps> = ({ lang }) => {
  const t = translations[lang].demos;
  return (
    <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <SmartDemoImage 
        src="https://lh3.googleusercontent.com/d/1q5-2WZUT8CWWaRG_yqrlWy-KcUwus0uI" 
        alt="Player Hub Experience" 
      />
      <DemoOverlay label="PLAYER HUB" />
    </div>
  );
};
