import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

export function InvestorsHeroSection() {
  return (
    <>
      <section className="w-full bg-align-bg">
        <GridContainer cols={8} className="pt-20.75 pb-12">
          <h1 className="col-span-8 font-sans text-[48px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-6 lg:col-start-1 lg:text-[64px]">
            We give investors a direct line to the projects we back. Early
            access to beta products, seed rounds and upcoming launches.
          </h1>
        </GridContainer>
      </section>

      <GridContainer cols={8} className="pt-8 pb-12" mobileFullWidth>
        <section className="relative col-span-full flex flex-col overflow-hidden bg-align-footer pt-8 md:h-112.5 md:pb-12">
          <GridContainer
            cols={8}
            className="relative z-10 flex flex-col md:grid md:h-full"
          >
            <h1 className="col-span-8 font-sans text-[32px] leading-[1.1] font-light tracking-[-2px] text-white md:col-span-3 md:col-start-1 md:max-w-118.5 md:text-[40px] lg:text-[48px]">
              You are a{" "}
              <span className="underline decoration-solid decoration-from-font underline-offset-2 [text-decoration-skip-ink:none] [text-underline-position:from-font]">
                partner first,
              </span>{" "}
              investor second.
            </h1>
          </GridContainer>

          <div className="relative md:contents">
            <Image
              src="/images/investors/plane.jpg"
              alt=""
              width={691}
              height={484}
              className="pointer-events-none mt-8 h-112 w-full object-cover md:absolute md:top-1/2 md:right-0 md:mt-0 md:h-121 md:w-172.75 md:-translate-y-1/2 md:object-contain"
              priority
              draggable={false}
            />

            <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-20 bg-linear-to-b from-align-footer to-[rgba(7,7,7,0)] md:hidden" />

            <div className="absolute right-0 bottom-6 left-0 z-10 md:static md:contents">
              <GridContainer cols={8} className="md:h-full">
                <div className="col-span-8 bg-white p-2.5 md:col-span-3 md:col-start-1 md:mt-0 md:w-auto md:max-w-89 md:self-end">
                  <p className="font-mono text-sm leading-5 text-align-text">
                    Unlike standard VC&apos;s we xxx investors that help xxxx
                    not just invest typeshi.
                  </p>

                  <div className="mt-2.5 flex h-8 items-center justify-between">
                    <Link
                      href="/contact"
                      className="font-mono text-sm leading-5 text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
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
                        d="M13.4773 9.16591L9.00732 4.69591L10.1857 3.51758L16.6673 9.99924L10.1857 16.4809L9.00732 15.3026L13.4773 10.8326H3.33398V9.16591H13.4773Z"
                        fill="#111111"
                      />
                    </svg>
                  </div>
                </div>
              </GridContainer>
            </div>
          </div>
        </section>
      </GridContainer>
    </>
  )
}
