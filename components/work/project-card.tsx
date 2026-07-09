import Link from "next/link"

interface ProjectCardProps {
  label?: string
  description?: string
  slug?: string
}

export function ProjectCard({ label, description, slug }: ProjectCardProps) {
  const href = slug ? `/work/${slug}` : "#"

  return (
    <Link href={href} className="group block">
      <div className="aspect-[691/450] w-full bg-[#e1e1e1]" />

      {label && (
        <div className="mt-4 flex items-start gap-[10px]">
          <span className="min-w-0 flex-1 font-mono text-[20px] leading-5 tracking-[0] text-align-text">
            {label}
          </span>
          {description && (
            <span className="min-w-0 flex-1 font-mono text-sm leading-5 tracking-[0] text-align-muted">
              {description}
            </span>
          )}
        </div>
      )}
    </Link>
  )
}
