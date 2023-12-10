import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CounterProvider from "@/context/Counter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UseContext Hook 😎",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterProvider>{children}</CounterProvider>
      </body>
    </html>
  );
}