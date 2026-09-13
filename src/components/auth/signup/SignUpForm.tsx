"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Eye, EyeOff, LockKeyhole, ShieldCheck, User } from "lucide-react";

import authClient from "@/lib/auth-client";
import Divider from "@/components/common/Divider";
import InputField from "@/components/common/InputField";
import { SpinnerCircle } from "@/components/common/spinner";
import PasswordStrengthBar from "@/components/auth/signup/PasswordStrengthBar";
import { signupSchema, signupSchemaType } from "@/zod/auth/signup.zodSchema";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { toast } from "react-toastify";
import { findOutExistingUser, resendVerificationEmail } from "@/lib/actions";
import GoogleLogo from "@/components/common/GoogleLogo";
import FullPageSpinner from "@/components/common/FullPageSpinner";

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
    reset,
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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleFormSubmit = async (formdata: signupSchemaType) => {
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);
    try {
      const user = await findOutExistingUser(formdata.email);

      // If the user exists and the email is verified, we can show an error message or redirect them to the sign-in page.
      if (user.message === "EMAIL_IS_VERIFIED") {
        setIsLoading(false);
        reset();
        return toast.error(
          "We couldn't complete your sign-up. Try sign in or continue with Google",
        );
      }

      // If the email is not verified, we can proceed to send a verification email or handle the signup process accordingly.
      if (user.message === "EMAIL_IS_NOT_VERIFIED") {
        setIsLoading(false);
        reset();
        const resendResponse = await resendVerificationEmail(formdata.email);
        if (resendResponse.message === "SEND_EMAIL_VERIFICATION_LINK") {
          router.push(
            `/auth/verify-email?email=${encodeURIComponent(formdata.email)}`,
          );
        }
        return toast.error(
          "Your email is not verified. Please check your inbox for the verification email or request a new one.",
        );
      }
      // If the user does not exist, we can proceed with the signup process.
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

      router.push(
        `/auth/verify-email?email=${encodeURIComponent(returnUser.user.email)}`,
      );
      setIsLoading(false);
      reset();
      //eslint-disable-next-line
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
      if (error) toast.error("Google sign-up failed. Please try again.");
    } catch {
      return toast.error("An unexpected error occurred during Google sign-up.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <FullPageSpinner />}
      <div className=" flex flex-col items-center justify-start pr-30  py-8 pt-27 ">
        <div className=" max-w-md min-w-md">
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
          <Button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full mb-3 flex items-center justify-center gap-3 border border-border-default rounded-xl py-2.5 text-sm font-medium text-text-primary bg-section hover:bg-elevated-card transition-colors cursor-pointer"
          >
            <GoogleLogo />
            Continue with Google
          </Button>

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
              type="email"
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
                      className="h-4 w-4 border-border-strong cursor-pointer"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-invalid={fieldState.invalid}
                    />
                    <FieldLabel className="inline-block text-[12px]">
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
