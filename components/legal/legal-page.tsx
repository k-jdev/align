import { GridContainer } from "@/components/shared/grid-container"
import { LegalSection } from "./legal-section"
import type { LegalPageData } from "@/lib/legal-content"

interface LegalPageProps {
  data: LegalPageData
}

export function LegalPage({ data }: LegalPageProps) {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-18 pb-24 md:pb-36">
        {/* Title */}
        <h1 className="col-span-full font-sans text-[42px] leading-[1.1] font-light tracking-[-2px] text-align-text md:col-span-4 md:col-start-3 md:text-[64px]">
          {data.title}
        </h1>

        {/* Last updated row */}
        <div className="col-span-full mt-6 flex items-center gap-4 md:col-span-4 md:col-start-3">
          <span className="size-2 shrink-0 bg-align-green" />
          <span className="font-sans text-[18px] leading-[1.4] font-normal tracking-normal text-align-text md:text-[20px]">
            Last updated: {data.lastUpdated}
          </span>
        </div>

        {/* Intro */}
        <p className="col-span-full mt-8 font-sans text-[18px] leading-[1.4] font-normal tracking-normal text-align-text md:col-span-4 md:col-start-3 md:text-[20px]">
          {data.intro}
        </p>

        {/* Sections */}
        <div className="col-span-full mt-12 flex flex-col gap-12 md:col-span-4 md:col-start-3">
          {data.sections.map((section, i) => (
            <LegalSection key={i} section={section} />
          ))}
        </div>
      </GridContainer>
    </section>
  )
}
