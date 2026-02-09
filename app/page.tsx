import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Standard from '@/components/standard'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Insights from '@/components/insights'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Standard />
      <Team />
      <Insights />
      <Contact />
      <Footer />
    </main>
  )
}
