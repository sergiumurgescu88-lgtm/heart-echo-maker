import React from 'react';
import { PageHeader, StatCard, VRCard, Tag, VRButton, ProgressBar, Divider, ActivityItem } from '@/components/ui-vr/SharedUI';

const PredictivePage: React.FC = () => (
  <div className="animate-fade-up">
    <PageHeader title="Predictive" em="Revenue" sub="Gemini Spark + Analytics · AI predicts which content will convert to PPV">
      <Tag variant="gold">Gemini Spark</Tag>
      <VRButton>⬡ Run Full Analysis</VRButton>
    </PageHeader>

    <div className="grid grid-cols-4 gap-4 mb-7">
      <StatCard label="Predicted MRR (30d)" value="$31,200" delta="↑ 26% vs current" dotColor="hsl(var(--gold2))" variant={3} />
      <StatCard label="Avg PPV Conversion" value="8.4%" delta="↑ 1.2% predicted" dotColor="hsl(var(--niche-a))" variant={1} />
      <StatCard label="Content to Generate" value="7" delta="High-ROI suggestions" dotColor="hsl(var(--velvet2))" variant={2} />
      <StatCard label="Best Posting Time" value="Tue 19:00" delta="+31% reach predicted" dotColor="hsl(var(--teal))" variant={4} />
    </div>

    <div className="grid grid-cols-[1.6fr_1fr] gap-5">
      <VRCard title="AI Revenue Predictions" badge={<Tag variant="gold">Gemini Analysis</Tag>}>
        {[
          { pct: '+42%', unit: 'PPV LIFT', title: 'Add "Behind the Scenes" segment to next reel', desc: 'Historical analysis: BTS content drives 10% PPV conversion vs 3.2% average.', tags: [['High Impact', 'gold'], ['Luna Velez', 'rose']] },
          { pct: '+31%', unit: 'REACH', title: 'Publish Tuesday 19:00 — peak engagement window', desc: 'Gemini analysis of 847 posts: fashion content achieves 31% higher organic reach.', tags: [['Timing Optimization', 'teal'], ['All Characters', 'velvet']] },
          { pct: '+28%', unit: 'SALES', title: 'Bundle Clone Dance video + Outfit Guide as PPV', desc: 'Dance + fashion bundle converts at 12.1%. Predicted revenue: $4,200.', tags: [['PPV Bundle', 'gold'], ['$4,200 predicted', 'rose']] },
          { pct: '+18%', unit: 'SUBS', title: 'Run a 3-day teaser sequence before next drop', desc: '3-post drip campaigns correlate with 18% higher subscriber conversion rate.', tags: [['Campaign Strategy', 'teal']] },
        ].map((p, i) => (
          <div key={i} className="bg-s2 border border-border rounded-xl p-4 flex gap-3.5 items-start mb-3 transition-all hover:border-gold hover:translate-x-1 cursor-pointer">
            <div className="w-[52px] h-[52px] rounded-full flex flex-col items-center justify-center bg-s3 border-2 border-gold shrink-0">
              <span className="font-serif-display text-base font-bold text-gold-2 leading-none">{p.pct}</span>
              <span className="text-[8px] font-mono-label text-gold">{p.unit}</span>
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold mb-1">{p.title}</div>
              <div className="text-[10px] text-muted-foreground font-mono-label leading-relaxed mb-2">{p.desc}</div>
              <div className="flex gap-1.5 flex-wrap">
                {p.tags.map(([t, v]) => <Tag key={t} variant={v as any}>{t}</Tag>)}
              </div>
            </div>
          </div>
        ))}
      </VRCard>

      <VRCard title="Historical Insights">
        <Divider label="Content Type → PPV Rate" />
        <ProgressBar label="Behind the Scenes" value="10.2%" percent={100} gradient="linear-gradient(90deg,hsl(var(--gold)),hsl(var(--gold2)))" />
        <ProgressBar label="Dance / Clone Dance" value="8.4%" percent={82} gradient="linear-gradient(90deg,hsl(var(--rose)),hsl(var(--rose2)))" />
        <ProgressBar label="Product Reveal" value="6.1%" percent={60} gradient="linear-gradient(90deg,hsl(var(--velvet)),hsl(var(--velvet2)))" />
        <ProgressBar label="Trend Reaction" value="4.8%" percent={47} gradient="linear-gradient(90deg,#2a9a6a,#6ee7b7)" />
        <ProgressBar label="Static Image Post" value="1.2%" percent={12} gradient="hsl(var(--muted-foreground))" />
        <Divider label="Best Posting Windows" />
        <ActivityItem icon="1" iconBg="rgba(196,154,60,0.12)" iconColor="hsl(var(--gold2))" title="Tuesday 18:30 – 20:00" meta="+31% reach · Fashion niche · Luna peak" />
        <ActivityItem icon="2" iconBg="rgba(196,154,60,0.08)" iconColor="hsl(var(--gold))" title="Thursday 19:00 – 21:00" meta="+24% reach · All characters" />
        <ActivityItem icon="3" iconBg="rgba(196,154,60,0.05)" iconColor="hsl(var(--muted-foreground))" title="Saturday 11:00 – 13:00" meta="+18% reach · Food & Wellness" />
      </VRCard>
    </div>
  </div>
);

export default PredictivePage;
