import React from 'react';
import { PageHeader, StatCard, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';

const DashboardPage: React.FC<{ onNavigate: (p: string) => void; onOpenModal: () => void }> = ({ onNavigate, onOpenModal }) => (
  <div className="animate-fade-up">
    <PageHeader title="Agency" em="Overview" sub="Feb 24, 2026 · Chameleon Core active · All 9 AI modules running">
      <VRButton variant="ghost">⬡ Export</VRButton>
      <VRButton onClick={onOpenModal}>+ New Character</VRButton>
    </PageHeader>

    <div className="grid grid-cols-4 gap-4 mb-7">
      <StatCard label="Total Revenue" value="$84,290" delta="↑ 23.4% vs last month" dotColor="hsl(var(--niche-a))" variant={1} />
      <StatCard label="AI Characters" value="12" delta="↑ 3 new this week" dotColor="hsl(var(--velvet2))" variant={2} />
      <StatCard label="Content Generated" value="2,841" delta="↑ 38.2% MoM" dotColor="hsl(var(--gold2))" variant={3} />
      <StatCard label="PPV / Marketplace" value="$18,400" delta="↑ 42.1%" dotColor="hsl(var(--teal))" variant={4} />
    </div>

    <div className="grid grid-cols-[1.6fr_1fr] gap-5 mb-5">
      <VRCard title="Revenue Flow" badge={<Tag variant="live">● LIVE</Tag>}>
        <div className="flex gap-7 mb-5">
          {[['THIS MONTH', '$84,290'], ['PPV SALES', '847'], ['SUBSCRIBERS', '342']].map(([l, v]) => (
            <div key={l}>
              <div className="text-[9px] text-muted-foreground font-mono-label tracking-[0.1em] mb-1">{l}</div>
              <div className="font-serif-display text-2xl font-bold">{v}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-2 h-40">
          {[['Aug', 42], ['Sep', 55], ['Oct', 48], ['Nov', 70], ['Dec', 65], ['Jan', 72], ['Feb', 100]].map(([m, h], i) => (
            <div key={m as string} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div
                className={`w-full rounded-t cursor-pointer hover:brightness-125 transition-all ${i === 6 ? 'bg-gradient-to-t from-rose to-rose-2' : 'bg-rose/20'}`}
                style={{ height: `${h}%` }}
              />
              <span className={`text-[9px] font-mono-label ${i === 6 ? 'text-rose-2' : 'text-muted-foreground'}`}>{m as string}</span>
            </div>
          ))}
        </div>
      </VRCard>

      <VRCard title="Live Activity" headerAction={<VRButton variant="ghost" className="!py-1 !px-2.5 !text-[10px]">All →</VRButton>} bodyClassName="px-5 py-3.5">
        <ActivityItem icon="✦" iconBg="rgba(212,84,122,0.12)" iconColor="hsl(var(--rose2))" title="Luna published 3 reels" meta="Fashion · 14.2k reach · Veo render" time="2m" />
        <ActivityItem icon="$" iconBg="rgba(196,154,60,0.12)" iconColor="hsl(var(--gold2))" title="PPV purchase — Dance Vol.2" meta="$39 · Marketplace · Crypto" time="6m" />
        <ActivityItem icon="⚡" iconBg="rgba(122,58,138,0.15)" iconColor="hsl(var(--velvet2))" title="Momentum alert: Terracotta trend" meta="+340% TikTok · Draft ready" time="14m" />
        <ActivityItem icon="◈" iconBg="rgba(42,154,106,0.12)" iconColor="#6ee7b7" title="Clone Dance render complete" meta="Chef Sorin · Kitchen Tango" time="1h" />
      </VRCard>
    </div>

    <VRCard title="Top Characters by Revenue" headerAction={<VRButton variant="ghost" className="!py-1 !px-3 !text-[10px]" onClick={() => onNavigate('characters')}>Manage →</VRButton>}>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {['Character', 'Niche', 'Engine Stack', 'Content/wk', 'Reach', 'Revenue', 'Status'].map(h => (
              <th key={h} className="text-left text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase px-4 pb-3 border-b border-border">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Luna Velez', niche: 'Fashion', nicheV: 'velvet' as const, stack: 'Imagen3·Veo·Gemini', content: '24', reach: '382k', rev: '$28,400', live: true },
            { name: 'Marco Vitale', niche: 'Fitness', nicheV: 'teal' as const, stack: 'CloneDance·Veo·TTS', content: '18', reach: '241k', rev: '$19,200', live: true },
            { name: 'Chef Sorin', niche: 'Restaurant', nicheV: 'gold' as const, stack: 'Imagen3·Gemini·STT', content: '21', reach: '156k', rev: '$11,700', live: true },
            { name: 'Elena Stylist', niche: 'Salon', nicheV: 'velvet' as const, stack: 'img_edit·Bolt·TTS', content: '10', reach: '94k', rev: '$8,200', live: false },
          ].map(c => (
            <tr key={c.name} className="hover:bg-rose/[0.025]">
              <td className="px-4 py-3 text-xs border-b border-border font-bold">{c.name}</td>
              <td className="px-4 py-3 border-b border-border"><Tag variant={c.nicheV}>{c.niche}</Tag></td>
              <td className="px-4 py-3 border-b border-border text-[10px] font-mono-label text-muted-foreground">{c.stack}</td>
              <td className="px-4 py-3 border-b border-border text-xs">{c.content}</td>
              <td className="px-4 py-3 border-b border-border text-xs">{c.reach}</td>
              <td className="px-4 py-3 border-b border-border text-xs font-bold text-rose-2">{c.rev}</td>
              <td className="px-4 py-3 border-b border-border">
                {c.live ? <Tag variant="live">● LIVE</Tag> : <Tag variant="muted">⊘ IDLE</Tag>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </VRCard>
  </div>
);

export default DashboardPage;
