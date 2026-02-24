import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const FaceSwapPage: React.FC = () => {
  const [mode, setMode] = useState<'image' | 'video'>('image');

  return (
    <div className="animate-fade-up">
      <PageHeader title="Face" em="Swap" sub="image_edit_auto · Veo · document_scanner face detection · Gemini blending">
        <VRButton variant="ghost">Gallery</VRButton>
        <VRButton>🎭 New Swap</VRButton>
      </PageHeader>

      {/* Mode Toggle */}
      <div className="flex gap-2 mb-5">
        {[['image', '🖼 Image Swap'], ['video', '🎬 Video Swap']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setMode(id as 'image' | 'video')}
            className={`px-4 py-2 rounded-lg text-[12px] font-bold border transition-all
              ${mode === id ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover hover:text-foreground'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_1.4fr] gap-5">
        {/* Left — Pipeline */}
        <div className="space-y-5">
          <VRCard title="Pipeline" badge={<Tag variant="velvet">3 Steps</Tag>}>
            <div className="flex items-center my-4">
              {[
                { icon: '📤', label: 'Source', state: 'done' },
                { icon: '🎭', label: 'Detect', state: 'active' },
                { icon: '✨', label: 'Blend', state: '' },
              ].map((s, i, arr) => (
                <React.Fragment key={s.label}>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center text-sm transition-all
                      ${s.state === 'done' ? 'bg-gradient-to-br from-niche-a to-niche-b shadow-[0_4px_16px_hsl(var(--niche-glow))]' :
                        s.state === 'active' ? 'bg-s2 border border-niche-a shadow-[0_0_0_3px_hsl(var(--niche-glow))]' :
                          'bg-s2 border border-border'}`}>
                      {s.icon}
                    </div>
                    <span className="text-[9px] font-mono-label text-muted-foreground text-center">{s.label}</span>
                  </div>
                  {i < arr.length - 1 && <div className="flex-1 h-px bg-border -mt-4" />}
                </React.Fragment>
              ))}
            </div>

            <div className="space-y-3.5">
              <div className="border-[1.5px] border-dashed border-border-hover rounded-xl p-6 text-center cursor-pointer transition-all hover:border-niche-a hover:bg-niche-glow bg-s2">
                <div className="text-[28px] mb-2">📤</div>
                <div className="text-xs font-bold mb-1">Upload source {mode === 'image' ? 'image' : 'video'}</div>
                <div className="text-[10px] text-muted-foreground font-mono-label">document_scanner detects faces automatically</div>
              </div>

              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Target Face — Character</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  <option>Luna Velez — Fashion</option>
                  <option>Chef Sorin — Restaurant</option>
                  <option>Marco Vitale — Fitness</option>
                  <option>Elena Stylist — Salon</option>
                </select>
              </div>

              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Blending Quality</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  <option>Standard — Fast</option>
                  <option>High Quality — Gemini Blending</option>
                  <option>Ultra — Color + Lighting Match</option>
                </select>
              </div>

              <VRButton className="w-full justify-center !py-3" onClick={() => toast('🎭 Face Swap Started!', { description: mode === 'image' ? 'image_edit_auto processing...' : 'Veo + image_edit_auto processing frames...' })}>
                🎭 Start Face Swap
              </VRButton>
            </div>
          </VRCard>

          <VRCard title="AI Detection" badge={<Tag variant="rose">document_scanner</Tag>} bodyClassName="px-5 py-3.5">
            <div className="text-[10px] text-muted-foreground font-mono-label leading-relaxed mb-3">
              <span className="text-niche-a">document_scanner</span> automatically detects faces, bounding boxes and landmarks. <span className="text-niche-a">spark (Gemini)</span> handles natural blending, skin color matching and lighting adjustment.
            </div>
            <div className="space-y-1.5">
              {['Auto face detection (bounding boxes)', 'Skin tone matching', 'Lighting angle adjustment', 'Natural edge blending'].map(f => (
                <div key={f} className="flex items-center gap-2 text-[11px] font-mono-label px-2.5 py-1.5 rounded-md bg-s2 text-muted-foreground">
                  <span className="w-[5px] h-[5px] rounded-full bg-niche-a shrink-0" />{f}
                </div>
              ))}
            </div>
          </VRCard>
        </div>

        {/* Right — Preview & Gallery */}
        <div className="space-y-5">
          <VRCard title="Preview — Before & After" badge={<Tag variant="velvet">Side by Side</Tag>}>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] bg-gradient-to-br from-s2 to-s3 rounded-xl border border-border flex flex-col items-center justify-center gap-2">
                <span className="text-[36px]">👤</span>
                <span className="text-[10px] text-muted-foreground font-mono-label">Original</span>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-s2 to-s3 rounded-xl border border-border flex flex-col items-center justify-center gap-2">
                <span className="text-[36px]">🎭</span>
                <span className="text-[10px] text-muted-foreground font-mono-label">Swapped</span>
              </div>
            </div>
          </VRCard>

          <VRCard title="Recent Swaps" badge={<Tag variant="rose">Gallery</Tag>} bodyClassName="px-5 py-3.5">
            <ActivityItem icon="🌙" iconBg="transparent" iconColor="inherit" title="Luna → Magazine Cover" meta="image_edit_auto · High Quality · 2.4s render" time="1h" />
            <ActivityItem icon="👨‍🍳" iconBg="transparent" iconColor="inherit" title="Chef Sorin → Food Ad" meta="image_edit_auto · Ultra · 3.1s render" time="3h" />
            <ActivityItem icon="💪" iconBg="transparent" iconColor="inherit" title="Marco → Gym Promo Video" meta="Veo + image_edit_auto · 24 frames · 45s render" time="1d" />
          </VRCard>
        </div>
      </div>
    </div>
  );
};

export default FaceSwapPage;
