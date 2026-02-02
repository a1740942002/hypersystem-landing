'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useModal } from './ModalProvider';
import { LOGO_URL, LOGO_WHITE_URL } from '@/lib/constants';

const BRAND_GREEN = '#7DF90B';

type LocaleCode = 'zh-TW' | 'zh-CN' | 'en' | 'ja';

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale() as LocaleCode;
  const pathname = usePathname();
  const router = useRouter();
  const { openModal } = useModal();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: LocaleCode; label: string }[] = [
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
  ];

  const isDarkHero = !isScrolled && (pathname === '/club' || pathname === '/player');

  const handleLanguageChange = (newLocale: LocaleCode) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangMenuOpen(false);
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href || (href === '/' && pathname === '/');
    let activeClasses = 'bg-slate-950 text-white shadow-lg';
    let inactiveClasses = 'text-slate-600 hover:text-blue-600 hover:bg-slate-100';
    if (isDarkHero) {
      activeClasses = 'bg-white text-slate-950 shadow-2xl';
      inactiveClasses = 'text-white/70 hover:text-white hover:bg-white/10';
    }
    return (
      <Link
        href={href}
        className={`text-sm md:text-base font-bold px-4 py-2 rounded-lg transition-all whitespace-nowrap ${isActive ? activeClasses : inactiveClasses}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-8 md:px-16 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <img
            src={isDarkHero ? LOGO_WHITE_URL : LOGO_URL}
            alt="HyperSystem Logo"
            className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105"
          />
        </Link>
        <div
          className={`hidden md:flex items-center gap-1 border-2 border-blue-600 rounded-2xl p-1 bg-white/80 backdrop-blur-xl transition-all duration-500 ${
            isDarkHero ? 'border-white/20 bg-white/10' : ''
          }`}
        >
          <div className="flex items-center gap-1">
            <NavLink href="/" label={t('product')} />
            <NavLink href="/club" label={t('clubSystem')} />
            <NavLink href="/player" label={t('playerSystem')} />
            <NavLink href="/pricing" label={t('pricing')} />
          </div>
          <div className="w-px h-6 mx-1 bg-slate-200" />
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg ${
                isDarkHero ? 'text-white/80' : 'text-slate-600'
              }`}
            >
              <Globe size={18} /> {languages.find((l) => l.code === locale)?.label}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl py-2 overflow-hidden"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLanguageChange(l.code)}
                      className={`w-full text-left px-5 py-3 text-base font-bold transition-colors ${
                        locale === l.code ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={openModal}
            style={{ backgroundColor: BRAND_GREEN }}
            className="text-slate-950 px-6 py-2.5 rounded-xl text-sm font-black hover:bg-slate-900 hover:text-white transition-all"
          >
            {t('trial')}
          </button>
        </div>
      </div>
    </nav>
  );
}
