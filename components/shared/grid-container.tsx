import { cn } from "@/lib/utils"

interface GridContainerProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer"
}

/**
 * 4-column grid at 1440px with 24px side padding.
 * Content area: 1392px (1440 - 2*24).
 * Columns: 330px each with 24px gaps.
 */
export function GridContainer({
  children,
  className,
  as: Tag = "div",
}: GridContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1392px] px-6", className)}>
      {children}
    </Tag>
  )
}
