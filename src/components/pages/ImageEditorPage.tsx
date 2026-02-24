import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const tools = [
  { icon: '✂️', label: 'Select / Crop', id: 'crop' },
  { icon: '🎨', label: 'AI Inpaint', id: 'inpaint' },
  { icon: '🔲', label: 'AI Outpaint', id: 'outpaint' },
  { icon: '🧹', label: 'Remove BG', id: 'rembg' },
  { icon: '🗑', label: 'Object Remove', id: 'objrem' },
  { icon: '🎛', label: 'Color Correct', id: 'color' },
  { icon: '✍️', label: 'Text / Logo', id: 'text' },
  { icon: '🌈', label: 'Filters & LUTs', id: 'filters' },
];

const filters = ['Cinematic', 'Fashion', 'Warm', 'Cool', 'Vintage', 'B&W'];

const ImageEditorPage: React.FC = () => {
  const [activeTool, setActiveTool] = useState('crop');
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <div className="animate-fade-up">
      <PageHeader title="Image" em="Editor" sub="image_edit_auto · Inpaint · Outpaint · Remove BG · Filters · document_scanner AI">
        <VRButton variant="ghost">Undo</VRButton>
        <VRButton variant="ghost">Redo</VRButton>
        <VRButton>💾 Save to Library</VRButton>
      </PageHeader>

      <div className="grid grid-cols-[64px_1fr_280px] gap-4">
        {/* Left Toolbar */}
        <div className="flex flex-col gap-1.5">
          {tools.map(t => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTool(t.id);
                toast(`${t.label} active`, { description: 'Click on canvas to apply' });
              }}
              className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-0.5 text-center transition-all border
                ${activeTool === t.id
                  ? 'bg-niche-glow border-niche-a text-niche-a shadow-[0_0_12px_hsl(var(--niche-glow))]'
                  : 'bg-s2 border-border text-muted-foreground hover:border-border-hover hover:text-foreground'}`}
            >
              <span className="text-base">{t.icon}</span>
              <span className="text-[7px] font-mono-label leading-tight">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Canvas */}
        <VRCard title="Canvas" badge={<Tag variant="velvet">{tools.find(t => t.id === activeTool)?.label}</Tag>}>
          <div className="aspect-[4/3] bg-gradient-to-br from-s2 to-s3 rounded-xl border border-border flex flex-col items-center justify-center gap-3 relative">
            <div className="border-[1.5px] border-dashed border-border-hover rounded-xl p-8 text-center cursor-pointer hover:border-niche-a hover:bg-niche-glow transition-all">
              <div className="text-[32px] mb-2">🖼</div>
              <div className="text-xs font-bold mb-1">Drop image here or click to upload</div>
              <div className="text-[10px] text-muted-foreground font-mono-label">JPG · PNG · WEBP · or select from Media Library</div>
            </div>
            <div className="absolute bottom-3 flex gap-2">
              <button className="bg-s2 border border-border rounded-lg px-2.5 py-1 text-[10px] font-mono-label text-muted-foreground hover:text-foreground transition-all">Zoom +</button>
              <button className="bg-s2 border border-border rounded-lg px-2.5 py-1 text-[10px] font-mono-label text-muted-foreground hover:text-foreground transition-all">Grid</button>
              <button className="bg-s2 border border-border rounded-lg px-2.5 py-1 text-[10px] font-mono-label text-muted-foreground hover:text-foreground transition-all">Fit</button>
            </div>
          </div>
        </VRCard>

        {/* Right Panel */}
        <div className="space-y-4">
          {activeTool === 'inpaint' && (
            <VRCard title="AI Inpaint" badge={<Tag variant="rose">image_edit_auto</Tag>}>
              <div className="space-y-3">
                <div className="text-[10px] text-muted-foreground font-mono-label">Paint over area to replace, then describe what to generate.</div>
                <textarea className="w-full bg-s2 border border-border rounded-lg px-3 py-2 text-[12px] text-foreground font-sans min-h-[60px] resize-y focus:outline-none focus:border-niche-a" placeholder="e.g. A red dress instead of blue" />
                <VRButton className="w-full justify-center !py-2.5 !text-[11px]">🎨 Regenerate Region</VRButton>
              </div>
            </VRCard>
          )}

          {activeTool === 'outpaint' && (
            <VRCard title="AI Outpaint" badge={<Tag variant="velvet">Extend</Tag>}>
              <div className="space-y-3">
                <div className="text-[10px] text-muted-foreground font-mono-label">Extend image borders with AI-generated content.</div>
                <div className="grid grid-cols-2 gap-2">
                  {['Top', 'Bottom', 'Left', 'Right'].map(d => (
                    <button key={d} className="py-2 border border-border rounded-lg text-[11px] font-bold text-muted-foreground hover:border-niche-a hover:text-foreground transition-all">
                      Extend {d}
                    </button>
                  ))}
                </div>
              </div>
            </VRCard>
          )}

          {activeTool === 'color' && (
            <VRCard title="Color Correction">
              <div className="space-y-3">
                {['Brightness', 'Contrast', 'Saturation', 'Temperature'].map(s => (
                  <div key={s}>
                    <div className="flex justify-between text-[10px] font-mono-label text-muted-foreground mb-1">
                      <span>{s}</span><span>50</span>
                    </div>
                    <input type="range" min="0" max="100" defaultValue="50" className="w-full h-1.5 bg-s2 rounded-full appearance-none cursor-pointer accent-niche-a" />
                  </div>
                ))}
              </div>
            </VRCard>
          )}

          <VRCard title="Filters & LUTs" badge={<Tag variant="gold">Presets</Tag>}>
            <div className="grid grid-cols-3 gap-1.5">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`py-2 rounded-lg text-[10px] font-bold border transition-all
                    ${activeFilter === f ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </VRCard>

          <VRCard title="AI Suggestions" badge={<Tag variant="velvet">Gemini</Tag>} bodyClassName="px-4 py-3">
            <div className="text-[10px] text-muted-foreground font-mono-label leading-relaxed">
              Upload an image to get AI-powered editing suggestions based on content analysis by <span className="text-niche-a">document_scanner</span> and <span className="text-niche-a">spark (Gemini)</span>.
            </div>
          </VRCard>

          <VRCard title="Export">
            <div className="grid grid-cols-3 gap-1.5">
              {['JPG', 'PNG', 'WEBP'].map(f => (
                <VRButton key={f} variant="ghost" className="!py-2 justify-center !text-[10px]">{f}</VRButton>
              ))}
            </div>
          </VRCard>

          <VRCard title="History">
            <div className="space-y-1.5 max-h-[150px] overflow-y-auto">
              {['Original', 'Crop applied', 'Background removed', 'Filter: Cinematic'].map((h, i) => (
                <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-s2 text-[10px] font-mono-label text-muted-foreground cursor-pointer hover:text-foreground transition-all">
                  <span className="text-[8px]">{i === 0 ? '◈' : '→'}</span>
                  {h}
                </div>
              ))}
            </div>
          </VRCard>
        </div>
      </div>
    </div>
  );
};

export default ImageEditorPage;
