import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Solution } from '@/components/solution'
import { Showcase } from '@/components/showcase'
import { HowItWorks } from '@/components/how-it-works'
import { Imagine } from '@/components/imagine'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Solution />
        <Showcase />
        <HowItWorks />
        <Imagine />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
