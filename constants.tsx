
import React from 'react';
import { LayoutDashboard, Users, Zap, BarChart3, Smartphone } from 'lucide-react';
import { ModuleData, PainPoint, Language } from './types';
import { TournamentDemo, CRMDemo, OmniSyncDemo, BIDemo, PlayerSideDemo } from './components/Demos';
import { translations } from './translations';

export const CARD_SUITS = ['♠', '♥', '♦', '♣'];

// Official Brand Logo URL (Black Text)
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1eGN1gQqIKeRq5FA-yLxQOqGcV1AaqP4Z";
// White Text Version (Green icon + White text)
export const LOGO_WHITE_URL = "https://lh3.googleusercontent.com/d/1jApTkIhlJXq9w-johvc8CdPaYKTnj4F3";
// Hero Product Showcase Image
export const HERO_SHOWCASE_URL = "https://lh3.googleusercontent.com/d/1PYAIPuGV8VyctmdThQyqmuCCp1a0Jghn";

export const getModules = (lang: Language): ModuleData[] => {
  const t = translations[lang];
  return [
    { 
      id: 0, 
      name: lang === 'zh-TW' ? "賽事管理" : lang === 'zh-CN' ? "赛事管理" : lang === 'ja' ? "トーナメント管理" : "Tournament Management", 
      tag: "AUTO-TOURNAMENT", 
      desc: t.hero.card1Desc, 
      highlights: lang === 'zh-TW' ? ["賽事建立/規則設定", "預約/候補/報到控管", "獎金結算與自動過帳"] :
                  lang === 'zh-CN' ? ["赛事建立/规则设定", "预约/候補/报到控管", "奖金结算与自动过帐"] :
                  lang === 'ja' ? ["トーナメント作成", "予約・受付管理", "賞金計算と自動処理"] :
                  ["Tournament Setup", "Booking & Check-in", "Prize Settlement"],
      icon: <LayoutDashboard size={20} />, 
      demo: <TournamentDemo lang={lang} /> 
    },
    { 
      id: 1, 
      name: lang === 'zh-TW' ? "會員管理" : lang === 'zh-CN' ? "会员管理" : lang === 'ja' ? "会員管理" : "CRM Management", 
      tag: "CRM 2.0", 
      desc: lang.startsWith('zh') ? "從註冊到回訪到玩家增長引擎" : "From registration to retention engine", 
      highlights: lang === 'zh-TW' ? ["會員管理自動化", "無紙化優惠系統", "分群推播與回饋喚回"] :
                  lang === 'zh-CN' ? ["会员管理自动化", "无纸化优惠系统", "分群推播与回馈唤回"] :
                  lang === 'ja' ? ["会員管理の自動化", "デジタルクーポン", "セグメント配信"] :
                  ["Automated CRM", "Digital Coupons", "Segment Push Notifications"],
      icon: <Users size={20} />, 
      demo: <CRMDemo lang={lang} /> 
    },
    { 
      id: 2, 
      name: lang === 'zh-TW' ? "多渠道同步" : lang === 'zh-CN' ? "多渠道同步" : lang === 'ja' ? "マルチチャネル同期" : "Multi-Channel Sync", 
      tag: "OMNI-CHANNEL", 
      desc: lang.startsWith('zh') ? "告別重複輸入，一次更新全網同步" : "Update once, sync across all platforms", 
      highlights: lang === 'zh-TW' ? ["會員端賽事狀態即時更新", "LINE/社群推播自動發送", "電視看板資訊同步"] :
                  lang === 'zh-CN' ? ["会员端赛事状态实时更新", "LINE/社群推播自动发送", "电视看板资讯同步"] :
                  lang === 'ja' ? ["リアルタイム更新", "SNS自動通知", "モニター情報の同期"] :
                  ["Real-time Updates", "Social Media Push", "Display Synchronization"],
      icon: <Zap size={20} />, 
      demo: <OmniSyncDemo lang={lang} /> 
    },
    { 
      id: 3, 
      name: lang === 'zh-TW' ? "分析報表" : lang === 'zh-CN' ? "分析报表" : lang === 'ja' ? "分析レポート" : "BI Insights", 
      tag: "BI INSIGHTS", 
      desc: lang.startsWith('zh') ? "一眼掌握營運關鍵，快速定位問題與機會" : "Grasp key metrics and locate opportunities", 
      highlights: lang === 'zh-TW' ? ["全方位財務看板", "數據驅動分析與成長", "風險預警與稽核"] :
                  lang === 'zh-CN' ? ["全方位财务看板", "数据驱动分析与成长", "风险预警与稽核"] :
                  lang === 'ja' ? ["財務ダッシュボード", "データ駆動の成長", "リスク警告と監査"] :
                  ["Financial Dashboard", "Data-Driven Growth", "Risk Alerts & Audit"],
      icon: <BarChart3 size={20} />, 
      demo: <BIDemo lang={lang} /> 
    },
    { 
      id: 4, 
      name: lang === 'zh-TW' ? "玩家系統" : lang === 'zh-CN' ? "玩家系统" : lang === 'ja' ? "プレイヤーシステム" : "Player Hub", 
      tag: "PLAYER SIDE", 
      desc: lang.startsWith('zh') ? "即時桌況與個人戰績一手掌握" : "Track your stats and live tables", 
      highlights: lang === 'zh-TW' ? ["即時賽事桌況一覽", "智慧預約與候補通知", "戰績歷史與優惠追蹤"] :
                  lang === 'zh-CN' ? ["实时赛事桌况一览", "智慧预约与候補通知", "战绩历史与优惠追踪"] :
                  lang === 'ja' ? ["リアルタイム卓情報", "スマート予約通知", "戦績履歴の追跡"] :
                  ["Live Table Status", "Smart Notifications", "History & Reward Track"],
      icon: <Smartphone size={20} />, 
      demo: <PlayerSideDemo lang={lang} /> 
    }
  ];
};

