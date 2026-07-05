import { cn } from "@/lib/utils"

interface GridContainerProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer"
  /** When false, only applies container width without CSS Grid. Default: true */
  grid?: boolean
}

/**
 * 4-column grid at 1440px viewport.
 * Content area: 1392px (1440 - 2×24px padding).
 * Columns: 4 × 330px, gutters: 3 × 24px.
 *
 * Direct children become grid items — use Tailwind's
 * `col-span-1` through `col-span-4` and
 * `col-start-1` through `col-start-4` to place them.
 *
 * Set `grid={false}` for sections that only need the width
 * wrapper but not the grid (e.g. flex layouts).
 */
export function GridContainer({
  children,
  className,
  as: Tag = "div",
  grid = true,
}: GridContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-(--grid-content) px-(--grid-pad)",
        grid && "grid grid-cols-4 gap-(--grid-gap)",
        className
      )}
    >
      {children}
    </Tag>
  )
}
