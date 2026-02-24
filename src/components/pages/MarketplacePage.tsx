import React, { useState } from 'react';
import { PageHeader, VRCard, Tag, VRButton } from '@/components/ui-vr/SharedUI';
import { toast } from 'sonner';

const categories = ['All', 'Characters', 'Voice Packs', 'Dance Templates', 'Backgrounds', 'Outfit Styles', 'Prompt Packs'];

const assets = [
  { emoji: '🌙', title: 'Luxury Fashion Character Pack', meta: 'Characters · 5 personas · Imagen3', price: '$89', rating: '4.9', sales: '342', featured: true },
  { emoji: '🎤', title: 'Professional Voice Pack — Female', meta: 'Voice Packs · 8 voices · audio_spark', price: '$29', rating: '4.7', sales: '567' },
  { emoji: '💃', title: 'TikTok Viral Dance Pack — 20', meta: 'Dance Templates · Clone Dance ready', price: '$49', rating: '4.8', sales: '891', featured: true },
  { emoji: '🏞', title: 'Cinematic Backgrounds — Urban', meta: 'Backgrounds · 50 scenes · 4K', price: '$19', rating: '4.6', sales: '234' },
  { emoji: '👗', title: 'Summer Collection Outfits', meta: 'Outfit Styles · 30 looks · Fashion', price: '$39', rating: '4.5', sales: '189' },
  { emoji: '📝', title: 'Viral Content Prompt Pack', meta: 'Prompt Packs · 100 prompts · All niches', price: 'FREE', rating: '4.9', sales: '2,140', free: true },
  { emoji: '👨‍🍳', title: 'Restaurant Promo Bundle', meta: 'Characters + Backgrounds · Chef niche', price: '$79', rating: '4.8', sales: '156' },
  { emoji: '💪', title: 'Fitness Video Templates — 10', meta: 'Dance Templates · Workout format', price: '$35', rating: '4.6', sales: '278' },
];

const MarketplacePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [tab, setTab] = useState<'browse' | 'purchases'>('browse');

  return (
    <div className="animate-fade-up">
      <PageHeader title="Market" em="place" sub="bolt AI search · spark recommendations · Preview & purchase AI assets">
        <VRButton variant="ghost" onClick={() => setTab(tab === 'browse' ? 'purchases' : 'browse')}>
          {tab === 'browse' ? 'My Purchases' : '← Browse'}
        </VRButton>
        <VRButton variant="gold">✦ List Asset</VRButton>
      </PageHeader>

      {/* Search */}
      <VRCard title="" bodyClassName="px-5 py-3">
        <div className="flex gap-2.5 items-center">
          <span className="text-muted-foreground text-[15px]">⌕</span>
          <input className="flex-1 bg-transparent border-none text-[13px] text-foreground font-sans focus:outline-none" placeholder="bolt AI search: 'dance templates for fashion niche'..." />
          <VRButton className="!py-1.5 !px-3.5 !text-[10px]">Search</VRButton>
        </div>
      </VRCard>

      {/* Category Filter */}
      <div className="flex gap-1.5 flex-wrap mt-4 mb-5">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border transition-all
              ${activeCategory === c ? 'bg-niche-glow border-niche-a text-niche-a' : 'border-border text-muted-foreground hover:border-border-hover hover:text-foreground'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Featured */}
      <div className="flex gap-3 overflow-x-auto pb-3 mb-5">
        {assets.filter(a => a.featured).map(item => (
          <div key={item.title} className="min-w-[300px] bg-gradient-to-br from-gold/[0.05] to-s2 border border-gold/20 rounded-[14px] p-4 flex gap-3 items-center shrink-0 cursor-pointer hover:border-gold/40 transition-all">
            <span className="text-[36px]">{item.emoji}</span>
            <div className="flex-1">
              <div className="text-[9px] font-mono-label text-gold-2 mb-1">⭐ FEATURED</div>
              <div className="text-xs font-bold mb-0.5">{item.title}</div>
              <div className="text-[10px] text-muted-foreground font-mono-label">{item.meta}</div>
            </div>
            <div className="text-right">
              <div className="font-serif-display text-lg font-bold text-gold-2">{item.price}</div>
              <div className="text-[9px] text-muted-foreground font-mono-label">★ {item.rating}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-3.5">
        {assets.map(item => (
          <div key={item.title} className="bg-s1 border border-border rounded-[14px] overflow-hidden cursor-pointer transition-all hover:border-niche-a hover:-translate-y-0.5 hover:shadow-[0_8px_30px_hsl(var(--niche-glow))]">
            <div className="h-[100px] bg-gradient-to-br from-s2 to-s3 flex items-center justify-center text-[34px] relative">
              {item.emoji}
              {item.free && <span className="absolute top-2 right-2 bg-emerald-500/20 text-emerald-300 text-[8px] font-mono-label font-bold px-1.5 py-0.5 rounded">FREE</span>}
            </div>
            <div className="p-3">
              <div className="text-[11px] font-bold mb-[3px] line-clamp-1">{item.title}</div>
              <div className="text-[9px] text-muted-foreground font-mono-label mb-2 line-clamp-1">{item.meta}</div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-serif-display text-[15px] font-bold text-gold-2">{item.price}</span>
                <span className="text-[9px] text-muted-foreground font-mono-label">★ {item.rating} · {item.sales}</span>
              </div>
              <div className="flex gap-1.5">
                <VRButton variant="ghost" className="flex-1 justify-center !py-1.5 !text-[9px]">Preview</VRButton>
                <VRButton className="flex-1 justify-center !py-1.5 !text-[9px]" onClick={() => toast.success(`Added: ${item.title}`, { description: 'Available in your library' })}>Get</VRButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
