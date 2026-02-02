'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronRight, Clock, Star, Ticket, Plus, Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LOGO_WHITE_URL } from '@/lib/constants';

const THEME_COLOR = '#261a15';
const ACCENT_COLOR = '#FDEB7D';
const BRAND_GREEN = '#7DF90B';

const SectionTitle = ({ tag, title, subtitle }: { tag?: string; title: string; subtitle?: string }) => (
  <div className="mb-16 text-center">
    {tag && <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">{tag}</span>}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto font-medium text-xl leading-relaxed whitespace-pre-line">{subtitle}</p>}
  </div>
);

export function PlayerSystem() {
  const t = useTranslations('player');
  const [activeModule, setActiveModule] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const modules = [
    { title: t('module1.title'), subtitle: t('module1.subtitle'), desc: t('module1.desc') },
    { title: t('module2.title'), subtitle: t('module2.subtitle'), desc: t('module2.desc') },
    { title: t('module3.title'), subtitle: t('module3.subtitle'), desc: t('module3.desc') },
    { title: t('module4.title'), subtitle: t('module4.subtitle'), desc: t('module4.desc') },
    { title: t('module5.title'), subtitle: t('module5.subtitle'), desc: t('module5.desc') },
  ];

  const faqs = t.raw('faqs') as Array<{ q: string; a: string }>;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 overflow-hidden" style={{ backgroundColor: THEME_COLOR }}>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 rounded-full text-sm font-black tracking-[0.3em] mb-8 uppercase" style={{ backgroundColor: ACCENT_COLOR, color: THEME_COLOR }}>
              {t('heroTag')}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              {t('heroTitle')}
            </h1>
            <p className="text-white/60 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              {t('heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle title={t('videoSectionTitle')} subtitle={t('videoSectionSubtitle')} />
          <div className="aspect-video bg-slate-100 rounded-[3rem] flex items-center justify-center">
            <span className="text-slate-400 text-2xl font-bold">Video Player</span>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle tag="SOLUTIONS" title={t('solutionsTitle')} />
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="space-y-4">
              {modules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border-2 ${activeModule === idx ? 'border-blue-600 bg-white shadow-xl' : 'border-transparent bg-white'}`}
                >
                  <h4 className={`font-black text-lg ${activeModule === idx ? 'text-blue-600' : 'text-slate-900'}`}>{mod.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{mod.subtitle}</p>
                </button>
              ))}
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl">
              <h3 className="text-3xl font-black text-slate-900 mb-4">{modules[activeModule].title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed">{modules[activeModule].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle tag="FAQ" title={t('faqTitle')} />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-2 border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-slate-900"
                >
                  {faq.q}
                  {openFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-500">{faq.a}</p>
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
}
