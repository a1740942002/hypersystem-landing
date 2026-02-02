
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  ChevronRight, 
  Clock, 
  Star,
  Ticket,
  Search,
  ArrowRight,
  Plus,
  Minus,
  Wallet,
  History,
  Bell,
  Activity
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
// Fixed: Import LOGO_WHITE_URL from constants instead of App
import { LOGO_WHITE_URL } from '../constants';

interface PlayerSystemProps {
  lang: Language;
}

const THEME_COLOR = '#261a15'; // Deep Warm Dark Brown (Casino Lounge feel)
const ACCENT_COLOR = '#FDEB7D'; // Refined Golden Yellow for high visibility and premium feel
const BRAND_GREEN = '#7DF90B';

const SectionTitle: React.FC<{ tag?: string; title: string; subtitle?: string }> = ({ tag, title, subtitle }) => (
  <div className="mb-16 text-center">
    {tag && <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">{tag}</span>}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto font-medium text-xl leading-relaxed whitespace-pre-line">{subtitle}</p>}
  </div>
);

/**
 * Richer distribution of subtle card suit patterns.
 * Matching HyperSystem logic but with more items (18) and even distribution.
 */
const PlayerBackgroundTexture: React.FC = () => {
  const items = [
    { top: '5%', left: '5%', rotate: -15, scale: 0.9, blur: 1, type: 'suit-spade' },
    { top: '8%', left: '30%', rotate: 10, scale: 1.1, blur: 2, type: 'suit-heart' },
    { top: '4%', left: '55%', rotate: -5, scale: 0.8, blur: 1, type: 'suit-club' },
    { top: '10%', left: '85%', rotate: 20, scale: 1.0, blur: 3, type: 'suit-diamond' },
    { top: '25%', left: '15%', rotate: 35, scale: 1.2, blur: 2, type: 'suit-heart' },
    { top: '30%', left: '45%', rotate: -10, scale: 0.7, blur: 1, type: 'suit-club' },
    { top: '28%', left: '70%', rotate: 15, scale: 1.1, blur: 4, type: 'suit-spade' },
    { top: '45%', left: '5%', rotate: -20, scale: 0.9, blur: 2, type: 'suit-diamond' },
    { top: '50%', left: '35%', rotate: 25, scale: 1.3, blur: 1, type: 'suit-spade' },
    { top: '48%', left: '60%', rotate: -15, scale: 0.8, blur: 3, type: 'suit-heart' },
    { top: '55%', left: '90%', rotate: 10, scale: 1.0, blur: 2, type: 'suit-club' },
    { top: '70%', left: '20%', rotate: -5, scale: 0.9, blur: 1, type: 'suit-heart' },
    { top: '75%', left: '50%', rotate: 30, scale: 1.1, blur: 2, type: 'suit-diamond' },
    { top: '72%', left: '80%', rotate: -10, scale: 0.8, blur: 3, type: 'suit-spade' },
    { top: '90%', left: '10%', rotate: 20, scale: 1.2, blur: 1, type: 'suit-club' },
    { top: '95%', left: '40%', rotate: -15, scale: 1.0, blur: 2, type: 'suit-heart' },
    { top: '92%', left: '65%', rotate: 5, scale: 0.9, blur: 3, type: 'suit-spade' },
    { top: '88%', left: '90%', rotate: -25, scale: 1.1, blur: 1, type: 'suit-diamond' },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ backgroundColor: THEME_COLOR }}>
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 40% 50%, ${THEME_COLOR} 0%, #1a120e 70%, #120b08 100%)`,
          opacity: 1
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] contrast-125 brightness-90">
        <filter id="feltNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#feltNoise)" />
      </svg>
      <div className="absolute inset-0 opacity-[0.07] overflow-hidden">
        {items.map((item, i) => (
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
            {item.type === 'suit-spade' ? '♠' : item.type === 'suit-heart' ? '♥' : item.type === 'suit-club' ? '♣' : '♦'}
          </div>
        ))}
      </div>
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-emerald-900/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-950/5 rounded-full blur-[150px]" />
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 50%, transparent 20%, ${THEME_COLOR} 95%)` }} />
    </div>
  );
};

const SmartModuleImage: React.FC<{ src: string; alt: string; transparent?: boolean; onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void }> = ({ src, alt, transparent, onError }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If image is already cached/complete, set loaded state immediately
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        onLoad={() => setLoaded(true)}
        onError={onError}
        style={{ imageRendering: 'auto' }}
        className={`transition-all duration-700 w-full h-full object-contain ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      />
    </div>
  );
};

const ModuleUIMockup: React.FC<{ type: number }> = ({ type }) => {
  const urls = [
    "https://lh3.googleusercontent.com/d/1uFjKpm4I0HGHXSxrHLF1NKmLMS3Tn6lD", // Module 1: Booking
    "https://lh3.googleusercontent.com/d/1lEpfV7oF62LwzmmkHHDxSUr7X_ddomRh", // Module 2: Live View
    "https://lh3.googleusercontent.com/d/1wEHYMtCoMuqeXK5zBeiiOg2EvHioS-qL", // Module 3: Wallet
    "https://lh3.googleusercontent.com/d/1xssoBViDj9VRAAcJU5KJF1ZCVLeQzudS", // Module 4: Stats
    "https://lh3.googleusercontent.com/d/1tq2DcEDeRIJjLi72BWMeOsmIG2dyS2V1"  // Module 5: Map
  ];
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-transparent">
      <SmartModuleImage src={urls[type]} alt={`Module ${type + 1} Preview`} transparent={true} />
    </div>
  );
};

