"use client";

import AuthHeader from "@/components/auth/AuthHeader";
import PasswordStrengthBar from "@/components/auth/signup/PasswordStrengthBar";
import InputField from "@/components/common/InputField";
import authClient from "@/lib/auth-client";
import {
  ResetPasswordSchemaType,
  resetPasswordSchema,
} from "@/zod/auth/signin.zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      token: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  // this is to set the token value by taking it from the url
  useEffect(() => {
    if (token) {
      setValue("token", token);
    }
  }, [setValue, token]);

  const onSubmit = async (data: ResetPasswordSchemaType) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const { data: resetData, error: resetError } =
        await authClient.resetPassword({
          newPassword: data.newPassword,
          token,
        });

      if (resetError?.code === "INVALID_TOKEN")
        return toast.error(
          "This reset link is invalid or expired. Please request a new one.",
        );

      if (resetData) {
        reset();
        toast.success("Your password has been updated successfully.");
        router.push(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/auth/signin`);
        return;
      }
    } catch {
      toast.error("We could not reset your password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!token) {
    return (
      <section className="relative min-h-dvh overflow-hidden bg-nexora-glow">
        <div className="pointer-events-none absolute -left-32 -top-32 h-112.5 w-112.5 rounded-full bg-nexora-purple-orb blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-125 w-125 rounded-full bg-nexora-green-orb blur-3xl" />

        <AuthHeader />

        <main className="relative z-10 flex min-h-[calc(100dvh-5rem)] items-center justify-center px-4 py-8 sm:px-6">
          <div className="w-full max-w-md rounded-[2rem] border border-border-strong/80 bg-surface/80 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-danger/20 bg-danger-light text-danger">
              <KeyRound className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-bold text-heading">
              Reset link is missing
            </h1>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              This page needs a valid password reset token. Please request a new
              reset email and try again.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/forget-password"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Request new link
              </Link>
              <Link
                href="/auth/signin"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-default bg-section px-4 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-elevated-card hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          </div>
        </main>
      </section>
    );
  }

  return (
    <section className="relative min-h-dvh overflow-hidden bg-nexora-glow">
      <div className="pointer-events-none absolute -left-32 -top-32 h-112.5 w-112.5 rounded-full bg-nexora-purple-orb blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-125 w-125 rounded-full bg-nexora-green-orb blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <AuthHeader />

      <main className="relative mt-14 z-10 flex min-h-[calc(100dvh-5rem)] items-center justify-center px-4 py-8 sm:px-6">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border-strong/80 bg-surface/70 shadow-2xl shadow-black/10 backdrop-blur-xl lg:grid-cols-[1fr_1fr]">
          <aside className="relative hidden overflow-hidden border-r border-border-strong/80 bg-section/70 p-10 lg:flex lg:flex-col lg:justify-between">
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-primary/10" />
            <div className="pointer-events-none absolute -right-20 top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                <LockKeyhole className="h-8 w-8" strokeWidth={1.7} />
              </div>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
                Password reset
              </p>
              <h1 className="max-w text-3xl font-bold leading-tight text-heading">
                Create a new password and secure your account.
              </h1>
              <p className="mt-3 text-sm leading-5 text-text-secondary">
                Your reset link is unique to you and only works for a short
                time. Choose a strong password you have not used before.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-primary/15 bg-surface/75 p-4 shadow-xl shadow-black/5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold text-heading">
                      Safe reset
                    </span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Secure
                  </span>
                </div>
                <p className="text-xs leading-5 text-text-muted">
                  Once you submit this form, your old password will stop working
                  and any active sessions can be revoked if configured.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                This page only accepts a valid reset token
              </div>
            </div>
          </aside>

          <div className="flex items-start justify-center p-6 sm:p-10 lg:p-8">
            <div className="w-full max-w-md">
              <div className="mb-6 text-center lg:text-left">
                <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/15 to-primary/5 text-primary shadow-sm md:h-14 md:w-14 md:rounded-2xl">
                    <KeyRound className="h-4 w-4 md:h-6 md:w-6" />
                  </div>
                  <span className="rounded-full border border-border-subtle bg-section px-3 py-1 text-xs font-medium text-text-muted">
                    Step 2 of 2
                  </span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-heading md:text-3xl">
                  Set a new password
                </h2>
                <p className="mt-3 text-xs leading-6 text-text-muted md:text-sm">
                  Enter a new password below to finish resetting your Nexora
                  account.
                </p>
              </div>

              <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("token")} />

                <InputField
                  label="New password"
                  register={register}
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a new password"
                  LeftIcon={LockKeyhole}
                  RightIcon={showPassword ? EyeOff : Eye}
                  onRightIconClick={() => setShowPassword((prev) => !prev)}
                  error={errors.newPassword?.message}
                />

                <PasswordStrengthBar password={watch("newPassword")} />

                <div className="my-4">
                  <InputField
                    label="Confirm password"
                    register={register}
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your new password"
                    LeftIcon={LockKeyhole}
                    RightIcon={showConfirmPassword ? EyeOff : Eye}
                    onRightIconClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    error={errors.confirmPassword?.message}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all cursor-pointer hover:-translate-y-0.5 hover:bg-primary-hover active:translate-y-0 active:bg-primary-active disabled:cursor-not-allowed disabled:opacity-70 "
                >
                  {isSubmitting ? "Updating password..." : "Update password"}
                </button>

                <Link
                  href="/auth/forget-password"
                  className="group mx-auto mt-4 flex w-fit items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="group-hover:underline">
                    Request a new reset link
                  </span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ResetPasswordPage;
