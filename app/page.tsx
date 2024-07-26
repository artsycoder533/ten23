import Hero from './components/Hero'
import Services from './components/Services'
import PricingSection from './components/PricingSection'
import Contact from './components/Contact'
import FAQs from './components/FAQs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[80px]">
      <Hero />
      <Services />
      {/* <PricingSection /> */}
      <FAQs />
      <Contact />
    </main>
  )
}
