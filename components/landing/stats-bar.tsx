import { GridContainer } from "@/components/shared/grid-container"

interface StatItem {
  value: string
  label: string
  icon: "arrow-up" | "user-plus"
}

const STATS: StatItem[] = [
  {
    value: "$1B",
    label: "in value across our 20+ ventures.",
    icon: "arrow-up",
  },
  {
    value: "$150M",
    label: "total across the first month of ventures.",
    icon: "arrow-up",
  },
  {
    value: "20K",
    label: "investors from private equity to retail.",
    icon: "user-plus",
  },
  {
    value: "$10M",
    label: "in revenue for teams we work with.",
    icon: "arrow-up",
  },
]

function ArrowUpIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserPlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M16 21V19C16 16.7909 14.2091 15 12 15H8C5.79086 15 4 16.7909 4 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 8V14M23 11H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StatsBar() {
  return (
    <section className="w-full">
      <GridContainer className="py-12">
        {/* Top border — spans content width only */}
        <div className="col-span-4 border-t border-[#d4d4d4] pt-12">
          <div className="grid grid-cols-4 gap-(--grid-gap)">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="col-span-1 flex flex-col items-start gap-4"
              >
                <div className="flex items-start gap-0">
                  <span className="font-sans text-[48px] leading-[1.1] font-light tracking-[-2px] text-align-text">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-align-text">
                    {stat.icon === "arrow-up" ? (
                      <ArrowUpIcon />
                    ) : (
                      <UserPlusIcon />
                    )}
                  </span>
                </div>
                <p className="font-mono text-sm leading-5 text-align-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GridContainer>
    </section>
  )
}
