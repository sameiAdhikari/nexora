"use client";
import { ArrowLeft, Home, MailCheck, ShieldUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Divider from "@/components/common/Divider";
import { SpinnerCircle, SpinnerLoader } from "@/components/common/spinner";
import { ThemeToggler } from "@/components/common/ThemeToggler";
import { appName } from "@/const/constant";
import { resendVerificationEmail } from "@/lib/actions";
import { formateHideEmail } from "@/lib/utils";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(120);
  const [isResending, setIsResending] = useState(false);
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email") || "";

  useEffect(() => {
    if (!userEmail) router.push("/auth/signup");
  }, [router, userEmail]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (resendTimer <= 0) return;
      setResendTimer((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleResendVerificationEmail = async () => {
    if (resendTimer > 0 || isResending) return;
    setIsResending(true);
    try {
      const response = await resendVerificationEmail(userEmail);
      if (response.message === "EMAIL_IS_VERIFIED") {
        setIsVerified(true);
        return toast.info("Email is already verified.");
      }
      if (response.message === "EMAIL_IS_REQUIRED")
        return toast.error("Email is required.");

      if (response.message === "INVALID_EMAIL")
        return toast.error("The email address is invalid.");

      if (response.message === "USER_EMAIL_NOT_AVAILABLE")
        return toast.error("Failed to send verification email.");

      toast.success("Verification email sent successfully.");
      // eslint-disable-next-line
    } catch (error) {
      toast.error("Failed to send verification email.");
    } finally {
      setIsResending(false);
      setResendTimer(120);
    }
  };

  if (userEmail === "" || userEmail === null || userEmail === undefined)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <SpinnerLoader />
      </div>
    );

  return (
    <section className="relative min-h-screen max-h-screen bg-nexora-glow overflow-hidden flex flex-col">
      {/* Orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-112.5 w-112.5 rounded-full bg-nexora-purple-orb blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-100 w-100 rounded-full bg-nexora-green-orb blur-3xl" />

      {/* Header */}
      <header className="flex items-center justify-between px-13 z-20 bg-surface border-b border-border-default backdrop-blur-md h-16 shrink-0">
        <Image
          src="/logo-2.png"
          alt="Nexora"
          width={150}
          height={150}
          className="relative z-10 cursor-pointer"
          loading="lazy"
        />
        <ThemeToggler />
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-9">
        <div className="w-full max-w-113 space-y-6">
          {/* Card */}
          <div className="bg-surface border border-border-default rounded-2xl shadow-lg overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-linear-to-r from-primary via-purple-500 to-primary/40" />

            <div className="px-8 py-10 flex flex-col items-center text-center space-y-4">
              {/* Icon with glow ring */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150" />
                <div className="relative flex h-15 w-15 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 to-primary/5 border border-primary/20 shadow-sm">
                  <MailCheck className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* verify your email message */}
              <div className="">
                <h1 className="text-2xl font-bold text-heading ">
                  Verify your email
                </h1>
                <p className="text-sm text-text-muted  text-center w-full">
                  <span className="inline-block">
                    {" "}
                    We&apos;ve sent a verification link to{" "}
                  </span>
                  <span className="block text-xl text-primary font-bold -mt-1 mb-2">
                    {formateHideEmail(userEmail)}
                  </span>{" "}
                  <span className="inline-block">
                    Click the link in the email to verify {appName} account. The
                    link will expired in 1 hours.
                  </span>
                </p>
              </div>

              {/* -----------Resend / Verified section------------- */}
              {isVerified ? (
                <div className="w-full rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 flex items-center gap-3">
                  <MailCheck className="h-5 w-5 text-green-500 shrink-0" />
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium text-left">
                    Your email is verified. You can now sign in or go to the
                    home page.
                  </p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center -mt-3  space-y-1">
                  <p className="text-xs text-text-muted text-center">
                    Didn&apos;t receive the email? Check spam or resend below.
                  </p>
                  {resendTimer > 0 ? (
                    <div className="flex flex-col items-center space-y-2">
                      <p className="text-xs text-text-muted ">
                        Resend available in
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold w-10 h-10 flex items-center justify-center rounded-xl bg-section border border-border-subtle tabular-nums">
                          {Math.floor(resendTimer / 60)
                            .toString()
                            .padStart(2, "0")}
                        </span>
                        <span className="text-text-muted font-bold">:</span>
                        <span className="text-lg font-bold w-10 h-10 flex items-center justify-center rounded-xl bg-section border border-border-subtle tabular-nums">
                          {Math.floor(resendTimer % 60)
                            .toString()
                            .padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      disabled={isResending}
                      onClick={handleResendVerificationEmail}
                      className="w-full mt-2 py-2.5 rounded-xl bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-semibold text-sm transition-colors cursor-pointer"
                    >
                      {isResending && <SpinnerCircle />}
                      {!isResending
                        ? "Resend verification email"
                        : "Sending..."}
                    </button>
                  )}
                </div>
              )}

              <Divider>OR</Divider>

              {/* Navigation links */}
              <div className="flex w-full gap-3">
                <Link
                  href="/"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-default bg-section hover:bg-elevated-card py-2.5 text-sm font-medium text-text-secondary transition-colors"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  href="/auth/signin"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-default bg-section hover:bg-elevated-card py-2.5 text-sm font-medium text-text-secondary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Sign in
                </Link>
              </div>

              <div className="flex items-center gap-3 w-full bg-section px-2 py-2 rounded-xl border border-border-subtle">
                {" "}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/30 text-lg">
                  <ShieldUser className="text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-foreground">
                    Secure your account
                  </h3>

                  <p className=" text-[13px]  leading-4 text-muted-foreground">
                    Verifying your email helps keep your account safe and
                    secure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-text-muted">
            © 2026 {appName}. All rights reserved.
          </p>
        </div>
      </main>
    </section>
  );
};

export default VerifyEmail;
