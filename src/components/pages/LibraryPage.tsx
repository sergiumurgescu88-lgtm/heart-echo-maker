import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem, ProgressBar, Divider } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const mediaAssets = [
  { emoji: '🎬', bg: 'from-[#1a0a30] to-[#0d0520]', badge: 'VIDEO', name: 'Luna Summer Reel', size: '24MB', date: 'Feb 23' },
  { emoji: '🖼', bg: 'from-[#0f3020] to-[#051510]', badge: 'IMAGE', name: 'Chef Portrait HD', size: '4.2MB', date: 'Feb 22' },
  { emoji: '👨‍🍳', bg: 'from-[#20100a] to-[#100805]', badge: 'VIDEO', name: 'Pasta Recipe 30s', size: '18MB', date: 'Feb 21' },
  { emoji: '💪', bg: 'from-[#1a1030] to-[#0d0820]', badge: 'CLONE', name: 'Marco Dance', size: '32MB', date: 'Feb 20' },
  { emoji: '🌙', bg: 'from-[#2d0a1a] to-[#180510]', badge: 'IMAGE', name: 'Luna Lookbook', size: '8.1MB', date: 'Feb 19' },
  { emoji: '🎵', bg: 'from-[#0a1a20] to-[#050d10]', badge: 'AUDIO', name: 'Voice Pack TTS', size: '2.4MB', date: 'Feb 18' },
  { emoji: '💅', bg: 'from-[#1a150a] to-[#0d0b05]', badge: 'IMAGE', name: 'Before & After', size: '6.7MB', date: 'Feb 17' },
  { emoji: '🧘', bg: 'from-[#0a1a1a] to-[#050d0d]', badge: 'VIDEO', name: 'Wellness Session', size: '28MB', date: 'Feb 16' },
  { emoji: '🎭', bg: 'from-[#1a0820] to-[#0d0514]', badge: 'IMAGE', name: 'Face Swap Result', size: '3.8MB', date: 'Feb 15' },
  { emoji: '📸', bg: 'from-[#1a1505] to-[#0d0b02]', badge: 'IMAGE', name: 'Product Shot', size: '5.2MB', date: 'Feb 14' },
  { emoji: '🎬', bg: 'from-[#100820] to-[#08041a]', badge: 'VIDEO', name: 'Fashion Show', size: '41MB', date: 'Feb 13' },
  { emoji: '🖼', bg: 'from-[#0d1a0a] to-[#050d05]', badge: 'IMAGE', name: 'Gym Scene', size: '7.3MB', date: 'Feb 12' },
];

const LibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [bulkSelect, setBulkSelect] = useState(false);
  const tabs = ['All', 'Images', 'Videos', 'Audios', 'Characters'];

  return (
    <div className="animate-fade-up">
      <PageHeader title="Media" em="Library" sub="847 assets · document_scanner auto-tag · speech_to_text index · Gemini semantic search">
        <VRButton variant="ghost" onClick={() => setBulkSelect(!bulkSelect)}>
          {bulkSelect ? '✓ Done' : 'Select'}
        </VRButton>
        <VRButton variant="ghost" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
          {viewMode === 'grid' ? '☰ List' : '⊞ Grid'}
        </VRButton>
        <VRButton>📤 Upload</VRButton>
      </PageHeader>

      {/* Search */}
      <VRCard title="" bodyClassName="px-5 py-3">
        <div className="flex gap-3 items-center">
          <span className="text-[11px] text-niche-a font-mono-label shrink-0">✦ GEMINI SEMANTIC</span>
          <input className="flex-1 bg-transparent border-none text-xs text-foreground font-sans focus:outline-none" placeholder='Search: "all videos where character wears red"' />
          <VRButton className="!py-[7px] !px-3.5 !text-[10px]">⌕ Search</VRButton>
        </div>
      </VRCard>

      {/* Tabs & Filters */}
      <div className="flex gap-2 mt-4 mb-5 items-center">
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)} className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border transition-all
            ${activeTab === t ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover'}`}>{t}</button>
        ))}
        <div className="ml-auto flex gap-2">
          <select className="bg-s2 border border-border rounded-lg px-2.5 py-1.5 text-[11px] text-foreground font-sans focus:outline-none focus:border-niche-a">
            <option>All Sources</option><option>Generated</option><option>Uploaded</option><option>Purchased</option>
          </select>
          <select className="bg-s2 border border-border rounded-lg px-2.5 py-1.5 text-[11px] text-foreground font-sans focus:outline-none focus:border-niche-a">
            <option>Newest First</option><option>Oldest</option><option>Largest</option><option>Name A-Z</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_300px] gap-5">
        {/* Asset Grid */}
        <div>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-4 gap-2.5">
              {mediaAssets.map((m, i) => (
                <div key={i} className={`aspect-square bg-gradient-to-br ${m.bg} border border-border rounded-[10px] flex flex-col items-center justify-center text-[28px] cursor-pointer relative overflow-hidden transition-all hover:border-niche-a hover:scale-[1.02] group`}>
                  {bulkSelect && (
                    <div className="absolute top-2 left-2 z-10 w-5 h-5 rounded border border-border bg-s2 flex items-center justify-center text-[10px] text-muted-foreground">
                      ☐
                    </div>
                  )}
                  {m.emoji}
                  <span className="absolute bottom-[7px] left-[7px] bg-background/85 text-[8px] font-mono-label px-1.5 py-0.5 rounded border border-border-hover text-muted-foreground">
                    {m.badge}
                  </span>
                  {/* Hover actions */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-1.5">
                    <span className="text-[10px] font-bold truncate max-w-[90%]">{m.name}</span>
                    <span className="text-[9px] text-muted-foreground font-mono-label">{m.size} · {m.date}</span>
                    <div className="flex gap-1 mt-1">
                      <button className="bg-s2 border border-border rounded px-2 py-1 text-[9px] font-mono-label text-muted-foreground hover:text-foreground">👁</button>
                      <button className="bg-s2 border border-border rounded px-2 py-1 text-[9px] font-mono-label text-muted-foreground hover:text-foreground">⬇</button>
                      <button className="bg-s2 border border-border rounded px-2 py-1 text-[9px] font-mono-label text-muted-foreground hover:text-foreground">🖼</button>
                      <button className="bg-s2 border border-border rounded px-2 py-1 text-[9px] font-mono-label text-muted-foreground hover:text-foreground">🗑</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1.5">
              {mediaAssets.map((m, i) => (
                <div key={i} className="flex items-center gap-3 bg-s1 border border-border rounded-lg px-3.5 py-2.5 cursor-pointer hover:border-niche-a transition-all">
                  <span className="text-xl">{m.emoji}</span>
                  <Tag variant="muted">{m.badge}</Tag>
                  <span className="text-xs font-bold flex-1">{m.name}</span>
                  <span className="text-[10px] text-muted-foreground font-mono-label">{m.size}</span>
                  <span className="text-[10px] text-muted-foreground font-mono-label">{m.date}</span>
                  <div className="flex gap-1">
                    <button className="text-[10px] px-2 py-0.5 rounded bg-s2 border border-border text-muted-foreground hover:text-foreground font-mono-label">Preview</button>
                    <button className="text-[10px] px-2 py-0.5 rounded bg-s2 border border-border text-muted-foreground hover:text-foreground font-mono-label">⬇</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          <VRCard title="Folders" badge={<Tag variant="muted">Albums</Tag>}>
            <div className="space-y-1.5">
              {['All Assets (847)', 'Fashion Content (234)', 'Restaurant (189)', 'Fitness (156)', 'Clone Dance (89)', 'PPV Content (42)', 'Face Swaps (18)'].map(f => (
                <button key={f} className="w-full text-left px-2.5 py-2 rounded-lg text-[11px] font-semibold bg-s2 border border-border text-muted-foreground hover:text-foreground hover:border-border-hover transition-all flex items-center gap-2">
                  <span className="text-[12px]">📁</span>{f}
                </button>
              ))}
            </div>
          </VRCard>

          <VRCard title="AI Indexing" badge={<Tag variant="velvet">Auto-tagged</Tag>} bodyClassName="px-4 py-3">
            <ActivityItem icon="◈" iconBg="rgba(212,84,122,0.12)" iconColor="hsl(var(--rose2))" title="document_scanner — Auto-tagging" meta="847 assets tagged · niche · character · date" />
            <ActivityItem icon="✦" iconBg="rgba(122,58,138,0.15)" iconColor="hsl(var(--velvet2))" title="speech_to_text — Transcription" meta="All videos searchable by spoken content" />
            <ActivityItem icon="⌕" iconBg="rgba(196,154,60,0.12)" iconColor="hsl(var(--gold2))" title="Gemini Semantic Search" meta='"character in red" → 12 found from audio+visual' />
          </VRCard>

          <VRCard title="Storage" badge={<Tag variant="muted">Usage</Tag>}>
            <ProgressBar label="Video" value="284 GB" percent={57} gradient="linear-gradient(90deg,hsl(var(--rose)),hsl(var(--rose2)))" />
            <ProgressBar label="Images" value="14 GB" percent={14} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
            <ProgressBar label="Audio" value="3.2 GB" percent={6} gradient="linear-gradient(90deg,hsl(var(--gold)),hsl(var(--gold2)))" />
            <Divider label="" />
            <div className="flex justify-between text-[11px] font-mono-label">
              <span className="text-muted-foreground">Total Used</span>
              <span className="font-bold">301 GB / 500 GB</span>
            </div>
          </VRCard>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
