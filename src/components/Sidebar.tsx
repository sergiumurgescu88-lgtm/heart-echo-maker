import React from 'react';
import { useNiche, type NicheType } from '@/contexts/NicheContext';
import { toast } from 'sonner';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  badge?: string;
  badgeColor?: string;
}

const overviewNav: NavItem[] = [
  { id: 'dashboard', icon: '◈', label: 'Dashboard' },
  { id: 'analytics', icon: '◇', label: 'Analytics Center' },
];
const aiCoreNav: NavItem[] = [
  { id: 'chameleon', icon: '✦', label: 'Chameleon Core', badge: 'LIVE', badgeColor: 'rose' },
  { id: 'momentum', icon: '⚡', label: 'Momentum Mode', badge: 'LIVE', badgeColor: 'green' },
  { id: 'twin', icon: '⊞', label: 'Twin Platform' },
];
const contentStudioNav: NavItem[] = [
  { id: 'characters', icon: '◉', label: 'Characters', badge: '12', badgeColor: 'rose' },
  { id: 'generation', icon: '⬡', label: 'Content Generation' },
  { id: 'clone', icon: '▷', label: 'Clone Dance', badge: 'NEW', badgeColor: 'velvet' },
  { id: 'library', icon: '○', label: 'Media Library' },
];
const revenueNav: NavItem[] = [
  { id: 'predict', icon: '△', label: 'Predictive Revenue', badge: 'AI', badgeColor: 'gold' },
  { id: 'marketplace', icon: '$', label: 'Marketplace / PPV' },
  { id: 'storefronts', icon: '⬠', label: 'White-Label Stores' },
];

const badgeStyles: Record<string, string> = {
  rose: 'bg-rose/15 text-rose-2',
  gold: 'bg-gold/15 text-gold-2',
  velvet: 'bg-velvet/[0.18] text-velvet-2',
  green: 'bg-emerald-500/15 text-emerald-300',
};

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const { niche, engine, setEngine, nicheLabel } = useNiche();

  const handleEngineSwitch = (eng: 'A' | 'B') => {
    setEngine(eng);
    if (eng === 'A') toast('ClearNet Engine Active', { description: 'Stripe · Google Cloud · Mainstream niches' });
    else toast('ShadowNet Engine Active', { description: 'CCBill · Crypto · Private hosting · 18+ KYC' });
  };

  const renderSection = (label: string, items: NavItem[]) => (
    <div className="pt-5 px-3">
      <div className="text-[9px] font-mono-label tracking-[0.2em] text-muted-foreground px-2.5 mb-1 uppercase">{label}</div>
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-[9px] text-[13px] font-semibold tracking-wide transition-all mb-px relative
            ${activePage === item.id
              ? 'text-foreground bg-gradient-to-br from-rose/10 to-velvet/[0.07] border border-rose/15'
              : 'text-muted-foreground hover:bg-s2 hover:text-foreground border border-transparent'
            }`}
        >
          {activePage === item.id && (
            <span className="absolute left-[-1px] top-1/4 bottom-1/4 w-[3px] rounded-sm bg-gradient-to-b from-niche-a to-niche-b" />
          )}
          <span className="text-sm w-5 text-center shrink-0">{item.icon}</span>
          {item.label}
          {item.badge && (
            <span className={`ml-auto text-[9px] font-mono-label font-bold px-1.5 py-0.5 rounded-full ${badgeStyles[item.badgeColor || 'rose']}`}>
              {item.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[248px] bg-s1 border-r border-border flex flex-col z-50 overflow-y-auto">
      {/* Logo */}
      <div className="px-6 pt-7 pb-6 border-b border-border relative overflow-hidden">
        <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-gradient-radial from-niche-a to-transparent opacity-20" />
        <div className="font-serif-display text-[26px] font-bold leading-none tracking-wide">
          <span className="text-foreground">Velvet</span>
          <span className="text-rose italic font-normal mx-[3px]">&</span>
          <span className="text-rose-3">Rose</span>
        </div>
        <div className="text-[9px] tracking-[0.24em] text-muted-foreground mt-1.5 uppercase font-mono-label">
          The Niche-Adaptive AI Ecosystem
        </div>
      </div>

      {/* Niche Indicator */}
      <button
        onClick={() => onNavigate('chameleon')}
        className="mx-6 mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-s2 border border-border hover:border-border-hover transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-niche-a shrink-0 animate-niche-pulse" />
        <span className="text-[10px] font-mono-label tracking-[0.1em] text-muted-foreground flex-1 text-left">ACTIVE NICHE</span>
        <span className="text-[9px] font-mono-label font-bold px-[7px] py-0.5 rounded bg-niche-glow text-niche-a tracking-wide">
          {nicheLabel}
        </span>
      </button>

      {/* Engine Toggle */}
      <div className="mx-4 mt-5 p-3.5 rounded-xl bg-s2 border border-border">
        <div className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-2.5">Active Engine</div>
        <div className="flex gap-1.5">
          <button
            onClick={() => handleEngineSwitch('A')}
            className={`flex-1 py-2 px-1 rounded-lg text-[10px] font-mono-label font-bold tracking-wide border text-center transition-all
              ${engine === 'A' ? 'bg-sky-500/15 border-sky-500/35 text-sky-300' : 'border-border bg-transparent text-muted-foreground'}`}
          >
            ◯ CLEARNET
          </button>
          <button
            onClick={() => handleEngineSwitch('B')}
            className={`flex-1 py-2 px-1 rounded-lg text-[10px] font-mono-label font-bold tracking-wide border text-center transition-all
              ${engine === 'B' ? 'bg-velvet/20 border-velvet/40 text-velvet-2' : 'border-border bg-transparent text-muted-foreground'}`}
          >
            ◯ SHADOWNET
          </button>
        </div>
        <div className="text-[10px] text-muted-foreground mt-2 font-mono-label leading-relaxed">
          {engine === 'A' ? 'Google Cloud · Stripe · Imagen 3 + Veo + Gemini' : 'Private VPS · CCBill · SDXL fine-tuned · KYC'}
        </div>
      </div>

      {renderSection('Overview', overviewNav)}
      {renderSection('AI Core', aiCoreNav)}
      {renderSection('Content Studio', contentStudioNav)}
      {renderSection('Revenue', revenueNav)}

      {/* User Footer */}
      <div className="mt-auto p-4 border-t border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-velvet to-rose flex items-center justify-center text-base font-bold text-primary-foreground shrink-0">
            V
          </div>
          <div>
            <div className="text-[13px] font-semibold">Agency Admin</div>
            <div className="text-[9px] text-rose-2 font-mono-label tracking-[0.1em]">✦ ENTERPRISE PLAN</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
