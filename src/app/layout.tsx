import type { Metadata } from "next";
import { Exo, Roboto_Mono } from "next/font/google";
import { PostHogProvider } from "./posthog-provider";
import "./globals.css";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
        className={`${exo.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
