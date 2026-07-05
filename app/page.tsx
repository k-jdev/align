import { Header } from "@/components/shared/header"
import { HeroDiagram } from "@/components/landing/hero-diagram"
import { WhySection } from "@/components/landing/why-section"
import { StatsBar } from "@/components/landing/stats-bar"
import { Footer } from "@/components/shared/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-align-bg">
      <Header />
      <HeroDiagram />
      <WhySection />
      <StatsBar />
      <Footer />
    </div>
  )
}
