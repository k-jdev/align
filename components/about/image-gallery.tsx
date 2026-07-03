import Image from "next/image"

export function AboutImageGallery() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1392px] px-6">
        <div className="mt-16 flex flex-col gap-[11px] lg:flex-row">
          {/* Left image — plane */}
          <div className="relative h-[250px] w-full overflow-clip bg-[#b0b0b0] lg:h-[393px] lg:w-[691px] lg:shrink-0">
            <Image
              src="/images/about/plane.png"
              alt="Plane"
              fill
              sizes="(max-width: 768px) 100vw, 691px"
              className="object-cover"
            />
          </div>

          {/* Right image — granny */}
          <div className="relative h-[250px] w-full overflow-clip bg-align-card lg:h-[393px] lg:w-[691px] lg:shrink-0">
            <Image
              src="/images/about/granny.png"
              alt="Granny"
              fill
              sizes="(max-width: 768px) 100vw, 691px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
