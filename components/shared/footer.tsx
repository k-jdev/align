import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

const FOOTER_COLUMNS = [
  {
    title: "About",
    links: [
      { label: "About", href: "/about" },
      { label: "team", href: "/team" },
      { label: "portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "writing",
    links: [
      { label: "writing", href: "/blog" },
      { label: "investors", href: "/investors" },
      { label: "careers", href: "/careers" },
    ],
  },
  {
    title: "lorem",
    links: [
      { label: "lorem", href: "#" },
      { label: "ipsuminati", href: "#" },
      { label: "ipsuminati", href: "#" },
    ],
  },
] as const

const LEGAL_LINKS = [
  { label: "Terms", href: "/terms" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Privacy", href: "/privacy" },
] as const

export function Footer() {
  return (
    <footer className="w-full bg-align-footer lg:h-[400px]">
      <GridContainer className="h-full pt-10 pb-8 lg:pt-0 lg:pb-0">
        {/* ── Col 1: Logo + Legal ── */}
        <div className="col-span-4 flex items-start justify-between lg:col-span-1 lg:flex-col lg:justify-between lg:py-12">
          <Image
            src="/logo.svg"
            alt="Align"
            width={72}
            height={80}
            priority
            className="lg:h-[113px] lg:w-[102px]"
            draggable={false}
          />

          {/* Legal — desktop only (mobile at bottom) */}
          <div className="hidden lg:flex lg:flex-col lg:gap-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-sm leading-5 text-align-dim"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Cols 2–4: Links + Email + Copyright + Dots ── */}
        <div className="col-span-4 mt-6 flex flex-col lg:col-span-3 lg:col-start-2 lg:mt-0 lg:justify-between lg:py-12">
          {/* Link columns */}
          <div className="flex flex-wrap gap-y-6 lg:gap-x-[280px]">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex w-[100px] flex-col gap-2">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-mono text-sm leading-5 text-align-footer-text uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Email + Copyright + Dots */}
          <div className="mt-8 flex items-end justify-between lg:mt-0">
            <div>
              <a
                href="mailto:hello@align.xyz"
                className="font-sans text-[28px] leading-[1.1] font-light tracking-[-2px] text-white lg:text-[48px]"
              >
                hello@align.xyz
              </a>
              <div className="mt-2">
                <span className="font-mono text-xs leading-5 text-align-dim">
                  © 2026 Align. All rights reserved.
                </span>
              </div>
            </div>

            {/* Animated pagination dots — wave right-to-left + back */}
            <div className="flex gap-[10px]">
              <div
                className="size-2 bg-white"
                style={{
                  animation: "dot-wave 1.5s ease-in-out infinite",
                  animationDelay: "0ms",
                }}
              />
              <div
                className="size-2 bg-white"
                style={{
                  animation: "dot-wave 1.5s ease-in-out infinite",
                  animationDelay: "0.15s",
                }}
              />
              <div
                className="size-2 bg-white"
                style={{
                  animation: "dot-wave 1.5s ease-in-out infinite",
                  animationDelay: "0.3s",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Legal + Copyright on mobile ── */}
        <div className="col-span-4 mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/10 pt-6 lg:hidden">
          <div className="flex gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-sm leading-5 text-align-dim"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </GridContainer>
    </footer>
  )
}
