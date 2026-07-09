interface NewsCardProps {
  title: string
  tags: string[]
}

export function NewsCard({ title, tags }: NewsCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Image placeholder */}
      <div className="aspect-[340/220] w-full bg-[#e1e1e1]" />

      {/* Title */}
      <p className="w-full font-mono text-sm leading-5 tracking-[0] text-align-text uppercase">
        {title}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-[8px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-6 items-center bg-[#e4e4e4] px-2 font-mono text-sm leading-5 tracking-[0] text-align-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
