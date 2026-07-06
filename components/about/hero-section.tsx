"use client"

import { useState } from "react"
import { GridContainer } from "@/components/shared/grid-container"
import { DynamicShiftText } from "@/components/shared/dynamic-shift-text"

export function AboutHeroSection() {
  const [shifted, setShifted] = useState(false)

  return (
    <GridContainer as="section">
      <DynamicShiftText
        as="h1"
        className={`col-span-4 max-w-[1038px] pt-[83px] font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-3 ${shifted ? "lg:col-start-2" : "lg:col-start-1"} lg:max-w-none lg:text-[64px]`}
      >
        Align is a venture studio &amp; network <br /> powering startups at the
        frontier of <br /> emerging technologies.
      </DynamicShiftText>

      <div
        className={`col-span-4 mt-8 flex items-center gap-4 lg:col-span-3 ${shifted ? "lg:col-start-2" : "lg:col-start-1"}`}
      >
        <div className="size-2 shrink-0 bg-align-green" />
        <p className="max-w-[492px] font-sans text-lg leading-[1.4] text-align-text lg:text-xl">
          We work primarily with crypto/blockchain projects, and increasingly
          with AI.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShifted(!shifted)}
        className="col-span-4 mt-4 h-8 w-fit px-3 font-mono text-xs text-align-text opacity-10 transition-opacity hover:opacity-100"
      >
        Shift
      </button>
    </GridContainer>
  )
}
