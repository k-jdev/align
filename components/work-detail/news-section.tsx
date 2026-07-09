import { GridContainer } from "@/components/shared/grid-container"
import { NewsCard } from "./news-card"
import type { NewsItem } from "@/lib/work-detail"

interface NewsSectionProps {
  heading: string
  items: NewsItem[]
}

export function NewsSection({ heading, items }: NewsSectionProps) {
  if (items.length === 0) return null

  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8}>
        <h2 className="col-span-full font-sans text-[36px] leading-[1.1] font-light tracking-[-2px] text-align-text md:col-span-4 md:col-start-3 md:text-[48px]">
          {heading}
        </h2>

        <div className="col-span-full mt-8 grid grid-cols-1 gap-x-2.75 gap-y-8 md:col-span-4 md:col-start-3 md:grid-cols-2">
          {items.map((item) => (
            <NewsCard key={item.id} title={item.title} tags={item.tags} />
          ))}
        </div>
      </GridContainer>
    </section>
  )
}
