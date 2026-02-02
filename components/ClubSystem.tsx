
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  LayoutDashboard, 
  Play, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Search, 
  History, 
  Ticket, 
  Bell,
  Plus,
  Minus,
  MapPin,
  TrendingUp,
  Settings,
  ShoppingBag,
  Layers,
  Coins,
  Club,
  Heart,
  Diamond,
  Spade
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
// Fixed: Import LOGO_URL from constants instead of App
import { LOGO_URL } from '../constants';

interface ClubSystemProps {
  lang: Language;
}

const THEME_COLOR = '#05070a'; // Darker, more premium base
const BRAND_GREEN = '#7DF90B'; 

const SectionTitle: React.FC<{ tag?: string; title: string; subtitle?: string }> = ({ tag, title, subtitle }) => (
  <div className="mb-16 text-center">
    {tag && <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">{tag}</span>}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto font-medium text-xl leading-relaxed whitespace-pre-line">{subtitle}</p>}
  </div>
);

/**
 * Enhanced Texas Hold’em Poker Table Texture
 * Features:
 * 1. Deep emerald/teal felt gradient with organic noise.
 * 2. Soft curved arcs representing the table rail.
 * 3. Mixed card silhouettes (face-up/down) and subtle poker chips.
 * 4. Organic, non-repeating scattered composition.
 */
const PokerBackgroundTexture: React.FC = () => {
  // Scattered items: x/y placement, rotation, scale, blur level, and style type
  const tableItems = [
    // Cards
    { top: '15%', left: '5%', rotate: -15, scale: 1.0, blur: 1, type: 'suit-spade' },
    { top: '42%', left: '10%', rotate: 12, scale: 0.9, blur: 2, type: 'suit-heart' },
    { top: '72%', left: '8%', rotate: 35, scale: 1.1, blur: 1, type: 'suit-diamond' },
    { top: '12%', left: '38%', rotate: -5, scale: 0.8, blur: 2, type: 'suit-club' },
    { top: '58%', left: '32%', rotate: 20, scale: 1.2, blur: 3, type: 'suit-spade' },
    { top: '82%', left: '42%', rotate: -25, scale: 1.0, blur: 1, type: 'suit-heart' },
    { top: '25%', left: '55%', rotate: 10, scale: 0.85, blur: 4, type: 'suit-diamond' }, // Partially hidden
    { top: '65%', left: '15%', rotate: -50, scale: 0.95, blur: 2, type: 'suit-club' },
    
    // Chips
    { top: '18%', left: '12%', rotate: 0, scale: 0.6, blur: 1.5, type: 'chip' },
    { top: '48%', left: '7%', rotate: 45, scale: 0.5, blur: 2, type: 'chip' },
    { top: '38%', left: '42%', rotate: -10, scale: 0.7, blur: 3, type: 'chip' },
    { top: '88%', left: '38%', rotate: 15, scale: 0.6, blur: 1, type: 'chip' },
    { top: '75%', left: '25%', rotate: 60, scale: 0.55, blur: 2, type: 'chip' },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#05070a]">
      {/* 1. Base Felt Gradient - Increased Teal/Emerald Presence */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 40% 50%, #061f1a 0%, #050b0f 70%, #05070a 100%)',
          opacity: 1
        }}
      />
      
      {/* 2. Felt Grain / Organic Noise Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] contrast-125 brightness-110">
        <filter id="feltNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#feltNoise)" />
      </svg>

      {/* 3. Subtle Table Curves (Large Arcs) */}
      <div className="absolute inset-0 opacity-[0.14] overflow-hidden">
        <svg viewBox="0 0 1200 800" className="w-full h-full preserve-3d">
          <path 
            d="M -200,450 Q 300,100 900,450 T 1500,450" 
            fill="none" 
            stroke="#5d7d6b" 
            strokeWidth="3" 
            className="blur-[2px]"
          />
          <path 
            d="M -100,550 Q 400,200 1000,550" 
            fill="none" 
            stroke="#3d5a4a" 
            strokeWidth="2" 
            className="blur-[5px]"
          />
        </svg>
      </div>

      {/* 4. Scattered Table Elements */}
      <div className="absolute inset-0 opacity-[0.08] overflow-hidden">
        {tableItems.map((item, i) => (
          <div 
            key={i} 
            className="absolute text-white text-8xl font-serif select-none"
            style={{ 
              top: item.top, 
              left: item.left, 
              transform: `rotate(${item.rotate}deg) scale(${item.scale})`,
              filter: `blur(${item.blur}px)`,
            }}
          >
             {item.type === 'suit-spade' ? '♠' : item.type === 'suit-heart' ? '♥' : item.type === 'suit-club' ? '♣' : item.type === 'suit-diamond' ? '♦' : '•'}
          </div>
        ))}
      </div>

      {/* 5. Final Glow and Focus Overlays */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-emerald-900/15 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[150px]" />

      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(circle at 30% 50%, transparent 20%, #05070a 95%)' 
        }} 
      />
    </div>
  );
};

