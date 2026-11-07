import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { insightCards, type InsightCardData } from "@/lib/nexora-data";

function InsightCard({ card, featured = false }: { card: InsightCardData; featured?: boolean }) {
  return (
    <article className={`insight-card${featured ? " featured" : ""}`}>
      <div className="insight-image"><Image src={card.image} alt="" fill sizes={featured ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 30vw"} /></div>
      <div className="insight-overlay" />
      <div className="insight-content"><span>{card.label}</span><h3>{card.title}</h3><div><small>{card.read}</small><button aria-label={`Read ${card.title}`}><ArrowUpRight /></button></div></div>
    </article>
  );
}

export function Insights() {
  return (
    <section className="section insights-section shell" data-reveal>
      <div className="section-intro">
        <div><p className="section-kicker"><span>04</span>INSIGHTS</p><h2>Turn market noise into<br /><em>useful insight.</em></h2></div>
        <div><p>Nexora helps you understand what is happening in the market — without drowning you in information.</p><a href="#learn">Explore insights <ArrowUpRight /></a></div>
      </div>
      <div className="insight-layout"><InsightCard card={insightCards[0]} featured /><div className="insight-stack"><InsightCard card={insightCards[1]} /><InsightCard card={insightCards[2]} /></div></div>
    </section>
  );
}
