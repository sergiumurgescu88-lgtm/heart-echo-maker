import React from 'react';
import { useNiche } from '@/contexts/NicheContext';
import { nicheData } from '@/data/nicheData';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const heatStyles: Record<string, string> = {
  fire: 'bg-red-500/15 text-red-300',
  hot: 'bg-amber-500/15 text-amber-300',
  rising: 'bg-green-500/15 text-green-300',
};

const MomentumPage: React.FC = () => {
  const { nicheLabel, niche } = useNiche();
  const data = nicheData[niche];

  return (
    <div className="animate-fade-up">
      <PageHeader title="Momentum" em="Mode" sub="Real-time trend monitoring · AI draft generation · Gemini Spark">
        <div className="flex items-center gap-1.5 text-[9px] font-mono-label text-red-300 tracking-[0.12em]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-live-pulse inline-block" /> SCANNING LIVE
        </div>
        <VRButton>⚡ Generate All Drafts</VRButton>
      </PageHeader>

      <div className="grid grid-cols-[1.6fr_1fr] gap-5">
        <div className="space-y-5">
          <VRCard title={`Trending Now — ${nicheLabel}`} badge={<Tag variant="live">● REAL-TIME</Tag>} bodyClassName="px-5 py-3.5">
            <div className="space-y-2.5">
              {data.trends.map((t, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-[10px] bg-s2 border border-border transition-all hover:border-border-hover hover:translate-x-[3px] cursor-pointer relative overflow-hidden">
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-niche-a to-niche-b" />
                  <span className={`text-[9px] font-mono-label font-bold px-1.5 py-0.5 rounded tracking-wide shrink-0 ${heatStyles[t.hclass]}`}>{t.heat}</span>
                  <div className="flex-1">
                    <div className="text-xs font-bold mb-[3px]">{t.t}</div>
                    <div className="text-[10px] text-muted-foreground font-mono-label">{t.m}</div>
                    <div className="text-[10px] text-niche-a mt-1.5 italic">{t.ai}</div>
                  </div>
                </div>
              ))}
            </div>
          </VRCard>

          <VRCard title="Auto-Draft from Trend" badge={<Tag variant="velvet">Gemini Spark</Tag>}>
            <div className="space-y-3.5">
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Trend Selected</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  {data.trends.map((t, i) => <option key={i}>{t.t.split('·')[0].trim()} ({t.heat})</option>)}
                </select>
              </div>
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Gemini Draft Preview</label>
                <div className="bg-s2 border border-border rounded-lg p-3 text-[11px] font-mono-label text-muted-foreground leading-relaxed">
                  [HOOK — 0:00-0:03]<br />
                  "Three outfits. One color. Summer 2026 defined."<br /><br />
                  [VISUAL — Character in setting, rooftop]<br /><br />
                  [CTA] "Shop the edit → link in bio"<br />
                  <span className="text-niche-a text-[9px]">✦ Confidence: 89% · Predicted reach: 420-680k</span>
                </div>
              </div>
              <VRButton className="w-full justify-center !py-3" onClick={() => toast('⚡ Momentum Draft Sent!', { description: 'Content queued for render in Studio → Veo' })}>
                ⚡ Accept & Generate
              </VRButton>
            </div>
          </VRCard>
        </div>

        <VRCard title="Momentum History" bodyClassName="px-5 py-3.5">
          <ActivityItem icon="🔥" iconBg="rgba(212,84,122,0.12)" iconColor="hsl(var(--rose2))" title="Terracotta trend detected" meta="AI draft accepted · 3 reels generated · 2.4M reach" time="2d" />
          <ActivityItem icon="👨‍🍳" iconBg="rgba(196,154,60,0.12)" iconColor="hsl(var(--gold2))" title="World Pasta Day — Chef Sorin" meta="Auto-generated · 156k views · +340% reservations" time="5d" />
          <ActivityItem icon="💅" iconBg="rgba(122,58,138,0.15)" iconColor="hsl(var(--velvet2))" title="Bob Cut trend — Elena Salon" meta="3 before/after videos · 94k reach" time="1w" />
          <ActivityItem icon="💪" iconBg="rgba(42,154,106,0.12)" iconColor="#6ee7b7" title="75 Hard trend — Marco Fitness" meta="Clone Dance workout video · 384 PPV sign-ups" time="2w" />
          <ActivityItem icon="🌙" iconBg="rgba(212,84,122,0.12)" iconColor="hsl(var(--rose2))" title="Quiet Luxury — Luna" meta="Old Money edit · 2.1M impressions · 12% follower growth" time="3w" />
        </VRCard>
      </div>
    </div>
  );
};

export default MomentumPage;
