"use client";

import { ArrowUpRight } from "lucide-react";

import { CompanyLogo } from "@/components/nexora/brand";
import { MiniLine } from "@/components/nexora/charts";
import { Card } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { marketData, marketTabs, type Market, type MarketTab } from "@/lib/nexora-data";
import { setMarketTab } from "@/lib/store";

function MarketCard({ market, index }: { market: Market; index: number }) {
  return (
    <Card className="market-card glow-card">
      <div className="market-card-top"><CompanyLogo symbol={market.symbol} color={market.color} /><span><b>{market.name}</b><small>{market.symbol}</small></span><button><ArrowUpRight /></button></div>
      <div className="market-chart"><MiniLine positive={market.positive} id={`${market.symbol}-${index}`} /></div>
      <div className="market-price"><strong>{market.price}</strong><em className={market.positive ? "" : "negative"}>{market.change}</em></div>
      <div className="market-volume"><span>Today</span><i><b style={{ width: `${52 + index * 8}%` }} /></i></div>
    </Card>
  );
}

export function Markets() {
  const dispatch = useAppDispatch();
  const marketTab = useAppSelector((state) => state.ui.marketTab);
  const currentMarkets = marketData[marketTab];

  return (
    <section className="section markets-section shell" id="markets" data-reveal>
      <div className="section-intro markets-intro">
        <div><p className="section-kicker"><span>03</span>MARKETS</p><h2>The markets that<br /><em>matter to you.</em></h2></div>
        <div><p>Explore top performing assets, popular stocks and global markets.</p><a href="#markets">View all markets <ArrowUpRight /></a></div>
      </div>
      <div className="market-toolbar">
        <div className="market-tabs" role="tablist" aria-label="Market categories">
          {marketTabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={marketTab === tab}
              className={marketTab === tab ? "active" : ""}
              onClick={() => dispatch(setMarketTab(tab as MarketTab))}
            >
              {tab}
            </button>
          ))}
        </div>
        <span><i />Market open</span>
      </div>
      <div className="market-grid">
        {currentMarkets.map((market, index) => (
          <MarketCard market={market} index={index} key={`${marketTab}-${market.symbol}`} />
        ))}
      </div>
    </section>
  );
}
