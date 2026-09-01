import AuthHeader from "@/components/auth/AuthHeader";
import SignUpForm from "@/components/auth/signup/SignUpForm";
import SignUpLeftPanel from "@/components/auth/signup/SignUpLeftPanel";

export default function SignupPage() {
  return (
    <section className="relative max-w-screen bg-nexora-glow overflow-hidden">
      {/* purple orb — top left */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-112.5 w-112.5 rounded-full bg-nexora-purple-orb blur-3xl" />
      {/* green orb — bottom right */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-100 w-100 rounded-full bg-nexora-green-orb blur-3xl" />
      <AuthHeader />
      <div className="grid grid-cols-[1.05fr_0.95fr] ">
        {/* ── LEFT PANEL ── */}
        <SignUpLeftPanel />
        {/* ── RIGHT PANEL ── */}
        <SignUpForm />
      </div>
    </section>
  );
}
