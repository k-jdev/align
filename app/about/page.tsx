import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { AboutHeroSection } from "@/components/about/hero-section"
import { AboutImageGallery } from "@/components/about/image-gallery"
import { AboutTextSection } from "@/components/about/text-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-align-bg">
      <Header />
      <AboutHeroSection />
      <AboutImageGallery />
      <AboutTextSection />
      <Footer />
    </div>
  )
}
