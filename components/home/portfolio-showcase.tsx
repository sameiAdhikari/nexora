"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronRight,
  Command,
  Eye,
  PieChart,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { CompanyLogo, Logo } from "@/components/nexora/brand";
import { GrowthChart } from "@/components/nexora/charts";
import { Button } from "@/components/ui/button";
import { heroHoldings } from "@/lib/nexora-data";

function DashboardMock() {
  return (
    <div className="dashboard-frame">
      <div className="dashboard-glow" />
      <div className="dashboard-window">
        <aside className="dashboard-sidebar">
          <Logo compact />
          <div className="sidebar-links"><a className="active"><BarChart3 />Overview</a><a><TrendingUp />Markets</a><a><PieChart />Portfolio</a><a><Eye />Watchlist</a><a><Sparkles />Insights</a></div>
          <div className="sidebar-user"><span>NK</span><div><b>Nishant</b><small>Investor</small></div></div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-top"><div><p>Good morning</p><h3>Portfolio overview</h3></div><div className="dash-search"><Search />Search assets, ETFs, or markets...</div><button className="icon-button"><Bell /></button></div>
          <div className="dash-summary"><div><span>Portfolio value</span><strong>$34,820.40</strong><em>+$3,421.67 <b>10.89%</b></em></div><div className="dash-ranges"><button>1D</button><button>1W</button><button className="active">2M</button><button>1Y</button><button>ALL</button></div></div>
          <div className="dashboard-chart"><GrowthChart id="dashboard" large /><div className="chart-marker"><i /><span><small>MAR 18</small><b>$31,420</b></span></div></div>
          <div className="dashboard-lower">
            <div className="panel holdings-panel">
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
            <div className="panel allocation-panel"><div className="micro-title"><span>Allocation</span><button><Command /></button></div><div className="allocation-dash"><div className="donut"><span><b>42%</b>US stocks</span></div><ul><li><i />US Stocks <b>42%</b></li><li><i />ETFs <b>31%</b></li><li><i />Technology <b>19%</b></li><li><i />Cash <b>8%</b></li></ul></div></div>
            <div className="panel next-move"><div className="next-icon"><Sparkles /></div><span><small>NEXORA INSIGHT</small><b>Your portfolio gained 2.4% this week.</b><button>Open insight <ArrowRight /></button></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioShowcase({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="portfolio-section" id="about" data-reveal>
      <div className="portfolio-backdrop"><i /><i /></div>
      <div className="shell portfolio-header">
        <div><p className="section-kicker light"><span>02</span>YOUR PORTFOLIO</p><h2>Your entire portfolio.<br /><em>One clear view.</em></h2></div>
        <div><p>Understand your investments, performance and allocation without jumping between multiple platforms.</p><Button className="button-primary" onClick={onOpen}>Explore the platform <ArrowUpRight /></Button></div>
      </div>
      <div className="shell demo-label"><span><i />INTERACTIVE PRODUCT CONCEPT</span><p>Dummy data for visualisation</p></div>
      <div className="shell"><DashboardMock /></div>
      <div className="shell stats-row"><div><strong>+10.89%</strong><span>Portfolio growth</span></div><div><strong>12K+</strong><span>Active investors</span></div><div><strong>4.8/5</strong><span>User satisfaction</span></div><small>Illustrative platform metrics</small></div>
    </section>
  );
}
