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
