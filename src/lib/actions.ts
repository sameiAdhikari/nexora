"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { connectDb } from "./mongodb";
import { emailRegex } from "@/const/constant";

export async function resendVerificationEmail(email: string) {
  if (!email) return { message: "EMAIL_IS_REQUIRED" };

  if (!emailRegex.test(email.toLowerCase()))
    return { message: "INVALID_EMAIL" };

  const db = await connectDb();
  const user = await db.collection("user").findOne({ email });

  if (!user) return { message: "USER_EMAIL_NOT_AVAILABLE" };

  if (user.emailVerified) return { message: "EMAIL_IS_VERIFIED" };

  await auth.api.sendVerificationEmail({
    headers: await headers(),
    body: {
      email,
      callbackURL: "/auth/signin",
    },
  });
  return { message: "SEND_EMAIL_VERIFICATION_LINK" };
}

export async function requestPasswordResetEmail(email: string) {
  if (!email) return { message: "EMAIL_IS_REQUIRED" };

  if (!emailRegex.test(email.toLowerCase()))
    return { message: "INVALID_EMAIL" };

  const db = await connectDb();
  const user = await db.collection("user").findOne({ email });

  if (!user) return { message: "USER_EMAIL_NOT_AVAILABLE" };

  await auth.api.requestPasswordReset({
    headers: await headers(),
    body: {
      email,
      redirectTo: "/auth/reset-password",
    },
  });

  return { message: "SEND_PASSWORD_RESET_LINK" };
}

// export async function resetUserPassword(token: string, newPassword: string) {
//   if (!token) return { message: "TOKEN_IS_REQUIRED" };
//   if (!newPassword) return { message: "PASSWORD_IS_REQUIRED" };

//   const { status } = await auth.api.resetPassword({
//     headers: await headers(),
//     body: {
//       token,
//       newPassword,
//     },
//   });
//   // if (status) return console.log(status);

//   return { message: "PASSWORD_RESET_SUCCESS" };
// }

export async function findOutExistingUser(email: string) {
  if (!email) return { message: "EMAIL_IS_REQUIRED" };
  if (!emailRegex.test(email.toLowerCase()))
    return { message: "INVALID_EMAIL" };
  const db = await connectDb();
  const user = await db.collection("user").findOne({ email });
  if (!user) return { message: "USER_EMAIL_NOT_AVAILABLE" };
  if (user.emailVerified) return { message: "EMAIL_IS_VERIFIED" };
  return { message: "EMAIL_IS_NOT_VERIFIED" };
}
