"use client"

import { useState } from "react"
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
] as const

const NAV_ITEMS_COMPACT = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
] as const

export function Header({ variant = "default" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks = variant === "compact" ? NAV_ITEMS_COMPACT : NAV_ITEMS_DEFAULT

  return (
    <header className="sticky top-0 z-50 h-12 w-full bg-align-badge-text">
      <GridContainer className="h-full items-center">
        <Link
          href="/"
          className="col-span-3 flex shrink-0 items-center gap-2 md:col-span-1"
        >
          <Image
            src="/logo-text.svg"
            alt="Align"
            width={64}
            height={64}
            priority
            className="w-auto"
            draggable={false}
          />
        </Link>

        <nav className="hidden items-center justify-center gap-2 md:col-span-2 md:flex">
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

        <Link
          href="/contact"
          className="hidden items-center justify-end font-mono text-sm text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none] md:col-span-1 md:flex"
        >
          Contact
        </Link>

        <button
          type="button"
          className="col-span-1 flex items-center justify-end text-align-text md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18" />
              <path d="M3 6h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </GridContainer>

      {mobileMenuOpen && (
        <div className="border-t border-align-text/10 bg-align-badge-text md:hidden">
          <GridContainer className="py-4">
            <nav className="col-span-4 flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex h-10 items-center font-mono text-sm text-align-text"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex h-10 items-center font-mono text-sm text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </GridContainer>
        </div>
      )}
    </header>
  )
}
