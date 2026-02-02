'use client';

import { useTranslations } from 'next-intl';
import { useModal } from '@/components/layout/ModalProvider';
import { BRAND_GREEN } from '@/lib/constants';

export function ContactSection() {
  const t = useTranslations('contact');
  const { openModal } = useModal();

  return (
    <section className="py-40 px-8 bg-white">
      <div className="max-w-[1440px] mx-auto bg-slate-950 rounded-[4rem] p-16 text-center text-white">
        <h2 className="text-5xl md:text-8xl font-black mb-12">{t('title1')}</h2>
        <button
          onClick={openModal}
          style={{ backgroundColor: BRAND_GREEN }}
          className="text-slate-950 px-16 py-8 rounded-[2rem] text-2xl font-black"
        >
          {t('btnTrial')}
        </button>
      </div>
    </section>
  );
}
