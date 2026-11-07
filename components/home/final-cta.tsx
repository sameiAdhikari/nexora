"use client";

import Image from "next/image";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCta({
  onOpen,
  onPointerMove,
}: {
  onOpen: () => void;
  onPointerMove: (event: ReactPointerEvent<HTMLElement>) => void;
}) {
  const scrollToFeatures = () => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="cta-section shell" data-reveal onPointerMove={onPointerMove}>
      <Image src="/assets/cta-background.png" alt="" fill className="cta-background" />
      <div className="cta-grid" aria-hidden="true" />
      <div className="cta-spotlight" aria-hidden="true" />
      <div className="cta-copy">
        <p className="section-kicker light"><span>08</span>START TODAY</p>
        <h2>Your investing journey<br />starts with <em>Nexora.</em></h2>
        <p>Build, understand and manage your investments from one modern platform.</p>
        <div><Button className="button-light" onClick={onOpen}>Create free account <ArrowUpRight /></Button><Button variant="outline" className="button-ghost-light" onClick={scrollToFeatures}>Explore the platform</Button></div>
      </div>
      <div className="cta-mark"><Image src="/assets/nexora-mark.png" alt="Nexora N" width={420} height={420} /><span>Invest today<br /><b>for a brighter tomorrow.</b></span></div>
    </section>
  );
}
