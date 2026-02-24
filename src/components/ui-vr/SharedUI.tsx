import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  dotColor: string;
  variant?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, delta, dotColor, variant = 1 }) => {
  const orbColors = ['bg-niche-a', 'bg-velvet-2', 'bg-gold-2', 'bg-teal'];
  return (
    <div className="bg-s1 border border-border rounded-lg p-5 relative overflow-hidden hover:border-border-hover hover:-translate-y-0.5 transition-all group">
      <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-[0.07] ${orbColors[(variant - 1) % 4]}`} />
      <div className="text-[9px] font-mono-label tracking-[0.14em] text-muted-foreground uppercase mb-2.5 flex items-center gap-1.5">
        <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: dotColor }} />
        {label}
      </div>
      <div className="font-serif-display text-[32px] font-bold tracking-tight leading-none mb-1.5">{value}</div>
      <div className="text-[11px] font-semibold flex items-center gap-1 text-emerald-300">{delta}</div>
    </div>
  );
};

interface VRCardProps {
  title: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  headerAction?: React.ReactNode;
  bodyClassName?: string;
}

export const VRCard: React.FC<VRCardProps> = ({ title, badge, children, headerAction, bodyClassName }) => (
  <div className="bg-s1 border border-border rounded-lg overflow-hidden hover:border-border-hover transition-colors">
    <div className="flex items-center justify-between px-5 py-4 border-b border-border">
      <span className="font-serif-display text-base font-bold tracking-wide">{title}</span>
      <div className="flex items-center gap-2">
        {badge}
        {headerAction}
      </div>
    </div>
    <div className={bodyClassName || 'p-5'}>{children}</div>
  </div>
);

interface TagProps {
  children: React.ReactNode;
  variant?: 'rose' | 'velvet' | 'gold' | 'teal' | 'muted' | 'green' | 'live';
}

const tagStyles: Record<string, string> = {
  rose: 'bg-rose/[0.12] text-rose-3',
  velvet: 'bg-velvet/15 text-velvet-2',
  gold: 'bg-gold/[0.14] text-gold-2',
  teal: 'bg-teal/[0.12] text-teal',
  muted: 'bg-foreground/[0.06] text-muted-foreground',
  green: 'bg-emerald-500/[0.14] text-emerald-300',
  live: 'bg-rose/[0.12] text-rose-3 animate-tag-pulse',
};

export const Tag: React.FC<TagProps> = ({ children, variant = 'muted' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold font-mono-label tracking-wide uppercase ${tagStyles[variant]}`}>
    {children}
  </span>
);

interface VRButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'gold';
  children: React.ReactNode;
}

export const VRButton: React.FC<VRButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const base = 'inline-flex items-center gap-[7px] px-4 py-2 rounded-[9px] text-xs font-bold tracking-wide cursor-pointer transition-all uppercase font-sans';
  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-br from-niche-a to-niche-b text-primary-foreground shadow-[0_4px_20px_hsl(var(--niche-glow))] hover:-translate-y-px hover:shadow-[0_8px_30px_hsl(var(--niche-glow))]',
    ghost: 'bg-s2 text-muted-foreground border border-border hover:border-border-hover hover:text-foreground',
    outline: 'bg-transparent border border-border-hover text-muted-foreground hover:bg-s2 hover:text-foreground',
    gold: 'bg-gradient-to-br from-gold to-[#9a7a2c] text-background font-bold shadow-[0_4px_20px_rgba(196,154,60,0.2)]',
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

interface ActivityItemProps {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  meta: string;
  time?: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({ icon, iconBg, iconColor, title, meta, time }) => (
  <div className="flex items-start gap-3 py-3 border-b border-border last:border-b-0">
    <div className="w-8 h-8 rounded-[9px] flex items-center justify-center text-sm shrink-0" style={{ background: iconBg, color: iconColor }}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-xs font-semibold mb-0.5">{title}</div>
      <div className="text-[10px] text-muted-foreground font-mono-label">{meta}</div>
    </div>
    {time && <div className="text-[10px] text-muted-foreground font-mono-label shrink-0 mt-0.5">{time}</div>}
  </div>
);

interface ProgressBarProps {
  label: string;
  value: string;
  percent: number;
  gradient: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, percent, gradient }) => (
  <div className="mb-3.5">
    <div className="flex justify-between text-xs font-medium mb-1.5">
      <span>{label}</span>
      <span style={{ color: gradient.includes('rose') ? 'hsl(var(--rose2))' : gradient.includes('gold') ? 'hsl(var(--gold2))' : gradient.includes('velvet') ? 'hsl(var(--velvet2))' : undefined }}>{value}</span>
    </div>
    <div className="h-1.5 bg-s2 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${percent}%`, background: gradient }} />
    </div>
  </div>
);

export const Divider: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-3 my-5">
    <span className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase whitespace-nowrap">{label}</span>
    <span className="flex-1 h-px bg-border" />
  </div>
);

export const PageHeader: React.FC<{ title: string; em: string; sub: string; children?: React.ReactNode }> = ({ title, em, sub, children }) => (
  <div className="flex items-start justify-between mb-9 gap-5">
    <div>
      <h1 className="font-serif-display text-4xl font-bold leading-none tracking-tight">
        {title} <em className="text-niche-a italic">{em}</em>
      </h1>
      <p className="text-[11px] text-muted-foreground mt-1.5 font-mono-label tracking-wide">{sub}</p>
    </div>
    {children && <div className="flex gap-2.5 items-center shrink-0">{children}</div>}
  </div>
);
