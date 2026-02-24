import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const GenerationPage: React.FC = () => {
  const [activePill, setActivePill] = useState('Reel');
  const pills = ['🎬 Reel', '🖼 Post', '⭕ Story', '✍️ Caption', '📧 Email'];

  return (
    <div className="animate-fade-up">
      <PageHeader title="Content" em="Generation" sub="Gemini · Imagen 3 · Veo · audio_spark · speech_to_text · Niche-Aware">
        <VRButton variant="ghost">Queue (12)</VRButton>
        <VRButton>▶ Bulk Generate</VRButton>
      </PageHeader>

      <div className="grid grid-cols-[1fr_1.6fr] gap-5">
        <VRCard title="Generator" badge={<Tag variant="velvet">9 Prompts Ready</Tag>}>
          <div className="flex gap-1.5 flex-wrap mb-3.5">
            {pills.map(p => (
              <button key={p} onClick={() => setActivePill(p)} className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all tracking-wide
                ${activePill === p ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover hover:text-foreground'}`}>{p}</button>
            ))}
          </div>
          <div className="space-y-3.5">
            <div>
              <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Character</label>
              <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                <option>Luna Velez — Fashion</option><option>Chef Sorin — Restaurant</option><option>Marco Vitale — Fitness</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Aspect Ratio</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  <option>9:16 TikTok/Reels</option><option>1:1 Instagram</option><option>16:9 YouTube</option>
                </select>
              </div>
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Format</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  <option>Product Reveal</option><option>Day-in-Life</option><option>Tutorial</option><option>Trend Reaction</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Campaign Brief</label>
              <textarea className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans min-h-[80px] resize-y focus:outline-none focus:border-niche-a" placeholder="e.g. Summer collection launch — terracotta dress..." />
            </div>
            <VRButton className="w-full justify-center !py-3" onClick={() => toast('⬡ Content Generating...', { description: 'Gemini → Imagen 3 → Veo pipeline started' })}>
              ⬡ Generate Content
            </VRButton>
          </div>
        </VRCard>

        <VRCard title="Output Queue" badge={<Tag variant="live">3 Active</Tag>} bodyClassName="px-5 py-3.5">
          <div className="flex items-start gap-3 py-3 border-b border-border">
            <span className="text-lg">🎬</span>
            <div className="flex-1">
              <div className="text-xs font-semibold">Summer Reel — Luna 9:16</div>
              <div className="text-[10px] text-muted-foreground font-mono-label">Rendering · 67% · Veo</div>
              <div className="bg-s2 rounded-sm overflow-hidden h-[3px] mt-1.5">
                <div className="h-full w-[67%] bg-gradient-to-r from-rose to-rose-2 rounded-sm" />
              </div>
            </div>
            <Tag variant="velvet">67%</Tag>
          </div>
          <ActivityItem icon="👨‍🍳" iconBg="transparent" iconColor="inherit" title="Menu Video — Chef 16:9" meta="Queued · Imagen3 + Veo" />
          <div className="flex items-start gap-3 py-3">
            <span className="text-lg">💅</span>
            <div className="flex-1">
              <div className="text-xs font-semibold">Before & After — Elena</div>
              <div className="text-[10px] text-muted-foreground font-mono-label">Complete · Download ready</div>
            </div>
            <Tag variant="green">Done</Tag>
          </div>
        </VRCard>
      </div>
    </div>
  );
};

export default GenerationPage;
