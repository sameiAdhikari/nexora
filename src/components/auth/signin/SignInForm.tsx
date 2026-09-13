"use client";
import Divider from "@/components/common/Divider";
import FullPageSpinner from "@/components/common/FullPageSpinner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { appName } from "@/const/constant";
import authClient from "@/lib/auth-client";
import { signinSchema, SigninSchemaType } from "@/zod/auth/signin.zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "@/components/common/InputField";
import GoogleLogo from "@/components/common/GoogleLogo";

const SignInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SigninSchemaType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  useEffect(() => {
    // Reset the form when the component mounts
    reset();
  }, [reset]);

  const handleFormSubmission = async (data: SigninSchemaType) => {
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);
    try {
      const { data: signInData, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
        callbackURL: "/dashboard",
      });

      console.log(error);
      if (error) {
        if (error.code === "EMAIL_NOT_VERIFIED") {
          return toast.error(
            "Sign-in couldn't be completed. Please check your inbox for further instructions.",
          );
        }
        return toast.error("Invalid user email or password. Please try again.");
      }
      if (signInData) {
        toast.success("you are successfully login.");
        reset(); // Reset the form after submission
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Sign-in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
      if (error) toast.error("Google sign-in failed. Please try again.");
      reset(); // Reset the form after submission
      setIsLoading(false);
    } catch (error) {
      toast.error("An unexpected error occurred during Google sign-in.");
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <>
      {isLoading && <FullPageSpinner />}
      <div className="w-full overflow-visible  rounded-2xl ">
        {/* <div className="h-1 w-full bg-linear-to-r from-primary via-violet-500 to-primary/35" /> */}
        <div className=" px-6  sm:px-8 ">
          <div className="space-y-1 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-linear-to-br from-primary/15 to-primary/5 shadow-sm">
              <LockKeyhole className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-heading">Welcome back</h2>
            <p className="text-sm text-text-muted">
              Sign in to continue to your Nexora account.
            </p>
          </div>

          {/* --------------sign in with google button---------------- */}
          <div className="mt-6 space-y-4">
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-border-default bg-section px-4 py-3 text-sm font-medium text-text-primary transition-colors cursor-pointer hover:bg-elevated-card"
            >
              <GoogleLogo /> Continue with Google
            </Button>

            <Divider>Or sign in with email</Divider>
          </div>

          {/* ---------------------actual sign in form-------------------------- */}
          <form
            className="mt-4 space-y-4"
            onSubmit={handleSubmit(handleFormSubmission)}
          >
            <InputField
              label="email address"
              placeholder="you@example.com"
              name="email"
              type="email"
              register={register}
              LeftIcon={Mail}
              error={errors?.email?.message}
            />

            <InputField
              name="password"
              placeholder="Enter your password"
              register={register}
              label="Password"
              type={!isPasswordVisible ? "password" : "text"}
              LeftIcon={LockKeyhole}
              RightIcon={isPasswordVisible ? EyeOff : Eye}
              onRightIconClick={() => setIsPasswordVisible(!isPasswordVisible)}
              error={errors?.password?.message}
            />

            <div className="flex items-center justify-between gap-3">
              <div>
                <Controller
                  name="rememberMe"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <FieldGroup>
                        <Field
                          orientation={"horizontal"}
                          className="flex items-center gap-2"
                        >
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-invalid={fieldState.invalid}
                            className="w-4 h-4 border-border-strong cursor-pointer"
                          />
                          <FieldLabel className="min-w-25 text-text-secondary text-sm">
                            remember me
                          </FieldLabel>
                        </Field>
                      </FieldGroup>
                    );
                  }}
                />
              </div>
              {/* <label className="flex gap-2 items-center">
              <input type="checkbox" className="cursor-pointer  w-4 h-4" />
              <span className=" text-sm text-text-muted">remember me</span>
            </label> */}
              <Link
                href={"/auth/forget-password"}
                className="text-sm font-medium text-primary hover:underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors cursor-pointer hover:bg-primary-hover active:bg-primary-active"
            >
              {/* {isLoading && <SpinnerCircle size={21} />} */}
              {isLoading ? "Signing in..." : "Sign in"}
              {/* Sign in */}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className=" px-4 pt-4 pb-2">
            <p className="text-center text-sm text-text-muted">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-primary hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>

          <div className=" flex items-start justify-center gap-1  text-xs text-text-muted">
            <ShieldCheck className="h-4 w-4 text-primary" />
            {/* Protected with Nexora&apos;s secure sign-in experience. */}
            Secure access to your {appName} account. We prioritize your security
            and privacy.
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
