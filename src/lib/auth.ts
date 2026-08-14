import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectDb } from "./mongodb";
import { Resend } from "resend";
import { render } from "@react-email/render";
import VerificationEmailTemplate from "@/components/template/VerificationEmailTemplate";

const db = await connectDb();
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    onExistingUserSignUp: async ({ user }) => {
      //send email to admin
      console.log("user already exist", user.email);
    },
  },
  emailVerification: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sendVerificationEmail: async ({ user, url, token }) => {
      //you have to wait in order to get a response of sending email.
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Verify your email address",
        html: await render(VerificationEmailTemplate({ name: user.name, url })),
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
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
});
