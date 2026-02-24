import React from 'react';
import { PageHeader, VRCard, Tag, VRButton } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const MarketplacePage: React.FC = () => (
  <div className="animate-fade-up">
    <PageHeader title="Marketplace" em="& PPV" sub="Bolt search · Gemini recommendations · AI teaser auto-generated · Chatbot">
      <VRButton variant="ghost">My Listings</VRButton>
      <VRButton variant="gold">✦ List Content</VRButton>
    </PageHeader>

    <VRCard title="" bodyClassName="px-5 py-3">
      <div className="flex gap-2.5 items-center">
        <span className="text-muted-foreground text-[15px]">⌕</span>
        <input className="flex-1 bg-transparent border-none text-[13px] text-foreground font-sans focus:outline-none" placeholder="Bolt AI search: 'terracotta fashion dance templates'..." />
        <VRButton variant="ghost" className="!py-1.5 !px-3 !text-[10px]">Filter</VRButton>
        <VRButton className="!py-1.5 !px-3.5 !text-[10px]">Search</VRButton>
      </div>
    </VRCard>

    <div className="grid grid-cols-3 gap-3.5 mt-5">
      {[
        { emoji: '🌙', title: 'Summer Fashion Pack — 10 Reels', meta: 'Luna Velez · Fashion · Imagen3', price: '$49', sales: '142 sales', bg: 'from-[#1a0a30] to-[#0d051a]' },
        { emoji: '👨‍🍳', title: 'Restaurant Promo Bundle — 20 Posts', meta: 'Chef Sorin · Food · Gemini', price: '$79', sales: '89 sales', bg: 'from-[#0f3020] to-[#051510]' },
        { emoji: '💪', title: 'Exclusive Fitness Program — 6 Weeks', meta: 'Marco Vitale · Clone Dance · PPV', price: '$29', sales: '384 sales', bg: 'from-[#1a1030] to-[#0d0820]', ppv: true },
        { emoji: '🌙', title: 'Exclusive Dance Collection — Vol.2', meta: 'Luna Velez · 5 videos · 🔒 Locked', price: '$39', sales: '221 sales', bg: 'from-[#100820] to-[#08041a]', ppv: true, locked: true },
        { emoji: '💅', title: 'Before & After Salon Pack — 15', meta: 'Elena Stylist · img_edit_auto', price: '$59', sales: '67 sales', bg: 'from-[#1a1505] to-[#0d0b02]' },
      ].map(item => (
        <div key={item.title} className="bg-s2 border border-border rounded-[14px] overflow-hidden cursor-pointer transition-all hover:border-gold/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(196,154,60,0.07)]">
          <div className={`h-[130px] relative flex items-center justify-center text-[38px] overflow-hidden bg-gradient-to-br ${item.bg}`}>
            {item.ppv && (
              <span className="absolute top-2 left-2 z-10 bg-gradient-to-br from-gold to-[#9a7a2c] text-background text-[8px] font-mono-label font-bold px-[7px] py-0.5 rounded tracking-[0.1em]">PPV</span>
            )}
            {item.locked && (
              <div className="absolute inset-0 backdrop-blur-[8px] bg-velvet/10 flex items-center justify-center z-20 text-[28px]">🔒</div>
            )}
            {item.emoji}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
          </div>
          <div className="p-3">
            <div className="text-xs font-bold mb-[3px]">{item.title}</div>
            <div className="text-[10px] text-muted-foreground font-mono-label mb-2">{item.meta}</div>
            <div className="flex items-center justify-between">
              <span className="font-serif-display text-[17px] font-bold text-gold-2">{item.price}</span>
              <span className="text-[9px] text-muted-foreground font-mono-label">{item.sales}</span>
            </div>
          </div>
        </div>
      ))}

      <div
        onClick={() => toast('$ PPV Modal Opening...', { description: 'Configure your listing' })}
        className="border border-dashed border-gold/25 rounded-[14px] flex items-center justify-center min-h-[180px] cursor-pointer text-muted-foreground hover:text-gold-2 hover:border-gold/40 transition-all"
      >
        <div className="text-center">
          <div className="text-2xl mb-1.5">+</div>
          <div className="text-[11px] font-bold tracking-wide uppercase">List New Item</div>
          <div className="text-[9px] mt-[3px] font-mono-label">AI teaser auto-gen</div>
        </div>
      </div>
    </div>
  </div>
);

export default MarketplacePage;
