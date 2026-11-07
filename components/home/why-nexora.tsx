import { ArrowUpRight, Cpu, Eye, Layers3, Radar } from "lucide-react";

const benefits = [
  ["01", "Simple by design", "Investing shouldn't require a complicated interface.", Layers3],
  ["02", "Built around your portfolio", "See what matters to your investments.", Radar],
  ["03", "Transparent", "Understand what you're investing in and what it costs.", Eye],
  ["04", "Modern infrastructure", "Designed for speed, security and reliability.", Cpu],
] as const;

export function WhyNexora() {
  return (
    <section className="why-section" data-reveal>
      <div className="why-orbit" aria-hidden="true"><span>N</span><i /><i /><i /></div>
      <div className="shell why-grid">
        <div className="why-copy"><p className="section-kicker light"><span>05</span>WHY NEXORA</p><h2>A smarter way<br /><em>to invest.</em></h2><p>Premium technology should make investing feel clearer, calmer and more intentional.</p></div>
        <div className="why-list">
          {benefits.map(([number, title, copy, Icon]) => (
            <div className="why-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><Icon /><ArrowUpRight className="why-arrow" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
