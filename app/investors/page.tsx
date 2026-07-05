import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { InvestorsHeroSection } from "@/components/investors/hero-section"
import { InvestorsCtaSection } from "@/components/investors/cta-section"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-align-bg">
      <Header />
      <InvestorsHeroSection />
      <InvestorsCtaSection />
      <Footer />
    </div>
  )
}
