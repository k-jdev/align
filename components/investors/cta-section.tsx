import Image from "next/image"
import Link from "next/link"
import { GridContainer } from "@/components/shared/grid-container"

export function InvestorsCtaSection() {
  return (
    <section className="w-full bg-align-bg">
      <GridContainer cols={8} className="pb-24">
        <div className="relative col-span-8 flex h-[412px] overflow-clip bg-align-green lg:col-span-4 lg:col-start-3">
          {/* Text + button — top-left */}
          <div className="absolute top-8 left-[25px] z-10 flex flex-col gap-6">
            <h2 className="font-sans text-[48px] leading-[1.1] font-light tracking-[-0.16px] text-align-text">
              Join our Blog
            </h2>

            <Link
              href="/blog"
              className="flex h-10 w-fit items-center gap-3 bg-align-text px-4 font-mono text-base leading-6 text-align-badge-text"
            >
              Subscribe
            </Link>
          </div>

          {/* Image — right side, y=-12, 459×514 */}
          <div className="absolute top-[-12px] right-0 h-[514px] w-[459px] overflow-clip">
            <Image
              src="/images/investors/investors.png"
              alt=""
              fill
              className="object-contain"
              priority
              draggable={false}
            />
          </div>

          {/* Dot — x=582, y=98, size=2 */}
          <div className="absolute top-[98px] left-[207px] size-[2px] bg-[#3f0]" />
        </div>
      </GridContainer>
    </section>
  )
}
