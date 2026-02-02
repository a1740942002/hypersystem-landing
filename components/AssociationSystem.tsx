
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
  Minus
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface AssociationSystemProps {
  lang: Language;
}

const THEME_COLOR = '#141726'; // Professional Deep Navy

const SectionTitle: React.FC<{ tag?: string; title: string; subtitle?: string; noItalic?: boolean }> = ({ tag, title, subtitle, noItalic }) => (
  <div className="mb-16 text-center px-4">
    {tag && <span className="text-blue-600 font-black text-sm tracking-[0.4em] uppercase mb-4 block">{tag}</span>}
    <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter ${noItalic ? '' : ''}`}>{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const ModuleUIMockup: React.FC<{ type: number }> = ({ type }) => {
  if (type === 0) {
    return (
      <div className="w-full h-full bg-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-[400px] aspect-video bg-slate-800 rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-6">
           <div className="flex justify-between items-center mb-6">
              <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest italic">Scheduler Pro</div>
              <div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-amber-500"/><div className="w-2 h-2 rounded-full bg-emerald-500"/></div>
           </div>
           <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                   <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500"><Calendar size={14}/></div>
                   <div className="flex-1"><div className="w-1/3 h-1.5 bg-white/20 rounded-full mb-2"/><div className="w-1/2 h-1 bg-white/10 rounded-full"/></div>
                   <div className="text-[8px] font-black text-white/40 uppercase">18:00 - Live</div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }
  if (type === 1) {
    return (
      <div className="w-full h-full bg-slate-950 flex items-center justify-center p-6">
        <div className="grid grid-cols-2 gap-4 w-full max-w-[360px]">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="aspect-square bg-slate-900 rounded-3xl border border-white/10 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="text-[8px] font-black text-slate-500">TABLE 0{i}</div>
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
                </div>
                <div className="space-y-1">
                   <div className="text-xl font-black text-white tracking-tighter">8/10</div>
                   <div className="text-[7px] text-blue-500 font-bold uppercase">Level 12 • 2K/4K</div>
                </div>
             </div>
           ))}
        </div>
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center p-6">
         <div className="w-full max-w-[400px] space-y-6">
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="text-[8px] font-black text-slate-400 mb-1 uppercase">Today Rev</div>
                  <div className="text-2xl font-black text-slate-900 tracking-tighter">$128,450</div>
               </div>
               <div className="bg-emerald-50 p-5 rounded-3xl border border-emerald-100 shadow-sm">
                  <div className="text-[8px] font-black text-emerald-600 mb-1 uppercase">Margin</div>
                  <div className="text-2xl font-black text-emerald-700 tracking-tighter">+24.2%</div>
               </div>
            </div>
            <div className="h-32 bg-slate-900 rounded-[2rem] p-6 flex flex-col justify-between">
               <div className="text-[8px] font-black text-white/40 uppercase">Performance Trend</div>
               <div className="flex items-end gap-2 flex-1 pt-4">
                  {[20, 50, 30, 80, 45, 90, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-600/40 border-t-2 border-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
               </div>
            </div>
         </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[320px] space-y-4">
         {[1, 2].map(i => (
           <div key={i} className="bg-slate-50 p-5 rounded-[2rem] border border-slate-100 flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600"><Users size={20}/></div>
              <div className="flex-1">
                 <div className="text-sm font-black text-slate-900">VIP Group {i === 1 ? 'A' : 'B'}</div>
                 <div className="text-[8px] font-bold text-slate-400 uppercase">{i === 1 ? '142 Members' : '88 Members'}</div>
              </div>
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center"><ChevronRight size={14}/></div>
           </div>
         ))}
         <div className="mt-4 p-5 bg-blue-600 rounded-[2.5rem] text-white flex justify-between items-center shadow-xl shadow-blue-200">
            <div className="space-y-1">
               <div className="text-[10px] font-black uppercase opacity-70">Automation</div>
               <div className="text-lg font-black italic">Push Sent</div>
            </div>
            <CheckCircle2 size={32}/>
         </div>
      </div>
    </div>
  );
};

const Calendar = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;

export const AssociationSystem: React.FC<AssociationSystemProps> = ({ lang }) => {
  const t = translations[lang].association;
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
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      
      <section 
        className="w-full pt-40 pb-48 px-6 md:px-12 relative overflow-hidden"
        style={{ backgroundColor: THEME_COLOR }}
      >
        <div className="max-w-7xl mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 text-white">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full mb-8 shadow-xl"
            >
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase block">
                {t.heroTag}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tighter italic"
            >
              {t.heroTitle}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/70 text-xl md:text-2xl font-medium leading-relaxed max-w-xl"
            >
              {t.heroDesc}
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: 'spring', bounce: 0.3 }}
              className="relative w-full max-w-[650px]"
            >
              <div className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-[3rem] md:rounded-[4rem] overflow-hidden group bg-slate-900 border border-white/5 p-3">
                <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden aspect-video flex flex-col p-10">
                   <div className="flex justify-between items-center mb-10">
                      <div className="w-48 h-3 bg-white/10 rounded-full"/>
                      <div className="w-10 h-10 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20"/>
                   </div>
                   <div className="grid grid-cols-3 gap-8">
                      {[1, 2, 3].map(i => <div key={i} className="h-24 bg-white/5 border border-white/5 rounded-3xl p-6"><div className="w-1/2 h-1.5 bg-white/10 rounded-full mb-4"/><div className="w-full h-3 bg-white/5 rounded-full"/></div>)}
                   </div>
                   <div className="mt-auto bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 flex items-center justify-between">
                      <div className="text-xl font-black text-blue-500 italic uppercase">Operational Flow Active</div>
                      <Activity className="text-blue-500 animate-pulse"/>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none translate-x-1/4 text-white"><LayoutDashboard size={600} /></div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px] z-30">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px] fill-white">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      <section className="w-full py-24 bg-white px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-black text-xs tracking-[0.4em] uppercase mb-4 block">Enterprise Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic max-w-4xl mx-auto whitespace-pre-line text-center">
              {t.videoSectionTitle}
            </h2>
            <p className="text-slate-500 font-bold mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-center whitespace-pre-line">
              {t.videoSectionSubtitle}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video w-full rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] bg-slate-900 border border-slate-200 group"
          >
            <video 
              ref={videoRef}
              src="Video/Draft%20HyperPoker%20(2).mp4" 
              className="w-full h-full object-cover opacity-60"
              autoPlay 
              loop 
              muted 
              playsInline
              controls
              onError={handleVideoError}
            />
            <div className="absolute inset-0 bg-slate-950/20 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                  <Play size={40} fill="white" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-32 bg-slate-50 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic">
                {t.solutionsTitle}
             </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-20 border-b border-slate-200 pb-10">
             {modules.map((mod, idx) => (
               <button
                 key={idx}
                 onClick={() => setActiveModule(idx)}
                 className={`text-sm md:text-lg font-black uppercase tracking-widest transition-all relative pb-4 px-2 ${
                   activeModule === idx ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                 }`}
               >
                 {mod.title}
                 {activeModule === idx && (
                   <motion.div 
                     layoutId="assocActiveUnderline"
                     className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"
                   />
                 )}
               </button>
             ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-20 items-center min-h-[500px]"
            >
               <div className="space-y-10">
                  <div className="space-y-4">
                     <span className="text-blue-600 font-black text-xs tracking-[0.4em] uppercase block">
                        Module 0{activeModule + 1}
                     </span>
                     <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none italic">
                        {modules[activeModule].subtitle}
                     </h3>
                  </div>
                  <p className="text-slate-500 font-bold text-xl leading-relaxed max-w-xl">
                     {modules[activeModule].desc}
                  </p>
                  
                  <div className="flex gap-10">
                     <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                           {activeModule === 0 ? <Zap /> : activeModule === 1 ? <LayoutDashboard /> : activeModule === 2 ? <BarChart3 /> : <Users />}
                        </div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">System Node</span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-50">
                           <ShieldCheck />
                        </div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">Enterprise</span>
                     </div>
                  </div>
               </div>

               <div className="relative flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[500px] aspect-square rounded-[4rem] bg-white shadow-3xl overflow-hidden relative border border-slate-100/50">
                     <ModuleUIMockup type={activeModule} />
                     <div className="absolute inset-0 pointer-events-none ring-1 ring-slate-100/50 rounded-[4rem]" />
                  </div>
                  <div className="absolute -z-10 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
               </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="w-full py-32 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title={t.faqTitle} 
            noItalic 
            tag="FAQ"
          />
          
          <div className="space-y-4">
            {t.faqs.map((faq: { q: string, a: string }, idx: number) => (
              <div 
                key={idx} 
                className={`rounded-[2rem] border transition-all overflow-hidden ${
                  openFaq === idx 
                    ? 'bg-slate-50 border-blue-100' 
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg md:text-xl font-black tracking-tight transition-colors ${
                    openFaq === idx ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    openFaq === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {openFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-10 pb-8">
                        <p className="text-slate-500 font-bold text-lg leading-relaxed max-w-3xl">
                          {faq.a}
                        </p>
                      </div>
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
