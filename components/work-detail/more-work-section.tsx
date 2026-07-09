import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"
import { ProjectCard } from "@/components/work/project-card"
import type { MoreProject } from "@/lib/work-detail"

interface MoreWorkSectionProps {
  heading: string
  items: MoreProject[]
}

export function MoreWorkSection({ heading, items }: MoreWorkSectionProps) {
  return (
    <section className="w-full bg-align-bg pb-24 md:pb-36">
      <GridContainer cols={8}>
        <div className="col-span-full flex items-end justify-between">
          <h2 className="font-sans text-[36px] leading-[1.1] font-light tracking-[-2px] text-align-text md:text-[48px]">
            {heading}
          </h2>
          <Link
            href="/work"
            className="flex items-center font-mono text-sm leading-5 text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
          >
            All projects
          </Link>
        </div>

        <div className="col-span-full mt-8 grid grid-cols-2 gap-[10px] md:grid-cols-3">
          {items.map((project, i) => (
            <div key={i} className={i === 2 ? "max-md:hidden" : ""}>
              <ProjectCard label={project.label} />
            </div>
          ))}
        </div>
      </GridContainer>
    </section>
  )
}
