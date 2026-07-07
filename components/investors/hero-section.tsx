import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

export function InvestorsHeroSection() {
  return (
    <>
      <section className="w-full bg-align-bg">
        <GridContainer cols={8} className="pt-20.75 pb-12">
          <h1 className="col-span-8 font-sans text-[42px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:col-span-6 lg:col-start-1 lg:text-[64px]">
            We give investors a seat inside the process of building and scaling
            a startup.
          </h1>
        </GridContainer>
      </section>

      <GridContainer cols={8} className="px-0 pt-8 pb-8" mobileFullWidth>
        <section className="relative col-span-full flex flex-col overflow-hidden bg-align-footer pt-8 lg:h-112.5 lg:pb-8">
          <GridContainer
            cols={8}
            className="ld:px-8 relative z-10 flex flex-col lg:grid lg:h-full"
          >
            <h1 className="col-span-8 font-sans text-[clamp(2.25rem,1.53rem+2.08vw,3rem)] leading-[1.1] font-light tracking-[-2px] text-white lg:col-span-3 lg:col-start-1 lg:max-w-118.5">
              You are a{" "}
              <span className="underline decoration-solid decoration-from-font underline-offset-2 [text-decoration-skip-ink:none]">
                partner first,
              </span>
              <span className="hidden lg:inline"> </span>
              <br className="lg:hidden" />
              investor second.
            </h1>
          </GridContainer>

          <div className="relative lg:contents">
            <Image
              src="/images/investors/plane.jpg"
              alt=""
              width={691}
              height={484}
              className="pointer-events-none mt-8 h-112 w-full object-cover lg:absolute lg:top-1/2 lg:right-0 lg:mt-0 lg:h-121 lg:w-172.75 lg:-translate-y-1/2 lg:object-contain"
              priority
              draggable={false}
            />

            <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-20 bg-linear-to-b from-align-footer to-[rgba(7,7,7,0)] lg:hidden" />

            <div className="absolute right-0 bottom-6 left-0 z-10 lg:static lg:contents">
              <GridContainer cols={8} className="lg:h-full lg:px-8">
                <div className="col-span-8 bg-white p-2.5 lg:col-span-3 lg:col-start-1 lg:mt-0 lg:w-auto lg:max-w-89 lg:self-end">
                  <p className="font-mono text-sm leading-5 text-align-text">
                    Align closes the distance between those building and those
                    backing.
                  </p>

                  <div className="mt-2.5 flex h-8 items-center justify-between">
                    <Link
                      href="/contact"
                      className="font-mono text-sm leading-5 text-align-text underline decoration-solid decoration-1 underline-offset-2 [text-decoration-skip-ink:none]"
                    >
                      Learn how it works
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
