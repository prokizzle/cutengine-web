import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PhoneMockup } from "@/components/phone-mockup";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "../waitlist-form";

export const metadata: Metadata = {
  title: "CardioEngine — Real-Time HR Zone Coaching That Adapts to You",
  description:
    "CardioEngine uses real-time heart rate data from your Apple Watch or BLE chest strap to deliver adaptive zone coaching, weekly minute targets, and health benefit tracking.",
  keywords: [
    "heart rate zone training",
    "cardio app",
    "HR zone coaching",
    "Apple Watch cardio",
    "zone 2 training",
    "HealthKit",
    "BLE heart rate",
  ],
};

const CARDIO_ENGINE_ICON = (
  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 25.5 C 16 25.5, 6 19.5, 6 13 C 6 10.2, 8.2 8, 11 8 C 13 8, 14.5 9, 16 11 C 17.5 9, 19 8, 21 8 C 23.8 8, 26 10.2, 26 13 C 26 19.5, 16 25.5, 16 25.5 Z"
        fill="currentColor"
        className="text-background"
      />
      <polyline
        points="7,16 11,16 13,20 16,12 18,16 25,16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
    </svg>
  </div>
);

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#compare", label: "Compare" },
  { href: "#screenshots", label: "Screenshots" },
] as const;

function ZoneBar() {
  return (
    <div className="w-full">
      <div className="h-2 rounded-full bg-[linear-gradient(90deg,#0A84FF_0%,#34C759_55%,#FF9F0A_85%,#BF5AF2_100%)]" />
      <div className="flex justify-between mt-2 text-[10px] text-muted font-medium tracking-wider uppercase">
        <span>Z1</span>
        <span>Z2</span>
        <span>Z3</span>
        <span>Z4</span>
        <span>Z5</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(191,90,242,0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-accent-purple/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-xs font-medium text-accent-purple tracking-wide uppercase">Coming Soon on iOS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight font-display">
            Train Smarter With Every{" "}
            <span className="text-accent-purple">Heartbeat</span>.
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
            CardioEngine delivers{" "}
            <span className="text-foreground font-medium">real-time HR zone coaching</span> using
            your Apple Watch or BLE chest strap — so every minute of cardio counts.
          </p>

          <div className="mt-6 max-w-sm mx-auto lg:mx-0">
            <ZoneBar />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-background hover:bg-primary-dark transition-colors duration-200 cursor-pointer animate-pulse-glow w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-medium text-muted hover:text-foreground hover:border-muted transition-colors duration-200 cursor-pointer w-full sm:w-auto justify-center"
            >
              See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span>HealthKit Native</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              <span>Real-Time HR</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <span>Apple Watch</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-in-up delay-200">
          <div className="relative animate-float">
            <PhoneMockup src="/screenshots/cardio-dashboard.png" alt="CardioEngine Dashboard showing CARDIO+ENGINE hero, zone gradient progress, weekly minutes, and health metrics" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
      title: "220 Minus Age",
      desc: "A formula from the 1970s applied to every human regardless of fitness, genetics, or training history",
      color: "text-red-400 bg-red-400/10 border-red-400/20",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
      title: "No Zone Feedback",
      desc: "Most apps show which zone you hit after the workout. By then it is too late to adjust",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
      title: "Minutes Without Purpose",
      desc: "Logging cardio time with no weekly volume target or health-benefit tracking",
      color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(191,90,242,0.04)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
          Generic HR Zones <span className="text-red-400">Miss the Point</span>
        </h2>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Your heart rate zones are unique. A population formula can&apos;t tell you
          where your aerobic threshold actually sits.
        </p>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {cards.map((item) => (
            <div key={item.title} className={`rounded-2xl border p-6 text-left ${item.color}`}>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Real-Time HR Zone Tracking",
      desc: "See your current zone, target zone, and time-in-zone during every session. Adjust pace in the moment, not after the fact.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
      span: "sm:col-span-2",
    },
    {
      title: "BLE + Apple Watch",
      desc: "Connects to Bluetooth chest straps for maximum accuracy, or uses Apple Watch optical HR. Your choice.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
      span: "",
    },
    {
      title: "Adaptive Zone Coaching",
      desc: "Zones recalibrate as your fitness improves. What was Zone 4 last month might be Zone 3 now.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
      span: "",
    },
    {
      title: "Weekly Minute Targets",
      desc: "Set a weekly volume goal in zone-minutes. CardioEngine tracks progress and recommends bonus sessions when you hit your target early.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
      span: "sm:col-span-2",
    },
    {
      title: "Health Benefit Tracking",
      desc: "Resting HR and HRV trends over time. See the cardiovascular improvements your training produces.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4" /></svg>,
      span: "",
    },
    {
      title: "Apple Watch Companion",
      desc: "Glanceable zone display on your wrist. Start, pause, and finish sessions without pulling out your phone.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="7" /><rect x="7" y="6" width="10" height="12" rx="2" /></svg>,
      span: "",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Zone Training, Not Zone Guessing
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Every feature is built to keep you in the right zone at the right time,
            with data that proves your cardiovascular fitness is improving.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-2xl border border-border bg-surface/50 p-6 hover:border-accent-purple/30 hover:bg-surface transition-all duration-200 cursor-pointer ${f.span}`}
            >
              <div className="h-10 w-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple mb-4 group-hover:bg-accent-purple/20 transition-colors duration-200">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Connect Your HR Source", desc: "Pair your Apple Watch or BLE chest strap. CardioEngine auto-detects the most accurate source available." },
    { num: "02", title: "Set Your Zones", desc: "Choose a zone model or let CardioEngine calibrate from your data. Set a weekly minute target for your goals." },
    { num: "03", title: "Get Real-Time Coaching", desc: "During sessions, see your live zone, time-in-zone, and pacing cues. After sessions, track health trends." },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            From Strap-On to Zone-Locked in 60 Seconds
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <span className="font-mono text-5xl font-bold text-accent-purple/15">{step.num}</span>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-accent-purple/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    { feature: "Real-time zone coaching", ce: true, strava: false, polar: "Partial", af: false },
    { feature: "BLE chest strap support", ce: true, strava: false, polar: true, af: false },
    { feature: "Adaptive zone recalibration", ce: true, strava: false, polar: false, af: false },
    { feature: "Weekly minute targets", ce: true, strava: false, polar: false, af: true },
    { feature: "Resting HR / HRV trends", ce: true, strava: "Partial", polar: true, af: true },
    { feature: "Apple Watch companion", ce: true, strava: true, polar: false, af: true },
    { feature: "HealthKit-first (auto data)", ce: true, strava: false, polar: false, af: true },
    { feature: "Bonus session recommendations", ce: true, strava: false, polar: false, af: false },
  ];

  const competitors = [
    { key: "strava" as const, name: "Strava" },
    { key: "polar" as const, name: "Polar Beat" },
    { key: "af" as const, name: "Apple Fitness+" },
  ];

  function CheckIcon() {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple"><polyline points="20 6 9 17 4 12" /></svg>;
  }
  function XIcon() {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted/40"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
  }
  function renderValue(value: boolean | string) {
    if (value === true) return <CheckIcon />;
    if (value === false) return <XIcon />;
    return <span className="text-xs text-amber-400 font-medium">{value}</span>;
  }

  return (
    <section id="compare" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-3">Compare</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Not Another Workout Logger
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            CardioEngine is built for athletes who train by heart rate, not by feel.
            Here&apos;s how it stacks up.
          </p>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row) => (
            <div key={row.feature} className="rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-foreground text-sm mb-3">{row.feature}</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 rounded-lg bg-accent-purple/10 px-3 py-2">
                  <CheckIcon />
                  <span className="text-xs font-semibold text-accent-purple">CardioEngine</span>
                </div>
                {competitors.map((c) => (
                  <div key={c.key} className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2">
                    {renderValue(row[c.key])}
                    <span className="text-xs text-muted">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface/80">
                <th className="px-6 py-4 text-left font-medium text-muted">Feature</th>
                <th className="px-4 py-4 text-center font-bold text-accent-purple">CardioEngine</th>
                <th className="px-4 py-4 text-center font-medium text-muted">Strava</th>
                <th className="px-4 py-4 text-center font-medium text-muted">Polar Beat</th>
                <th className="px-4 py-4 text-center font-medium text-muted">Apple Fitness+</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-surface/20" : ""}`}>
                  <td className="px-6 py-3.5 text-foreground">{row.feature}</td>
                  <td className="px-4 py-3.5 text-center bg-accent-purple/5"><div className="flex justify-center">{renderValue(row.ce)}</div></td>
                  <td className="px-4 py-3.5 text-center"><div className="flex justify-center">{renderValue(row.strava)}</div></td>
                  <td className="px-4 py-3.5 text-center"><div className="flex justify-center">{renderValue(row.polar)}</div></td>
                  <td className="px-4 py-3.5 text-center"><div className="flex justify-center">{renderValue(row.af)}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const screens = [
    { src: "/screenshots/cardio-dashboard.png", alt: "CardioEngine Dashboard — CARDIO+ENGINE hero, zone gradient progress bar, weekly minute tracking, health benefits with resting HR and HRV", label: "Dashboard", desc: "Weekly minutes, zone progress, and health benefit tracking at a glance." },
    { src: "/screenshots/cardio-settings.png", alt: "CardioEngine Settings — training mode, zone model, weekly volume target, HR source priority, heart rate monitor pairing", label: "Settings", desc: "Configure zone models, weekly targets, HR sources, and BLE monitors." },
  ];

  return (
    <section id="screenshots" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-3">Screenshots</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Data-Dense, Zero Noise
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Everything you need to train by heart rate. Nothing you don&apos;t.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {screens.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <PhoneMockup src={s.src} alt={s.alt} />
              <h3 className="mt-6 text-lg font-bold">{s.label}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-accent-purple/20 bg-[radial-gradient(ellipse_at_center,_rgba(191,90,242,0.08)_0%,_transparent_70%)] p-6 sm:p-10 md:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Stop Guessing Zones. Start <span className="text-accent-purple">Training</span>.
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-relaxed">
            Join the waitlist and be the first to get CardioEngine when it launches on iOS.
            Your cardio deserves better than 220 minus your age.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

export default function CardioEnginePage() {
  return (
    <main>
      <Navbar
        brand="CardioEngine"
        brandHref="/cardioengine"
        brandIcon={CARDIO_ENGINE_ICON}
        links={NAV_LINKS}
        ctaHref="#waitlist"
        siblingBrand={{ name: "CutEngine", href: "/" }}
      />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Comparison />
      <Screenshots />
      <Waitlist />
      <Footer />
    </main>
  );
}
