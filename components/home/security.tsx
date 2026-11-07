import Image from "next/image";
import { ArrowUpRight, Check, Database, Eye, Fingerprint, LockKeyhole, ShieldCheck } from "lucide-react";

const securityFeatures = [
  [LockKeyhole, "Two-factor authentication"],
  [Database, "Encrypted connections"],
  [ShieldCheck, "Secure authentication"],
  [Eye, "Account activity monitoring"],
] as const;

export function Security() {
  return (
    <section className="security-section shell" data-reveal>
      <div className="security-visual"><div className="security-rings"><i /><i /><i /></div><Image src="/assets/security-decoration.png" alt="" fill className="security-art" /><div className="security-core"><Fingerprint /><span><b>Protected</b>Security active</span></div></div>
      <div className="security-content">
        <p className="section-kicker"><span>06</span>SECURITY</p>
        <h2>Your security<br /><em>comes first.</em></h2>
        <p>Nexora is built with modern security practices designed to protect your account and personal information.</p>
        <a href="#top">Learn more <ArrowUpRight /></a>
        <div className="security-list">
          {securityFeatures.map(([Icon, label]) => <div key={label}><span><Icon /></span><b>{label}</b><Check /></div>)}
        </div>
      </div>
    </section>
  );
}
