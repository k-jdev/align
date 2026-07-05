import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

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
      <GridContainer className="h-full items-center">
        {/* Logo — col 1, left edge */}
        <Link href="/" className="col-span-1 flex shrink-0 items-center gap-2">
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

        {/* Nav — cols 2–3, centered */}
        <nav className="col-span-2 flex items-center justify-center gap-2">
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

        {/* Contact — col 4, right edge */}
        <Link
          href="/contact"
          className="col-span-1 flex items-center justify-end font-mono text-sm text-align-text underline decoration-from-font underline-offset-2"
        >
          Contact
        </Link>
      </GridContainer>
    </header>
  )
}
