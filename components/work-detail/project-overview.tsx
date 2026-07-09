import { GridContainer } from "@/components/shared/grid-container"

interface ProjectOverviewProps {
  heading: string
  paragraphs: string[]
}

export function ProjectOverview({ heading, paragraphs }: ProjectOverviewProps) {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8}>
        <h2 className="col-span-full font-sans text-[36px] leading-[1.1] font-light tracking-[-2px] text-align-text md:col-span-4 md:col-start-3 md:text-[48px]">
          {heading}
        </h2>

        <div className="col-span-full mt-6 space-y-4 md:col-span-4 md:col-start-3 md:mt-4">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans text-[18px] leading-[1.4] font-normal tracking-[0] text-align-text md:text-[20px]"
            >
              {p}
            </p>
          ))}
        </div>
      </GridContainer>
    </section>
  )
}
