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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z"
        fill="#111111"
      />
    </svg>
  )
}

function UserPlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M24 11H21V8H19V11H16V13H19V16H21V13H24V11ZM6 8C6 10.28 7.72 12 10 12C12.28 12 14 10.28 14 8C14 5.72 12.28 4 10 4C7.72 4 6 5.72 6 8ZM12 8C12 9.18 11.18 10 10 10C8.82 10 8 9.18 8 8C8 6.82 8.82 6 10 6C11.18 6 12 6.82 12 8ZM5 20H15C15.55 20 16 19.55 16 19V18C16 15.24 13.76 13 11 13H9C6.24 13 4 15.24 4 18V19C4 19.55 4.45 20 5 20ZM9 15H11C12.65 15 14 16.35 14 18H6C6 16.35 7.35 15 9 15Z"
        fill="black"
      />
    </svg>
  )
}

export function StatsBar() {
  return (
    <section className="relative z-10 w-full">
      <GridContainer className="pt-4 pb-12">
        <div className="col-span-4 border-t border-[#d4d4d4] pt-12">
          <div className="grid grid-cols-2 gap-(--grid-gap) md:grid-cols-4">
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
