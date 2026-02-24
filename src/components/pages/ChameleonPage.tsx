import React from 'react';
import { useNiche, type NicheType } from '@/contexts/NicheContext';
import { nicheData } from '@/data/nicheData';
import { PageHeader, VRCard, Tag, VRButton } from '@/components/ui-vr/SharedUI';

const niches: { id: NicheType; icon: string; name: string; sub: string }[] = [
  { id: 'fashion', icon: '🌙', name: 'Fashion', sub: 'Luxury · Apparel' },
  { id: 'restaurant', icon: '👨‍🍳', name: 'Restaurant', sub: 'Food · Reservations' },
  { id: 'salon', icon: '💅', name: 'Salon', sub: 'Beauty · Wellness' },
  { id: 'fitness', icon: '💪', name: 'Fitness', sub: 'Health · PPV' },
  { id: 'adult', icon: '✦', name: 'Creator+', sub: 'ShadowNet · 18+' },
];

const ChameleonPage: React.FC = () => {
  const { niche, setNiche } = useNiche();
  const data = nicheData[niche];

  return (
    <div className="animate-fade-up">
      <PageHeader title="Chameleon" em="Core" sub="The platform adapts to your niche · Select to transform everything">
        <Tag variant="live">● Adaptive Engine Active</Tag>
      </PageHeader>

      {/* Niche Selector */}
      <div className="grid grid-cols-5 gap-2.5 mb-7">
        {niches.map(n => (
          <button
            key={n.id}
            onClick={() => setNiche(n.id)}
            className={`p-4 rounded-xl border bg-s1 cursor-pointer text-center transition-all flex flex-col items-center gap-2 hover:border-border-hover hover:-translate-y-0.5
              ${niche === n.id ? 'border-niche-a -translate-y-0.5 shadow-[0_8px_24px_hsl(var(--niche-glow))]' : 'border-border text-muted-foreground'}`}
          >
            <span className="text-2xl">{n.icon}</span>
            <span className="text-[10px] font-bold tracking-[0.12em] uppercase">{n.name}</span>
            <span className="text-[9px] text-muted-foreground font-mono-label">{n.sub}</span>
          </button>
        ))}
      </div>

      {/* Adaptive Panel */}
      <div className="border border-border rounded-lg p-5 bg-s1 relative overflow-hidden mb-5">
        <span className="absolute top-3.5 right-4 text-[9px] font-mono-label tracking-[0.14em] text-niche-a border border-niche-a px-[7px] py-0.5 rounded opacity-70">
          CHAMELEON CORE
        </span>
        <div className="mb-4">
          <div className="font-serif-display text-xl font-bold mb-1">{data.title}</div>
          <div className="text-[10px] text-muted-foreground font-mono-label">{data.sub}</div>
        </div>
        <div className="space-y-2.5">
          {data.suggestions.map((s, i) => (
            <div key={i} className="flex gap-3.5 items-start p-3.5 rounded-[10px] bg-s2 border border-border animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="text-2xl shrink-0">{s.icon}</span>
              <div className="flex-1">
                <div className="text-[13px] font-bold mb-1">{s.title}</div>
                <div className="text-[11px] text-muted-foreground font-mono-label leading-relaxed">{s.desc}</div>
                <div className="mt-2.5"><VRButton className="!py-[7px] !px-3.5 !text-[11px]">Generate Now</VRButton></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works + Config */}
      <div className="grid grid-cols-2 gap-5">
        <VRCard title="How Chameleon Core Works" badge={<Tag variant="velvet">Gemini Spark</Tag>} bodyClassName="px-5 py-3.5">
          {[
            { n: '1', title: 'Niche Selected → Context Injected', desc: 'The "niche" field triggers a different Gemini Spark prompt template. All AI outputs adapt.', bg: 'rgba(212,84,122,0.12)', color: 'hsl(var(--rose2))' },
            { n: '2', title: 'UI Reconfigures Dynamically', desc: 'Colors, suggestions, monetization methods, and content types all shift to match the niche.', bg: 'rgba(122,58,138,0.15)', color: 'hsl(var(--velvet2))' },
            { n: '3', title: 'Engine Routing Automatic', desc: 'Mainstream niches → ClearNet (Stripe). Restricted → ShadowNet (CCBill/Crypto). Seamless.', bg: 'rgba(196,154,60,0.14)', color: 'hsl(var(--gold2))' },
            { n: '4', title: 'One Platform · Infinite Faces', desc: 'Restaurant "Chef" or Salon "Stylist" — same engine, completely different AI persona.', bg: 'rgba(42,154,106,0.14)', color: '#6ee7b7' },
          ].map(s => (
            <div key={s.n} className="flex items-start gap-3 py-3 border-b border-border last:border-b-0">
              <div className="w-8 h-8 rounded-[9px] flex items-center justify-center text-base shrink-0" style={{ background: s.bg, color: s.color }}>{s.n}</div>
              <div><div className="text-xs font-semibold mb-0.5">{s.title}</div><div className="text-[10px] text-muted-foreground font-mono-label">{s.desc}</div></div>
            </div>
          ))}
        </VRCard>

        <VRCard title="Active Chameleon Config">
          <div className="space-y-3.5">
            <div>
              <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Current Niche</label>
              <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a focus:shadow-[0_0_0_3px_hsl(var(--niche-glow))]"
                value={niche}
                onChange={e => setNiche(e.target.value as NicheType)}
              >
                <option value="fashion">Fashion & Apparel</option>
                <option value="restaurant">Restaurant & Food</option>
                <option value="salon">Salon & Beauty</option>
                <option value="fitness">Fitness & Health</option>
              </select>
            </div>
            <div>
              <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Character Name</label>
              <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a" defaultValue="Luna Velez" />
            </div>
            <div>
              <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Monetization Mode</label>
              <div className="px-3.5 py-2.5 bg-s2 border border-border rounded-lg text-xs font-mono-label text-muted-foreground">
                {data.mono}
              </div>
            </div>
            <VRButton className="w-full justify-center !py-3">Apply Chameleon Config</VRButton>
          </div>
        </VRCard>
      </div>
    </div>
  );
};

export default ChameleonPage;
