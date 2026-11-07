"use client";

import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";

import { AccountDialog } from "@/components/home/account-dialog";
import { Features } from "@/components/home/features";
import { FinalCta } from "@/components/home/final-cta";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { Insights } from "@/components/home/insights";
import { Learning } from "@/components/home/learning";
import { Markets } from "@/components/home/markets";
import { PortfolioShowcase } from "@/components/home/portfolio-showcase";
import { Security } from "@/components/home/security";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { WhyNexora } from "@/components/home/why-nexora";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTheme, toggleTheme } from "@/lib/store";

export function HomePage() {
  const dispatch = useAppDispatch();
  const dark = useAppSelector((state) => state.ui.dark);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nexora-theme-v2");
    dispatch(setTheme(savedTheme !== "light"));
    setThemeReady(true);
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    if (themeReady) window.localStorage.setItem("nexora-theme-v2", dark ? "dark" : "light");
  }, [dark, themeReady]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === "t") dispatch(toggleTheme());
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dispatch]);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const handleGlowMove = (event: ReactPointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  };

  const openWaitlist = () => setDialogOpen(true);

  return (
    <main id="top">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />
      <Header onOpen={openWaitlist} />
      <Hero onOpen={openWaitlist} onPointerMove={handleGlowMove} />
      <TrustMarquee />
      <Features onOpen={openWaitlist} onPointerMove={handleGlowMove} />
      <PortfolioShowcase onOpen={openWaitlist} />
      <Markets />
      <Insights />
      <WhyNexora />
      <Security />
      <Learning />
      <FinalCta onOpen={openWaitlist} onPointerMove={handleGlowMove} />
      <Footer />
      <AccountDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
}
