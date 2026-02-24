import React from 'react';
import { PageHeader, VRCard, Tag, VRButton } from '@/components/ui-vr/SharedUI';

const StorefrontsPage: React.FC = () => (
  <div className="animate-fade-up">
    <PageHeader title="Metaverse" em="Storefronts" sub="Auto-deployed subdomains · AI chat widget · Creator worlds · White-label">
      <VRButton variant="ghost">+ Custom Domain</VRButton>
      <VRButton>+ New Storefront</VRButton>
    </PageHeader>

    <div className="grid grid-cols-3 gap-4 mb-5">
      {[
        {
          url: 'luna-velez.velvetrose.app', heroTxt: 'LUNA VELEZ ✦ FASHION', heroColor: 'text-rose-2',
          heroBg: 'from-[#1a0830] to-[#0d0420]',
          dots: ['bg-red-400', 'bg-amber-400', 'bg-rose-2'],
          metrics: [['FOLLOWERS', '382k'], ['SHOP CVR', '8.4%'], ['SUBSCRIBE', '$9/mo'], ['CHAT', '24/7']],
          chat: { from: '✦ LUNA AI', msg: "Hi! I'm Luna. Summer collection just dropped 🌙 Want me to find your perfect piece?" },
        },
        {
          url: 'chef-sorin.velvetrose.app', heroTxt: 'CHEF SORIN ✦ CUCINA', heroColor: 'text-gold-2',
          heroBg: 'from-[#1a0a00] to-[#2d1200]',
          dots: ['bg-red-400', 'bg-amber-400', 'bg-gold-2'],
          metrics: [['MENU', 'View →'], ['BOOK', 'Reserve'], ['RATING', '4.9★'], ['ORDERS', 'AI Chat']],
          chat: { from: '✦ CHEF SORIN AI', msg: 'Bun venit! Tonight\'s special: Tagliatelle al Tartufo. Want a reservation? 🍝' },
        },
        {
          url: 'creator.velvetrose.app', heroTxt: '✦ CREATOR+ · 18+', heroColor: 'text-velvet-2',
          heroBg: 'from-[#1a0820] to-[#0d0514]', shadow: true,
          dots: ['bg-red-400', 'bg-amber-400', 'bg-velvet-2'],
          metrics: [['FANS', '2,840'], ['PPV', '🔒 Locked'], ['KYC', '18+ ✓'], ['CRYPTO', '₿ ETH']],
          chat: { from: '✦ CREATOR AI', msg: 'Unlock exclusive content — verify age to continue. New drop available 🔒' },
        },
      ].map(store => (
        <div key={store.url} className={`rounded-[14px] overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] cursor-pointer bg-s1
          ${store.shadow ? 'border-velvet/25' : 'border-border hover:border-border-hover'}`}>
          {/* Browser bar */}
          <div className="flex items-center gap-[7px] px-3 py-2 bg-foreground/[0.03] border-b border-border">
            {store.dots.map((d, i) => <span key={i} className={`w-[7px] h-[7px] rounded-full ${d}`} />)}
            <div className="flex-1 text-center text-[9px] font-mono-label text-muted-foreground bg-s2 rounded px-2 py-[3px] border border-border">{store.url}</div>
          </div>
          {/* Hero */}
          <div className={`h-[120px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${store.heroBg}`}>
            {store.shadow && <div className="absolute inset-0 backdrop-blur-[2px] bg-velvet/10" />}
            <span className={`font-serif-display text-[15px] font-bold z-10 ${store.heroColor}`}>{store.heroTxt}</span>
          </div>
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-px bg-border">
            {store.metrics.map(([l, v]) => (
              <div key={l} className="bg-s1 p-2">
                <div className="text-[8px] text-muted-foreground font-mono-label mb-0.5">{l}</div>
                <div className="text-[13px] font-bold">{v}</div>
              </div>
            ))}
          </div>
          {/* Chat bubble */}
          <div className="p-2.5 border-t border-border">
            <div className="bg-s2 rounded-lg rounded-bl-none px-2.5 py-2 text-[10px] text-muted-foreground font-mono-label">
              <div className="text-[8px] text-niche-a mb-[3px] font-bold tracking-[0.1em]">{store.chat.from}</div>
              {store.chat.msg}
            </div>
          </div>
        </div>
      ))}
    </div>

    <VRCard title="Storefront Configuration" badge={<Tag variant="velvet">White-Label</Tag>}>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-3.5">
          {[['Select Storefront', ['Luna Velez — Fashion', 'Chef Sorin — Restaurant', 'Creator+ — ShadowNet']]].map(([l, opts]) => (
            <div key={l as string}>
              <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">{l as string}</label>
              <select className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a">
                {(opts as string[]).map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
          <div>
            <label className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] uppercase mb-[7px] block">Subdomain</label>
            <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[13px] text-foreground font-sans focus:outline-none focus:border-niche-a" defaultValue="luna-velez.velvetrose.app" />
          </div>
          <VRButton className="w-full justify-center !py-3">Deploy Storefront</VRButton>
        </div>
        <div>
          <div className="text-[9px] font-mono-label text-muted-foreground tracking-[0.14em] mb-2.5">AI CHAT WIDGET CONFIG</div>
          <div className="bg-s2 border border-border rounded-lg rounded-bl-none px-2.5 py-2 text-[11px] mb-[7px]">
            <div className="text-[8px] text-niche-a mb-[3px] font-mono-label font-bold tracking-[0.1em]">✦ LUNA AI</div>
            Hi! I'm Luna. Looking for summer styles?
          </div>
          <div className="bg-niche-glow border border-niche-a rounded-lg rounded-br-none px-2.5 py-2 text-[11px] mb-[7px] ml-auto max-w-[82%]">
            Do you have terracotta?
          </div>
          <div className="bg-s2 border border-border rounded-lg rounded-bl-none px-2.5 py-2 text-[11px] mb-2.5">
            <div className="text-[8px] text-niche-a mb-[3px] font-mono-label font-bold tracking-[0.1em]">✦ LUNA AI</div>
            Yes! Sienna Collection just dropped — 3 terracotta pieces. Want me to show the lookbook? 🤎
          </div>
          <input className="w-full bg-s2 border border-border rounded-lg px-3.5 py-2.5 text-[11px] text-foreground font-sans focus:outline-none focus:border-niche-a" placeholder="Visitor message..." />
        </div>
      </div>
    </VRCard>
  </div>
);

export default StorefrontsPage;
