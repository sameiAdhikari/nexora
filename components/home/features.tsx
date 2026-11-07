"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { ArrowRight, ArrowUpRight, Bot, PieChart, Search, Sparkles, Zap } from "lucide-react";

import { CompanyLogo } from "@/components/nexora/brand";
import { MiniLine } from "@/components/nexora/charts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function DiscoverCard() {
  return (
    <Card className="bento-card discover-card glow-card">
      <div className="card-top"><span className="feature-icon"><Search /></span><span className="card-index">01 / DISCOVER</span><ArrowUpRight className="corner-arrow" /></div>
      <div><h3>Discover opportunities</h3><p>Explore stocks, ETFs and global markets through powerful search, filtering and market insights.</p></div>
      <div className="search-demo"><Search /><span>Search global markets</span><kbd>⌘ K</kbd></div>
      <div className="quote-stream">
        {[["S&P 500", "+1.24%"], ["NASDAQ", "+1.86%"], ["FTSE 100", "+0.52%"], ["DOW JONES", "-0.18%"]].map(([name, value], index) => (
          <div key={name}><span><i className={`market-dot dot-${index}`} />{name}</span><MiniLine id={`discover-${index}`} positive={index !== 3} /><b className={index === 3 ? "negative" : ""}>{value}</b></div>
        ))}
      </div>
    </Card>
  );
}

function InvestCard({ onOpen }: { onOpen: () => void }) {
  return (
    <Card className="bento-card invest-card glow-card">
      <div className="card-top"><span className="feature-icon"><Zap /></span><span className="card-index">02 / INVEST</span></div>
      <div><h3>Invest with confidence</h3><p>A simple investing experience designed to keep complexity out of your way.</p></div>
      <div className="order-ticket">
        <div className="order-asset"><CompanyLogo symbol="NVDA" color="#76b900" /><span><b>NVIDIA</b><small>NVDA · NASDAQ</small></span><strong>$184.35<small>+4.28%</small></strong></div>
        <label>Investment amount</label>
        <div className="amount-field"><span>€</span><b>500.00</b><em>EUR</em></div>
        <div className="order-meta"><span>Estimated shares</span><b>2.712</b></div>
        <Button className="button-primary full" onClick={onOpen}>Review investment <ArrowRight /></Button>
      </div>
    </Card>
  );
}

function TrackCard() {
  return (
    <Card className="bento-card track-card glow-card">
      <div className="card-top"><span className="feature-icon"><PieChart /></span><span className="card-index">03 / TRACK</span></div>
      <div><h3>Know where you stand</h3><p>Understand your portfolio performance, allocation and returns at a glance.</p></div>
      <div className="track-visual">
        <div className="donut large"><span><b>$24,860</b>Total value</span></div>
        <ul><li><i />US Stocks <b>42%</b></li><li><i />ETFs <b>31%</b></li><li><i />Technology <b>19%</b></li><li><i />Cash <b>8%</b></li></ul>
      </div>
    </Card>
  );
}

function IntelligenceCard() {
  return (
    <Card className="bento-card signal-card glow-card">
      <div className="signal-copy"><span className="feature-icon"><Bot /></span><div><p className="card-index">INTELLIGENCE LAYER</p><h3>Useful insight, not more noise.</h3></div></div>
      <div className="signal-line" />
      <div className="signal-message"><Sparkles /><span><small>PORTFOLIO INSIGHT</small><b>Technology makes up 38% of your portfolio.</b><em>Illustrative insight</em></span><ArrowUpRight /></div>
    </Card>
  );
}

export function Features({
  onOpen,
  onPointerMove,
}: {
  onOpen: () => void;
  onPointerMove: (event: ReactPointerEvent<HTMLElement>) => void;
}) {
  return (
    <section className="section features-section shell" id="features" data-reveal>
      <div className="section-intro">
        <div><p className="section-kicker"><span>01</span>CAPABILITIES</p><h2>Everything you need.<br /><em>One investment platform.</em></h2></div>
        <p>From market discovery to portfolio management, Nexora gives you the tools to make informed investment decisions.</p>
      </div>
      <div className="bento-grid" onPointerMove={onPointerMove}>
        <DiscoverCard />
        <InvestCard onOpen={onOpen} />
        <TrackCard />
        <IntelligenceCard />
      </div>
    </section>
  );
}
