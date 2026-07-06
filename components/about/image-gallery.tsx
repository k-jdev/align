import Image from "next/image"
import { GridContainer } from "@/components/shared/grid-container"

export function AboutImageGallery() {
  return (
    <GridContainer as="section" className="mt-16">
      <div className="relative col-span-2 h-[250px] w-full overflow-clip bg-[#b0b0b0] lg:h-[393px]">
        <Image
          src="/images/about/plane.png"
          alt="Plane"
          fill
          sizes="(max-width: 768px) 100vw, 684px"
          className="object-cover"
          draggable={false}
        />
      </div>

      <div className="relative col-span-2 h-[250px] w-full overflow-clip bg-align-card lg:h-[393px]">
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
  )
}
