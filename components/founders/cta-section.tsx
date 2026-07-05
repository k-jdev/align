import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

export function FoundersCtaSection() {
  return (
    <GridContainer as="section" cols={8} className="py-24">
      {/* Block 1041×412 — cols 2–7, sand bg */}
      <div className="relative col-span-6 col-start-2 flex h-[412px] items-center overflow-clip bg-[#e9e8e6]">
        {/* Text — left side */}
        <div className="relative z-10 ml-8 flex flex-col">
          <h2 className="font-sans text-[48px] leading-[1.1] font-light tracking-[-2px] text-align-text">
            It&apos;s never too early <br /> to reach out.
          </h2>

          <div className="mt-8 w-[357px] bg-white p-[10px]">
            <p className="font-sans text-lg leading-[1.5] text-align-text">
              We work with teams across all stages, dynamically providing what
              each needs. We specialize in providing the network needed to go
              from 0 to 1.
            </p>

            <div className="mt-[10px] flex h-8 w-[337px] items-center justify-between">
              <Link
                href="/contact"
                className="flex h-8 items-center font-mono text-sm leading-5 text-align-text underline decoration-from-font underline-offset-auto"
              >
                Apply to Align
              </Link>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M4.167 10h11.666M15.833 10l-5 5M15.833 10l-5-5"
                  stroke="#111"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <Image
          src="/images/founders/pixel mountain.png"
          alt=""
          width={462}
          height={602}
          className="absolute right-0 h-full w-auto object-contain"
          priority
          unoptimized
          draggable={false}
        />
      </div>
    </GridContainer>
  )
}
