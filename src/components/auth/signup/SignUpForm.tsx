"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Eye, EyeOff, LockKeyhole, ShieldCheck, User } from "lucide-react";

import authClient from "@/lib/auth-client";
import Divider from "@/components/common/Divider";
import InputField from "@/components/auth/signup/InputField";
import { SpinnerCircle } from "@/components/common/spinner";
import PasswordStrengthBar from "@/components/auth/signup/PasswordStrengthBar";
import { signupSchema, signupSchemaType } from "@/zod/auth/signup.zodSchema";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm<signupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      isAcceptedTerms: false,
      password: "",
      confirmPassword: "",
      referralCode: "",
    },
    mode: "onChange",
  });

  const handleFormSubmit = async (formdata: signupSchemaType) => {
    setIsLoading(true);
    try {
      const { error, data: returnUser } = await authClient.signUp.email({
        email: formdata.email,
        password: formdata.password,
        name: formdata.fullName,
        referralCode: formdata.referralCode ? formdata.referralCode : "",
        isAcceptedTerms: new Date().toISOString(),
        callbackURL: "/auth/signin", // Specify the callback URL after email verification
      });
      if (error) {
        toast.error(error.message || "An error occurred during signup.");
        setIsLoading(false);
        return;
      }
      // encodeURIComponent() is a function that takes a value and convet it into valid url. because in url there is some character which has special meaning so it'n use as a string.this function will replace it with %number example.Space → %20 &, → %26, = → %3D ,? → %3F, # → %23, % → %25
      router.push(
        `/auth/verify-email?email=${encodeURIComponent(returnUser.user.email)}`,
      );
      //eslint-disable-next-line
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start pr-30 overflow-y-scroll py-8 ">
        <div className=" max-w-130 min-w-130">
          {/* Header */}
          <div className="mb-5 text-center">
            <h1 className="text-2xl font-bold text-heading">
              Create your account
            </h1>
            <p className="text-text-muted text-sm mt-1">
              Join Nexora — start investing smarter today.
            </p>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full mb-3 flex items-center justify-center gap-3 border border-border-default rounded-xl py-2.5 text-sm font-medium text-text-primary bg-section hover:bg-elevated-card transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.3-.2-2.7-.5-4z"
                fill="#FFC107"
              />
              <path
                d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.3-17.7 11.7z"
                fill="#FF3D00"
              />
              <path
                d="M24 45c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.6 36.1 27 37 24 37c-6 0-10.6-3.1-11.8-7.5l-7 5.4C8.1 40.8 15.5 45 24 45z"
                fill="#4CAF50"
              />
              <path
                d="M44.5 20H24v8.5h11.8c-.6 2.8-2.3 5.1-4.7 6.6l6.6 5.4C41.8 37.1 45 31 45 24c0-1.3-.2-2.7-.5-4z"
                fill="#1976D2"
              />
            </svg>
            Continue with Google
          </button>

          <Divider>or sign up with email</Divider>

          {/* Form */}
          <form
            className="mt-1 space-y-2"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Nishant Khadka"
              register={register}
              error={errors?.fullName?.message}
              LeftIcon={User}
            />
            <InputField
              label="Email Address"
              name="email"
              placeholder="example123@gmail.com"
              register={register}
              error={errors?.email?.message}
              LeftIcon={User}
            />
            <InputField
              label="password"
              name="password"
              placeholder="Create a strong password"
              register={register}
              LeftIcon={LockKeyhole}
              type={showPassword ? "text" : "password"}
              RightIcon={showPassword ? EyeOff : Eye}
              onRightIconClick={() => setShowPassword(!showPassword)}
              error={errors?.password?.message}
            />
            <PasswordStrengthBar password={watch("password")} />
            <InputField
              label="confirm password"
              name="confirmPassword"
              placeholder="Re-write your password"
              register={register}
              LeftIcon={LockKeyhole}
              type={showConfirmPassword ? "text" : "password"}
              RightIcon={showConfirmPassword ? EyeOff : Eye}
              onRightIconClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              error={errors.confirmPassword?.message}
            />
            {/* this is a future options for refferal code programme */}
            {/* <InputField
                label="referralCode"
                optional={true}
                LeftIcon={Gift}
                error={errors?.referralCode?.message}
                placeholder="Refferal Code"
                name="referralCode"
                register={register}
              /> */}
            <Controller
              name="isAcceptedTerms"
              control={control}
              render={({ field, fieldState }) => (
                <FieldGroup>
                  <Field
                    orientation="horizontal"
                    className={`gap-2 text-text-muted ${
                      fieldState.invalid
                        ? "border-danger-light bg-danger-light"
                        : "bg-section"
                    }   rounded-xl px-3 py-2 `}
                  >
                    <Checkbox
                      className="h-5 w-5 border-border-strong"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-invalid={fieldState.invalid}
                    />
                    <FieldLabel className="inline-block text-xs">
                      By signing up, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-semibold text-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              {isLoading && <SpinnerCircle />}
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <p className="text-center text-[13px] text-text-muted mt-3">
            Already have an Account?{" "}
            <Link
              href="/auth/signin"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-text-muted">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Your data is encrypted and protected with us.
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
