import React from 'react';
import { PageHeader, StatCard, VRCard, Tag, VRButton, ProgressBar, Divider, ActivityItem } from '@/components/ui-vr/SharedUI';

const AnalyticsPage: React.FC = () => (
  <div className="animate-fade-up">
    <PageHeader title="Analytics" em="Center" sub="Niche-specific KPIs · AI insights · Cross-platform · Predictive overlay">
      <VRButton variant="ghost">Export CSV</VRButton>
      <VRButton>✦ AI Report</VRButton>
    </PageHeader>

    <div className="grid grid-cols-4 gap-4 mb-7">
      <StatCard label="Total Reach" value="1.06M" delta="↑ 18.4% MoM" dotColor="hsl(var(--niche-a))" variant={1} />
      <StatCard label="Impressions" value="4.2M" delta="↑ 31.2%" dotColor="hsl(var(--velvet2))" variant={2} />
      <StatCard label="Conversions" value="3,240" delta="↑ 9.7%" dotColor="hsl(var(--gold2))" variant={3} />
      <StatCard label="PPV Rate" value="8.4%" delta="↑ 1.2%" dotColor="hsl(var(--teal))" variant={4} />
    </div>

    <div className="grid grid-cols-2 gap-5">
      <VRCard title="Niche-Specific KPIs">
        <Divider label="Restaurant" />
        <ProgressBar label="Video → Reservation Clicks" value="1,240" percent={82} gradient="linear-gradient(90deg,hsl(var(--gold)),hsl(var(--gold2)))" />
        <Divider label="Salon" />
        <ProgressBar label="Video → Booking Opens" value="847" percent={56} gradient="linear-gradient(90deg,hsl(var(--rose)),hsl(var(--rose2)))" />
        <Divider label="Fitness" />
        <ProgressBar label="Clone Dance → PPV Sign-ups" value="384" percent={40} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
        <Divider label="Fashion" />
        <ProgressBar label="Reel → Shop Clicks" value="2,840" percent={94} gradient="linear-gradient(90deg,hsl(var(--gold)),hsl(var(--rose)))" />
      </VRCard>

      <VRCard title="Gemini AI Insights" badge={<Tag variant="velvet">Spark</Tag>} bodyClassName="px-5 py-3.5">
        <ActivityItem icon="↑" iconBg="rgba(212,84,122,0.12)" iconColor="hsl(var(--rose2))" title="Terracotta Trend — Post NOW" meta="+340% TikTok. Momentum Mode draft ready. Predicted 420-680k reach." />
        <ActivityItem icon="★" iconBg="rgba(196,154,60,0.12)" iconColor="hsl(var(--gold2))" title="Best Format: Recipe Reveal (Sorin)" meta="+5.6% reservation clicks vs average. Replicate for all food content." />
        <ActivityItem icon="◉" iconBg="rgba(122,58,138,0.15)" iconColor="hsl(var(--velvet2))" title="Clone Dance → 3.2× PPV" meta="Dance videos drive 3.2× more PPV sign-ups than static posts." />
      </VRCard>
    </div>
  </div>
);

export default AnalyticsPage;