export const PlayerSystem: React.FC<PlayerSystemProps> = ({ lang }) => {
  const t = translations[lang].player;
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
      
      {/* Hero Section */}
      <section 
        className="w-full pt-56 pb-48 px-8 md:px-16 lg:px-24 relative overflow-hidden"
        style={{ backgroundColor: THEME_COLOR }}
      >
        <PlayerBackgroundTexture />

        {/* 
          Layout Ratio Shifted: 1.5fr:3.5fr
        */}
        <div className="max-w-[1440px] mx-auto relative z-20 flex flex-col lg:grid lg:grid-cols-[1.5fr_3.5fr] items-center gap-10 lg:gap-16">
          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ backgroundColor: BRAND_GREEN }}
              className="inline-block text-slate-950 px-6 py-2.5 rounded-full mb-8 shadow-xl"
            >
              <span className="text-[12px] md:text-sm font-black tracking-[0.2em] uppercase block">
                HYPERPOKER | 玩家端系統
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tighter text-white"
            >
              {titleParts.length > 1 ? (
                <>
                  <span className="block">{titleParts[0]}</span>
                  <span 
                    style={{ color: ACCENT_COLOR }} 
                    className="block drop-shadow-[0_4px_20px_rgba(253,235,125,0.4)] whitespace-nowrap overflow-visible"
                  >
                    {titleParts.slice(1).join(' ')}
                  </span>
                </>
              ) : (
                <span className="whitespace-nowrap">{t.heroTitle}</span>
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
              className="relative w-full max-w-[1400px]"
            >
              <div className="relative aspect-video flex flex-col group">
                <SmartModuleImage 
                  src="https://lh3.googleusercontent.com/d/1q5-2WZUT8CWWaRG_yqrlWy-KcUwus0uI" 
                  alt="HyperPoker Experience" 
                  transparent={true}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    const primaryId = '1q5-2WZUT8CWWaRG_yqrlWy-KcUwus0uI';
                    if (img.src.includes(primaryId)) {
                        img.src = `https://lh3.googleusercontent.com/u/0/d/${primaryId}`;
                    } else if (img.src.includes('u/0/d/')) {
                        img.src = 'HyperPoker.png';
                    } else if (img.src.includes('HyperPoker.png')) {
                        img.src = 'input_file_0.png';
                    }
                  }}
                />
                <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-2">
                  <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-lg">
                    <div style={{ color: ACCENT_COLOR }} className="text-[10px] font-black italic uppercase tracking-widest">Player Center Sync</div>
                    <Activity style={{ color: ACCENT_COLOR }} className="w-4 h-4 animate-pulse"/>
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
            <span className="text-blue-700 font-black text-sm tracking-[0.4em] uppercase mb-4 block">Player Experience</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter max-w-4xl mx-auto text-center leading-tight">
              {t.videoSectionTitle}
            </h2>
            <p className="text-slate-500 font-bold mt-6 text-xl md:text-2xl max-w-none mx-auto leading-relaxed text-center whitespace-nowrap overflow-visible">
              {t.videoSectionSubtitle}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative aspect-video w-full rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] bg-slate-900 border border-slate-200 group" >
            <video ref={videoRef} src="Video/Draft%20HyperPoker%20(2).mp4" className="w-full h-full object-cover opacity-60" autoPlay loop muted playsInline controls onError={handleVideoError} />
          </motion.div>
        </div>
      </section>

      {/* High-Impact Module Section */}
      <section className="w-full pt-4 pb-4 bg-slate-50 px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-8">
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">{t.solutionsTitle}</h2>
          </div>
          
          <div className="relative z-[60] flex flex-wrap justify-center gap-4 md:gap-12 mb-4 border-b border-slate-200 pb-8">
             {modules.map((mod, idx) => (
               <button key={idx} onClick={() => setActiveModule(idx)} className={`text-base md:text-xl font-black uppercase tracking-widest transition-all relative pb-4 px-2 ${ activeModule === idx ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600' }`} >
                 {mod.title}
                 {activeModule === idx && <motion.div layoutId="playerActiveUnderline" style={{ backgroundColor: BRAND_GREEN }} className="absolute bottom-0 left-0 right-0 h-1.5 rounded-full" />}
               </button>
             ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto flex justify-center -mt-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeModule} 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className="grid lg:grid-cols-[1.4fr_1fr] gap-0 items-start w-full lg:pl-10" 
              >
                <div className="space-y-10 flex flex-col pt-24 pr-12">
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] whitespace-pre-wrap">{modules[activeModule].subtitle}</h3>
                    <p className="text-slate-500 font-bold text-lg md:text-xl leading-relaxed max-w-2xl">{modules[activeModule].desc}</p>
                </div>

                <div className="relative flex items-start justify-center lg:justify-start -mt-8 -ml-12 lg:-ml-16">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.05, duration: 0.6 }}
                      className="relative w-full max-w-[480px] aspect-[9/19.5] overflow-hidden flex items-center justify-center"
                    >
                      <ModuleUIMockup type={activeModule} />
                    </motion.div>
                    <div className={`absolute -z-10 w-[140%] h-[140%] rounded-full blur-[140px] pointer-events-none opacity-15 transition-colors duration-1000 ${activeModule % 2 === 0 ? 'bg-blue-200' : 'bg-amber-200'}`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="w-full pt-8 pb-32 bg-white px-8 md:px-16 lg:px-24">
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
