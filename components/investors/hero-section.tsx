import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

export function InvestorsHeroSection() {
  return (
    <>
      <section className="w-full bg-align-bg">
        <GridContainer cols={8} className="pt-20.75 pb-12">
          <h1 className="col-span-8 font-sans text-[48px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-4 lg:col-start-1 lg:text-[48px]">
            We give investors a direct line to the projects we back. Early
            access to beta products, seed rounds and upcoming launches.
          </h1>
        </GridContainer>
      </section>

      <GridContainer cols={8} className="pt-8 pb-12">
        <section className="relative col-span-full flex flex-col overflow-hidden bg-align-footer pt-8 md:h-112.5 md:pb-12">
          <GridContainer cols={8} className="relative z-10 md:h-full">
            <h1 className="col-span-8 max-w-75 font-sans text-[32px] leading-[1.1] font-light tracking-[-2px] text-white md:col-span-3 md:col-start-1 md:max-w-none md:text-[40px] lg:text-[48px]">
              You are a{" "}
              <span className="underline decoration-solid decoration-from-font underline-offset-2 [text-decoration-skip-ink:none] [text-underline-position:from-font]">
                partner first,
              </span>
              <br />
              investor second.
            </h1>

            <div className="col-span-8 mt-8 max-w-89 self-start bg-white p-2.5 md:col-span-3 md:col-start-1 md:mt-0 md:self-end">
              <p className="font-mono text-sm leading-5 text-align-text">
                Unlike standard VC&apos;s we xxx investors that help xxxx not
                just invest typeshi.
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

          <Image
            src="/images/investors/plane.png"
            alt=""
            width={691}
            height={484}
            className="pointer-events-none mt-8 aspect-691/484 w-full object-cover md:absolute md:top-1/2 md:right-0 md:mt-0 md:h-121 md:w-172.75 md:-translate-y-1/2"
            priority
            draggable={false}
          />
        </section>
      </GridContainer>
    </>
  )
}
