import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const myPrompts = [
  { title: 'Summer Fashion Lookbook', category: 'Image', text: 'A {{character_name}} wearing {{style}} outfit on a rooftop at golden hour...', uses: 48, rating: 4.8 },
  { title: 'Restaurant Dish Reveal', category: 'Video', text: 'Chef {{character_name}} presents today\'s special — close-up of plating...', uses: 32, rating: 4.5 },
  { title: 'Fitness Motivation Reel', category: 'Video', text: '{{character_name}} starts workout at dawn — montage of exercises...', uses: 27, rating: 4.7 },
  { title: 'Clone Dance Template', category: 'Dance', text: 'Transfer dance from reference video to {{character_name}} in {{setting}}...', uses: 19, rating: 4.9 },
  { title: 'Before & After Beauty', category: 'Image', text: 'Split screen: left — natural, right — {{character_name}} styled with...', uses: 41, rating: 4.6 },
];

const communityPrompts = [
  { title: 'Cinematic Product Shot', category: 'Image', creator: '@visualAI', uses: 1240, rating: 4.9 },
  { title: 'Viral TikTok Hook Script', category: 'Video', creator: '@trendmaster', uses: 890, rating: 4.7 },
  { title: 'Luxury Brand Aesthetic', category: 'Scene', creator: '@luxeAI', uses: 672, rating: 4.8 },
];

const categoryColors: Record<string, 'rose' | 'velvet' | 'gold' | 'teal' | 'muted'> = {
  Image: 'rose', Video: 'velvet', Dance: 'teal', Scene: 'gold', Character: 'muted',
};

const PromptsPage: React.FC = () => {
  const [tab, setTab] = useState<'mine' | 'community'>('mine');

  return (
    <div className="animate-fade-up">
      <PageHeader title="Prompts" em="Library" sub="spark (Gemini) · bolt autocomplete · network_intelligence · Test & share prompts">
        <VRButton variant="ghost">Import</VRButton>
        <VRButton>+ Create Prompt</VRButton>
      </PageHeader>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {[['mine', 'My Prompts'], ['community', 'Community Prompts']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id as 'mine' | 'community')}
            className={`px-4 py-2 rounded-lg text-[12px] font-bold border transition-all
              ${tab === id ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover hover:text-foreground'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'mine' ? (
        <div className="grid grid-cols-[1fr_1.2fr] gap-5">
          {/* Prompt Grid */}
          <div className="space-y-3">
            {myPrompts.map(p => (
              <div key={p.title} className="bg-s1 border border-border rounded-xl p-4 cursor-pointer transition-all hover:border-niche-a hover:translate-x-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold">{p.title}</span>
                  <Tag variant={categoryColors[p.category] || 'muted'}>{p.category}</Tag>
                </div>
                <div className="text-[11px] text-muted-foreground font-mono-label leading-relaxed mb-2.5 line-clamp-2">{p.text}</div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-[9px] text-muted-foreground font-mono-label">
                    <span>Used {p.uses}×</span>
                    <span>★ {p.rating}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <button className="text-[9px] px-2 py-0.5 rounded bg-s2 border border-border text-muted-foreground hover:text-foreground transition-all font-mono-label">Copy</button>
                    <button className="text-[9px] px-2 py-0.5 rounded bg-s2 border border-border text-muted-foreground hover:text-foreground transition-all font-mono-label">Edit</button>
                    <button className="text-[9px] px-2 py-0.5 rounded bg-niche-glow border border-niche-a text-niche-a transition-all font-mono-label" onClick={() => toast('▶ Sent to Generation', { description: 'Prompt loaded in Generation Studio' })}>Use Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt Editor */}
          <VRCard title="Prompt Editor" badge={<Tag variant="velvet">Create / Edit</Tag>}>
            <div className="space-y-3.5">
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Title</label>
                <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a" placeholder="Prompt title..." />
              </div>
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Category</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  <option>Image</option><option>Video</option><option>Character</option><option>Dance</option><option>Scene</option>
                </select>
              </div>
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Prompt Text</label>
                <textarea className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-mono-label min-h-[120px] resize-y focus:outline-none focus:border-niche-a leading-relaxed" placeholder="Use {{character_name}}, {{style}}, {{setting}} as variables..." />
                <div className="text-[9px] text-muted-foreground font-mono-label mt-1">Variables: {'{{character_name}}'}, {'{{style}}'}, {'{{setting}}'}, {'{{niche}}'}</div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Privacy</label>
                  <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                    <option>Private</option><option>Public (Community)</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                <VRButton variant="ghost" className="flex-1 justify-center" onClick={() => toast('▶ Testing prompt...', { description: 'Sent to Generation for preview' })}>
                  ▶ Test Prompt
                </VRButton>
                <VRButton className="flex-1 justify-center" onClick={() => toast.success('Prompt saved!', { description: 'Added to your prompt library' })}>
                  Save Prompt
                </VRButton>
              </div>
            </div>
          </VRCard>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {communityPrompts.map(p => (
            <div key={p.title} className="bg-s1 border border-border rounded-xl p-4 cursor-pointer transition-all hover:border-niche-a hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-2">
                <Tag variant={categoryColors[p.category] || 'muted'}>{p.category}</Tag>
                <span className="text-[9px] text-muted-foreground font-mono-label">★ {p.rating}</span>
              </div>
              <div className="text-xs font-bold mb-1">{p.title}</div>
              <div className="text-[10px] text-muted-foreground font-mono-label mb-3">by {p.creator} · {p.uses} uses</div>
              <div className="flex gap-1.5">
                <VRButton variant="ghost" className="flex-1 justify-center !py-1.5 !text-[10px]">Preview</VRButton>
                <VRButton className="flex-1 justify-center !py-1.5 !text-[10px]" onClick={() => toast.success('Prompt copied!', { description: 'Added to your library' })}>Copy & Use</VRButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromptsPage;
