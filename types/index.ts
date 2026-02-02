export type Language = 'zh-TW' | 'zh-CN' | 'en' | 'ja';

export type View = 'landing' | 'player' | 'club' | 'pricing';

export interface ModuleData {
  id: number;
  name: string;
  tag: string;
  desc: string;
  highlights: string[];
  icon: React.ReactNode;
  demo: React.ReactNode;
}

export interface PainPoint {
  group: 'Ops' | 'Control' | 'Growth';
  label: string;
  t?: number;
  p?: number;
  m?: number;
  r?: number;
  g?: number;
}

export interface CalculationResults {
  hours: number;
  risk: string;
  growth: string;
  money: number;
}
