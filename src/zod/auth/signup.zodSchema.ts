import z from "zod/v4";

export const signupSchema = z
  .object({
    fullName: z.string().min(1, "Full Name must be required"),
    email: z.email("invalid emaill address"),
    password: z
      .string()
      .min(
        10,
        "password must be at least 10 character long, one uppercase letter, one lowercase letter, one number and a special character (! @ # $ % ^ & *)",
      )
      .regex(/[a-z]/, "Must contain an lowercase letter")
      .regex(/[A-Z]/, "Must contain a uppercase letter")
      .regex(/[0-9]/, "Must contain a number")
      .regex(
        /[!@#$%^&*]/,
        "Must contain a special character (! @ # $ % ^ & *)",
      ),
    confirmPassword: z.string().min(1, "please confirm your password"),
    isAcceptedTerms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions",
    }),
    referralCode: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export type signupSchemaType = z.infer<typeof signupSchema>;
