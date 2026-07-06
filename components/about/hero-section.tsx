import { GridContainer } from "@/components/shared/grid-container"
import { DynamicShiftText } from "@/components/shared/dynamic-shift-text"

export function AboutHeroSection() {
  return (
    <GridContainer as="section">
      <DynamicShiftText
        as="h1"
        className="col-span-full pt-[83px] font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:text-[64px]"
      >
        Align is a venture studio &amp; network <br /> powering startups at the
        frontier of <br /> emerging technologies.
      </DynamicShiftText>

      <div className="col-span-full mt-8 flex items-center gap-4">
        <div className="size-2 shrink-0 bg-align-green" />
        <p className="max-w-[492px] font-sans text-lg leading-[1.2] text-align-text lg:text-xl">
          We work primarily with crypto/blockchain projects, and increasingly
          with AI.
        </p>
      </div>
    </GridContainer>
  )
}
