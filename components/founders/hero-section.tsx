import { GridContainer } from "@/components/shared/grid-container"
import { DynamicShiftText } from "@/components/shared/dynamic-shift-text"
import { AccordionCards } from "./accordion-cards"

export function FoundersHeroSection() {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-[83px] pb-24">
        <DynamicShiftText
          as="h1"
          className="col-span-8 font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-6 lg:col-start-3 lg:text-[64px]"
        >
          We back startups at any stage, with <br /> whatever they&apos;re
          missing.
        </DynamicShiftText>

        <p
          className="col-span-8 mt-8 font-sans text-[48px] font-light text-align-text lg:col-span-3 lg:col-start-3"
          style={{
            lineHeight: "110px",
            letterSpacing: "-0.16px",
          }}
        >
          What we provide
        </p>

        <div className="col-span-8 lg:col-span-4 lg:col-start-3">
          <AccordionCards />
        </div>
      </GridContainer>
    </section>
  )
}
