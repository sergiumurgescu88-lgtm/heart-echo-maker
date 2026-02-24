import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const GenerationPage: React.FC = () => {
  const [showNegative, setShowNegative] = useState(false);

  return (
    <div className="animate-fade-up">
      <PageHeader title="Image" em="Generation" sub="image (Imagen 3) · aspect_ratio · image_edit_auto · spark prompt enhance · network_intelligence">
        <VRButton variant="ghost">History (20)</VRButton>
        <VRButton>⬡ Generate</VRButton>
      </PageHeader>

      <div className="grid grid-cols-[1fr_1.6fr] gap-5">
        {/* Left — Settings */}
        <div className="space-y-5">
          <VRCard title="Prompt" badge={<Tag variant="velvet">Imagen 3</Tag>}>
            <div className="space-y-3.5">
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Text Prompt</label>
                <textarea className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans min-h-[100px] resize-y focus:outline-none focus:border-niche-a" placeholder="Describe your AI influencer or scene..." />
              </div>
              <button onClick={() => setShowNegative(!showNegative)} className="text-[10px] text-muted-foreground font-mono-label hover:text-foreground transition-all">
                {showNegative ? '▼' : '▶'} Negative Prompt
              </button>
              {showNegative && (
                <textarea className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans min-h-[60px] resize-y focus:outline-none focus:border-niche-a" placeholder="What to avoid: blurry, low quality, distorted..." />
              )}
              <VRButton variant="ghost" className="w-full justify-center !text-[10px]" onClick={() => toast('✦ Prompt Enhanced', { description: 'spark (Gemini) improved your prompt for better results' })}>
                ✦ Enhance Prompt — Gemini
              </VRButton>
            </div>
          </VRCard>

          <VRCard title="Settings" badge={<Tag variant="muted">Parameters</Tag>}>
            <div className="space-y-3.5">
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Character</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  <option>None (Free generation)</option>
                  <option>Luna Velez — Fashion</option>
                  <option>Chef Sorin — Restaurant</option>
                  <option>Marco Vitale — Fitness</option>
                  <option>Elena Stylist — Salon</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Aspect Ratio</label>
                  <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                    <option>1:1 Square</option><option>9:16 Vertical</option><option>16:9 Horizontal</option><option>4:5 Portrait</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Quality</label>
                  <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                    <option>Draft — Fast</option><option>Standard</option><option>HD — Best</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Seed</label>
                <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a" placeholder="Random (leave empty)" />
              </div>
              <VRButton className="w-full justify-center !py-3" onClick={() => toast('⬡ Generating Image...', { description: 'Imagen 3 processing · HD Quality · Estimated: 8-12s' })}>
                ⬡ Generate Image
              </VRButton>
            </div>
          </VRCard>

          <VRCard title="Generation History" badge={<Tag variant="muted">Recent 20</Tag>} bodyClassName="px-5 py-3.5">
            {[
              { title: 'Luna rooftop golden hour', time: '2m', status: 'done' },
              { title: 'Chef Sorin plating pasta', time: '14m', status: 'done' },
              { title: 'Fitness studio dramatic', time: '1h', status: 'done' },
            ].map((h, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-b-0 cursor-pointer hover:bg-s2 rounded transition-all px-1">
                <div className="w-8 h-8 bg-s2 rounded-lg border border-border flex items-center justify-center text-[14px]">🖼</div>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold truncate">{h.title}</div>
                  <div className="text-[9px] text-muted-foreground font-mono-label">{h.time} ago</div>
                </div>
                <Tag variant="green">✓</Tag>
              </div>
            ))}
          </VRCard>
        </div>

        {/* Right — Results */}
        <VRCard title="Results" badge={<Tag variant="live">● Ready</Tag>}>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { bg: 'from-[#1a0a30] to-[#0d0520]' },
              { bg: 'from-[#0f3020] to-[#051510]' },
              { bg: 'from-[#2d0a1a] to-[#180510]' },
              { bg: 'from-[#1a1030] to-[#0d0820]' },
            ].map((r, i) => (
              <div key={i} className={`aspect-square bg-gradient-to-br ${r.bg} rounded-xl border border-border flex items-center justify-center text-[40px] cursor-pointer relative overflow-hidden transition-all hover:border-niche-a hover:scale-[1.02] group`}>
                🖼
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2">
                  <button className="bg-s2 border border-border rounded-lg px-2.5 py-1.5 text-[10px] font-bold text-foreground hover:bg-niche-glow transition-all">💾 Save</button>
                  <button className="bg-s2 border border-border rounded-lg px-2.5 py-1.5 text-[10px] font-bold text-foreground hover:bg-niche-glow transition-all">🎬 Video</button>
                  <button className="bg-s2 border border-border rounded-lg px-2.5 py-1.5 text-[10px] font-bold text-foreground hover:bg-niche-glow transition-all">🖼 Edit</button>
                  <button className="bg-s2 border border-border rounded-lg px-2.5 py-1.5 text-[10px] font-bold text-foreground hover:bg-niche-glow transition-all">🔄</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-muted-foreground font-mono-label text-center">
            Hover to: <span className="text-foreground">Save to Library</span> · <span className="text-foreground">Use in Video</span> · <span className="text-foreground">Edit in Image Editor</span> · <span className="text-foreground">Regenerate</span>
          </div>
        </VRCard>
      </div>
    </div>
  );
};

export default GenerationPage;
