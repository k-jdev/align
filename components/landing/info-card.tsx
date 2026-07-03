import Image from "next/image"
import Link from "next/link"

export interface InfoCardProps {
  badge: string
  text: string
  cta: {
    label: string
    href: string
  }
  images?: string[]
  avatarCount?: number
}

export function InfoCard({
  badge,
  text,
  cta,
  images,
  avatarCount,
}: InfoCardProps) {
  return (
    <div className="flex w-[285px] flex-col items-start">
      {/* Badge */}
      <div className="bg-align-text px-2 py-1">
        <span className="font-mono text-sm leading-5 text-align-badge-text uppercase">
          {badge}
        </span>
      </div>

      <div className="flex w-full flex-col items-start gap-[10px] bg-align-card p-[10px]">
        <p className="w-[265px] font-mono text-sm leading-5 text-align-text">
          {text}
        </p>

        {(images || avatarCount !== undefined) && (
          <div className="flex items-start gap-2">
            {images?.map((src, i) => (
              <div
                key={i}
                className="relative size-12 overflow-clip bg-[#e8e8e8]"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
            {avatarCount !== undefined && (
              <div className="relative flex size-12 items-center justify-center overflow-clip bg-[#e8e8e8]">
                <span className="font-mono text-sm text-align-muted">
                  {avatarCount}+
                </span>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          href={cta.href}
          className="flex h-8 items-center font-mono text-sm text-align-text underline decoration-from-font underline-offset-2"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  )
}
