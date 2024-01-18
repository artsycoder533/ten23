import Image from 'next/image'
import Hero from './components/Hero'
import Services from './components/Services'
import PricingSection from './components/PricingSection'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[80px]">
      <Hero />
      <Services />
      <PricingSection />
      <Contact />
    </main>
  )
}
