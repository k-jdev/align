"use client"

import { useCallback, useEffect, useState } from "react"

/**
 * Dev-only grid overlay.
 * Activate: add ?grid to URL or press Ctrl+G.
 * Shows 4-column grid with gutters and column numbers.
 */
export function GridOverlay() {
  const [visible, setVisible] = useState(false)

  // Check ?grid on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has("grid")) {
      setVisible(true)
    }
  }, [])

  // Keyboard toggle: Ctrl+G
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "g") {
      e.preventDefault()
      setVisible((v) => !v)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  if (!visible) return null

  return (
    <>
      {/* Column bands */}
      <div
        className="pointer-events-none fixed inset-0 z-9998 mx-auto"
        style={{
          maxWidth: "var(--grid-content)",
          paddingInline: "var(--grid-pad)",
        }}
      >
        <div
          className="grid h-full gap-(--grid-gap)"
          style={{ gridTemplateColumns: "repeat(var(--grid-cols), 1fr)" }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative h-full bg-red-500/6">
              <span className="absolute top-2 left-2 font-mono text-[11px] text-red-400/60">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gutters overlay — dim the gaps */}
      <div
        className="pointer-events-none fixed inset-0 z-9997 mx-auto"
        style={{
          maxWidth: "var(--grid-content)",
          paddingInline: "var(--grid-pad)",
        }}
      >
        <div
          className="grid h-full gap-(--grid-gap)"
          style={{ gridTemplateColumns: "repeat(var(--grid-cols), 1fr)" }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-full border-x border-blue-400/40" />
          ))}
        </div>
      </div>

      {/* Toggle hint */}
      <div className="fixed right-4 bottom-4 z-9999 rounded bg-black/70 px-2 py-1 font-mono text-[11px] text-white/70">
        Grid on · Ctrl+G to toggle
      </div>
    </>
  )
}
