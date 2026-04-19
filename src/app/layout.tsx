import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { PostHogProvider } from "./posthog-provider";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.otf",  weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CutEngine — ML-Driven Fat Loss That Adapts to You",
  description:
    "CutEngine analyzes your weight trends, activity, recovery, and biofeedback to calculate personalized, daily-adjusted calorie and macro targets. Powered by HealthKit and machine learning.",
  keywords: [
    "fat loss app",
    "calorie tracking",
    "macro calculator",
    "HealthKit",
    "body composition",
    "cutting phase",
    "ML nutrition",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${satoshi.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
