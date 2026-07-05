import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { FoundersHeroSection } from "@/components/founders/hero-section"
import { FoundersCtaSection } from "@/components/founders/cta-section"

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-align-bg">
      <Header />
      <FoundersHeroSection />
      <FoundersCtaSection />
      <Footer />
    </div>
  )
}
