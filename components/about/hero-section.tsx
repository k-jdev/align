export function AboutHeroSection() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1392px] px-6">
        {/* Main heading */}
        <h1 className="pt-[83px] font-sans text-[40px] leading-[1.1] font-light tracking-[-2px] text-align-text md:ml-[351px] md:max-w-[1042px] md:text-[64px]">
          Align is a venture studio &amp; network powering startups at the
          frontier of emerging technologies.
        </h1>

        {/* Green bullet + subtext */}
        <div className="mt-8 flex items-center gap-4 md:ml-[351px]">
          <div className="size-2 shrink-0 bg-align-green" />
          <p className="font-sans text-lg leading-[1.4] text-align-text md:max-w-[492px] md:text-xl">
            We work primarily with crypto/blockchain projects, and increasingly
            with AI.
          </p>
        </div>
      </div>
    </section>
  )
}
