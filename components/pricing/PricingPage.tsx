'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useModal } from '@/components/layout/ModalProvider';

const BRAND_GREEN = '#7DF90B';

export function PricingPage() {
  const t = useTranslations('pricing');
  const { openModal, openSubscription } = useModal();
  const [isAnnual, setIsAnnual] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const plans = ['free', 'starter', 'pro', 'enterprise'] as const;
  const popularPlan = 'pro';

  return (
    <div className="min-h-screen pt-32 pb-24 px-8 bg-slate-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">
            {t('tag')}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            {t('title')}
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>
            {t('toggleMonthly')}
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`w-16 h-8 rounded-full p-1 transition-colors ${isAnnual ? 'bg-blue-600' : 'bg-slate-200'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-8' : ''}`} />
          </button>
          <span className={`font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>
            {t('toggleAnnually')}
          </span>
          {isAnnual && (
            <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
              {t('offTag')}
            </span>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((planKey) => {
            const plan = t.raw(`plans.${planKey}`) as {
              name: string;
              tag: string;
              price: number;
              annualPrice?: number;
              avg?: number;
              desc: string;
              features: string[];
            };
            const isPopular = planKey === popularPlan;
            const price = isAnnual && plan.annualPrice ? plan.annualPrice : plan.price;
            const unit = isAnnual ? t('yearUnit') : t('monthUnit');

            return (
              <motion.div
                key={planKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white rounded-[2rem] p-8 relative ${isPopular ? 'ring-2 ring-blue-600 shadow-2xl scale-105' : 'shadow-lg'}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    {t('mostPopular')}
                  </div>
                )}
                <div className="text-sm font-bold text-slate-400 mb-2">{plan.tag}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">
                    ${price.toLocaleString()}
                  </span>
                  <span className="text-slate-400 font-bold">/{unit}</span>
                  {isAnnual && plan.avg && (
                    <div className="text-sm text-slate-400 mt-1">
                      {t('avgMonth')} ${plan.avg.toLocaleString()}/{t('monthUnit')}
                    </div>
                  )}
                </div>
                <p className="text-slate-500 text-sm mb-6 whitespace-pre-line">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => (planKey === 'free' ? openModal() : openSubscription(plan.name))}
                  className={`w-full py-4 rounded-xl font-black transition-all ${
                    isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {planKey === 'free' ? t('ctaFree') : t('ctaPaid')}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Show Details Toggle */}
        <div className="text-center">
          <button
            onClick={() => setShowTable(!showTable)}
            className="inline-flex items-center gap-2 text-blue-600 font-bold"
          >
            {t('showDetail')}
            {showTable ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Add-ons */}
        <div className="mt-24 bg-white rounded-[3rem] p-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">{t('addons.title')}</h2>
          <p className="text-slate-500 mb-8">{t('addons.note')}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-slate-100 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">{t('addons.item1')}</h4>
              <p className="text-blue-600 font-black">{t('addons.item1Price')}</p>
            </div>
            <div className="border-2 border-slate-100 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">{t('addons.item2')}</h4>
              <p className="text-blue-600 font-black">{t('addons.item2Price')}</p>
            </div>
            <div className="border-2 border-slate-100 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">{t('addons.item3')}</h4>
              <p className="text-blue-600 font-black">{t('addons.item3Price')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
