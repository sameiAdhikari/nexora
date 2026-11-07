export type Market = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
  color: string;
};

export type Holding = {
  name: string;
  symbol: string;
  value: string;
  change: string;
  positive: boolean;
  color: string;
};

export type InsightCardData = {
  label: string;
  title: string;
  read: string;
  image: string;
};

export type LearningCardData = {
  title: string;
  copy: string;
  read: string;
  image: string;
};

export const marketTabs = [
  "Trending",
  "Stocks",
  "ETFs",
  "Technology",
  "Indices",
  "Crypto",
] as const;

export type MarketTab = (typeof marketTabs)[number];

const trendingMarkets: Market[] = [
  { name: "NVIDIA", symbol: "NVDA", price: "$184.35", change: "+4.28%", positive: true, color: "#76b900" },
  { name: "Apple", symbol: "AAPL", price: "$225.31", change: "+1.14%", positive: true, color: "#f5f5f7" },
  { name: "Microsoft", symbol: "MSFT", price: "$430.20", change: "+0.68%", positive: true, color: "#00a4ef" },
  { name: "Tesla", symbol: "TSLA", price: "$248.17", change: "-0.92%", positive: false, color: "#e82127" },
  { name: "Amazon", symbol: "AMZN", price: "$178.32", change: "+2.31%", positive: true, color: "#ff9900" },
];

export const marketData: Record<MarketTab, Market[]> = {
  Trending: trendingMarkets,
  Stocks: [
    { name: "Apple", symbol: "AAPL", price: "$225.31", change: "+1.14%", positive: true, color: "#f5f5f7" },
    { name: "Microsoft", symbol: "MSFT", price: "$430.20", change: "+0.68%", positive: true, color: "#00a4ef" },
    { name: "Amazon", symbol: "AMZN", price: "$178.32", change: "+2.31%", positive: true, color: "#ff9900" },
    { name: "Tesla", symbol: "TSLA", price: "$248.17", change: "-0.92%", positive: false, color: "#e82127" },
    { name: "NVIDIA", symbol: "NVDA", price: "$184.35", change: "+4.28%", positive: true, color: "#76b900" },
  ],
  ETFs: [
    { name: "S&P 500 ETF", symbol: "SPY", price: "$592.19", change: "+0.84%", positive: true, color: "#7c6cff" },
    { name: "Nasdaq 100 ETF", symbol: "QQQ", price: "$517.72", change: "+1.42%", positive: true, color: "#45d4ff" },
    { name: "Total Market", symbol: "VTI", price: "$297.40", change: "+0.55%", positive: true, color: "#55e6b1" },
    { name: "Clean Energy", symbol: "ICLN", price: "$12.14", change: "-0.31%", positive: false, color: "#a78bfa" },
    { name: "Innovation ETF", symbol: "ARKK", price: "$56.83", change: "+1.08%", positive: true, color: "#f59e0b" },
  ],
  Technology: trendingMarkets,
  Indices: [
    { name: "S&P 500", symbol: "SPX", price: "5,995.54", change: "+0.61%", positive: true, color: "#7c6cff" },
    { name: "NASDAQ", symbol: "IXIC", price: "19,286.78", change: "+1.12%", positive: true, color: "#45d4ff" },
    { name: "Dow Jones", symbol: "DJI", price: "43,444.99", change: "-0.13%", positive: false, color: "#f87171" },
    { name: "FTSE 100", symbol: "FTSE", price: "8,063.61", change: "+0.52%", positive: true, color: "#55e6b1" },
    { name: "Nikkei 225", symbol: "N225", price: "38,642.91", change: "+0.28%", positive: true, color: "#f472b6" },
  ],
  Crypto: [
    { name: "Bitcoin", symbol: "BTC", price: "$91,284", change: "+2.42%", positive: true, color: "#f7931a" },
    { name: "Ethereum", symbol: "ETH", price: "$3,124", change: "+1.87%", positive: true, color: "#8b8cff" },
    { name: "Solana", symbol: "SOL", price: "$182.40", change: "+4.11%", positive: true, color: "#14f195" },
    { name: "BNB", symbol: "BNB", price: "$618.72", change: "-0.26%", positive: false, color: "#f3ba2f" },
    { name: "Chainlink", symbol: "LINK", price: "$15.93", change: "+0.74%", positive: true, color: "#2a5ada" },
  ],
};

export const heroHoldings: Holding[] = [
  { name: "Apple", symbol: "AAPL", value: "$4,270.20", change: "+2.41%", positive: true, color: "#f5f5f7" },
  { name: "NVIDIA", symbol: "NVDA", value: "$3,840.10", change: "+5.14%", positive: true, color: "#76b900" },
  { name: "Tesla", symbol: "TSLA", value: "$2,160.80", change: "-0.83%", positive: false, color: "#e82127" },
];

export const insightCards: InsightCardData[] = [
  { label: "Market summary", title: "Technology stocks rise following strong earnings", read: "3 min read", image: "/assets/insight-market.png" },
  { label: "Portfolio insight", title: "Technology makes up 38% of your portfolio", read: "2 min read", image: "/assets/insight-cube.png" },
  { label: "Watchlist update", title: "3 companies in your watchlist report earnings this week", read: "2 min read", image: "/assets/insight-mountain.png" },
];

export const learnCards: LearningCardData[] = [
  { title: "Investing basics", copy: "A beginner's guide to investing", read: "3 min read", image: "/assets/learn-sprout.png" },
  { title: "What is an ETF?", copy: "A simple explanation", read: "4 min read", image: "/assets/learn-etf.png" },
  { title: "Understanding diversification", copy: "Why it matters for long-term growth", read: "5 min read", image: "/assets/learn-mountains.png" },
];
