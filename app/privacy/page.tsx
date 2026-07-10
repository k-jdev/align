import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { LegalPage } from "@/components/legal/legal-page"
import { PRIVACY_DATA } from "@/lib/legal-content"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-align-footer">
      <div className="flex-1 bg-align-bg">
        <Header />
        <LegalPage data={PRIVACY_DATA} />
      </div>
      <Footer />
    </div>
  )
}
