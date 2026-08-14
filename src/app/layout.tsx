import StoreProvider from "@/components/common/StoreProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexora | Next Generation Of Investing",
  description:
    "It is a platform that provide a extream level of experience of investing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <StoreProvider>{children}</StoreProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          transition={Bounce}
        />
      </body>
    </html>
  );
}
