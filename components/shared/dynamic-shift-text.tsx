"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface DynamicShiftTextProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function DynamicShiftText({
  children,
  className,
  as: Tag = "h1",
}: DynamicShiftTextProps) {
  const [element, setElement] = useState<HTMLElement | null>(null)
  const [shift, setShift] = useState(0)

  useEffect(() => {
    if (!element) return

    const updateShift = () => {
      const style = window.getComputedStyle(element)
      if (style.whiteSpace === "normal" || style.whiteSpace === "pre-wrap") {
        setShift(0)
        return
      }

      const rect = element.getBoundingClientRect()
      const containerWidth = rect.width
      const contentWidth = element.scrollWidth
      const overflow = contentWidth - containerWidth

      if (overflow <= 0) {
        setShift(0)
        return
      }

      const viewportPadding = 24
      const maxLeftShift = viewportPadding - rect.left
      const neededShift = -overflow

      setShift(Math.max(neededShift, maxLeftShift))
    }

    updateShift()

    const resizeObserver = new ResizeObserver(updateShift)
    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()
  }, [element])

  return (
    <Tag
      ref={setElement}
      className={cn("whitespace-normal lg:whitespace-nowrap", className)}
      style={{
        transform: `translateX(${shift}px)`,

        willChange: "transform",
      }}
    >
      {children}
    </Tag>
  )
}
