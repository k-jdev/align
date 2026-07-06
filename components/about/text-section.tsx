import { GridContainer } from "@/components/shared/grid-container"

export function AboutTextSection() {
  return (
    <GridContainer as="section" className="pb-24">
      <div className="col-span-4 lg:col-span-2 lg:col-start-2">
        <h2 className="pt-16 font-sans text-[36px] leading-[1.1] font-light tracking-[-2px] text-align-text lg:text-[48px]">
          Why we make a difference.
        </h2>

        <div className="mt-8 space-y-4 font-sans text-lg leading-[1.4] text-align-text lg:text-xl">
          <p>It&apos;s easy to build a great idea on the wrong foundation.</p>
          <p>
            A pre/seed investor is more than a check. The good ones are your
            first users, your hardest critics, and your way into a network that
            compounds.
          </p>
          <p>
            Align makes that the default — a network where founders get
            momentum, investors get conviction from the inside, and everyone is
            working toward the same thing.
          </p>
        </div>
      </div>
    </GridContainer>
  )
}
