import React from 'react';
import { useNiche, type NicheType } from '@/contexts/NicheContext';
import { VRButton } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

interface CharacterModalProps {
  open: boolean;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ open, onClose }) => {
  const { setNiche } = useNiche();

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-xl z-[500] flex items-center justify-center" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-s1 border border-border-hover rounded-[20px] w-[580px] max-h-[88vh] overflow-y-auto p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="font-serif-display text-[26px] font-bold">Create <em className="text-niche-a italic">Character</em></h2>
            <p className="text-[10px] text-muted-foreground font-mono-label mt-1">Imagen 3 · Gemini Spark · audio_spark TTS · Niche-Aware</p>
          </div>
          <button onClick={onClose} className="bg-s2 border border-border rounded-lg text-muted-foreground w-8 h-8 flex items-center justify-center cursor-pointer text-lg hover:text-foreground hover:border-border-hover transition-all">×</button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3.5">
          <div>
            <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Name</label>
            <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a focus:shadow-[0_0_0_3px_hsl(var(--niche-glow))]" placeholder="e.g. Chef Sorin" />
          </div>
          <div>
            <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Handle</label>
            <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a focus:shadow-[0_0_0_3px_hsl(var(--niche-glow))]" placeholder="@handle" />
          </div>
        </div>

        <div className="mb-3.5">
          <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Niche Pack — Chameleon Core will auto-adapt</label>
          <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a focus:shadow-[0_0_0_3px_hsl(var(--niche-glow))]"
            onChange={e => setNiche(e.target.value as NicheType)}>
            <option value="fashion">Fashion & Apparel (ClearNet)</option>
            <option value="restaurant">Restaurant & Food (ClearNet)</option>
            <option value="salon">Salon & Beauty (ClearNet)</option>
            <option value="fitness">Fitness & Health (ClearNet)</option>
            <option value="adult">Creator+ 18+ (ShadowNet)</option>
          </select>
        </div>

        <div className="mb-3.5">
          <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Personality — Gemini Spark template</label>
          <textarea className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans min-h-[80px] resize-y focus:outline-none focus:border-niche-a focus:shadow-[0_0_0_3px_hsl(var(--niche-glow))]" placeholder="Friendly, passionate about traditional cuisine, warm tone..." />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3.5">
          <div>
            <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Avatar Style — Imagen 3</label>
            <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
              <option>Photorealistic</option><option>Stylized</option><option>3D Rendered</option>
            </select>
          </div>
          <div>
            <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Voice — audio_spark TTS</label>
            <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
              <option>Rachel — Warm</option><option>Bella — Elegant</option><option>Antoni — Deep</option><option>Josh — Energetic</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Platforms</label>
          <div className="flex gap-1.5 flex-wrap">
            {['Instagram', 'TikTok', 'YouTube', 'LinkedIn'].map((p, i) => (
              <button key={p} className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all
                ${i < 2 ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover'}`}>
                {p}
              </button>
            ))}
          </div>
        </div>

        <VRButton className="w-full justify-center !py-3.5" onClick={() => {
          onClose();
          toast('✦ Character Created!', { description: 'Imagen 3 generating avatar · Gemini building persona · TTS assigning voice' });
        }}>
          ✦ Generate Character — Imagen 3
        </VRButton>
      </div>
    </div>
  );
};

export default CharacterModal;
