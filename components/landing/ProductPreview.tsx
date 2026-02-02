'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Zap, BarChart3, Smartphone } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const SectionTitle = ({
  tag,
  title,
  subtitle,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-16 text-center">
    {tag && (
      <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-500 max-w-4xl mx-auto font-medium text-xl leading-relaxed whitespace-pre-line">
        {subtitle}
      </p>
    )}
  </div>
);

export function ProductPreview() {
  const t = useTranslations('product');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      id: 0,
      name:
        locale === 'zh-TW'
          ? '賽事管理'
          : locale === 'zh-CN'
          ? '赛事管理'
          : locale === 'ja'
          ? 'トーナメント管理'
          : 'Tournament Management',
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: 1,
      name:
        locale === 'zh-TW'
          ? '會員管理'
          : locale === 'zh-CN'
          ? '会员管理'
          : locale === 'ja'
          ? '会員管理'
          : 'CRM Management',
      icon: <Users size={20} />,
    },
    {
      id: 2,
      name:
        locale === 'zh-TW'
          ? '多渠道同步'
          : locale === 'zh-CN'
          ? '多渠道同步'
          : locale === 'ja'
          ? 'マルチチャネル同期'
          : 'Multi-Channel Sync',
      icon: <Zap size={20} />,
    },
    {
      id: 3,
      name:
        locale === 'zh-TW'
          ? '分析報表'
          : locale === 'zh-CN'
          ? '分析报表'
          : locale === 'ja'
          ? '分析レポート'
          : 'BI Insights',
      icon: <BarChart3 size={20} />,
    },
    {
      id: 4,
      name:
        locale === 'zh-TW'
          ? '玩家系統'
          : locale === 'zh-CN'
          ? '玩家系统'
          : locale === 'ja'
          ? 'プレイヤーシステム'
          : 'Player Hub',
      icon: <Smartphone size={20} />,
    },
  ];

  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle tag={t('tag')} title={t('title')} subtitle={t('subtitle')} />
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 mt-16 items-start">
          <div className="space-y-4">
            {modules.map((mod, idx) => (
              <button
                key={mod.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all border-2 ${
                  activeTab === idx ? 'border-blue-600 bg-blue-50' : 'border-slate-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${activeTab === idx ? 'text-blue-600' : 'text-slate-400'}`}>
                    {mod.icon}
                  </div>
                  <h4
                    className={`font-black text-lg ${
                      activeTab === idx ? 'text-blue-600' : 'text-slate-900'
                    }`}
                  >
                    {mod.name}
                  </h4>
                </div>
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            className="bg-slate-950 rounded-[3rem] overflow-hidden aspect-video shadow-2xl border-8 border-slate-900 flex items-center justify-center"
          >
            <div className="text-white/50 text-2xl font-bold">{modules[activeTab].name} Demo</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
