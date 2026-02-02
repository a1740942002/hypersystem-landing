
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Wallet, 
  History, 
  QrCode, 
  Bell, 
  User, 
  ChevronRight, 
  Clock, 
  Star,
  Zap,
  Ticket,
  Search,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PlayerSystemProps {
  lang: Language;
}

const THEME_COLOR = '#d1beaaff';

export const PlayerSystem: React.FC<PlayerSystemProps> = ({ lang }) => {
  const t = translations[lang].player;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Immersive Hero Section - Featuring the HyperPoker composition image */}
      <section 
        className="w-full pt-40 pb-48 px-6 md:px-12 relative overflow-hidden"
        style={{ backgroundColor: THEME_COLOR }}
      >
        <div className="max-w-7xl mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-white">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-slate-900 text-white px-5 py-2 rounded-full mb-8 shadow-xl"
            >
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase block">
                {t.heroTag}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tighter"
            >
              {t.heroTitle}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed max-w-xl"
            >
              {t.heroDesc}
            </motion.p>
          </div>

          {/* HyperPoker Showcase Image */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: 'spring', bounce: 0.3 }}
              className="relative w-full max-w-[650px]"
            >
              <div className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[3rem] md:rounded-[4rem] overflow-hidden group">
                {/* 
                  Trying multiple common paths for the image provided. 
                  In this environment, uploaded images often reside at the root 
                  or are mapped to input_file_X.png.
                */}
                <img 
                  src="HyperPoker.png" 
                  alt="HyperPoker Player System Experience" 
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    // Fallback hierarchy to ensure visibility
                    if (img.src.endsWith('HyperPoker.png')) {
                       img.src = 'input_file_0.png';
                    } else if (img.src.endsWith('input_file_0.png')) {
                       img.src = 'image/HyperPoker.png';
                    }
                  }}
                />
                {/* Subtle inner glow for depth */}
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-[3rem] md:rounded-[4rem] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none translate-x-1/4">
           <Trophy size={600} />
        </div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        {/* Curved Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px] z-30">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px] fill-slate-50">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto w-full px-4 md:px-8 py-16 md:py-32 space-y-20 relative z-40">
        
        {/* Profile Identity */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="flex items-center gap-8">
             <div className="w-24 h-24 bg-slate-950 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-slate-300 transform -rotate-3">
                <User size={42} />
             </div>
             <div>
                <div className="text-[10px] font-black uppercase text-slate-400 leading-none mb-3 tracking-[0.3em]">{t.welcome}</div>
                <div className="text-4xl font-black text-slate-900 leading-none tracking-tight">John Doe <span className="text-xs ml-4 px-4 py-2 rounded-xl bg-blue-100 text-blue-600 uppercase tracking-widest font-black ring-4 ring-blue-50/50">Diamond VIP</span></div>
             </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white px-10 py-5 rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-100/50">
             <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
             <span className="text-xs font-black text-slate-700 uppercase tracking-[0.2em]">Network Sync Active</span>
          </div>
        </div>

        {/* Financial & Action Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-[3.5rem] p-12 relative overflow-hidden text-white shadow-3xl shadow-slate-300"
            style={{ backgroundColor: '#141726' }}
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="text-[10px] font-black uppercase opacity-50 tracking-[0.4em]">{t.totalPoints}</div>
                  <div className="text-7xl font-black tracking-tighter">42,580 <span className="text-xl opacity-40 italic font-medium ml-2 uppercase">pts</span></div>
                </div>
                <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] flex items-center justify-center shadow-inner">
                  <Zap size={40} className="text-blue-400" fill="currentColor" />
                </div>
              </div>
              
              <div className="mt-20 flex flex-col sm:flex-row gap-5">
                 <button className="flex-1 bg-white text-slate-950 h-20 rounded-[1.5rem] font-black text-base flex items-center justify-center gap-4 shadow-2xl hover:bg-slate-50 transition-all active:scale-95 group">
                   <QrCode size={24} className="group-hover:scale-110 transition-transform"/> {t.qrCheckin}
                 </button>
                 <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white h-20 rounded-[1.5rem] font-black text-base flex items-center justify-center gap-4 shadow-2xl hover:bg-white/20 transition-all active:scale-95">
                   <Wallet size={24} /> {t.myWallet}
                 </button>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 opacity-[0.03] pointer-events-none rotate-12">
               <Zap size={350} />
            </div>
          </motion.div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 gap-8">
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">{t.rank}</div>
                <div className="text-5xl font-black text-slate-950 italic tracking-tighter leading-none">Global #124</div>
                <div className="mt-6 flex items-center gap-3 text-emerald-600 text-[10px] font-black bg-emerald-50 px-4 py-2 rounded-full self-start tracking-widest uppercase">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   Up 12 spots
                </div>
             </div>
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">{t.vouchers}</div>
                <div className="text-5xl font-black text-slate-950 italic tracking-tighter leading-none">3 <span className="text-xs not-italic opacity-30 font-black ml-2 uppercase tracking-widest">Available</span></div>
                <div className="mt-6 flex items-center gap-2 text-blue-600 text-[10px] font-black cursor-pointer hover:underline uppercase tracking-[0.3em]">
                   {t.viewAll} <ChevronRight size={16} />
                </div>
             </div>
          </div>
        </div>

        {/* Live Active Tournaments */}
        <div className="space-y-10">
           <div className="flex justify-between items-end border-b-2 border-slate-200/50 pb-6">
              <h2 className="text-4xl font-black text-slate-950 tracking-tighter italic flex items-center gap-5">
                 <div className="w-4 h-4 bg-red-500 rounded-full animate-ping shadow-[0_0_20px_rgba(239,68,68,0.7)]" />
                 {t.liveTournaments}
              </h2>
              <button className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] hover:text-slate-950 transition-colors">{t.viewAll}</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Sunday Millions #A1', blinds: '2K/4K', players: '82/120', time: '18:45', prize: '1,200,000' },
                { name: 'Hyper Turbo KO', blinds: '10K/20K', players: '24/50', time: '04:12', prize: '450,000' }
              ].map((game, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl flex items-center justify-between group cursor-pointer transition-all hover:shadow-blue-200/50"
                >
                  <div className="space-y-4">
                     <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{game.name}</div>
                     <div className="text-3xl font-black text-slate-950 tracking-tight">{game.blinds} <span className="text-[10px] opacity-30 ml-2 italic font-black uppercase tracking-widest">Current</span></div>
                     <div className="flex items-center gap-8 pt-2">
                        <span className="text-xs font-black text-slate-500 flex items-center gap-2 uppercase tracking-widest"><Clock size={16} className="text-blue-500"/> {game.time}</span>
                        <span className="text-xs font-black text-slate-500 flex items-center gap-2 uppercase tracking-widest"><Star size={16} fill="#f59e0b" className="text-amber-500"/> {game.players}</span>
                     </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Guaranteed</div>
                    <div className="text-3xl font-black text-slate-950 mb-6" style={{ color: i === 0 ? THEME_COLOR : 'inherit' }}>${game.prize}</div>
                    <button className="px-8 py-3 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl transition-all hover:bg-blue-600">
                       {t.booking}
                    </button>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Career Stats Showcase */}
        <div className="bg-slate-950 rounded-[4rem] p-16 text-white relative overflow-hidden shadow-3xl">
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-16 tracking-tighter italic">{t.myStats}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                 {[
                   { label: t.winRate, val: '62.4%', color: 'text-white' },
                   { label: t.itm, val: '34.8%', color: 'text-white' },
                   { label: t.level, val: 'Diamond', color: 'text-blue-400' },
                   { label: t.totalWinnings, val: '$420K', color: 'text-emerald-400' }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-4">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">{stat.label}</div>
                      <div className={`text-5xl font-black italic tracking-tighter ${stat.color}`}>{stat.val}</div>
                   </div>
                 ))}
              </div>
           </div>
           
           {/* Visual Abstract Performance Graph */}
           <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10 pointer-events-none flex items-end gap-4 px-16">
              {[40, 70, 45, 90, 65, 80, 50, 95, 85, 30, 60, 20, 80, 55, 90, 60, 40, 80].map((h, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ height: 0 }}
                   whileInView={{ height: `${h}%` }}
                   transition={{ delay: i * 0.03, duration: 1 }}
                   className="flex-1 bg-white rounded-t-2xl" 
                 />
              ))}
           </div>
        </div>

        {/* App Footer Navigation / Global Actions */}
        <div className="flex justify-center pt-20 border-t-2 border-slate-200/50">
           <div className="flex gap-20 text-slate-300">
              <button className="hover:text-slate-950 transition-all hover:scale-125"><Search size={32} /></button>
              <button className="text-slate-950 transition-all hover:scale-125"><History size={32} /></button>
              <button className="hover:text-slate-950 transition-all hover:scale-125"><Ticket size={32} /></button>
              <button className="hover:text-slate-950 transition-all hover:scale-125"><Bell size={32} /></button>
           </div>
        </div>

      </div>
    </div>
  );
};
