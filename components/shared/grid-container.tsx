import { cn } from "@/lib/utils"

interface GridContainerProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer"
  cols?: 4 | 8
  grid?: boolean
  mobileFullWidth?: boolean
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
  mobileFullWidth = false,
}: GridContainerProps) {
  return (
    <Tag
      className={cn(
        "w-full",
        !mobileFullWidth && "mx-auto max-w-(--grid-content) px-(--grid-pad)",
        mobileFullWidth &&
          "max-w-none md:mx-auto md:max-w-(--grid-content) md:px-(--grid-pad)",
        grid && `grid ${COLS_CLASS[cols]} gap-(--grid-gap)`,
        className
      )}
    >
      {children}
    </Tag>
  )
}
