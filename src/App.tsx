import CTAFooterSection from './sections/CTA-FooterSection/index.tsx'
import FeatureSection from './sections/FeatureSection/index.tsx'
import FormSection from './sections/FormSection/index.tsx'
import HeroSection from './sections/HeroSection/index.tsx'
import NavSection from './sections/NavSection/index.tsx'
import StatsSection from './sections/StatsSection/index.tsx'

function App() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <FormSection />
      <StatsSection />
      <FeatureSection />
      <CTAFooterSection />
    </>
  )
}

export default App
