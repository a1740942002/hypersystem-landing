'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useTranslations } from 'next-intl';

type ModalContextType = {
  openModal: () => void;
  openSubscription: (planName: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const t = useTranslations('modal');

  const openModal = () => setIsOpen(true);
  const openSubscription = (planName: string) => {
    setSelectedPlan(planName);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedPlan(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, openSubscription, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={closeModal} />
          <div className="relative bg-white p-12 rounded-[3rem] w-full max-w-xl">
            <h3 className="text-3xl font-black mb-6">
              {selectedPlan ? t('titleSubscription', { plan: selectedPlan }) : t('title')}
            </h3>
            <p className="text-slate-500 mb-8">
              {selectedPlan ? t('descSubscription') : t('desc')}
            </p>
            <div className="space-y-4 mb-8">
              <input
                type="text"
                placeholder={t('placeholderBrand')}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                placeholder={t('placeholderContact')}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl"
              />
              <input
                type="tel"
                placeholder={t('placeholderPhone')}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl"
              />
            </div>
            <button
              onClick={closeModal}
              className="w-full py-5 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest"
            >
              {selectedPlan ? t('btnSubscribe') : t('btnSubmit')}
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
