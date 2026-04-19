import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-background">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-sm font-semibold">CutEngine</span>
          </Link>
          <Link href="/cardioengine" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                <path d="M16 25.5 C 16 25.5, 6 19.5, 6 13 C 6 10.2, 8.2 8, 11 8 C 13 8, 14.5 9, 16 11 C 17.5 9, 19 8, 21 8 C 23.8 8, 26 10.2, 26 13 C 26 19.5, 16 25.5, 16 25.5 Z" fill="currentColor" className="text-background" />
              </svg>
            </div>
            <span className="text-sm font-semibold">CardioEngine</span>
          </Link>
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
