interface ProjectCardProps {
  label?: string
  description?: string
}

export function ProjectCard({ label, description }: ProjectCardProps) {
  return (
    <div>
      {/* Image — 691×450 */}
      <div className="aspect-[691/450] w-full bg-[#e1e1e1]" />

      {/* Label row — IBM Plex Mono: label 20px #111 + desc 14px #757575, gap 10px */}
      {label && (
        <div className="mt-4 flex items-start gap-[10px]">
          <span className="w-[341px] shrink-0 font-mono text-[20px] leading-5 tracking-[0] text-align-text">
            {label}
          </span>
          {description && (
            <span className="flex-1 font-mono text-sm leading-5 tracking-[0] text-align-muted">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
