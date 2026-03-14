import Link from "next/link";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-background">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">CutEngine</span>
          </Link>
          <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors duration-200 cursor-pointer">
            &larr; Back to home
          </Link>
        </div>
      </nav>
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 prose prose-invert prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-td:text-muted prose-th:text-muted">
        {children}
      </article>
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Feeling Mindful Labs LLC. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="/privacy" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Terms</Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
