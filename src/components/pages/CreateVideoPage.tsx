import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const CreateVideoPage: React.FC = () => {
  const [scenes, setScenes] = useState([
    { id: 1, character: 'Luna Velez', bg: 'Fashion Studio', script: 'Summer collection just dropped — three looks, one vibe.', motion: 'Dynamic' },
  ]);

  const addScene = () => {
    setScenes(prev => [...prev, { id: prev.length + 1, character: 'Luna Velez', bg: 'Custom', script: '', motion: 'Subtle' }]);
    toast('Scene added', { description: 'Configure your new scene below' });
  };

  return (
    <div className="animate-fade-up">
      <PageHeader title="Create" em="Video" sub="video_spark · Veo · Gemini script · audio_spark TTS · speech_to_text subtitles">
        <VRButton variant="ghost">Templates</VRButton>
        <VRButton>▶ Generate Video</VRButton>
      </PageHeader>

      <div className="grid grid-cols-[1fr_1.4fr] gap-5">
        {/* Left — Project Setup & Scenes */}
        <div className="space-y-5">
          <VRCard title="Project Setup" badge={<Tag variant="velvet">New Project</Tag>}>
            <div className="space-y-3.5">
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Video Title</label>
                <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a" placeholder="e.g. Summer Collection Reveal" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Aspect Ratio</label>
                  <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                    <option>9:16 Vertical (TikTok/Reels)</option>
                    <option>16:9 Horizontal (YouTube)</option>
                    <option>1:1 Square</option>
                    <option>4:5 Portrait</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Duration</label>
                  <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                    <option>15s Short</option>
                    <option>30s Standard</option>
                    <option>60s Extended</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>
            </div>
          </VRCard>

          <VRCard title="AI Script Generator" badge={<Tag variant="gold">Gemini Spark</Tag>}>
            <div className="space-y-3.5">
              <div>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Topic / Brief</label>
                <textarea className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans min-h-[70px] resize-y focus:outline-none focus:border-niche-a" placeholder="e.g. Summer fashion collection launch — 3 terracotta outfits" />
              </div>
              <VRButton className="w-full justify-center !py-2.5" onClick={() => toast('✦ Script Generated', { description: 'Gemini Spark created a 3-scene script based on your brief' })}>
                ✦ Generate Script — Gemini
              </VRButton>
            </div>
          </VRCard>

          {/* Scenes */}
          <VRCard title="Scene Builder" badge={<Tag variant="rose">{scenes.length} scenes</Tag>}>
            <div className="space-y-3">
              {scenes.map((scene, i) => (
                <div key={scene.id} className="bg-s2 border border-border rounded-xl p-3.5 relative">
                  <div className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-2.5">Scene {i + 1}</div>
                  <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                    <div>
                      <label className="text-[8px] font-mono-label text-muted-foreground mb-1 block">Character</label>
                      <select className="w-full bg-s1 border border-border rounded-lg px-2.5 py-1.5 text-[12px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                        <option>Luna Velez</option><option>Chef Sorin</option><option>Marco Vitale</option><option>Elena Stylist</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[8px] font-mono-label text-muted-foreground mb-1 block">Motion Style</label>
                      <select className="w-full bg-s1 border border-border rounded-lg px-2.5 py-1.5 text-[12px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                        <option>Static</option><option>Subtle Movement</option><option>Dynamic</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[8px] font-mono-label text-muted-foreground mb-1 block">Script / Dialogue</label>
                    <textarea className="w-full bg-s1 border border-border rounded-lg px-2.5 py-1.5 text-[12px] text-foreground font-sans min-h-[50px] resize-y focus:outline-none focus:border-niche-a" defaultValue={scene.script} />
                  </div>
                </div>
              ))}
              <button onClick={addScene} className="w-full py-2.5 border border-dashed border-border-hover rounded-xl text-[11px] font-bold text-muted-foreground hover:text-foreground hover:border-niche-a transition-all">
                + Add Scene
              </button>
            </div>
          </VRCard>
        </div>

        {/* Right — Preview & Progress */}
        <div className="space-y-5">
          <VRCard title="Video Preview" badge={<Tag variant="live">● Preview</Tag>}>
            <div className="aspect-[9/16] max-h-[400px] bg-gradient-to-br from-s2 to-s3 rounded-xl border border-border flex flex-col items-center justify-center gap-3">
              <span className="text-[48px]">🎬</span>
              <span className="text-xs font-bold text-muted-foreground">Preview will appear here</span>
              <span className="text-[10px] text-muted-foreground font-mono-label">Generate video to see preview</span>
            </div>
          </VRCard>

          <VRCard title="Generation Progress" badge={<Tag variant="velvet">Pipeline</Tag>}>
            <div className="flex items-center gap-2 mb-4">
              {['Script', 'Visuals', 'Audio', 'Render'].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold font-mono-label
                      ${i === 0 ? 'bg-gradient-to-br from-niche-a to-niche-b text-primary-foreground' : 'bg-s2 border border-border text-muted-foreground'}`}>
                      {i + 1}
                    </div>
                    <span className="text-[9px] font-mono-label text-muted-foreground">{step}</span>
                  </div>
                  {i < 3 && <div className="flex-1 h-px bg-border -mt-4" />}
                </React.Fragment>
              ))}
            </div>
            <VRButton className="w-full justify-center !py-3" onClick={() => toast('▶ Video Generation Started!', { description: 'Script → Visuals → Audio → Render · Estimated: 3-5 min' })}>
              ▶ Generate Video
            </VRButton>
          </VRCard>

          <VRCard title="Export Options" bodyClassName="px-5 py-3.5">
            <div className="grid grid-cols-3 gap-2">
              {['720p Draft', '1080p HD', '4K Ultra'].map((q, i) => (
                <button key={q} className={`py-2.5 rounded-lg text-[11px] font-bold border transition-all text-center
                  ${i === 1 ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover'}`}>
                  {q}
                </button>
              ))}
            </div>
          </VRCard>
        </div>
      </div>

      {/* Timeline */}
      <VRCard title="Timeline" badge={<Tag variant="muted">Drag to reorder</Tag>}>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {scenes.map((scene, i) => (
            <div key={scene.id} className="min-w-[140px] bg-s2 border border-border rounded-lg p-3 text-center cursor-grab shrink-0 hover:border-niche-a transition-all">
              <div className="text-[9px] font-mono-label text-muted-foreground mb-1">Scene {i + 1}</div>
              <div className="text-[11px] font-bold truncate">{scene.character}</div>
              <div className="text-[9px] text-muted-foreground font-mono-label mt-1">{scene.motion}</div>
            </div>
          ))}
          <button onClick={addScene} className="min-w-[80px] border border-dashed border-border-hover rounded-lg flex items-center justify-center text-muted-foreground hover:text-niche-a hover:border-niche-a transition-all shrink-0">
            <span className="text-lg">+</span>
          </button>
        </div>
      </VRCard>
    </div>
  );
};

export default CreateVideoPage;
