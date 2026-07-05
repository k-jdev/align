import { GridContainer } from "@/components/shared/grid-container"
import { AccordionCards } from "./accordion-cards"

export function FoundersHeroSection() {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-[83px] pb-24">
        {/* Main heading — full width on mobile, cols 3–8 on desktop */}
        <h1 className="col-span-8 font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-6 lg:col-start-3 lg:text-[64px]">
          We back startups at any stage, with whatever they&apos;re missing.
        </h1>

        {/* Subheading — full width on mobile, cols 3–5 on desktop */}
        <p
          className="col-span-8 mt-8 font-sans text-[48px] font-light text-align-text lg:col-span-3 lg:col-start-3"
          style={{
            lineHeight: "110px",
            letterSpacing: "-0.16px",
          }}
        >
          What we provide
        </p>

        {/* Accordion — full width on mobile, cols 3–7 on desktop */}
        <div className="col-span-8 lg:col-span-5 lg:col-start-3">
          <AccordionCards />
        </div>
      </GridContainer>
    </section>
  )
}
