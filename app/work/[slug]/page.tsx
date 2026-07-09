import { notFound } from "next/navigation"

import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { ProjectHeader } from "@/components/work-detail/project-header"
import { HeroImages } from "@/components/work-detail/hero-images"
import { ProjectOverview } from "@/components/work-detail/project-overview"
import { NewsSection } from "@/components/work-detail/news-section"
import { MoreWorkSection } from "@/components/work-detail/more-work-section"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/work-detail"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-align-bg">
      <Header />
      <ProjectHeader project={project} />

      <div className="mt-14">
        <HeroImages />
      </div>

      <div className="mt-14">
        <ProjectOverview
          heading="Project overview"
          paragraphs={project.overviewParagraphs}
        />
      </div>

      <div className="mt-20 md:mt-62">
        <NewsSection heading="News & updates" items={project.newsItems} />
      </div>

      <div className="mt-20 md:mt-51">
        <MoreWorkSection heading="More work" items={project.moreProjects} />
      </div>

      <Footer />
    </div>
  )
}
