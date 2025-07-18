import Head from 'next/head'
import { Container } from '@mui/material'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import NewsletterSection from '@/components/NewsletterSection'
import Navbar from '@/components/Navbar'
import BenefitsSection from '@/components/BenefitsSection'
import FAQSection from '@/components/FAQSection'
import CallToActionSection from '@/components/CallToActionSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'
//  from '@/components/Navbar'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CMatrix - Learn Smart, Grow Fast</title>
        <meta name="description" content="CMatrix is your all-in-one learning companion..." />
        <meta property="og:title" content="CMatrix - Learn Smart, Grow Fast" />
        <meta property="og:image" content="/banner.png" />
      </Head>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CommunitySection />
        <FAQSection />
        <CallToActionSection />
        <Footer />
      </Container>
    </>
  )
}
