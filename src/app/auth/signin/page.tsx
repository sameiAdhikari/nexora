import AuthHeader from "@/components/auth/AuthHeader";
import SignInForm from "@/components/auth/signin/SignInForm";
import { appName, baseCurrency } from "@/const/constant";
import { ShieldCheck } from "lucide-react";

export default function SignInPage() {
  return (
    <section className="relative w-full min-h-dvh max-h-dvh overflow-hidden bg-nexora-glow">
      <div className="pointer-events-none absolute -top-24 -left-24 h-112.5 w-112.5 rounded-full bg-nexora-purple-orb blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-100 w-100 rounded-full bg-nexora-green-orb blur-3xl" />

      <AuthHeader />

      <main className="relative z-10 flex w-full justify-center px-4 sm:px-6 lg:mt-15 ">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          {/* left side content for the page */}
          <aside className="hidden overflow-hidden rounded-[2rem] p-8 backdrop-blur-sm lg:flex lg:flex-col lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-section px-3 py-1 text-xs font-medium text-primary tracking-wider">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Secure access to your investments
              </div>

              <div className="space-y-3">
                <h1 className="max-w-xl text-5xl font-bold leading-[1.1] text-heading">
                  Your portfolio is waiting.
                </h1>

                <p className="max-w-2xl text-base leading-7 text-text-secondary">
                  Sign in to track your investments, monitor portfolio
                  performance, explore opportunities, and stay informed about
                  the assets that matter to you.
                </p>
              </div>
            </div>
            <div className="bg-surface border border-border-subtle rounded-xl p-3 my-2">
              <div className="flex items-center justify-between">
                <div className="text-xs ">
                  <p className="uppercase font-semibold">Portfolio Value</p>
                  <strong className="text-lg">{baseCurrency} 1025460</strong>
                  <p className="text-text-muted">
                    +{baseCurrency}54.78 (3.05%)
                  </p>
                </div>
                <div className="border border-border-subtle shadow-sm rounded-xl p-2 text-center text-xs">
                  <p className="uppercase ">Today</p>
                  <strong className="text-base">+1.84%</strong>
                </div>
              </div>
              <div className="w-full">
                <svg
                  viewBox="0 0 500 150"
                  className="h-auto w-full"
                  aria-label="Demo portfolio performance"
                >
                  <defs>
                    <linearGradient
                      id="portfolioGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="0.2"
                      />

                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  {/* Background grid */}
                  <g stroke="currentColor" strokeOpacity="0.08" strokeWidth="1">
                    <line x1="0" y1="40" x2="500" y2="40" />
                    <line x1="0" y1="90" x2="500" y2="90" />
                    <line x1="0" y1="140" x2="500" y2="140" />
                  </g>

                  {/* Gradient area */}
                  <path
                    d="
            M0 145
            C40 138, 60 150, 100 125
            C140 100, 160 120, 200 95
            C240 70, 260 90, 300 65
            C340 40, 365 60, 400 42
            C440 22, 465 35, 500 15
            L500 180
            L0 180
            Z
          "
                    fill="url(#portfolioGradient)"
                  />

                  {/* Graph line */}
                  <path
                    d="
            M0 145
            C40 138, 60 150, 100 125
            C140 100, 160 120, 200 95
            C240 70, 260 90, 300 65
            C340 40, 365 60, 400 42
            C440 22, 465 35, 500 15
          "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Last point */}
                  <circle cx="500" cy="15" r="5" fill="currentColor" />
                </svg>

                <div className="mt-2 flex justify-between text-xs text-text-muted">
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border-subtle bg-section px-4 py-3">
                  <p className="text-sm font-semibold text-heading">
                    Portfolio insights
                  </p>

                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    Keep track of your holdings, performance, and portfolio
                    activity in one place.
                  </p>
                </div>

                <div className="rounded-2xl border border-border-subtle bg-section px-4 py-3">
                  <p className="text-sm font-semibold text-heading">
                    Built with security in mind
                  </p>

                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    Your account and investment information are protected with
                    secure authentication.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-text-muted">
                Investing involves risk. {appName} gives you the tools and
                information to make more informed decisions.
              </p>
            </div>
          </aside>

          {/* right side content with form */}
          <div className="p-8 pt-12 flex max-w-150">
            <SignInForm />
          </div>
        </div>
      </main>
    </section>
  );
}
