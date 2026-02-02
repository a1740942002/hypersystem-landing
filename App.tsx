
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  BarChart3, 
  Users, 
  LayoutDashboard, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Smartphone, 
  Clock, 
  ShieldAlert,
  X,
  CheckCircle2,
  ArrowRight,
  Menu,
  Globe,
  PartyPopper,
  Search,
  History,
  Ticket,
  Bell
} from 'lucide-react';
import { getModules, getPainPoints, CARD_SUITS, LOGO_URL, LOGO_WHITE_URL, HERO_SHOWCASE_URL } from './constants';
import { CalculationResults, Language, View } from './types';
import { translations } from './translations';
import { PlayerSystem } from './components/PlayerSystem';
import { ClubSystem } from './components/ClubSystem';
import { PricingPage } from './components/PricingPage';

const BRAND_GREEN = '#7DF90B';

// --- SEO Manager (Client-side Only Hydration of Head) ---
const SEOMaster: React.FC<{ view: View, lang: Language }> = ({ view, lang }) => {
  const t = translations[lang];
  
  const seoData = useMemo(() => {
    let title = t.seo.title;
    let desc = t.seo.description;
    if (view === 'club') title = t.seo.clubTitle;
    if (view === 'player') title = t.seo.playerTitle;
    if (view === 'pricing') title = t.seo.pricingTitle;
    return { title, desc };
  }, [view, lang, t]);

  useEffect(() => {
    // 僅在客戶端執行
    if (typeof document !== 'undefined') {
      document.title = seoData.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', seoData.desc);
      document.documentElement.lang = lang;
    }
  }, [seoData, lang]);

  return null;
};

// --- Shared Components ---

