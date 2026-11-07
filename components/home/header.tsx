"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

import { Logo } from "@/components/nexora/brand";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleMenu, toggleTheme } from "@/lib/store";

const navigationLinks = ["Invest", "Markets", "Features", "Learn", "About"];

export function Header({ onOpen }: { onOpen: () => void }) {
  const dispatch = useAppDispatch();
  const { dark, menuOpen } = useAppSelector((state) => state.ui);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Logo />
        <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => dispatch(toggleMenu(false))}>
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="nav-status"><span />System online</div>
          <button className="icon-button theme-button" onClick={() => dispatch(toggleTheme())} aria-label="Toggle dark mode">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Button variant="ghost" className="sign-in" onClick={onOpen}>Sign in</Button>
          <Button className="button-primary nav-cta" onClick={onOpen}>Get started <ArrowUpRight /></Button>
          <button className="icon-button menu-button" onClick={() => dispatch(toggleMenu())} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
