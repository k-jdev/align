import { GridContainer } from "@/components/shared/grid-container"
import { ProjectCard } from "./project-card"
import Link from "next/link"

const FEATURED_PROJECTS = [
  {
    label: "Ashpool",
    description: "Aliquip anim magna quis nulla irure exercitation.",
  },
  {
    label: "Ashpool",
    description: "Aliquip anim magna quis nulla irure exercitation.",
  },
]

const BOTTOM_PROJECTS = [
  {
    label: "Ashpool",
    description: "Aliquip anim magna quis nulla irure exercitation.",
  },
  {
    label: "Ashpool",
    description: "Aliquip anim magna quis nulla irure exercitation.",
  },
]

const MORE_PROJECTS = ["Ashpool", "Ashpool", "Ashpool"]

export function WorkFeaturedSection() {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-[64px] pb-12">
        <h2 className="col-span-full font-sans text-[64px] leading-[1.1] font-light tracking-[-2px] text-align-text">
          Featured
        </h2>

        <div className="col-span-full mt-8 grid grid-cols-8 gap-(--grid-gap)">
          {FEATURED_PROJECTS.map((p, i) => (
            <div key={i} className="col-span-4">
              <ProjectCard label={p.label} description={p.description} />
            </div>
          ))}
        </div>

        <div className="col-span-full mt-8 grid grid-cols-8 gap-(--grid-gap)">
          {BOTTOM_PROJECTS.map((p, i) => (
            <div key={i} className="col-span-4">
              <ProjectCard label={p.label} description={p.description} />
            </div>
          ))}
        </div>

        <div className="col-span-full mt-20 flex items-center justify-between">
          <h2 className="font-sans text-[48px] leading-[1.1] font-light tracking-[-2px] text-align-text">
            More work
          </h2>
          <Link
            href="/work"
            className="flex h-8 items-center font-mono text-sm leading-5 text-align-text underline decoration-from-font underline-offset-auto"
          >
            View all
          </Link>
        </div>

        <div className="col-span-full mt-8 flex gap-[10px]">
          {MORE_PROJECTS.map((name, i) => (
            <div key={i} className="flex flex-1 flex-col gap-6">
              <div className="aspect-[691/450] w-full bg-[#e1e1e1]" />
              <p className="font-mono text-[20px] leading-5 tracking-[0] text-align-text">
                {name}
              </p>
            </div>
          ))}
        </div>
      </GridContainer>
    </section>
  )
}
