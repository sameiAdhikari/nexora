import Image from "next/image";
import { ThemeToggler } from "@/components/common/ThemeToggler";
import SignUpLeftPanel from "@/components/auth/signup/SignUpLeftPanel";
import SignUpForm from "@/components/auth/signup/SignUpForm";

export default function SignupPage() {
  return (
    <section className="relative max-w-screen bg-nexora-glow overflow-hidden">
      {/* purple orb — top left */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-112.5 w-112.5 rounded-full bg-nexora-purple-orb blur-3xl" />
      {/* green orb — bottom right */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-100 w-100 rounded-full bg-nexora-green-orb blur-3xl" />

      <div className="grid grid-cols-2  h-screen grid-rows-[1fr_1rf] gap-0   ">
        <header className="flex items-center justify-between px-13 z-20   bg-surface border-b border-border-default backdrop-blur-md  col-span-2 h-16">
          {" "}
          {/* Logo */}
          <Image
            src="/logo-2.png"
            alt="Nexora"
            width={150}
            height={150}
            className="relative z-10 cursor-pointer"
            loading="lazy"
          />
          {/* theme toggler */}
          <ThemeToggler />
        </header>
        {/* ── LEFT PANEL ── */}
        <SignUpLeftPanel />
        {/* ── RIGHT PANEL ── */}
        <SignUpForm />
      </div>
    </section>
  );
}
