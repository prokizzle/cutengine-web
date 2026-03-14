# Product Marketing Context

*Last updated: 2026-03-13*

## Product Overview
**One-liner:** ML-driven fat loss app that adapts your calorie targets based on real HealthKit data, not static formulas.
**What it does:** CutEngine analyzes your weight trends, activity (steps, workouts, NEAT), recovery metrics (sleep, HRV), and biofeedback signals to calculate personalized, daily-adjusted calorie and macro targets for fat loss phases ("cuts"). It uses machine learning to adapt recommendations as your body changes, with safety rails that auto-reduce deficits when recovery declines.
**Product category:** Fitness / Calorie tracking / Body composition
**Product type:** Native iOS app (iPhone + iPad, Apple Watch recommended)
**Business model:** TBD (currently in development)

## Target Audience
**Target users:** Fitness-oriented individuals doing intentional fat loss phases (cuts), ranging from intermediate lifters to competitive bodybuilders
**Decision-makers:** The individual user — this is a direct-to-consumer app
**Primary use case:** Managing a calorie deficit intelligently during a cutting phase, with data-driven adjustments instead of guesswork
**Jobs to be done:**
- Know exactly how many calories to eat today based on my actual data, not a generic formula
- Track whether my cut is progressing safely without muscle loss or recovery decline
- Get macro targets that adapt to training days, rest days, and refeed days
**Use cases:**
- Natural lifter doing a 12-week summer cut
- TRT user managing body composition year-round
- Competitive bodybuilder in contest prep needing precise deficit management
- GLP-1 user wanting to preserve muscle while losing fat

## Problems & Pain Points
**Core problem:** Calorie calculators give you a static number on day 1 and never adjust. As your body adapts, metabolic rate shifts, and recovery fluctuates, that number becomes wrong — leading to plateaus, muscle loss, or unnecessary suffering.
**Why alternatives fall short:**
- MyFitnessPal/LoseIt: Static targets, no adaptation, no recovery awareness
- RP Diet: Rigid meal plans, less personalization from HealthKit data
- MacroFactor: Good adaptation but no biofeedback safety system or enhancement-tier awareness
- Spreadsheets: Powerful but require manual data entry and expertise to build
**What it costs them:** Stalled progress, unnecessary muscle loss, diet fatigue from over-aggressive deficits, or under-aggressive deficits that waste time
**Emotional tension:** Uncertainty — "Am I eating too much? Too little? Should I take a refeed? Is my recovery declining?" CutEngine replaces doubt with data.

## Competitive Landscape
**Direct:** MacroFactor — good adaptive algorithm but lacks biofeedback safety, enhancement-tier awareness, and HealthKit-first design
**Secondary:** RP Diet App — structured diet plans but rigid, not adaptive to individual daily data
**Indirect:** Hiring a nutrition coach — expensive ($150-300/mo), dependent on coach availability and expertise

## Differentiation
**Key differentiators:**
- ML-driven daily calorie adjustments (not just weekly averages)
- Biofeedback safety system monitoring 6 recovery signals
- Enhancement-tier aware (natural, TRT, GLP-1, peptides, bodybuilding, contest prep)
- Multi-method body composition hierarchy (DEXA > Navy+Caliper > HealthKit > tier estimate)
- HealthKit-first: automatic data from Apple Watch, no manual logging of activity
- Rest day recommendations based on actual training patterns
- Deficit tiers matched to current body fat percentage
**How we do it differently:** Deep HealthKit integration means the app knows your actual activity, sleep, and recovery without manual entry. The ML model learns YOUR metabolic response, not population averages.
**Why that's better:** Your calorie target is accurate to YOUR body TODAY, not a formula's guess from 3 weeks ago.
**Why customers choose us:** For serious athletes who already track workouts and wear an Apple Watch, CutEngine turns that existing data into actionable nutrition guidance automatically.

## Objections
| Objection | Response |
|-----------|----------|
| "I can just use a TDEE calculator" | A calculator gives you day-1 numbers. CutEngine adapts every day based on what your body is actually doing. |
| "I don't want another food logging app" | CutEngine focuses on targets and adaptation, not food logging. It tells you WHAT to hit, not forces you to log every bite. |
| "My coach already handles this" | CutEngine processes data 24/7 that even the best coach can only review weekly. It's a complement, not a replacement. |

**Anti-persona:** Casual dieters who want simple "eat less" advice without tracking anything. Users without Apple Watch (limited HealthKit data reduces value).

## Switching Dynamics
**Push:** Frustration with static calorie targets that stop working after 2-3 weeks; plateaus despite "doing everything right"
**Pull:** The promise of calorie targets that adapt daily; seeing ML confidence scores increase as data accumulates; automatic rest day and refeed recommendations
**Habit:** Comfort with current app (MyFitnessPal food database, social features); existing meal plans in spreadsheets
**Anxiety:** "Will the ML actually work for me?" "What if it recommends too few/many calories?" (Safety rails address this — max ±200 cal adjustment, biofeedback auto-protection)

## Customer Language
**How they describe the problem:**
- "My calories worked for the first few weeks then I stalled"
- "I don't know if I should eat more or less"
- "Am I cutting too aggressively?"
- "I feel like crap but the scale isn't moving"
**How they describe us:**
- "It's like having a data-driven nutrition coach on your phone"
- "It actually adjusts based on my Apple Watch data"
**Words to use:** cut, deficit, TDEE, macros, refeed, recovery, adaptation, body composition, lean mass
**Words to avoid:** diet (too generic), weight loss (we focus on fat loss/body composition), cheat day (we say refeed), restriction
**Glossary:**
| Term | Meaning |
|------|---------|
| Cut | Intentional fat loss phase with controlled calorie deficit |
| TDEE | Total Daily Energy Expenditure — calories your body burns in a day |
| NEAT | Non-Exercise Activity Thermogenesis — calories burned from daily movement (not workouts) |
| Refeed | Planned higher-calorie day (especially carbs) to support recovery during a cut |
| Biofeedback | Subjective recovery signals (energy, sleep quality, mood, hunger, libido, recovery speed) |
| Enhancement tier | Category of performance-enhancing support (natural, TRT, GLP-1, etc.) |
| Deficit tier | How aggressive the calorie deficit is, matched to body fat percentage |

## Brand Voice
**Tone:** Confident, data-driven, direct — like a knowledgeable training partner who respects your intelligence
**Style:** Technical but accessible; uses fitness terminology naturally without over-explaining basics
**Personality:** Precise, evidence-based, protective (prioritizes user health over aggressive results)

## Proof Points
**Metrics:** TBD (app in development)
**Customers:** TBD
**Testimonials:** TBD
**Value themes:**
| Theme | Proof |
|-------|-------|
| Adaptive intelligence | ML model adjusts daily based on 14+ days of real data |
| Recovery protection | 6-signal biofeedback system auto-reduces deficit when recovery declines |
| Precision nutrition | Multi-method body composition hierarchy ensures most accurate possible estimates |
| Effortless data | HealthKit-first design — Apple Watch users get automatic activity, sleep, HRV tracking |

## Goals
**Business goal:** Build the definitive cutting/fat-loss companion for serious fitness enthusiasts on iOS
**Conversion action:** Download app, complete onboarding, connect HealthKit
**Current metrics:** Pre-launch development phase
