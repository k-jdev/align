import { cn } from "@/lib/utils"

interface GridContainerProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer"
  /** Number of columns: 4 (default) or 8 */
  cols?: 4 | 8
  /** When false, only applies container width without CSS Grid. Default: true */
  grid?: boolean
}

const COLS_CLASS: Record<4 | 8, string> = {
  4: "grid-cols-4",
  8: "grid-cols-8",
}

export function GridContainer({
  children,
  className,
  as: Tag = "div",
  cols = 4,
  grid = true,
}: GridContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-(--grid-content) px-(--grid-pad)",
        grid && `grid ${COLS_CLASS[cols]} gap-(--grid-gap)`,
        className
      )}
    >
      {children}
    </Tag>
  )
}
