"use client"

import { useState } from "react"
import Image from "next/image"
import { GridContainer } from "@/components/shared/grid-container"

export function AboutImageGallery() {
  const [fullWidth, setFullWidth] = useState(false)

  return (
    <>
      <GridContainer as="section" className="mt-16">
        <div className="col-span-full mb-4 flex justify-end">
          <button
            onClick={() => setFullWidth((v) => !v)}
            className="flex h-8 items-center gap-2 bg-align-text px-3 font-mono text-sm text-align-badge-text transition-colors hover:bg-black"
          >
            {fullWidth ? "Grid view" : "Full width"}
          </button>
        </div>
      </GridContainer>

      {fullWidth ? (
        <section className="flex w-full gap-[10px]">
          <div className="flex-1 bg-[#b0b0b0]">
            <Image
              src="/images/about/plane.png"
              alt="Plane"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
              draggable={false}
              priority
              unoptimized
            />
          </div>
          <div className="flex-1 bg-align-card">
            <Image
              src="/images/about/granny.png"
              alt="Granny"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
              draggable={false}
              priority
              unoptimized
            />
          </div>
        </section>
      ) : (
        <GridContainer as="section" className="grid-cols-2 gap-[10px]">
          <div className="relative col-span-1 h-[250px] w-full overflow-clip bg-[#b0b0b0] lg:h-[393px]">
            <Image
              src="/images/about/plane.png"
              alt="Plane"
              fill
              sizes="(max-width: 768px) 100vw, 684px"
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="relative col-span-1 h-[250px] w-full overflow-clip bg-align-card lg:h-[393px]">
            <Image
              src="/images/about/granny.png"
              alt="Granny"
              fill
              sizes="(max-width: 768px) 100vw, 684px"
              className="object-cover"
              draggable={false}
            />
          </div>
        </GridContainer>
      )}
    </>
  )
}
