import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { MarketSection } from '@/components/sections/MarketSection'
import { InnovationSection } from '@/components/sections/InnovationSection'
import { ArchitectureSection } from '@/components/sections/ArchitectureSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { StakeholdersSection } from '@/components/sections/StakeholdersSection'
import { SavingsSection } from '@/components/sections/SavingsSection'
import { SwotSection } from '@/components/sections/SwotSection'
import { BusinessSection } from '@/components/sections/BusinessSection'
import { RoadmapSection } from '@/components/sections/RoadmapSection'
import { CtaSection } from '@/components/sections/CtaSection'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen">
          <Navbar />
          <main>
            <HeroSection />
            <ProblemSection />
            <MarketSection />
            <InnovationSection />
            <ArchitectureSection />
            <FeaturesSection />
            <StakeholdersSection />
            <SavingsSection />
            <SwotSection />
            <BusinessSection />
            <RoadmapSection />
            <CtaSection />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