/**
 * Enhanced Image component that uses object-fit: contain
 * to create a professional frame for screenshots.
 */
const SmartModuleImage: React.FC<{ src: string; alt: string; transparent?: boolean }> = ({ src, alt, transparent }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`w-full h-full flex items-center justify-center overflow-hidden ${transparent ? 'bg-transparent' : 'bg-black'}`}>
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

const ModuleUIMockup: React.FC<{ type: number }> = ({ type }) => {
  const urls = [
    "https://lh3.googleusercontent.com/d/1F4jQ7iXcYO4b02hDjN-ZyzuSSPhuD-Ls", // Module 1
    "https://lh3.googleusercontent.com/d/1lekRUvaL5WEIp9rgK-xEkSqpTcQQg4z2", // Module 2
    "https://lh3.googleusercontent.com/d/14xDK5xFV4XbjrXno5AwJDXFum8AhTYzd", // Module 3
    "https://lh3.googleusercontent.com/d/1ACL9jXhZgRG6GUoje8ynN-0tzW9CjAO0", // Module 4
    "https://lh3.googleusercontent.com/d/1PktLnY_2Guz20gkc_hYyA7KH5DnbmaO3"  // Module 5
  ];

  return (
    <SmartModuleImage 
      src={urls[type]} 
      alt={`Module ${type + 1} Preview`} 
    />
  );
};

