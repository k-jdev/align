import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react"

export function HeroImages() {
  return (
    <section className="w-full bg-align-bg">
      {/* Mobile: horizontal scroll snap carousel */}
      <div className="flex w-full snap-x snap-mandatory gap-2.5 overflow-x-auto md:hidden">
        <div className="relative w-full shrink-0 snap-center">
          <div className="aspect-715/466 w-full bg-[#e1e1e1]" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <div className="flex size-10 items-center justify-center bg-[#bdbdbd]">
              <RiArrowLeftLine className="size-4.5 text-white" />
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <div className="flex size-10 items-center justify-center bg-[#bdbdbd]">
              <RiArrowRightLine className="size-4.5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: side by side */}
      <div className="hidden w-full flex-row gap-2.5 md:flex">
        <div className="relative flex-1">
          <div className="aspect-715/466 w-full bg-[#e1e1e1]" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <div className="flex size-10 items-center justify-center bg-[#bdbdbd]">
              <RiArrowLeftLine className="size-4.5 text-white" />
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="aspect-714/465 w-full bg-[#e4e4e4]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <div className="flex size-10 items-center justify-center bg-[#bdbdbd]">
              <RiArrowRightLine className="size-4.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
