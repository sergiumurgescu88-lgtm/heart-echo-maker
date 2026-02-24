import React from 'react';
import { PageHeader, VRButton } from '@/components/ui-vr/SharedUI';

const characters = [
  { name: 'Luna Velez', niche: 'FASHION · CLEARNET', emoji: '🌙', bg: 'from-[#2d1040] to-[#1a0825]', reach: '382k', eng: '6.2%', rev: '$28k', live: true },
  { name: 'Chef Sorin', niche: 'RESTAURANT · CLEARNET', emoji: '👨‍🍳', bg: 'from-[#0f3020] to-[#051510]', reach: '156k', eng: '5.4%', rev: '$11k', live: true },
  { name: 'Marco Vitale', niche: 'FITNESS · CLEARNET', emoji: '💪', bg: 'from-[#1a1030] to-[#0d0820]', reach: '241k', eng: '8.1%', rev: '$19k', live: true },
  { name: 'Elena Stylist', niche: 'SALON · CLEARNET', emoji: '💅', bg: 'from-[#2a1520] to-[#150810]', reach: '94k', eng: '4.9%', rev: '$8k', live: false },
  { name: 'Creator Ava', niche: 'CREATOR+ · SHADOWNET', emoji: '✦', bg: 'from-[#1a0820] to-[#0d0514]', reach: '2.8k', eng: '12.1%', rev: '$9k', live: true, shadow: true },
];

const CharactersPage: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => (
  <div className="animate-fade-up">
    <PageHeader title="Character" em="Studio" sub="Imagen 3 · Gemini Spark · ElevenLabs TTS · Niche-Aware Identity">
      <VRButton variant="ghost">Filter</VRButton>
      <VRButton onClick={onOpenModal}>✦ Create Character</VRButton>
    </PageHeader>

    <div className="grid grid-cols-3 gap-4">
      {characters.map(c => (
        <div key={c.name} className={`bg-s2 border rounded-[14px] overflow-hidden cursor-pointer transition-all hover:-translate-y-[3px] hover:border-niche-a hover:shadow-[0_12px_40px_hsl(var(--niche-glow))]
          ${c.shadow ? 'border-velvet/25' : 'border-border'}`}>
          <div className={`aspect-[3/4] relative flex items-center justify-center text-[52px] overflow-hidden bg-gradient-to-br ${c.bg}`}>
            {c.emoji}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
            <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 bg-background/80 px-2 py-1 rounded-full text-[9px] font-mono-label border border-border-hover">
              <span className={`w-1.5 h-1.5 rounded-full ${c.live ? (c.shadow ? 'bg-velvet-2' : 'bg-rose animate-live-pulse') : 'bg-muted-foreground'}`} />
              {c.live ? (c.shadow ? 'SHADOW' : 'LIVE') : 'IDLE'}
            </div>
          </div>
          <div className="p-3">
            <div className="font-serif-display text-[17px] font-bold">{c.name}</div>
            <div className="text-[9px] text-muted-foreground font-mono-label mb-2.5 tracking-[0.1em]">{c.niche}</div>
            <div className="flex gap-3.5">
              {[['reach', c.reach], ['eng', c.eng], ['rev', c.rev]].map(([l, v]) => (
                <div key={l as string} className="text-center">
                  <div className={`text-[13px] font-bold ${l === 'rev' ? (c.shadow ? 'text-velvet-2' : 'text-rose-2') : ''}`}>{v}</div>
                  <div className="text-[9px] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Create New */}
      <div
        onClick={onOpenModal}
        className="bg-gradient-to-br from-niche-glow to-velvet/[0.04] border-[1.5px] border-dashed border-rose/25 rounded-[14px] aspect-[1.1] flex flex-col items-center justify-center cursor-pointer transition-all hover:border-niche-a hover:text-niche-a hover:-translate-y-[3px] hover:bg-niche-glow text-muted-foreground gap-2.5"
      >
        <span className="text-[28px]">✦</span>
        <span className="text-xs font-bold tracking-wide uppercase">New Character</span>
        <span className="text-[9px] text-center max-w-[120px] font-mono-label">Imagen 3 · Voice · Persona</span>
      </div>
    </div>
  </div>
);

export default CharactersPage;
