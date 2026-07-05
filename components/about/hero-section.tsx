import { GridContainer } from "@/components/shared/grid-container"

export function AboutHeroSection() {
  return (
    <GridContainer as="section">
      {/* Main heading — full width until lg, then cols 2–4 */}
      <h1 className="col-span-4 max-w-[1038px] pt-[83px] font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-3 lg:col-start-2 lg:max-w-none lg:text-[64px]">
        Align is a venture studio &amp; network powering startups at the
        frontier of emerging technologies.
      </h1>

      {/* Green bullet + subtext */}
      <div className="col-span-4 mt-8 flex items-center gap-4 lg:col-span-3 lg:col-start-2">
        <div className="size-2 shrink-0 bg-align-green" />
        <p className="font-sans text-lg leading-[1.4] text-align-text lg:max-w-[492px] lg:text-xl">
          We work primarily with crypto/blockchain projects, and increasingly
          with AI.
        </p>
      </div>
    </GridContainer>
  )
}