export const getPainPoints = (lang: Language): PainPoint[] => {
  const texts = {
    'zh-TW': [
      { group: 'Ops' as const, label: "資訊孤島： 新增賽事後，需手動更新 LINE 群組、FB 貼文與會場電視。", t: 10, g: 2 },
      { group: 'Ops' as const, label: "手動地獄： 依賴 LINE/社群預約，並手動在表單/Excel登記候補。", p: 3, g: 1.5 },
      { group: 'Ops' as const, label: "同步延遲： 現場報到、入座狀況無法即時反映在系統，名單更新混亂。", p: 5 },
      { group: 'Ops' as const, label: "回覆疲勞： 會員無法自助查詢預約結果，需人工逐一回覆「預約成功」。", p: 2 },
      { group: 'Control' as const, label: "重複勞動： 賽事結算後，獎金預付金需手動重複 key 入系統。", t: 1, r: 2 },
      { group: 'Control' as const, label: "權限漏洞： 員工權限未分層，客服、荷官、管理層等皆用同一帳號登入。", r: 1.5 },
      { group: 'Control' as const, label: "追蹤斷點： 操作記錄無軌跡可循，發生錯帳時無法定位責任源頭。", r: 2 },
      { group: 'Growth' as const, label: "決策盲點： 只有原始報表，缺乏分析建議。", m: 300, g: 5 },
      { group: 'Growth' as const, label: "核銷混亂： 紙本優惠券手動發放與核銷，未能統計活動投資報酬率。", m: 150, g: 3 },
      { group: 'Growth' as const, label: "客群流失： 缺乏自動再行銷腳本，無法追蹤流失客並精準推送喚回訊息。", g: 5 }
    ],
    'zh-CN': [
      { group: 'Ops' as const, label: "资讯孤岛： 新增赛事后，需手动更新 LINE 群组、FB 贴文与会场电视。", t: 10, g: 2 },
      { group: 'Ops' as const, label: "手动地狱： 依赖 LINE/社群预约，并手动在表单/Excel登记候補。", p: 3, g: 1.5 },
      { group: 'Ops' as const, label: "同步延迟： 现场报到、入座状况无法实时反映在系统，名单更新混乱。", p: 5 },
      { group: 'Ops' as const, label: "回复疲劳： 会员无法自助查询预约结果，需人工逐一回复「预约成功」。", p: 2 },
      { group: 'Control' as const, label: "重复劳动： 赛事结算后，奖金预付金需手动重复 key 入系统。", t: 1, r: 2 },
      { group: 'Control' as const, label: "权限漏洞： 员工权限未分层，客服、荷官、管理层等皆用同一账号登录。", r: 1.5 },
      { group: 'Control' as const, label: "追踪断点： 操作记录无轨迹可循，发生错账时无法定位责任源头。", r: 2 },
      { group: 'Growth' as const, label: "决策盲点： 只有原始报表，缺乏分析建议。", m: 300, g: 5 },
      { group: 'Growth' as const, label: "核销混乱： 纸本优惠券手动发放与核销，未能统计活动投资报酬率。", m: 150, g: 3 },
      { group: 'Growth' as const, label: "客群流失： 缺乏自动再营销脚本，无法追踪流失客并精准推送唤回讯息。", g: 5 }
    ],
    'en': [
      { group: 'Ops' as const, label: "Information Silos: Manual updates needed for social media and TV displays after adding tournaments.", t: 10, g: 2 },
      { group: 'Ops' as const, label: "Manual Hell: Reliant on messaging apps for bookings and Excel for waitlists.", p: 3, g: 1.5 },
      { group: 'Ops' as const, label: "Sync Latency: Live check-ins don't reflect on the system immediately.", p: 5 },
      { group: 'Ops' as const, label: "Response Fatigue: Staff must manually confirm every player booking.", p: 2 },
      { group: 'Control' as const, label: "Redundancy: Prize settlements require manual re-entry into accounting systems.", t: 1, r: 2 },
      { group: 'Control' as const, label: "Security Gaps: Staff share one account with no layered permissions.", r: 1.5 },
      { group: 'Control' as const, label: "Traceability: No audit logs to track responsibility for errors.", r: 2 },
      { group: 'Growth' as const, label: "Decision Blindness: Raw reports only; no actionable growth insights.", m: 300, g: 5 },
      { group: 'Growth' as const, label: "Coupon Chaos: Paper vouchers are untrackable with no ROI statistics.", m: 150, g: 3 },
      { group: 'Growth' as const, label: "Player Churn: No automated scripts to track and reactivate lost players.", g: 5 }
    ],
    'ja': [
      { group: 'Ops' as const, label: "情報の孤立：大会追加後、SNSや会場モニターを手動で更新する必要がある。", t: 10, g: 2 },
      { group: 'Ops' as const, label: "手動の地獄：予約をSNSに頼り、ウェイティングリストをExcelで管理している。", p: 3, g: 1.5 },
      { group: 'Ops' as const, label: "同期の遅延：現場のチェックイン状況がシステムに即座に反映されない。", p: 5 },
      { group: 'Ops' as const, label: "返信疲労：スタッフがプレイヤーの予約を一件ずつ手動で確認・返信している。", p: 2 },
      { group: 'Control' as const, label: "重複作業：大会終了後、賞金の支払いを会計システムに手入力している。", t: 1, r: 2 },
      { group: 'Control' as const, label: "セキュリティの欠如：スタッフ全員が同じアカウントを共有し、権限が分かれていない。", r: 1.5 },
      { group: 'Control' as const, label: "追跡の断絶：操作ログがなく、エラーが発生した際の責任の所在が不明。", r: 2 },
      { group: 'Growth' as const, label: "意思決定の盲点：生のデータしかなく、成長のための分析アドバイスがない。", m: 300, g: 5 },
      { group: 'Growth' as const, label: "クーポンの混乱：紙のクーポンを配布しており、ROIを統計化できていない。", m: 150, g: 3 },
      { group: 'Growth' as const, label: "顧客の流出：休眠顧客を追跡し、自動的に呼び戻す仕組みがない。", g: 5 }
    ]
  };
  return texts[lang];
};
