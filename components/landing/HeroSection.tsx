'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CARD_SUITS, BRAND_GREEN, HERO_SHOWCASE_URL } from '@/lib/constants';

const CardSuitWatermark = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none opacity-[0.04] select-none ${className}`}>
    <div className="flex gap-12 text-6xl">
      {CARD_SUITS.map((suit) => (
        <span key={suit}>{suit}</span>
      ))}
    </div>
  </div>
);

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-40 pb-20 px-8 overflow-hidden min-h-[70vh] flex items-center bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80"
          alt="Poker Venue Background"
          className="w-full h-full object-cover opacity-[0.06] grayscale scale-105"
        />
        <CardSuitWatermark className="top-20 left-20" />
      </div>
      <div className="max-w-[1440px] mx-auto w-full relative z-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-black tracking-[0.4em] mb-8 uppercase">
              {t('tag')}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.05] tracking-tighter">
              {t('title1')}
              <br />
              <span className="text-blue-600">{t('title2')}</span>
            </h1>
            <p className="text-slate-500 text-2xl font-medium mb-12 max-w-lg leading-relaxed">
              {t('desc')}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link
                href="/club"
                className="bg-slate-900 p-8 rounded-[2rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{ backgroundColor: BRAND_GREEN }}
                    className="w-10 h-10 text-slate-950 rounded-xl flex items-center justify-center"
                  >
                    <LayoutDashboard size={20} />
                  </div>
                  <h3 className="text-white font-black text-xl">{t('card1Title')}</h3>
                </div>
                <p className="text-slate-400 font-bold leading-relaxed">{t('card1Desc')}</p>
              </Link>
              <Link
                href="/player"
                className="bg-white border border-slate-100 p-8 rounded-[2rem] cursor-pointer shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                    <Smartphone size={20} />
                  </div>
                  <h3 className="text-slate-900 font-black text-xl">{t('card2Title')}</h3>
                </div>
                <p className="text-slate-500 font-bold leading-relaxed">{t('card2Desc')}</p>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={HERO_SHOWCASE_URL}
              alt="HyperSystem Showcase"
              className="w-full h-auto drop-shadow-[0_25px_70px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
