import React from 'react';
import { PageHeader, VRCard, Tag, VRButton, ActivityItem } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const CloneDancePage: React.FC = () => (
  <div className="animate-fade-up">
    <PageHeader title="Clone" em="Dance" sub="Veo · document_scanner · Gemini keypoints · face swap · Viral content">
      <VRButton variant="ghost">Gallery</VRButton>
      <VRButton>◉ New Clone</VRButton>
    </PageHeader>

    <div className="grid grid-cols-[1fr_1.6fr] gap-5">
      <div className="space-y-5">
        <VRCard title="Pipeline" badge={<Tag variant="velvet">4 Stages</Tag>}>
          {/* Step flow */}
          <div className="flex items-center my-4">
            {[
              { icon: '📤', label: 'Upload', state: 'done' },
              { icon: '🔍', label: 'Analyze', state: 'active' },
              { icon: '⚡', label: 'Transfer', state: '' },
              { icon: '✅', label: 'Output', state: '' },
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

          <div className="border-[1.5px] border-dashed border-border-hover rounded-xl p-7 text-center cursor-pointer transition-all hover:border-niche-a hover:bg-niche-glow bg-s2">
            <div className="text-[28px] mb-2">🎬</div>
            <div className="text-xs font-bold mb-1">Upload Reference Dance Video</div>
            <div className="text-[10px] text-muted-foreground font-mono-label">MP4 · MOV · Max 60s · document_scanner extracts keypoints</div>
          </div>

          <div className="mt-3.5 space-y-3.5">
            {[['Target Character', ['Luna Velez — Fashion', 'Chef Sorin — Restaurant', 'Marco Vitale — Fitness']], ['Background Scene', ['Auto-generate from niche (Imagen 3)', 'Kitchen', 'Fashion Studio', 'Gym']]].map(([l, opts]) => (
              <div key={l as string}>
                <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">{l as string}</label>
                <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                  {(opts as string[]).map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <VRButton className="w-full justify-center !py-3" onClick={() => toast('◉ Clone Dance Started!', { description: 'document_scanner → Gemini keypoints → Veo render' })}>
              ◉ Start Pipeline
            </VRButton>
          </div>
        </VRCard>

        <VRCard title="Niche Use Cases" bodyClassName="px-5 py-3.5">
          <ActivityItem icon="🍜" iconBg="transparent" iconColor="inherit" title="Restaurant — Chef goes viral" meta="TikTok dance → Chef Sorin dancing in kitchen" />
          <ActivityItem icon="💪" iconBg="transparent" iconColor="inherit" title="Fitness — Exercise demos" meta="Athlete reference → Marco demonstrates complex movements" />
          <ActivityItem icon="👗" iconBg="transparent" iconColor="inherit" title="Fashion — Runway transfer" meta="Runway walk → Luna showcases new collection" />
        </VRCard>
      </div>

      <VRCard title="Clone Gallery" badge={<Tag variant="rose">8 renders</Tag>}>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { emoji: '🌙', name: 'Luna', sub: 'Salsa Dance', bg: 'from-[#1a0a30] to-[#0d051a]', badge: <Tag variant="live">2.4M views</Tag> },
            { emoji: '👨‍🍳', name: 'Chef Sorin', sub: 'Kitchen Tango', bg: 'from-[#0f3020] to-[#051510]', badge: <Tag variant="gold">Viral ↑</Tag> },
            { emoji: '💪', name: 'Marco', sub: 'Gym Moves', bg: 'from-[#1a1030] to-[#0d0820]', badge: null },
          ].map(c => (
            <div key={c.name} className={`aspect-[9/16] bg-gradient-to-br ${c.bg} rounded-[10px] flex flex-col items-center justify-center gap-2 border border-border cursor-pointer relative overflow-hidden transition-all hover:border-rose`}>
              <span className="text-[34px]">{c.emoji}</span>
              <div className="text-[10px] text-muted-foreground font-mono-label text-center">{c.name}<br />{c.sub}</div>
              {c.badge && <div className="absolute bottom-2 w-full text-center">{c.badge}</div>}
            </div>
          ))}
          <div className="aspect-[9/16] bg-gradient-to-br from-niche-glow to-transparent border-[1.5px] border-dashed border-rose/20 rounded-[10px] flex flex-col items-center justify-center gap-1.5 cursor-pointer text-muted-foreground transition-all hover:text-rose-2 hover:border-rose">
            <span className="text-[22px]">◉</span>
            <span className="text-[10px] font-mono-label">New Clone</span>
          </div>
        </div>
      </VRCard>
    </div>
  </div>
);

export default CloneDancePage;
