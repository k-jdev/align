import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  variant?: "default" | "compact"
}

const NAV_ITEMS_DEFAULT = [
  { label: "About", href: "/about" },
  { label: "Founders", href: "/founders" },
  { label: "Investors", href: "/investors" },
  { label: "Our work", href: "/work" },
  { label: "Blog", href: "/blog" },
] as const

const NAV_ITEMS_COMPACT = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
] as const

export function Header({ variant = "default" }: HeaderProps) {
  const navLinks = variant === "compact" ? NAV_ITEMS_COMPACT : NAV_ITEMS_DEFAULT

  return (
    <header className="sticky top-0 z-50 h-12 w-full bg-align-badge-text">
      <div className="relative mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Align"
            width={25}
            height={27}
            priority
            className="h-[27px] w-[25px]"
          />
          <span className="font-mono text-[24.6px] leading-none tracking-[-2.2px] text-align-text">
            a<span className="tracking-[-1.92px]">l</span>ign
          </span>
        </Link>

        {/* Center nav */}
        <nav className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-8 items-center px-2 font-mono text-sm text-align-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <Link
          href="/contact"
          className="flex h-8 items-center px-2 font-mono text-sm text-align-text underline decoration-from-font underline-offset-2"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
