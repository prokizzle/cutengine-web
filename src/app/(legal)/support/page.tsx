import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Support — CutEngine",
  description:
    "Get help with CutEngine. Find answers to common questions or contact our team.",
};

const faqs = [
  {
    q: "What is CutEngine?",
    a: "CutEngine is an iOS app that uses machine learning and your Apple Watch data to calculate personalized, daily-adjusted calorie and macro targets for fat loss phases. Instead of a static number from a formula, your targets adapt as your body responds.",
  },
  {
    q: "When will CutEngine launch?",
    a: "CutEngine is currently in development. Join the waitlist on our homepage to be notified as soon as the app is available on the App Store.",
  },
  {
    q: "Do I need an Apple Watch?",
    a: "An Apple Watch is strongly recommended for the best experience — it automatically provides steps, workouts, sleep, and HRV data. However, CutEngine can still work with manually entered data if you don't have one.",
  },
  {
    q: "What data does CutEngine use from HealthKit?",
    a: "CutEngine reads steps, active energy, workouts, sleep duration, heart rate variability (HRV), and resting heart rate. All data stays on your device and is never sold or shared with third parties.",
  },
  {
    q: "How does the ML model work?",
    a: "After 14 days of tracking your weight, intake, and activity, CutEngine builds a personal model of your metabolism. It learns how your body responds to different calorie levels and adjusts your daily targets accordingly — getting more accurate over time.",
  },
  {
    q: "Is my health data private?",
    a: "Yes. CutEngine processes your health data on-device. We do not store, sell, or share your HealthKit data. See our Privacy Policy for full details.",
  },
  {
    q: "How much will CutEngine cost?",
    a: "Pricing will be announced closer to launch. Join the waitlist to be the first to know about pricing and any early-access offers.",
  },
  {
    q: "What are enhancement tiers?",
    a: "CutEngine recognizes that people on TRT, GLP-1 medications, peptides, or other protocols respond differently to calorie deficits. Enhancement tiers adjust deficit strategies and safety thresholds based on your situation.",
  },
];

export default function SupportPage() {
  return (
    <>
      <h1>Support</h1>
      <p className="lead">
        Find answers to common questions below, or send us a message and
        we&apos;ll get back to you as soon as we can.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="not-prose space-y-2">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-border bg-surface/50 transition-colors duration-200 open:border-primary/30"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-foreground font-medium list-none [&::-webkit-details-marker]:hidden">
              {faq.q}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </summary>
            <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <h2>Contact Us</h2>
      <p>
        Can&apos;t find what you&apos;re looking for? Send us a message and
        we&apos;ll respond within a few business days.
      </p>
      <div className="not-prose">
        <ContactForm />
      </div>
    </>
  );
}
