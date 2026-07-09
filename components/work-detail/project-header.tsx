import Link from "next/link"
import { RiArrowLeftLine } from "@remixicon/react"

import { GridContainer } from "@/components/shared/grid-container"
import type { ProjectDetail } from "@/lib/work-detail"

interface ProjectHeaderProps {
  project: ProjectDetail
}

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" />
    </svg>
  )
}

function UserPlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 11H21V8H19V11H16V13H19V16H21V13H24V11ZM6 8C6 10.28 7.72 12 10 12C12.28 12 14 10.28 14 8C14 5.72 12.28 4 10 4C7.72 4 6 5.72 6 8ZM12 8C12 9.18 11.18 10 10 10C8.82 10 8 9.18 8 8C8 6.82 8.82 6 10 6C11.18 6 12 6.82 12 8ZM5 20H15C15.55 20 16 19.55 16 19V18C16 15.24 13.76 13 11 13H9C6.24 13 4 15.24 4 18V19C4 19.55 4.45 20 5 20ZM9 15H11C12.65 15 14 16.35 14 18H6C6 16.35 7.35 15 9 15Z" />
    </svg>
  )
}

function StatItem({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon: "arrow-up-right" | "user-plus"
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-sm leading-5 tracking-normal text-align-muted uppercase">
        {label}
      </span>
      <div className="flex items-start gap-0">
        <span className="font-sans text-[48px] leading-10 font-light tracking-[-0.16px] text-align-text">
          {value}
        </span>
        {icon === "arrow-up-right" ? (
          <span className="mt-1 text-align-text">
            <ArrowUpRightIcon />
          </span>
        ) : (
          <span className="mt-1 text-align-text">
            <UserPlusIcon />
          </span>
        )}
      </div>
    </div>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-41.25 font-mono text-sm leading-5 tracking-normal text-align-muted">
        {label}
      </span>
      <span className="font-mono text-sm leading-5 tracking-normal text-align-text">
        {value}
      </span>
    </div>
  )
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-18">
        {/* Breadcrumbs */}
        <div className="col-span-full flex items-center gap-1">
          <Link
            href="/work"
            className="inline-flex items-center gap-1 font-mono text-sm leading-5 text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
          >
            <RiArrowLeftLine className="size-4" />
            All projects
          </Link>
        </div>

        {/* Title + Meta — same row on wide screens, stacked below 1200px */}
        <div className="col-span-full mt-8 min-[1200px]:col-span-4 min-[1200px]:row-start-2">
          <h1 className="font-sans text-[42px] leading-[1.1] font-light tracking-[-2px] text-align-text md:text-[80px]">
            {project.title}
          </h1>
        </div>

        <div className="col-span-2 col-start-5 row-start-3 flex flex-col gap-2 self-end uppercase max-[1200px]:col-span-full max-[1200px]:row-auto max-[1200px]:mt-4 min-[1200px]:row-start-2">
          <MetaRow label="Year" value={project.meta.year} />
          <MetaRow label="Project type" value={project.meta.projectType} />
          <MetaRow label="commodo" value={project.meta.client} />
        </div>

        {/* Stats + CTA row */}
        <div className="col-span-full mt-20 grid grid-cols-2 items-end gap-8 md:mt-36 md:grid-cols-8 md:gap-(--grid-gap)">
          {/* Stat 1 — col 1 */}
          <div className="md:col-span-1 md:col-start-1">
            <StatItem
              label={project.stats[0].label}
              value={project.stats[0].value}
              icon={project.stats[0].icon}
            />
          </div>

          {/* Stat 2 — col 3 */}
          <div className="md:col-span-1 md:col-start-3">
            <StatItem
              label={project.stats[1].label}
              value={project.stats[1].value}
              icon={project.stats[1].icon}
            />
          </div>

          {/* Stat 3 — col 5 */}
          <div className="md:col-span-1 md:col-start-5">
            <StatItem
              label={project.stats[2].label}
              value={project.stats[2].value}
              icon={project.stats[2].icon}
            />
          </div>

          {/* CTA — full width on mobile, col 7-8 on desktop */}
          <div className="col-span-2 md:col-span-2 md:col-start-7 md:justify-self-end">
            <a
              href="#"
              className="inline-flex h-10 w-full items-center justify-center gap-3 bg-[rgba(0,0,0,0.87)] px-4 font-mono text-[16px] leading-6 whitespace-nowrap text-align-badge-text md:w-auto"
            >
              Visit website
              <span className="text-align-badge-text">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </div>
      </GridContainer>
    </section>
  )
}
