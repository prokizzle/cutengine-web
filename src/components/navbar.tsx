import Link from "next/link";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

interface NavbarProps {
  readonly brand: string;
  readonly brandHref: string;
  readonly brandIcon: React.ReactNode;
  readonly links: readonly NavLink[];
  readonly ctaHref: string;
  readonly ctaLabel?: string;
  readonly siblingBrand?: {
    readonly name: string;
    readonly href: string;
  };
}

export function Navbar({
  brand,
  brandHref,
  brandIcon,
  links,
  ctaHref,
  ctaLabel = "Early Access",
  siblingBrand,
}: NavbarProps) {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-[28px] border border-border bg-surface/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-4">
          <Link href={brandHref} className="flex items-center gap-2 cursor-pointer">
            {brandIcon}
            <span className="text-lg font-bold tracking-tight hidden sm:inline">{brand}</span>
          </Link>
          {siblingBrand && (
            <Link
              href={siblingBrand.href}
              className="hidden sm:inline text-xs text-muted hover:text-foreground transition-colors duration-200 border border-border rounded-full px-3 py-1"
            >
              {siblingBrand.name}
            </Link>
          )}
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={ctaHref}
          className="rounded-xl bg-primary px-4 sm:px-5 py-2 text-sm font-semibold text-background hover:bg-primary-dark transition-colors duration-200 cursor-pointer whitespace-nowrap"
        >
          {ctaLabel}
        </a>
      </div>
    </nav>
  );
}
