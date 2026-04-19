import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "./waitlist-form";

function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-[28px] border border-border bg-surface/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-background">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:inline">CutEngine</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#features" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors duration-200 cursor-pointer">How It Works</a>
          <a href="#compare" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Compare</a>
          <a href="#screenshots" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Screenshots</a>
        </div>
        <a
          href="#waitlist"
          className="rounded-xl bg-primary px-4 sm:px-5 py-2 text-sm font-semibold text-background hover:bg-primary-dark transition-colors duration-200 cursor-pointer whitespace-nowrap"
        >
          Early Access
        </a>
      </div>
    </nav>
  );
}

function PhoneMockup({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative w-[280px] sm:w-[300px] ${className}`}>
      <div className="relative rounded-[3rem] border-[6px] border-surface-light bg-black p-2 shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-2xl z-10" />
        <div className="relative aspect-[9/19.5] rounded-[2.4rem] overflow-hidden bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="300px"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(52,199,89,0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">Coming Soon on iOS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight font-display">
            Your Calories Should{" "}
            <span className="text-primary">Adapt</span> to You.
            <br />
            <span className="text-muted font-light text-3xl sm:text-4xl lg:text-5xl">Not the other way around.</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
            CutEngine uses machine learning and your Apple Watch data to calculate{" "}
            <span className="text-foreground font-medium">personalized, daily-adjusted</span> calorie
            and macro targets — so your cut actually works.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-background hover:bg-primary-dark transition-colors duration-200 cursor-pointer animate-pulse-glow w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-medium text-muted hover:text-foreground hover:border-muted transition-colors duration-200 cursor-pointer w-full sm:w-auto justify-center"
            >
              See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>HealthKit Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              <span>ML-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Adapts Daily</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-in-up delay-200">
          <div className="relative animate-float">
            <PhoneMockup src="/screenshots/dashboard.png" alt="CutEngine Dashboard showing daily plan, body metrics, recovery status, and macro targets" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
      title: "Static Targets",
      desc: "Same number every day, regardless of how your body responds",
      color: "text-red-400 bg-red-400/10 border-red-400/20",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
      title: "No Recovery Awareness",
      desc: "Pushing a deep deficit when your body is signaling for a break",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
      title: "One-Size-Fits-All",
      desc: "Population averages applied to your unique metabolism",
      color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(52,199,89,0.04)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
          Static Calculators <span className="text-red-400">Stop Working</span> After Week 2
        </h2>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Your metabolism adapts. Your activity changes. Your recovery fluctuates.
          A number from a formula doesn&apos;t know any of that.
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
      title: "ML-Driven Daily Adjustment",
      desc: "Your calorie target adapts every day based on 14+ days of real data — not a static formula from day one.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      span: "sm:col-span-2",
    },
    {
      title: "Biofeedback Safety",
      desc: "6-signal recovery system monitors sleep, HRV, energy, mood, hunger, and libido. Auto-reduces deficit when recovery declines.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      span: "",
    },
    {
      title: "HealthKit-First",
      desc: "Automatic data from Apple Watch — steps, workouts, sleep, HRV. No manual logging of activity required.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
      span: "",
    },
    {
      title: "Enhancement-Tier Aware",
      desc: "Natural, TRT, GLP-1, peptides, bodybuilding, contest prep — each tier gets different deficit strategies and safety thresholds.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>,
      span: "sm:col-span-2",
    },
    {
      title: "Smart Rest & Refeeds",
      desc: "Automatic rest day recommendations based on training patterns. Refeed scheduling matched to your body fat percentage.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      span: "",
    },
    {
      title: "Multi-Method Body Comp",
      desc: "DEXA > Navy + Caliper > HealthKit > tier estimate. Uses the most accurate data available to you.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
      span: "",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Data-Driven Cutting, Not Guesswork
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            CutEngine replaces doubt with data. Every feature is designed to give you
            precise, adaptive guidance through your fat loss phase.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 hover:bg-surface transition-all duration-200 cursor-pointer ${f.span}`}
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-200">
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
    { num: "01", title: "Connect HealthKit", desc: "Link your Apple Watch. CutEngine automatically pulls steps, workouts, sleep, HRV — no manual entry." },
    { num: "02", title: "Set Your Cut", desc: "Choose your enhancement tier, input your body composition data, and set your deficit aggressiveness." },
    { num: "03", title: "Get Adaptive Targets", desc: "After 14 days of data, the ML model learns YOUR metabolism and adjusts calories and macros daily." },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            From Setup to Adaptive in 14 Days
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <span className="font-mono text-5xl font-bold text-primary/15">{step.num}</span>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-primary/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
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
    { feature: "Daily calorie adjustment", ce: true, mfp: false, mf: "Weekly", rp: false },
    { feature: "HealthKit-first (auto data)", ce: true, mfp: false, mf: "Partial", rp: false },
    { feature: "Biofeedback safety system", ce: true, mfp: false, mf: false, rp: false },
    { feature: "Enhancement-tier awareness", ce: true, mfp: false, mf: false, rp: false },
    { feature: "Multi-method body composition", ce: true, mfp: false, mf: false, rp: "Partial" },
    { feature: "Adaptive macro targets", ce: true, mfp: false, mf: true, rp: true },
    { feature: "Smart refeed scheduling", ce: true, mfp: false, mf: false, rp: true },
    { feature: "Rest day recommendations", ce: true, mfp: false, mf: false, rp: false },
  ];

  const competitors = [
    { key: "mfp" as const, name: "MyFitnessPal" },
    { key: "mf" as const, name: "MacroFactor" },
    { key: "rp" as const, name: "RP Diet" },
  ];

  function CheckIcon() {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"/></svg>;
  }
  function XIcon() {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted/40"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
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
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Compare</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Not Another Calorie Counter
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            CutEngine is built for serious athletes doing intentional fat loss phases.
            Here&apos;s how it stacks up.
          </p>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row) => (
            <div key={row.feature} className="rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-foreground text-sm mb-3">{row.feature}</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
                  <CheckIcon />
                  <span className="text-xs font-semibold text-primary">CutEngine</span>
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
                <th className="px-4 py-4 text-center font-bold text-primary">CutEngine</th>
                <th className="px-4 py-4 text-center font-medium text-muted">MyFitnessPal</th>
                <th className="px-4 py-4 text-center font-medium text-muted">MacroFactor</th>
                <th className="px-4 py-4 text-center font-medium text-muted">RP Diet</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-surface/20" : ""}`}>
                  <td className="px-6 py-3.5 text-foreground">{row.feature}</td>
                  <td className="px-4 py-3.5 text-center bg-primary/5"><div className="flex justify-center">{renderValue(row.ce)}</div></td>
                  <td className="px-4 py-3.5 text-center"><div className="flex justify-center">{renderValue(row.mfp)}</div></td>
                  <td className="px-4 py-3.5 text-center"><div className="flex justify-center">{renderValue(row.mf)}</div></td>
                  <td className="px-4 py-3.5 text-center"><div className="flex justify-center">{renderValue(row.rp)}</div></td>
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
    { src: "/screenshots/dashboard.png", alt: "CutEngine Dashboard — daily plan, body metrics, training consistency, recovery status, and macro targets", label: "Dashboard", desc: "Your daily plan, body metrics, and adaptive macro targets at a glance." },
    { src: "/screenshots/meals.png", alt: "CutEngine Meals — today's meal checklist with food items and completion tracking", label: "Meals", desc: "Simple checklist to hit your targets. No obsessive food logging required." },
    { src: "/screenshots/settings.png", alt: "CutEngine Settings — refeed schedule, rest day configuration, and notification preferences", label: "Settings", desc: "Configure refeed schedules, rest days, and smart notifications." },
  ];

  return (
    <section id="screenshots" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Screenshots</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Built for Serious Athletes
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Dark, data-dense, zero noise. Everything you need to manage your cut — nothing you don&apos;t.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
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
        <div className="rounded-3xl border border-primary/20 bg-[radial-gradient(ellipse_at_center,_rgba(52,199,89,0.08)_0%,_transparent_70%)] p-6 sm:p-10 md:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
            Stop Guessing. Start <span className="text-primary">Adapting</span>.
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-relaxed">
            Join the waitlist and be the first to get CutEngine when it launches on iOS.
            Your cut deserves better than a static calculator.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-background">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <span className="text-sm font-semibold">CutEngine</span>
        </div>
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Feeling Mindful Labs LLC. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted">
          <Link href="/support" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Support</Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Terms</Link>
          <Link href="/disclaimer" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
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