const CardSuitWatermark: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute pointer-events-none opacity-[0.04] select-none ${className}`}>
    <div className="flex gap-12 text-6xl">
      {CARD_SUITS.map(suit => <span key={suit}>{suit}</span>)}
    </div>
  </div>
);

const SectionTitle: React.FC<{ tag?: string; title: string; subtitle?: string }> = ({ tag, title, subtitle }) => (
  <div className="mb-16 text-center">
    {tag && <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">{tag}</span>}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-4xl mx-auto font-medium text-xl leading-relaxed whitespace-pre-line">{subtitle}</p>}
  </div>
);

// --- Navbar ---
const Navbar: React.FC<{ 
  onOpenTrial: () => void; 
  lang: Language; 
  setLang: (l: Language) => void;
  currentView: View;
  onSetView: (v: View) => void;
}> = ({ onOpenTrial, lang, setLang, currentView, onSetView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' }
  ];

  const isDarkHero = !isScrolled && (currentView === 'club' || currentView === 'player');

  const NavItem = ({ view, label }: { view: View; label: string }) => {
    const isActive = currentView === view;
    let activeClasses = 'bg-slate-950 text-white shadow-lg';
    let inactiveClasses = 'text-slate-600 hover:text-blue-600 hover:bg-slate-100';
    if (isDarkHero) {
      activeClasses = 'bg-white text-slate-950 shadow-2xl';
      inactiveClasses = 'text-white/70 hover:text-white hover:bg-white/10';
    }
    return (
      <button onClick={() => onSetView(view)} className={`text-sm md:text-base font-bold px-4 py-2 rounded-lg transition-all whitespace-nowrap ${isActive ? activeClasses : inactiveClasses}`}>
        {label}
      </button>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-8 md:px-16 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <button onClick={() => onSetView('landing')} className="group flex items-center">
          <img src={isDarkHero ? LOGO_WHITE_URL : LOGO_URL} alt="HyperSystem Logo" className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105" />
        </button>
        <div className={`hidden md:flex items-center gap-1 border-2 border-blue-600 rounded-2xl p-1 bg-white/80 backdrop-blur-xl transition-all duration-500 ${isDarkHero ? 'border-white/20 bg-white/10' : ''}`}>
          <div className="flex items-center gap-1">
            <NavItem view="landing" label={t.product} />
            <NavItem view="club" label={t.clubSystem} />
            <NavItem view="player" label={t.playerSystem} />
            <NavItem view="pricing" label={t.pricing} />
          </div>
          <div className="w-px h-6 mx-1 bg-slate-200" />
          <div className="relative">
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg ${isDarkHero ? 'text-white/80' : 'text-slate-600'}`}>
              <Globe size={18} /> {languages.find(l => l.code === lang)?.label}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full right-0 mt-4 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl py-2 overflow-hidden">
                  {languages.map(l => (
                    <button key={l.code} onClick={() => { setLang(l.code); setIsLangMenuOpen(false); }} className={`w-full text-left px-5 py-3 text-base font-bold transition-colors ${lang === l.code ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={onOpenTrial} style={{ backgroundColor: BRAND_GREEN }} className="text-slate-950 px-6 py-2.5 rounded-xl text-sm font-black hover:bg-slate-900 hover:text-white transition-all">
            {t.trial}
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- App ---
const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh-TW');
  const [view, setView] = useState<View>('landing');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HyperSystem",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "BusinessApplication",
    "offers": { "@type": "Offer", "price": "5000", "priceCurrency": "TWD" },
    "description": translations[lang].hero.desc,
    "author": { "@type": "Organization", "name": "Hyper Tech Group" }
  }), [lang]);

  return (
    <div suppressHydrationWarning className="min-h-screen bg-white font-sans antialiased selection:bg-brand-green selection:text-brand-dark">
      <SEOMaster view={view} lang={lang} />
      
      {/* 結構化資料注入 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Navbar onOpenTrial={() => setIsModalOpen(true)} lang={lang} setLang={setLang} currentView={view} onSetView={setView} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={view + lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {view === 'landing' && (
              <>
                <HeroSection onSetView={setView} lang={lang} />
                <ProductPreview activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} />
                <Calculator lang={lang} />
                <ContactSection onOpenModal={() => setIsModalOpen(true)} lang={lang} />
              </>
            )}
            {view === 'player' && <PlayerSystem lang={lang} />}
            {view === 'club' && <ClubSystem lang={lang} />}
            {view === 'pricing' && <PricingPage lang={lang} onOpenModal={() => setIsModalOpen(true)} onOpenSubscription={() => setIsModalOpen(true)} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lang={lang} />
      
      <footer className="py-20 px-8 bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="HyperSystem Logo" className="h-10 md:h-12 w-auto" />
            <span className="font-black text-slate-400 uppercase tracking-widest text-sm">© 2026 HYPER TECH GROUP</span>
          </div>
          <div className="flex gap-10 text-slate-300">
             <button className="hover:text-blue-600 transition-colors"><Globe size={20} /></button>
             <button className="hover:text-blue-600 transition-colors"><Users size={20} /></button>
             <button className="hover:text-blue-600 transition-colors"><Zap size={20} /></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Hero ---
const HeroSection: React.FC<{ onSetView: (v: View) => void; lang: Language }> = ({ onSetView, lang }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative pt-40 pb-20 px-8 overflow-hidden min-h-[70vh] flex items-center bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80" alt="Poker Venue Background" className="w-full h-full object-cover opacity-[0.06] grayscale scale-105" />
        <CardSuitWatermark className="top-20 left-20" />
      </div>
      <div className="max-w-[1440px] mx-auto w-full relative z-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-black tracking-[0.4em] mb-8 uppercase">{t.tag}</div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.05] tracking-tighter">
              {t.title1}<br /><span className="text-blue-600">{t.title2}</span>
            </h1>
            <p className="text-slate-500 text-2xl font-medium mb-12 max-w-lg leading-relaxed">{t.desc}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div onClick={() => onSetView('club')} className="bg-slate-900 p-8 rounded-[2rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ backgroundColor: BRAND_GREEN }} className="w-10 h-10 text-slate-950 rounded-xl flex items-center justify-center"><LayoutDashboard size={20} /></div>
                  <h3 className="text-white font-black text-xl">{t.card1Title}</h3>
                </div>
                <p className="text-slate-400 font-bold leading-relaxed">{t.card1Desc}</p>
              </div>
              <div onClick={() => onSetView('player')} className="bg-white border border-slate-100 p-8 rounded-[2rem] cursor-pointer shadow-sm hover:shadow-2xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center"><Smartphone size={20} /></div>
                  <h3 className="text-slate-900 font-black text-xl">{t.card2Title}</h3>
                </div>
                <p className="text-slate-500 font-bold leading-relaxed">{t.card2Desc}</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="hidden lg:block">
            <img src={HERO_SHOWCASE_URL} alt="HyperSystem Showcase" className="w-full h-auto drop-shadow-[0_25px_70px_rgba(0,0,0,0.15)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- ProductPreview, Calculator, Contact, DemoModal ---
// 為了簡潔，這些組件保持之前的實作邏輯，但確保它們在 App 內部正確調用。
const ProductPreview: React.FC<{ activeTab: number; setActiveTab: (i: number) => void; lang: Language }> = ({ activeTab, setActiveTab, lang }) => {
  const modules = getModules(lang);
  const t = translations[lang].product;
  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle tag={t.tag} title={t.title} subtitle={t.subtitle} />
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 mt-16 items-start">
          <div className="space-y-4">
            {modules.map((mod, idx) => (
              <button key={mod.id} onClick={() => setActiveTab(idx)} className={`w-full text-left p-6 rounded-2xl transition-all border-2 ${activeTab === idx ? 'border-blue-600 bg-blue-50' : 'border-slate-100'}`}>
                <div className="flex items-center gap-4">
                  <div className={`${activeTab === idx ? 'text-blue-600' : 'text-slate-400'}`}>{mod.icon}</div>
                  <h4 className={`font-black text-lg ${activeTab === idx ? 'text-blue-600' : 'text-slate-900'}`}>{mod.name}</h4>
                </div>
              </button>
            ))}
          </div>
          <motion.div key={activeTab} className="bg-slate-950 rounded-[3rem] overflow-hidden aspect-video shadow-2xl border-8 border-slate-900">
            {modules[activeTab].demo}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Calculator: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].calculator;
  const painPoints = getPainPoints(lang);
  const [selectedPains, setSelectedPains] = useState<number[]>([]);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const runCalculation = () => {
    // 模擬計算
    setResults({
      hours: 120,
      risk: 'High',
      growth: '+25%',
      money: 450000
    });
  };

  return (
    <section className="py-32 px-8 bg-slate-50">
      <div className="max-w-[1440px] mx-auto text-center">
        <SectionTitle title={t.title1} tag="ROI CALCULATOR" />
        <div className="grid lg:grid-cols-2 gap-16 text-left">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl">
             <h3 className="text-2xl font-black mb-8">{t.groupOps}</h3>
             <div className="space-y-4">
               {painPoints.map((p, idx) => (
                 <button key={idx} onClick={() => setSelectedPains(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx])} className={`w-full p-4 border-2 rounded-xl text-left font-bold ${selectedPains.includes(idx) ? 'border-blue-600 bg-blue-50' : 'border-slate-50'}`}>
                    {p.label}
                 </button>
               ))}
             </div>
             <button onClick={runCalculation} className="w-full mt-10 py-5 bg-slate-900 text-white rounded-xl font-black">{t.btnRun}</button>
          </div>
          <div className="flex items-center justify-center">
             {results ? (
               <div className="bg-slate-900 p-12 rounded-[3rem] text-white w-full">
                  <div className="text-6xl font-black text-brand-green mb-4">${results.money.toLocaleString()}</div>
                  <p className="text-slate-400">{t.resultFooter}</p>
               </div>
             ) : <div className="text-slate-300 font-black text-4xl italic">Diagnostic Required</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC<{ onOpenModal: () => void; lang: Language }> = ({ onOpenModal, lang }) => {
  const t = translations[lang].contact;
  return (
    <section className="py-40 px-8 bg-white">
      <div className="max-w-[1440px] mx-auto bg-slate-950 rounded-[4rem] p-16 text-center text-white">
        <h2 className="text-5xl md:text-8xl font-black mb-12">{t.title1}</h2>
        <button onClick={onOpenModal} style={{ backgroundColor: BRAND_GREEN }} className="text-slate-950 px-16 py-8 rounded-[2rem] text-2xl font-black">{t.btnTrial}</button>
      </div>
    </section>
  );
};

const DemoModal: React.FC<{ isOpen: boolean; onClose: () => void; lang: Language }> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang].modal;
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={onClose} />
      <div className="relative bg-white p-12 rounded-[3rem] w-full max-w-xl">
        <h3 className="text-3xl font-black mb-6">{t.title}</h3>
        <button onClick={onClose} className="w-full py-5 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest">{t.btnSubmit}</button>
      </div>
    </div>
  );
};

export default App;
