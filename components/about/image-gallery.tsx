import Image from "next/image"

export function AboutImageGallery() {
  return (
    <section className="mt-16 flex w-full gap-[10px]">
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
  )
}
