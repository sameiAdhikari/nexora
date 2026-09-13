import AuthHeader from "@/components/auth/AuthHeader";
import ForgetPasswordForm from "@/components/auth/forgetPassword/ForgetPasswordForm";

import {
  Check,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ForgetPassword = () => {
  return (
    <>
      <section className="relative min-h-dvh max-h-dvh overflow-hidden bg-nexora-glow">
        <div className="pointer-events-none absolute -left-32 -top-32 h-112.5 w-112.5 rounded-full bg-nexora-purple-orb blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-125 w-125 rounded-full bg-nexora-green-orb blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <AuthHeader />

        <main className="relative z-10  max-h-dvh flex items-center justify-center px-4 pb-10 mt-50 lg:mt-45 xl:mt-20  sm:px-6 ">
          <div className="grid w-full overflow-hidden rounded-[2rem] border border-border-strong/80 bg-surface/70 shadow-2xl shadow-black/10 backdrop-blur-xl lg:grid-cols-[1fr_1fr] md:max-w-175 lg:max-w-5xl">
            <aside className="relative hidden overflow-hidden border-r border-border-strong/80 bg-section/70 p-8 lg:flex lg:flex-col lg:justify-between">
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-primary/10" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-40 w-40 rounded-full border border-primary/10" />
              <div className="pointer-events-none absolute -right-20 top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                  <KeyRound className="h-8 w-8" strokeWidth={1.7} />
                </div>
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
                  Account recovery
                </p>
                <h1 className="max-w text-4xl font-bold leading-tight text-heading">
                  Get back to what matters.
                </h1>
                <p className="mt-3 text-sm leading-5 text-text-secondary">
                  A secure reset link is all you need to return to your
                  portfolio, insights, and investment goals.
                </p>
              </div>

              <div className="relative pt-2 space-y-3">
                <div className="rounded-2xl border border-primary/15 bg-surface/75 p-4 shadow-xl shadow-black/5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-semibold text-heading">
                        Reset email
                      </span>
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Ready
                    </span>
                  </div>
                  <div className="space-y-2 rounded-xl border border-border-subtle bg-section/70 p-3">
                    <div className="h-2.5 w-3/4 rounded-full bg-border-subtle" />
                    <div className="h-2.5 w-1/2 rounded-full bg-border-subtle/70" />
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-text-muted">
                      <Check className="h-3.5 w-3.5 text-primary" />
                      Link expires for your protection
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      Private by design
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text-muted">
                      Your reset link is time-limited and intended only for you.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Secure access to your Nexora account
                </div>
              </div>
            </aside>

            <div className="flex items-start justify-center p-6 sm:p-10 lg:p-8 ">
              <div className="w-full md:max-w-140 lg:max-w-md">
                <div className="mb-3 md:mb-5 text-center lg:text-left">
                  <div className=" mb-5 flex items-center justify-center gap-3 lg:justify-start">
                    <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl border border-primary/20 bg-linear-to-br from-primary/15 to-primary/5 text-primary shadow-sm">
                      <LockKeyhole className="h-4 w-4 md:h-6 md:w-6" />
                    </div>
                    <span className="rounded-full border border-border-subtle bg-section px-3 py-1 text-xs font-medium text-text-muted">
                      Step 1 of 2
                    </span>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold tracking-tight text-heading">
                    Forgot your password?
                  </h2>
                  <p className="mt-3 text-xs md:text-sm leading-6 text-text-muted">
                    Enter your account email and we&apos;ll send you a secure
                    link to create a new password.
                  </p>
                </div>
                <ForgetPasswordForm />
                <p className="mt-3 md:mt-4 text-center text-xs leading-5 text-text-muted">
                  For your security, we&apos;ll use the same message whether or
                  not an account exists for that email.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default ForgetPassword;
