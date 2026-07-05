"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

/**
 * Dev-only grid overlay.
 * Activate: add ?grid to URL or press Ctrl+G.
 * Shows 4 or 8-column grid matching the current GridContainer.
 */
export function GridOverlay() {
  const [visible, setVisible] = useState(false)
  const [cols, setCols] = useState(4)

  // Check ?grid on mount and read column count
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has("grid")) setVisible(true)

    const count = getComputedStyle(document.documentElement)
      .getPropertyValue("--grid-cols")
      ?.trim()
    if (count) setCols(Number(count) || 4)
  }, [])

  // Re-read cols when Ctrl+G toggles
  useEffect(() => {
    if (visible) {
      const count = getComputedStyle(document.documentElement)
        .getPropertyValue("--grid-cols")
        ?.trim()
      if (count) setCols(Number(count) || 4)
    }
  }, [visible])

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

  const indices = useMemo(
    () => Array.from({ length: cols }, (_, i) => i),
    [cols]
  )

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
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {indices.map((i) => (
            <div key={i} className="relative h-full bg-red-500/6">
              <span className="absolute top-2 left-2 font-mono text-[11px] text-red-400/60">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gutters overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-9997 mx-auto"
        style={{
          maxWidth: "var(--grid-content)",
          paddingInline: "var(--grid-pad)",
        }}
      >
        <div
          className="grid h-full gap-(--grid-gap)"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {indices.map((i) => (
            <div key={i} className="h-full border-x border-blue-400/40" />
          ))}
        </div>
      </div>

      {/* Toggle hint — click to switch 4↔8 */}
      <div
        className="fixed right-4 bottom-4 z-9999 cursor-pointer rounded bg-black/70 px-2 py-1 font-mono text-[11px] text-white/70 hover:bg-black/90"
        onClick={() => setCols((c) => (c === 4 ? 8 : 4))}
        title="Click to toggle 4 ↔ 8 columns"
      >
        {cols} col grid · Ctrl+G to toggle · Click to switch
      </div>
    </>
  )
}