export const ClubSystem: React.FC<ClubSystemProps> = ({ lang }) => {
  const t = translations[lang].club;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeModule, setActiveModule] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => {});
    }
  }, []);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const currentSrc = video.src;
    if (currentSrc.includes('Video/')) video.src = 'Draft%20HyperPoker%20(2).mp4';
    else if (currentSrc.includes('Draft%20HyperPoker')) video.src = 'input_file_1.mp4';
  };

  const modules = [
    { title: t.module1.title, subtitle: t.module1.subtitle, desc: t.module1.desc },
    { title: t.module2.title, subtitle: t.module2.subtitle, desc: t.module2.desc },
    { title: t.module3.title, subtitle: t.module3.subtitle, desc: t.module3.desc },
    { title: t.module4.title, subtitle: t.module4.subtitle, desc: t.module4.desc },
    { title: t.module5.title, subtitle: t.module5.subtitle, desc: t.module5.desc },
  ];

  const titleParts = t.heroTitle.split(' ');

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden text-slate-900">
      <section 
        className="w-full pt-56 pb-48 px-8 md:px-16 lg:px-24 relative overflow-hidden"
        style={{ backgroundColor: THEME_COLOR }}
      >
        {/* Background Layer */}
        <PokerBackgroundTexture />

        <div className="max-w-[1440px] mx-auto relative z-20 flex flex-col lg:grid lg:grid-cols-[2fr_3fr] items-center gap-10 lg:gap-16">
          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ backgroundColor: BRAND_GREEN }}
              className="inline-block text-slate-950 px-6 py-2.5 rounded-full mb-8 shadow-xl"
            >
              <span className="text-[12px] md:text-sm font-black tracking-[0.2em] uppercase block">
                {t.heroTag}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter text-white"
            >
              {titleParts.length > 1 ? (
                <>
                  {titleParts[0]}<br />
                  <span style={{ color: BRAND_GREEN }} className="drop-shadow-[0_2px_15px_rgba(125,249,11,0.4)]">{titleParts[1]}</span>
                </>
              ) : (
                t.heroTitle
              )}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/70 text-2xl md:text-3xl font-medium leading-relaxed max-w-xl"
            >
              {t.heroDesc}
            </motion.p>
          </div>

          <div className="w-full relative flex items-center justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: 'spring', bounce: 0.3 }}
              className="relative w-full max-w-[850px]"
            >
              {/* Product Mockups Floating cleanly on the background without rectangular frame */}
              <div className="relative aspect-video flex flex-col group">
                <SmartModuleImage 
                  src="https://lh3.googleusercontent.com/d/13-ucXz4hGEnPJawOXMBeDyIfV0E34dyn" 
                  alt="HyperSystem Club Management Experience" 
                  transparent={true}
                />
                <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-2">
                  <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-lg">
                    <div style={{ color: BRAND_GREEN }} className="text-[10px] font-black italic uppercase tracking-widest">Core Engine Active</div>
                    <Activity style={{ color: BRAND_GREEN }} className="w-4 h-4 animate-pulse"/>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px] z-30">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px] fill-white">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-24 bg-white px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16" >
            <span className="text-blue-700 font-black text-sm tracking-[0.4em] uppercase mb-4 block">Club Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter max-w-4xl mx-auto text-center">
              {t.videoSectionTitle}
            </h2>
            <p className="text-slate-500 font-bold mt-6 text-xl max-w-4xl mx-auto leading-relaxed text-center whitespace-pre-line">
              {t.videoSectionSubtitle}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative aspect-video w-full rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] bg-slate-900 border border-slate-200 group" >
            <video ref={videoRef} src="Video/Draft%20HyperPoker%20(2).mp4" className="w-full h-full object-cover opacity-60" autoPlay loop muted playsInline controls onError={handleVideoError} />
          </motion.div>
        </div>
      </section>

      {/* High-Impact Module Section */}
      <section className="w-full py-32 bg-slate-50 px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{t.solutionsTitle}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-20 border-b border-slate-200 pb-10">
             {modules.map((mod, idx) => (
               <button key={idx} onClick={() => setActiveModule(idx)} className={`text-base md:text-xl font-black uppercase tracking-widest transition-all relative pb-4 px-2 ${ activeModule === idx ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600' }`} >
                 {mod.title}
                 {activeModule === idx && <motion.div layoutId="assocActiveUnderline" style={{ backgroundColor: BRAND_GREEN }} className="absolute bottom-0 left-0 right-0 h-1.5 rounded-full" />}
               </button>
             ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeModule} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-center min-h-[500px]" >
               <div className="space-y-10">
                  <div className="space-y-4">
                     <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight whitespace-pre-wrap">{modules[activeModule].subtitle}</h3>
                  </div>
                  <p className="text-slate-500 font-bold text-xl leading-relaxed max-w-xl">{modules[activeModule].desc}</p>
               </div>
               <div className="relative flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[850px] aspect-video lg:max-h-[520px] rounded-[3rem] md:rounded-[4rem] bg-white shadow-3xl overflow-hidden relative border border-slate-100/50">
                     <ModuleUIMockup type={activeModule} />
                     <div className="absolute inset-0 pointer-events-none ring-1 ring-slate-100/50 rounded-[4rem]" />
                  </div>
                  <div className="absolute -z-10 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
               </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="w-full py-32 bg-white px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title={t.faqTitle} tag="FAQ" />
          <div className="space-y-4">
            {t.faqs.map((faq: { q: string, a: string }, idx: number) => (
              <div key={idx} className={`rounded-[2rem] border transition-all overflow-hidden ${ openFaq === idx ? 'bg-slate-50 border-blue-100' : 'bg-white border-slate-100 hover:border-slate-200' }`} >
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-10 py-8 flex items-center justify-between gap-6 text-left group" >
                  <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors ${ openFaq === idx ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-700' }`}>{faq.q}</span>
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${ openFaq === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400' }`} >
                    {openFaq === idx ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} >
                      <div className="px-10 pb-8"><p className="text-slate-500 font-bold text-lg md:text-xl leading-relaxed max-w-3xl">{faq.a}</p></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
