import React from 'react';
import { PageHeader, VRCard, Tag, VRButton, ProgressBar, Divider } from '@/components/ui-vr/SharedUI';

const TwinPlatformPage: React.FC = () => (
  <div className="animate-fade-up">
    <PageHeader title="Twin" em="Platform" sub="Two parallel engines · One brand umbrella · ClearNet + ShadowNet architecture">
      <VRButton variant="ghost">⬡ Architecture Docs</VRButton>
    </PageHeader>

    <div className="grid grid-cols-2 gap-5 mb-5">
      {/* Engine A */}
      <div className="rounded-lg p-6 border border-sky-500/20 relative overflow-hidden bg-gradient-to-br from-[rgba(14,30,50,0.8)] to-[rgba(8,18,32,0.8)]">
        <span className="absolute top-3.5 right-3.5 opacity-[0.06] text-[80px] leading-none font-serif-display pointer-events-none">A</span>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono-label font-bold tracking-[0.1em] mb-3.5 bg-sky-500/15 text-sky-300 border border-sky-500/20">
          <span>◯</span> ENGINE A — CLEARNET
        </div>
        <div className="font-serif-display text-xl font-bold mb-1.5">ClearNet Engine</div>
        <div className="text-[11px] text-muted-foreground font-mono-label leading-relaxed mb-4">Hosted on Google Cloud Run · Mainstream niches only · Full compliance with Stripe ToS, Meta API, and app store policies.</div>
        <div className="space-y-1.5 mb-4">
          {['Hosting: Google Cloud Run (us-central1)', 'Payments: Stripe Connect · PayPal Commerce', 'AI: Imagen 3 · Veo · Gemini Spark', 'Storage: Google Cloud Storage + CDN', 'Auth: Firebase Auth · Google OAuth'].map(s => (
            <div key={s} className="flex items-center gap-2 text-[11px] font-mono-label px-2.5 py-1.5 rounded-md bg-foreground/[0.04]">
              <span className="w-[5px] h-[5px] rounded-full bg-sky-300 shrink-0" />{s}
            </div>
          ))}
        </div>
        <Divider label="Active Niches" />
        <div className="flex gap-1.5 flex-wrap">
          <Tag variant="gold">Restaurant</Tag><Tag variant="velvet">Fashion</Tag><Tag variant="teal">Fitness</Tag><Tag variant="rose">Salon</Tag><Tag variant="muted">Real Estate</Tag>
        </div>
        <div className="mt-4">
          <ProgressBar label="Uptime" value="99.97%" percent={99.97} gradient="linear-gradient(90deg,#0ea5e9,#7dd3fc)" />
          <ProgressBar label="Revenue (ClearNet)" value="$74,870" percent={89} gradient="linear-gradient(90deg,#0ea5e9,#7dd3fc)" />
        </div>
      </div>

      {/* Engine B */}
      <div className="rounded-lg p-6 border border-velvet/20 relative overflow-hidden bg-gradient-to-br from-[rgba(30,14,40,0.8)] to-[rgba(18,8,24,0.8)]">
        <span className="absolute top-3.5 right-3.5 opacity-[0.06] text-[80px] leading-none font-serif-display pointer-events-none">B</span>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono-label font-bold tracking-[0.1em] mb-3.5 bg-velvet/20 text-velvet-2 border border-velvet/25">
          <span>◯</span> ENGINE B — SHADOWNET
        </div>
        <div className="font-serif-display text-xl font-bold mb-1.5">ShadowNet Engine</div>
        <div className="text-[11px] text-muted-foreground font-mono-label leading-relaxed mb-4">Private VPS hosting · Legally isolated · Adult-compliant payment processors · Age verification integrated.</div>
        <div className="space-y-1.5 mb-4">
          {['Hosting: Hetzner VPS (private) · Nginx', 'Payments: CCBill · Verotel · Epoch · Crypto', 'AI: SDXL fine-tuned · Ollama · Local models', 'KYC: Age verification API (AgeID / Yoti)', 'Legal: GDPR · 18 U.S.C. § 2257 compliance'].map(s => (
            <div key={s} className="flex items-center gap-2 text-[11px] font-mono-label px-2.5 py-1.5 rounded-md bg-foreground/[0.04]">
              <span className="w-[5px] h-[5px] rounded-full bg-velvet-2 shrink-0" />{s}
            </div>
          ))}
        </div>
        <Divider label="Restricted Niches" />
        <div className="flex gap-1.5 flex-wrap">
          <Tag variant="rose">Creator+ (18+)</Tag><Tag variant="muted">PPV Adult</Tag>
        </div>
        <div className="mt-4">
          <ProgressBar label="Uptime" value="99.91%" percent={99.91} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
          <ProgressBar label="Revenue (ShadowNet)" value="$9,420" percent={11} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
        </div>
      </div>
    </div>

    <VRCard title="Admin Bridge — Single Control Plane" badge={<Tag variant="gold">Twin Architecture</Tag>}>
      <p className="text-xs text-muted-foreground font-mono-label leading-relaxed mb-4">
        Both engines are controlled from this single admin interface. Login → engine routing is automatic based on account type. Financial, legal, and hosting are fully separate.
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Divider label="ClearNet Traffic" />
          <ProgressBar label="API requests / day" value="48,200" percent={80} gradient="linear-gradient(90deg,#0ea5e9,#7dd3fc)" />
          <ProgressBar label="Media rendered" value="1,240" percent={62} gradient="linear-gradient(90deg,#0ea5e9,#7dd3fc)" />
        </div>
        <div>
          <Divider label="ShadowNet Traffic" />
          <ProgressBar label="API requests / day" value="6,840" percent={11} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
          <ProgressBar label="KYC verifications" value="124" percent={10} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
        </div>
      </div>
    </VRCard>
  </div>
);

export default TwinPlatformPage;
