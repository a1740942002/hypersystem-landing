
import { ReactNode } from 'react';

export type Language = 'zh-TW' | 'zh-CN' | 'en' | 'ja';
export type View = 'landing' | 'player' | 'club' | 'pricing';

export interface ModuleData {
  id: number;
  name: string;
  tag: string;
  desc: string;
  highlights: string[];
  icon: ReactNode;
  demo: ReactNode;
}

export interface PainPoint {
  group: 'Ops' | 'Control' | 'Growth';
  label: string;
  t?: number; // minutes per tournament
  p?: number; // minutes per player
  m?: number; // monthly minutes
  r?: number; // risk score boost
  g?: number; // growth score boost
}

export interface CalculationResults {
  hours: number;
  risk: string;
  growth: string;
  money: number;
}
