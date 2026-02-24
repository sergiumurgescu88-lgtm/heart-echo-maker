import type { NicheType } from '@/contexts/NicheContext';

interface Suggestion { icon: string; title: string; desc: string; }
interface Trend { heat: string; hclass: string; t: string; m: string; ai: string; }

interface NicheInfo {
  label: string;
  suggestions: Suggestion[];
  title: string;
  sub: string;
  mono: string;
  trends: Trend[];
}

export const nicheData: Record<NicheType, NicheInfo> = {
  fashion: {
    label: 'FASHION',
    title: 'Fashion & Apparel Mode',
    sub: 'Platform reconfigured for luxury fashion · Imagen 3 · Veo · Gemini Spark',
    mono: 'ClearNet · Stripe Connect · PPV Lookbooks · Affiliate',
    suggestions: [
      { icon: '🎬', title: 'Create a Summer Collection Reveal Reel', desc: 'Gemini detects peak fashion engagement on Tue/Thu evenings. Suggest: 9:16 reel · terracotta palette · trending audio.' },
      { icon: '💰', title: 'Activate PPV Lookbook — Stripe enabled', desc: 'Fashion niche monetization: exclusive behind-the-scenes lookbooks convert at 8.4% on your audience.' },
      { icon: '🌐', title: 'Deploy White-Label Fashion Storefront', desc: 'Auto-deploy luna-velez.velvetrose.app — includes AI styling chatbot, shop integration.' },
    ],
    trends: [
      { heat: '🔥 VIRAL', hclass: 'fire', t: 'Terracotta Fashion · #TerracottaVibes', m: '+340% on TikTok · 2.1M posts · Peak: Tue-Thu evenings', ai: '✦ AI Draft: "Luna shows 3 terracotta outfits — sunset golden hour"' },
      { heat: '📈 HOT', hclass: 'hot', t: 'Quiet Luxury Aesthetic · #OldMoney', m: '+180% Instagram · 890k posts · Peaking this week', ai: '✦ AI Draft: "Luna Quiet Luxury edit — neutral palette — Corfu backdrop"' },
      { heat: '↑ RISING', hclass: 'rising', t: 'Capsule Wardrobe 2026 · #CapsuledUp', m: '+92% YouTube Shorts · Tutorial format winning', ai: '✦ AI Draft: "10 pieces, 30 outfits — Luna walks through capsule wardrobe"' },
    ],
  },
  restaurant: {
    label: 'RESTAURANT',
    title: 'Restaurant & Food Mode',
    sub: 'Platform reconfigured for food & hospitality · Chef persona · Reservation integrations',
    mono: 'ClearNet · Stripe · Reservation upsells · Local promotions',
    suggestions: [
      { icon: '🍜', title: 'Create a "Dish of the Day" Video', desc: 'Gemini detects peak food content engagement at lunch and dinner prep. Generate a 15s vertical video with today\'s special.' },
      { icon: '📅', title: 'Automate Reservation Reply Flow', desc: 'Restaurant niche: AI automatically replies to Google Maps reviews — thank positive, offer discount to negative.' },
      { icon: '🌐', title: 'Deploy Restaurant Storefront with Booking', desc: 'Auto-deploy chef-sorin.velvetrose.app — includes live menu, AI "Chef" chatbot, and reservation integration.' },
    ],
    trends: [
      { heat: '🔥 VIRAL', hclass: 'fire', t: 'World Pasta Day · #PastaDay', m: '+620% searches · Perfect for Italian restaurant promo', ai: '✦ AI Draft: "Chef Sorin shows secret tagliatelle recipe — 30s vertical"' },
      { heat: '📈 HOT', hclass: 'hot', t: 'Farm-to-Table Content · #FarmFresh', m: '+220% Instagram · Food provenance trending strongly', ai: '✦ AI Draft: "Chef Sorin visits local farm — raw ingredients to plated dish"' },
      { heat: '↑ RISING', hclass: 'rising', t: 'Cozy Restaurant Aesthetic · #RestoVibes', m: '+110% TikTok · Warm ambiance content converting', ai: '✦ AI Draft: "Evening at the restaurant — candles, laughter, signature dish"' },
    ],
  },
  salon: {
    label: 'SALON',
    title: 'Salon & Beauty Mode',
    sub: 'Platform reconfigured for beauty · Elena persona · Booking-focused CTAs',
    mono: 'ClearNet · Stripe · Booking platform integration · Tutorial PPV',
    suggestions: [
      { icon: '💅', title: 'Create Before & After Content', desc: 'Salon niche: auto-generated seamless before/after pairs. Tutorial-style content converts 4.2× better for booking clicks.' },
      { icon: '📱', title: 'Activate 24/7 AI DM Responder', desc: 'Elena AI answers common Instagram DMs about pricing, availability, and treatments automatically.' },
      { icon: '🗓️', title: 'Deploy Salon Storefront with Booking', desc: 'Auto-deploy elena-salon.velvetrose.app — includes AI stylist chatbot, portfolio, and real-time booking.' },
    ],
    trends: [
      { heat: '🔥 VIRAL', hclass: 'fire', t: 'Bob Cut 2026 · #BobRevival', m: '+480% TikTok · Highest booking-driver this month', ai: '✦ AI Draft: "Elena shows 3 bob variations — classic, textured, asymmetric"' },
      { heat: '📈 HOT', hclass: 'hot', t: 'Glass Hair Technique · #GlassHair', m: '+290% Instagram · Tutorial format driving bookings', ai: '✦ AI Draft: "Elena demonstrates glass hair technique — step by step"' },
      { heat: '↑ RISING', hclass: 'rising', t: 'Balayage Color Correction · #ColorCorrect', m: '+140% YouTube · Educational content converting', ai: '✦ AI Draft: "Before & after color correction — Elena explains the process"' },
    ],
  },
  fitness: {
    label: 'FITNESS',
    title: 'Fitness & Health Mode',
    sub: 'Platform reconfigured for fitness · Marco persona · PPV program focus',
    mono: 'ClearNet · Stripe · PPV Fitness Programs · Clone Dance conversion',
    suggestions: [
      { icon: '💪', title: 'Create a Clone Dance Workout Video', desc: 'Fitness niche: dance-format workout videos drive 3.2× more PPV sign-ups. Upload a movement reference.' },
      { icon: '🏆', title: 'Launch a PPV Fitness Program', desc: '6-week exclusive program: predicted 384 subscribers at $29/mo based on Marco\'s audience profile.' },
      { icon: '📈', title: 'Deploy Fitness Storefront with Programs', desc: 'Auto-deploy marco-vitale.velvetrose.app — includes program library, progress tracker, AI trainer chatbot.' },
    ],
    trends: [
      { heat: '🔥 VIRAL', hclass: 'fire', t: '75 Hard Challenge · #75Hard', m: '+890% searches · Accountability content dominating', ai: '✦ AI Draft: "Marco\'s 75 Hard journey — Day 1 to Day 75 montage"' },
      { heat: '📈 HOT', hclass: 'hot', t: 'Protein Cycling Diet · #ProteinCycle', m: '+340% YouTube · Educational format winning', ai: '✦ AI Draft: "Marco explains protein cycling — simple breakdown"' },
      { heat: '↑ RISING', hclass: 'rising', t: 'Hybrid Training Method · #HybridAthlete', m: '+180% Instagram · Strength + cardio combo trending', ai: '✦ AI Draft: "Hybrid training week with Marco — gym + running + recovery"' },
    ],
  },
  adult: {
    label: 'CREATOR+',
    title: 'Creator+ Mode (ShadowNet)',
    sub: 'ShadowNet engine active · CCBill · KYC age verification · Private hosting',
    mono: 'ShadowNet · CCBill · Crypto · Epoch · Age-verified gating',
    suggestions: [
      { icon: '🔒', title: 'Create PPV Content — ShadowNet · CCBill', desc: 'Creator+ niche: auto-generated blurred teaser. AI chatbot responds to fan inquiries 24/7. Age verification integrated.' },
      { icon: '₿', title: 'Activate Crypto Payment Gateway', desc: 'ShadowNet engine: CCBill, Epoch, and Crypto (USDC, ETH) enabled. Revenue fully separate from ClearNet.' },
      { icon: '🌐', title: 'Deploy Creator Storefront — Gated 18+', desc: 'Auto-deploy creator.velvetrose.app — KYC age gate, exclusive content library, AI fan chat, crypto checkout.' },
    ],
    trends: [
      { heat: '🔥 VIRAL', hclass: 'fire', t: 'AI Creator Personas · #AICreator', m: 'Growing category · AI character fans rapidly expanding', ai: '✦ AI Draft: "Exclusive teaser — blurred preview → PPV unlock"' },
      { heat: '📈 HOT', hclass: 'hot', t: 'Clone Dance Exclusive · #DanceExclusive', m: '+180% fan demand for dance exclusive content', ai: '✦ AI Draft: "Behind-the-scenes Clone Dance creation process — PPV"' },
      { heat: '↑ RISING', hclass: 'rising', t: 'Interactive AI Fan Chat · #AIChat', m: '+220% engagement when AI chatbot is active 24/7', ai: '✦ AI Draft: "Introduce creator AI chatbot to fans — exclusive access promo"' },
    ],
  },
};
