import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"
import { Typewriter } from "@/components/shared/typewriter"

export function FoundersCtaSection() {
  return (
    <GridContainer as="section" cols={4} className="py-24">
      <div className="relative col-span-4 flex h-[480px] overflow-clip bg-[#e9e8e6]">
        <div className="relative z-10 ml-9 flex h-full flex-col justify-between py-12">
          <h2 className="font-sans text-[48px] leading-[1.1] font-light tracking-[-2px] text-align-text">
            It&apos;s never too <Typewriter words={["early", "late"]} />
            <br />
            to reach out.
          </h2>

          <div className="w-[357px] bg-white p-[10px]">
            <p className="font-mono text-sm leading-[1.5] text-align-text">
              We work with teams across all stages, dynamically providing what
              each needs. We specialize in providing the network needed to go
              from 0 to 1.
            </p>

            <div className="mt-[10px] flex h-8 w-[337px] items-center justify-between">
              <Link
                href="/contact"
                className="flex h-8 items-center font-mono text-sm leading-5 tracking-[0px] text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
              >
                Apply to Align
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.4763 9.16591L9.00634 4.69591L10.1847 3.51758L16.6663 9.99924L10.1847 16.4809L9.00634 15.3026L13.4763 10.8326H3.33301V9.16591H13.4763Z"
                  fill="#111111"
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
