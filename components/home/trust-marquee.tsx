import { BarChart3, BriefcaseBusiness, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  [Sparkles, "Real-time insights"],
  [ShieldCheck, "Secure infrastructure"],
  [BarChart3, "Transparent investing"],
  [BriefcaseBusiness, "Built for every device"],
] as const;

export function TrustMarquee() {
  return (
    <section className="trust-rail" aria-label="Nexora principles">
      <div className="trust-label"><span />Designed for modern investors</div>
      <div className="marquee-mask">
        <div className="marquee-track">
          {[...items, ...items].map(([Icon, label], index) => (
            <span key={`${label}-${index}`}><Icon />{label}<i /></span>
          ))}
        </div>
      </div>
    </section>
  );
}
