import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem, ProgressBar, Divider } from '@/components/ui-vr/SharedUI';

const LibraryPage: React.FC = () => {
  const [activePill, setActivePill] = useState('All');

  return (
    <div className="animate-fade-up">
      <PageHeader title="Media" em="Library" sub="847 assets · Gemini semantic search · speech_to_text index · Auto-tagged">
        <VRButton variant="ghost">Select All</VRButton>
        <VRButton>Upload</VRButton>
      </PageHeader>

      <VRCard title="" bodyClassName="px-5 py-3">
        <div className="flex gap-3 items-center">
          <span className="text-[11px] text-muted-foreground font-mono-label shrink-0">GEMINI SEMANTIC</span>
          <input className="flex-1 bg-transparent border-none text-xs text-foreground font-sans focus:outline-none" defaultValue="show all videos where character wears red" />
          <VRButton className="!py-[7px] !px-3.5 !text-[10px]">⌕ Search</VRButton>
          <div className="flex gap-1.5">
            {['All', 'Video', 'Image'].map(p => (
              <button key={p} onClick={() => setActivePill(p)} className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all
                ${activePill === p ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover'}`}>{p}</button>
            ))}
          </div>
        </div>
      </VRCard>

      <div className="grid grid-cols-[1.6fr_1fr] gap-5 mt-5">
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { emoji: '🎬', bg: 'from-[#1a0a30] to-[#0d0520]', badge: 'VIDEO' },
            { emoji: '🖼', bg: 'from-[#0f3020] to-[#051510]', badge: 'IMAGE' },
            { emoji: '👨‍🍳', bg: 'from-[#20100a] to-[#100805]', badge: 'VIDEO' },
            { emoji: '💪', bg: 'from-[#1a1030] to-[#0d0820]', badge: 'CLONE' },
            { emoji: '🌙', bg: 'from-[#2d0a1a] to-[#180510]', badge: 'IMAGE' },
            { emoji: '🎵', bg: 'from-[#0a1a20] to-[#050d10]', badge: 'AUDIO' },
            { emoji: '💅', bg: 'from-[#1a150a] to-[#0d0b05]', badge: 'IMAGE' },
            { emoji: '🧘', bg: 'from-[#0a1a1a] to-[#050d0d]', badge: 'VIDEO' },
          ].map((m, i) => (
            <div key={i} className={`aspect-square bg-gradient-to-br ${m.bg} border border-border rounded-[10px] flex items-center justify-center text-[28px] cursor-pointer relative overflow-hidden transition-all hover:border-niche-a hover:scale-[1.02]`}>
              {m.emoji}
              <span className="absolute bottom-[7px] left-[7px] bg-background/85 text-[8px] font-mono-label px-1.5 py-0.5 rounded border border-border-hover text-muted-foreground">
                {m.badge}
              </span>
            </div>
          ))}
        </div>

        <VRCard title="AI Indexing" badge={<Tag variant="velvet">Auto-tagged</Tag>} bodyClassName="px-5 py-3.5">
          <ActivityItem icon="◈" iconBg="rgba(212,84,122,0.12)" iconColor="hsl(var(--rose2))" title="document_scanner — Auto-tagging" meta="847 assets tagged · niche · character · date" />
          <ActivityItem icon="✦" iconBg="rgba(122,58,138,0.15)" iconColor="hsl(var(--velvet2))" title="speech_to_text — Transcription" meta="All videos searchable by spoken content" />
          <ActivityItem icon="⌕" iconBg="rgba(196,154,60,0.12)" iconColor="hsl(var(--gold2))" title="Gemini Semantic Search" meta='"character in red" → 12 found from audio+visual' />
          <Divider label="Storage" />
          <ProgressBar label="Video" value="284 GB" percent={57} gradient="linear-gradient(90deg,hsl(var(--rose)),hsl(var(--rose2)))" />
          <ProgressBar label="Images" value="14 GB" percent={14} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
        </VRCard>
      </div>
    </div>
  );
};

export default LibraryPage;
