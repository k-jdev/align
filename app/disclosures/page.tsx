import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { LegalPage } from "@/components/legal/legal-page"
import { DISCLOSURES_DATA } from "@/lib/legal-content"

export default function DisclosuresPage() {
  return (
    <>
      <Header />
      <LegalPage data={DISCLOSURES_DATA} />
      <Footer />
    </>
  )
}
