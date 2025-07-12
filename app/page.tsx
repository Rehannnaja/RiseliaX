// app/page.tsx

import { HeroSection } from '@/components/HeroSection'
import { GameSection } from '@/components/GameSection'

export default function HomePage() {
  return (
    <section className="space-y-8">
      <HeroSection />
      <GameSection />
    </section>
  )
}
