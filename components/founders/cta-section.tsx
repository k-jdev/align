import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"
import { Typewriter } from "@/components/shared/typewriter"

export function FoundersCtaSection() {
  return (
    <GridContainer as="section" cols={4} className="py-24" mobileFullWidth>
      <div className="relative col-span-4 flex flex-col overflow-clip bg-[#e9e8e6] md:h-120">
        <div className="relative z-10 flex flex-col justify-between px-4 py-8 md:ml-8 md:h-full md:px-0 md:py-8">
          <h2 className="font-sans text-[36px] leading-[1.1] font-light tracking-[-2px] text-align-text md:text-[48px]">
            It&apos;s never too <Typewriter words={["early", "late"]} />
            <br />
            to reach out.
          </h2>

          <div className="mt-8 hidden bg-white p-2.5 md:mt-0 md:mb-0 md:block md:w-89">
            <p className="font-mono text-sm leading-5 text-align-text">
              We work with teams across all stages, dynamically providing what
              each needs. We specialize in providing the network needed to go
              from 0 to 1.
            </p>

            <div className="mt-2.5 flex h-8 items-center justify-between">
              <Link
                href="/contact"
                className="font-mono text-sm leading-5 tracking-normal text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
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

        <div className="relative md:hidden">
          <Image
            src="/images/founders/mobileMountain.png"
            alt=""
            width={489}
            height={465}
            className="h-112 w-full object-cover"
            priority
            unoptimized
            draggable={false}
          />

          <div className="absolute right-0 bottom-6 left-0 z-10 px-4">
            <div className="bg-white p-2.5">
              <p className="font-mono text-sm leading-5 text-align-text">
                We work with teams across all stages, dynamically providing what
                each needs. We specialize in providing the network needed to go
                from 0 to 1.
              </p>

              <div className="mt-2.5 flex h-8 items-center justify-between">
                <Link
                  href="/contact"
                  className="font-mono text-sm leading-5 tracking-normal text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
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
        </div>

        <Image
          src="/images/founders/pixel mountain.png"
          alt=""
          width={817}
          height={412}
          className="absolute -right-20 bottom-0 hidden max-h-full w-auto object-contain max-[1000px]:right-auto max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2 max-[770px]:min-w-192.5 md:block"
          priority
          unoptimized
          draggable={false}
        />
      </div>
    </GridContainer>
  )
}
