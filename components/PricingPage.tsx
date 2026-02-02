
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Info, ChevronDown, ChevronUp, ArrowRight, Zap, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingPageProps {
  lang: Language;
  onOpenModal: () => void;
  onOpenSubscription: (planName: string) => void;
}

const BRAND_GREEN = '#7DF90B';

// Refined "Premium Casino-Style" Spade SVG for a more high-end watermark feel
const PremiumSpade = ({ size = 300, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C11.5 2 4.5 10.5 4.5 15.2C4.5 17.8 6.6 20 9.2 20C10.7 20 11.5 19.3 12 18.5V21C10 21 9 22 9 22H15C15 22 14 21 12 21V18.5C12.5 19.3 13.3 20 14.8 20C17.4 20 19.5 17.8 19.5 15.2C19.5 10.5 12.5 2 12 2Z" />
  </svg>
);

export const PricingPage: React.FC<PricingPageProps> = ({ lang, onOpenModal, onOpenSubscription }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const t = translations[lang].pricing;

  const plans = [
    { key: 'free', isPopular: false },
    { key: 'starter', isPopular: false },
    { key: 'pro', isPopular: true },
    { key: 'enterprise', isPopular: false },
  ];

  const comparisonData = [
    {
      group: '1. 玩家端頁面',
      features: [
        { name: '功能層次', values: ['基礎 (報名與歷史紀錄)', '基礎 (報名與歷史紀錄)', '進階 (含即時賽況)', '進階 (含即時賽況、優惠提醒等)'] }
      ]
    },
    {
      group: '2. 會員管理',
      features: [
        { name: '會員管理', values: ['基礎', '基礎', '基礎', '進階勝率&完整玩家生命週期'] },
        { name: 'VIP/黑名單註記', values: [false, false, true, true] },
        { name: '預繳報名費管理', values: [false, true, true, true] },
        { name: '會員數量限制', values: ['200', '2,000', '10,000', '無上限'] },
        { name: '會員等級系統', values: [false, false, true, true] },
        { name: '會員折扣設定', values: [false, false, true, true] }
      ]
    },
    {
      group: '3. 賽事管理',
      features: [
        { name: '賽事數量限制', values: ['300', '6,000', '60,000', '無上限'] },
        { name: '賽事線上預約', values: [false, true, true, true] },
        { name: '賽事管理模式', values: ['當日賽事', '當日賽事', '多天賽事', '多天賽事'] },
        { name: '報名管理層次', values: ['基礎版', '完整版', '完整版', '完整版'] },
        { name: '賽事資料保存', values: ['3個月', '12個月', '24個月', '無上限'] },
        { name: '賽事資料匯出', values: [false, true, true, true] },
        { name: '盲注結構儲存數', values: ['10', '60', '300', '客製'] },
        { name: '獎金結算邏輯自訂', values: [false, true, true, true] },
        { name: '獎金電子簽收', values: [false, true, true, true] },
        { name: '獎金回存功能', values: [false, true, true, true] },
        { name: '鐘面同步數量', values: ['3', '10', '20', '客製化'] },
        { name: '鐘面調整組數', values: [false, false, true, true] }
      ]
    },
    {
      group: '4. 行銷模組',
      features: [
        { name: '會員點數優惠系統', values: [false, false, '基礎', '進階'] },
        { name: 'HyperPoker 行銷露出', values: [false, false, true, true] },
        { name: '活動摸彩/排行榜', values: [false, false, true, true] },
        { name: 'LINE 訊息推播整合', values: [false, false, true, true] },
        { name: 'Google Ads 投放介接', values: [false, false, true, true] }
      ]
    },
    {
      group: '5. 報表與分析',
      features: [
        { name: '報表管理層次', values: [false, '基礎', '進階', '客製化'] },
        { name: '營運分析看板', values: [false, false, '基礎', '進階'] },
        { name: '稽核追蹤系統', values: [false, false, false, true] }
      ]
    },
    {
      group: '6. 其他',
      features: [
        { name: 'API 外部整合', values: [false, false, false, true] },
        { name: '子帳號數量', values: ['3', '10', '30', '客製'] },
        { name: '子帳號權限管理', values: [false, true, true, true] },
        { name: '適用店數', values: ['1', '3', '10', '客製'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-8 md:px-16 lg:px-24 overflow-hidden relative text-slate-900">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-5">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-700 font-black text-xs tracking-[0.4em] uppercase mb-4 block"
          >
            {t.tag}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-none mx-auto font-semibold text-lg md:text-xl leading-relaxed md:whitespace-nowrap"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-8 mb-5 h-12">
          <span className={`text-base font-black uppercase transition-colors ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>
            {t.toggleMonthly}
          </span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-slate-900 rounded-full relative shadow-md transition-all border-none outline-none flex items-center px-1"
          >
            <motion.div 
              initial={false}
              animate={{ x: isAnnual ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ 
                backgroundColor: BRAND_GREEN,
                width: '20px',
                height: '20px'
              }}
              className="rounded-full shadow-sm"
            />
          </button>
          <div className="flex items-center gap-4">
            <span className={`text-base font-black uppercase transition-colors ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>
              {t.toggleAnnually}
            </span>
            <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-widest animate-pulse">
              {t.offTag}
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {plans.map((p) => {
            const planData = t.plans[p.key];
            const isFree = p.key === 'free';
            const price = isAnnual && planData.annualPrice ? planData.annualPrice : planData.price;
            
            return (
              <motion.div 
                key={p.key}
                whileHover={{ y: -6 }}
                className={`rounded-[2rem] p-7 flex flex-col relative border transition-all bg-white text-slate-900 ${
                  p.isPopular 
                    ? 'border-blue-600 shadow-xl shadow-blue-100' 
                    : 'border-slate-100 shadow-lg shadow-slate-200 hover:border-slate-300'
                }`}
              >
                {p.isPopular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg ${
                    p.key === 'pro' ? 'bg-[#7DF90B] text-black' : 'bg-blue-600 text-white'
                  }`}>
                    {t.mostPopular}
                  </div>
                )}
                
                <div className="mb-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] mb-3 block text-blue-700">
                    {planData.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black tracking-tighter mb-3 text-slate-900">{planData.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black">$</span>
                    <span className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900">
                      {isFree ? '0' : price.toLocaleString('en-US')}
                    </span>
                    <span className="text-base font-bold opacity-60">
                      / {isAnnual ? t.yearUnit : t.monthUnit}
                    </span>
                  </div>
                  {!isFree && isAnnual && (
                    <div className="mt-1 text-xs font-bold opacity-60 italic">
                      ({t.avgMonth} ${planData.avg.toLocaleString('en-US')} / {t.monthUnit})
                    </div>
                  )}
                </div>

                <div className="mb-7 space-y-5 flex-1">
                  <p className="text-xl font-black text-slate-800 leading-snug mb-5 whitespace-pre-line">
                    {planData.desc}
                  </p>
                  
                  <div className="space-y-3">
                    {planData.features.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                          <Check className="text-blue-700" size={12} strokeWidth={4} />
                        </div>
                        <span className="text-base md:text-lg font-bold text-slate-700 leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col items-center">
                  <button 
                    onClick={() => isFree ? onOpenModal() : onOpenSubscription(planData.name)}
                    className={`w-full py-4 rounded-xl font-black text-lg uppercase tracking-widest transition-all ${
                      p.isPopular 
                        ? 'bg-blue-600 text-white hover:bg-slate-900 shadow-lg shadow-blue-600/30' 
                        : 'bg-slate-900 text-white hover:bg-blue-600'
                    }`}
                  >
                    {isFree ? t.ctaFree : t.ctaPaid}
                  </button>
                  
                  <button 
                    onClick={() => setShowTable(!showTable)}
                    className="mt-5 text-xs font-black uppercase tracking-widest text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5 group"
                  >
                    {t.showDetail}
                    {showTable ? <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /> : <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {showTable && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-x-auto mb-24" >
              <table className="w-full min-w-[900px] bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-8 py-6 text-left text-base font-black uppercase tracking-widest w-1/4">功能項目</th>
                    <th className="px-5 py-6 text-center text-base font-black uppercase tracking-widest">Free</th>
                    <th className="px-5 py-6 text-center text-base font-black uppercase tracking-widest">Starter</th>
                    <th className="px-5 py-6 text-center text-base font-black uppercase tracking-widest bg-blue-950">Pro</th>
                    <th className="px-5 py-6 text-center text-base font-black uppercase tracking-widest">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((group, gIdx) => (
                    <React.Fragment key={gIdx}>
                      <tr className="bg-slate-50/50">
                        <td colSpan={5} className="px-8 py-4 text-lg font-black text-blue-700 uppercase tracking-widest italic">{group.group}</td>
                      </tr>
                      {group.features.map((feat, fIdx) => (
                        <tr key={fIdx} className="hover:bg-slate-50 transition-colors group">
                          <td className="px-8 py-4 text-sm font-bold text-slate-700">{feat.name}</td>
                          {feat.values.map((val, vIdx) => (
                            <td key={vIdx} className={`px-5 py-4 text-center text-sm ${vIdx === 2 ? 'bg-blue-50/40' : ''}`}>
                              {typeof val === 'boolean' ? (
                                val ? <div className="flex justify-center"><Check className="text-emerald-500" size={24} strokeWidth={4} /></div> : <div className="flex justify-center"><X className="text-slate-200" size={24} strokeWidth={4} /></div>
                              ) : (
                                <span className={`font-black ${vIdx === 2 ? 'text-blue-700' : 'text-slate-600'}`}>{val}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-[#7DF90B] text-black px-5 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                Expansion Pack
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight italic">
                {t.addons.title}
              </h2>
              <p className="text-slate-400 font-medium text-lg md:text-xl leading-relaxed max-w-2xl">
                {t.addons.note}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {[
                { label: t.addons.item1, price: t.addons.item1Price, icon: <TrendingUp size={28} /> },
                { label: t.addons.item2, price: t.addons.item2Price, icon: <Users size={28} /> },
                { label: t.addons.item3, price: t.addons.item3Price, icon: <Zap size={28} /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div 
                      className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center"
                      style={{ color: BRAND_GREEN }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-xl md:text-2xl tracking-tight text-white">{item.label}</h4>
                      <p 
                        className="font-black text-lg md:text-xl uppercase tracking-widest mt-1"
                        style={{ color: BRAND_GREEN }}
                      >
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-10 right-10 p-20 opacity-[0.035] pointer-events-none translate-x-1/4 -rotate-12">
            <PremiumSpade size={450} />
          </div>
          <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
