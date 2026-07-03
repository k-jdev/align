import Image from "next/image"
import Link from "next/link"

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
    <footer className="relative w-full bg-align-footer pt-10 pb-8 lg:h-[400px] lg:pt-0 lg:pb-0">
      {/* Logo — top left on both */}
      <div className="pl-6 lg:absolute lg:top-12 lg:left-6">
        <Image
          src="/logo.svg"
          alt="Align"
          width={72}
          height={80}
          priority
          className="lg:h-[113px] lg:w-[102px]"
        />
      </div>

      {/* Link columns — 2×2 grid on mobile, row on desktop */}
      <div className="mx-auto mt-6 grid max-w-[400px] grid-cols-2 gap-y-6 px-6 lg:absolute lg:top-12 lg:left-[calc(24px+351px)] lg:mt-0 lg:flex lg:max-w-none lg:grid-cols-none lg:gap-[280px] lg:px-0">
        {FOOTER_COLUMNS.slice(0, 2).map((col) => (
          <div key={col.title} className="flex flex-col gap-2 lg:w-[100px]">
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
        {/* Third column spans full width on mobile */}
        <div className="col-span-2 flex flex-col gap-2 lg:col-span-1 lg:w-[100px]">
          {FOOTER_COLUMNS[2].links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-sm leading-5 text-align-footer-text uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Email */}
      <div className="mt-8 px-6 lg:absolute lg:top-[292px] lg:left-[calc(24px+351px)] lg:mt-0 lg:px-0">
        <a
          href="mailto:hello@align.xyz"
          className="font-sans text-[28px] leading-[1.1] font-light tracking-[-2px] text-white lg:text-[48px]"
        >
          hello@align.xyz
        </a>
      </div>

      {/* Bottom row: legal + copyright on mobile */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/10 px-6 pt-6 lg:absolute lg:top-[304px] lg:left-6 lg:mt-0 lg:flex-col lg:items-start lg:gap-2 lg:border-t-0 lg:px-0 lg:pt-0">
        <div className="flex gap-4 lg:flex-col lg:gap-2">
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
        <span className="font-mono text-xs leading-5 text-align-dim">
          © 2026 Align
        </span>
      </div>

      {/* Pagination dots */}
      <div className="mt-4 flex justify-end gap-[10px] px-6 lg:absolute lg:top-[367px] lg:right-8 lg:mt-0 lg:px-0">
        <div className="size-2 bg-white" />
        <div className="size-2 bg-white opacity-50" />
        <div className="size-2 bg-white opacity-10" />
      </div>
    </footer>
  )
}
