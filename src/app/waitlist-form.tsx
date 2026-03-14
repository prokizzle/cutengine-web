"use client";

import { useActionState } from "react";
import { joinWaitlist } from "./actions";

export function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);

  if (state?.success) {
    return (
      <div className="mt-8 rounded-xl border border-primary/30 bg-primary/10 px-6 py-4">
        <p className="text-primary font-medium">{state.message}</p>
      </div>
    );
  }

  return (
    <>
      <form action={formAction} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          disabled={isPending}
          className="flex-1 rounded-xl border border-border bg-surface px-5 py-3.5 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-primary px-7 py-3.5 font-semibold text-background hover:bg-primary-dark transition-colors duration-200 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Joining..." : "Get Early Access"}
        </button>
      </form>
      {state?.message && !state.success && (
        <p className="mt-3 text-sm text-red-400">{state.message}</p>
      )}
      <p className="mt-4 text-xs text-muted/60">
        No spam. We&apos;ll email you once when the app launches.
      </p>
    </>
  );
}
