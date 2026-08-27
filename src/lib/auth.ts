import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectDb } from "./mongodb";
import { Resend } from "resend";
import { render } from "@react-email/render";
import VerificationEmailTemplate from "@/components/template/VerificationEmailTemplate";
import SignupAttemptNotificationEmail from "@/components/template/SignupAttemptNotificationEmail";

const db = await connectDb();
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: mongodbAdapter(db),
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    onExistingUserSignUp: async ({ user }, request) => {
      //sending a notification email for resignup of existing user

      // In real application you can get the location of the user using the ip address.
      // const ip = request?.headers?.get("x-forwarded-for") || "";
      // const response = await fetch(`https://ipapi.co/${ip}/json/`);
      // const data = await response.json();
      // const attemptLocation = `${data.city}, ${data.region}, ${data.country_name}`;
      const attemptedLocation = ""; // right now we are just using empty but in future we can replace it with actual login attempted user location.

      const loginUrl = `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/auth/signin`;
      const userAgent = request?.headers?.get("user-agent") || "";
      const attemptedTime = new Date().toLocaleString("en-NP", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour12: false,
      });

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "New User SignUp",
        html: await render(
          SignupAttemptNotificationEmail({
            name: user.name,
            attemptedEmail: user.email,
            attemptedTime,
            attemptedLocation,
            userAgent,
            loginUrl,
          }),
        ),
      });
    },
  },
  emailVerification: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sendVerificationEmail: async ({ user, url, token }) => {
      //send a verification email to the new user for verify email.
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Verify your email address",
        html: await render(VerificationEmailTemplate({ name: user.name, url })),
      });
    },
    sendOnSignUp: true,
    // autoSignInAfterVerification: true,
  },
  user: {
    additionalFields: {
      referralCode: {
        type: "string",
      },
      isAcceptedTerms: {
        type: "string",
        required: true,
      },
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      prompt: "select_account",
      mapProfileToUser: (profile) => {
        return { ...profile, isAcceptedTerms: true };
      },
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "email-password"],
      updateUserInfoOnLink: true,
    },
  },
});
