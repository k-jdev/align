import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { WorkFeaturedSection } from "@/components/work/featured-section"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-align-bg">
      <Header />
      <WorkFeaturedSection />
      <Footer />
    </div>
  )
}
