import { GridContainer } from "@/components/shared/grid-container"
import { DynamicShiftText } from "@/components/shared/dynamic-shift-text"
import { AccordionCards } from "./accordion-cards"

export function FoundersHeroSection() {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-20.75 pb-24">
        <DynamicShiftText
          as="h1"
          className="col-span-8 font-sans text-[42px] leading-[1.1] font-light tracking-[-2px] text-align-text md:text-[64px] lg:col-span-6 lg:col-start-1"
        >
          We back startups at any stage, with <br className="hidden lg:block" />{" "}
          whatever they&apos;re missing.
        </DynamicShiftText>

        <p
          className="col-span-8 mt-8 font-sans text-[36px] leading-14.5 font-light text-align-text md:text-[48px] md:leading-27.5 lg:col-span-3 lg:col-start-3"
          style={{ letterSpacing: "-0.16px" }}
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
