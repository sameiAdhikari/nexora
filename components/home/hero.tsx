"use client";

import Image from "next/image";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  ChevronRight,
  Command,
  Gauge,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { CompanyLogo } from "@/components/nexora/brand";
import { GrowthChart } from "@/components/nexora/charts";
import { Button } from "@/components/ui/button";
import { heroHoldings } from "@/lib/nexora-data";

function HeroTerminal() {
  return (
    <div className="hero-terminal-wrap">
      <div className="terminal-aura" />
      <div className="hero-terminal tilt-card">
        <div className="terminal-bar">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="terminal-address"><LockKeyhole /> app.nexora / portfolio</div>
          <div className="terminal-actions"><Bell /><span className="profile-dot">NK</span></div>
        </div>
        <div className="terminal-grid">
          <div className="terminal-main">
            <div className="terminal-heading">
              <div><span>Total portfolio</span><strong>$24,860.40</strong></div>
              <span className="positive-pill">+ $1,234.56 <b>5.1%</b></span>
            </div>
            <div className="chart-toolbar"><span className="active">1M</span><span>3M</span><span>1Y</span><span>ALL</span><button><Gauge />Performance</button></div>
            <GrowthChart />
            <div className="terminal-holdings">
              <div className="micro-title"><span>Top holdings</span><button>View all <ChevronRight /></button></div>
              {heroHoldings.map((holding) => (
                <div className="holding-row" key={holding.symbol}>
                  <CompanyLogo symbol={holding.symbol} color={holding.color} compact />
                  <span><b>{holding.name}</b><small>{holding.symbol}</small></span>
                  <strong>{holding.value}</strong>
                  <em className={holding.positive ? "" : "negative"}>{holding.change}</em>
                </div>
              ))}
            </div>
          </div>
          <aside className="terminal-side">
            <div className="intelligence-card">
              <div className="intelligence-head"><span><Sparkles /> Nexora intelligence</span><i>LIVE</i></div>
              <p>Technology is driving this month&apos;s portfolio growth.</p>
              <div className="insight-metric"><span>Portfolio impact</span><b>+6.4%</b></div>
              <button>View insight <ArrowRight /></button>
            </div>
            <div className="allocation-card">
              <div className="micro-title"><span>Allocation</span><button><Command /></button></div>
              <div className="allocation-visual"><div className="donut"><span><b>42%</b>US stocks</span></div></div>
              <ul><li><i />US Stocks <b>42%</b></li><li><i />ETFs <b>31%</b></li><li><i />Technology <b>19%</b></li><li><i />Cash <b>8%</b></li></ul>
            </div>
          </aside>
        </div>
      </div>
      <div className="floating-chip chip-one"><Radar /><span><b>Risk pulse</b>Low exposure</span><i>LOW</i></div>
      <div className="floating-chip chip-two"><Activity /><span><b>Market pulse</b>Technology rising</span><i>+2.8%</i></div>
    </div>
  );
}

export function Hero({
  onOpen,
  onPointerMove,
}: {
  onOpen: () => void;
  onPointerMove: (event: ReactPointerEvent<HTMLElement>) => void;
}) {
  const scrollToFeatures = () => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero-stage" id="invest" onPointerMove={onPointerMove}>
      <div className="hero-mesh" aria-hidden="true"><i /><i /><i /></div>
      <Image src="/assets/hero-ribbon.png" alt="" fill priority className="hero-ribbon" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="shell hero-grid-layout">
        <div className="hero-copy">
          <div className="eyebrow-pill"><span /><Sparkles /> Investment intelligence, reimagined</div>
          <h1>The next generation <em>of investing.</em></h1>
          <p>Invest, track and manage your portfolio from one intelligent platform built for modern investors.</p>
          <div className="hero-actions">
            <Button className="button-primary button-large" onClick={onOpen}>Start investing <ArrowUpRight /></Button>
            <Button variant="outline" className="button-secondary button-large" onClick={scrollToFeatures}>Explore Nexora <ArrowRight /></Button>
          </div>
          <div className="hero-assurances"><span><ShieldCheck />Secure by design</span><span><BarChart3 />Transparent pricing</span><span><BriefcaseBusiness />Built for every device</span></div>
        </div>
        <HeroTerminal />
      </div>
      <div className="hero-bottom-note shell"><span>Product concept</span><p>Illustrative market and portfolio data</p><i /></div>
    </section>
  );
}
