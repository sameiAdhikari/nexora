"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import InputField from "@/components/common/InputField";
import authClient from "@/lib/auth-client";
import FullPageSpinner from "@/components/common/FullPageSpinner";

import {
  forgetPassword,
  forgetPasswordType,
} from "@/zod/auth/signin.zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail } from "lucide-react";

const ForgetPasswordForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<forgetPasswordType>({
    resolver: zodResolver(forgetPassword),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: forgetPasswordType) => {
    setIsLoading(true);
    try {
      const { data: returnData, error } = await authClient.requestPasswordReset(
        {
          email: data.email,
          redirectTo: `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/auth/reset-password`,
        },
      );

      if (error) {
        if (error?.statusText === "Internal Server Error") {
          return toast.error(
            "There is some internal server error! please try again later.",
          );
        } else {
          return toast.error(
            "We couldn’t process your request right now. Please try again later.",
          );
        }
      }

      if (returnData) {
        toast.success(
          "Please check your email and follow the instructions to reset your password.",
        );
        reset();
        router.push(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/auth/signin`);
      }
    } catch {
      return toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <FullPageSpinner />}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email address"
          register={register}
          name="email"
          type="email"
          placeholder="you@example.com"
          LeftIcon={Mail}
          error={errors.email?.message}
        />

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 cursor-pointer transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:translate-y-0 active:bg-primary-active disabled:cursor-not-allowed disabled:bg-primary/50 disabled:text-white/70 disabled:hover:translate-y-0"
        >
          Send reset link
        </button>
        <Link
          href="/auth/signin"
          className="group mx-auto mt-3 md:mt-5 flex w-fit items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="group-hover:underline"> Back to sign in</span>
        </Link>
      </form>
    </>
  );
};

export default ForgetPasswordForm;
