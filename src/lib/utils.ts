import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formateHideEmail = (email: string) => {
  const [local, domain] = email.split("@");
  return `${local.substring(0, 2)}*****@${domain}`;
};
