import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

export function InvestorsCtaSection() {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pt-16">
        <div className="relative col-span-8 flex flex-col gap-0 md:h-103 md:flex-row md:overflow-clip lg:col-span-4 lg:col-start-3">
          <div className="z-10 flex flex-col gap-6 px-6 pt-8 md:absolute md:top-8 md:left-6.25 md:px-0">
            <h2 className="font-sans text-[36px] leading-[1.1] font-light tracking-[-0.16px] text-align-text md:text-[48px]">
              Join our Blog
            </h2>

            <Link
              href="/blog"
              className="flex h-10 w-fit items-center gap-3 bg-align-text px-4 font-mono text-base leading-6 text-align-badge-text"
            >
              Subscribe
            </Link>
          </div>

          <div className="relative -mt-12 h-auto w-full md:absolute md:-top-3 md:right-0 md:mt-0 md:h-[calc(100%+12px)] md:w-114.75">
            <Image
              src="/images/investors/investors.jpg"
              alt=""
              width={480}
              height={320}
              className="h-auto w-full object-contain md:h-full md:object-cover"
              priority
              draggable={false}
            />
          </div>
        </div>
      </GridContainer>
    </section>
  )
}
