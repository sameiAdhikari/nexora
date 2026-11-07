import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { learnCards, type LearningCardData } from "@/lib/nexora-data";

function LearningCard({ card, index }: { card: LearningCardData; index: number }) {
  return (
    <article className="learning-card glow-card">
      <div className="learning-image"><Image src={card.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /><span>0{index + 1}</span></div>
      <div className="learning-copy"><div><small>GUIDE · {card.read}</small><h3>{card.title}</h3><p>{card.copy}</p></div><button aria-label={`Read ${card.title}`}><ArrowUpRight /></button></div>
    </article>
  );
}

export function Learning() {
  return (
    <section className="section learn-section shell" id="learn" data-reveal>
      <div className="section-intro">
        <div><p className="section-kicker"><span>07</span>LEARN</p><h2>Learn before<br /><em>you invest.</em></h2></div>
        <div><p>Build your knowledge with easy to understand guides, articles and tutorials.</p><a href="#learn">Explore learning <ArrowUpRight /></a></div>
      </div>
      <div className="learning-grid">{learnCards.map((card, index) => <LearningCard card={card} index={index} key={card.title} />)}</div>
    </section>
  );
}
