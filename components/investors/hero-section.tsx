import { GridContainer } from "@/components/shared/grid-container"

export function InvestorsHeroSection() {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-[83px] pb-12">
        {/* Main heading — col 3–7 (w=690) */}
        <h1 className="col-span-8 font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-5 lg:col-start-3 lg:text-[64px]">
          We give investors a direct line to the projects we back. Early access
          to beta products, seed rounds and upcoming launches.
        </h1>

        <h1 className="col-span-8 mt-20 font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text md:mt-36 lg:col-span-5 lg:col-start-3 lg:text-[64px]">
          You are a partner first, investor second.
        </h1>
      </GridContainer>
    </section>
  )
}
