import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

export function WhySection() {
  return (
    <GridContainer as="section" className="pt-6 pb-4">
      <h2 className="col-span-full font-sans text-[48px] leading-[1.1] font-light tracking-[-2px] text-align-text">
        Why we make a difference.
      </h2>

      <div className="col-span-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-2 shrink-0 bg-align-green" />
          <span className="font-mono text-xl leading-5 text-align-text">
            Backing ventures since 2021.
          </span>
        </div>

        <Link
          href="/work"
          className="inline-flex h-10 shrink-0 items-center gap-3 bg-align-text/87 px-4 font-mono text-base text-align-badge-text"
        >
          Our Work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </GridContainer>
  )
}
