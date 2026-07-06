import { GridContainer } from "@/components/shared/grid-container"
import { DynamicShiftText } from "@/components/shared/dynamic-shift-text"

export function AboutHeroSection() {
  return (
    <GridContainer as="section">
      <DynamicShiftText
        as="h1"
        className="col-span-4 max-w-[1038px] pt-[83px] font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-3 lg:col-start-1 lg:max-w-none lg:text-[64px]"
      >
        Align is a venture studio &amp; network <br /> powering startups at the
        frontier of <br /> emerging technologies.
      </DynamicShiftText>

      <div className="col-span-4 mt-8 flex items-center gap-4 lg:col-span-3 lg:col-start-1">
        <div className="size-2 shrink-0 bg-align-green" />
        <DynamicShiftText
          as="p"
          className="font-sans text-lg leading-[1.4] text-align-text lg:max-w-[492px] lg:text-xl"
        >
          We work primarily with crypto/blockchain projects, <br /> and
          increasingly with AI.
        </DynamicShiftText>
      </div>
    </GridContainer>
  )
}
