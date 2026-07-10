import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { LegalPage } from "@/components/legal/legal-page"
import { TERMS_DATA } from "@/lib/legal-content"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-align-footer">
      <div className="bg-align-bg">
        <Header />
        <LegalPage data={TERMS_DATA} />
      </div>
      <Footer />
    </div>
  )
}
