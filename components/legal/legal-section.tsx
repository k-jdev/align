import type { LegalSection as LegalSectionType } from "@/lib/legal-content"

interface LegalSectionProps {
  section: LegalSectionType
}

export function LegalSection({ section }: LegalSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-sans text-[36px] leading-[1.1] font-light tracking-[-0.16px] text-align-text md:text-[48px]">
        {section.heading}
      </h2>

      {section.callout && (
        <div className="w-full bg-[#e4e4e4] px-6 py-4">
          <p className="font-sans text-[18px] leading-[1.4] font-normal tracking-normal text-align-muted md:text-[20px]">
            {section.callout}
          </p>
        </div>
      )}

      {section.paragraphs.length > 0 && (
        <div className="flex flex-col gap-4">
          {section.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans text-[18px] leading-[1.4] font-normal tracking-normal text-align-text md:text-[20px]"
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
