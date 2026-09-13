import z from "zod/v4";

export const signinSchema = z
  .object({
    email: z.email("Email is required and must be valid.").trim().toLowerCase(),
    password: z.string().min(1, "Password is required."),
    rememberMe: z.boolean().optional(),
  })
  .strict();
export type SigninSchemaType = z.infer<typeof signinSchema>;

export const forgetPassword = z.object({
  email: z.email("please enter a valid email address").trim().toLowerCase(),
});
export type forgetPasswordType = z.infer<typeof forgetPassword>;

export const resetPasswordSchema = z
  .object({
    token: z.string().min(1, "Reset token is required."),
    newPassword: z
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
    confirmPassword: z.string().min(1, "Confirm your new password."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
