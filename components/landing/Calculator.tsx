'use client';

import { useState } from 'react';
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

interface CalculationResults {
  hours: number;
  risk: string;
  growth: string;
  money: number;
}

export function Calculator() {
  const t = useTranslations('calculator');
  const locale = useLocale();
  const [selectedPains, setSelectedPains] = useState<number[]>([]);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const painPoints =
    locale === 'zh-TW'
      ? [
          '資訊孤島：新增賽事後需手動更新多渠道',
          '手動地獄：依賴社群預約並手動登記',
          '同步延遲：現場報到無法即時反映',
          '回覆疲勞：需人工逐一回覆預約',
        ]
      : locale === 'zh-CN'
      ? [
          '信息孤岛：新增赛事后需手动更新多渠道',
          '手动地狱：依赖社群预约并手动登记',
          '同步延迟：现场报到无法实时反映',
          '回复疲劳：需人工逐一回复预约',
        ]
      : locale === 'ja'
      ? [
          '情報の孤立：大会追加後手動で更新が必要',
          '手動の地獄：SNS予約に依存',
          '同期の遅延：チェックイン状況が即座に反映されない',
          '返信疲労：手動で予約を確認・返信',
        ]
      : [
          'Information Silos: Manual updates needed after adding events',
          'Manual Hell: Reliant on messaging apps for bookings',
          'Sync Latency: Check-ins not reflected immediately',
          'Response Fatigue: Manual booking confirmations',
        ];

  const runCalculation = () => {
    setResults({
      hours: 120,
      risk: 'High',
      growth: '+25%',
      money: 450000,
    });
  };

  return (
    <section className="py-32 px-8 bg-slate-50">
      <div className="max-w-[1440px] mx-auto text-center">
        <SectionTitle title={t('title1')} tag="ROI CALCULATOR" />
        <div className="grid lg:grid-cols-2 gap-16 text-left">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl">
            <h3 className="text-2xl font-black mb-8">{t('groupOps')}</h3>
            <div className="space-y-4">
              {painPoints.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setSelectedPains((prev) =>
                      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
                    )
                  }
                  className={`w-full p-4 border-2 rounded-xl text-left font-bold ${
                    selectedPains.includes(idx) ? 'border-blue-600 bg-blue-50' : 'border-slate-50'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              onClick={runCalculation}
              className="w-full mt-10 py-5 bg-slate-900 text-white rounded-xl font-black"
            >
              {t('btnRun')}
            </button>
          </div>
          <div className="flex items-center justify-center">
            {results ? (
              <div className="bg-slate-900 p-12 rounded-[3rem] text-white w-full">
                <div className="text-6xl font-black text-[#7DF90B] mb-4">
                  ${results.money.toLocaleString()}
                </div>
                <p className="text-slate-400">{t('resultFooter')}</p>
              </div>
            ) : (
              <div className="text-slate-300 font-black text-4xl italic">Diagnostic Required</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
