import { Container } from '@mui/material'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
// import NewsletterSection from '@/components/NewsletterSection'
import Navbar from '@/components/Navbar'
import BenefitsSection from '@/components/BenefitsSection'
import FAQSection from '@/components/FAQSection'
import CallToActionSection from '@/components/CallToActionSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CMatrix - Learn Smart, Grow Fast',
  description: 'CMatrix is your all-in-one AI-powered learning companion — featuring lectures, notes, internships, and community.',
  keywords: ['CMatrix', 'AI Learning Platform', 'student community', 'internships', 'smart lectures'],
  openGraph: {
    title: 'CMatrix - Learn Smart, Grow Fast',
    description: 'Join the student-first platform powered by AI: notes, lectures, internships, and vibrant peer communities.',
    url: 'https://thecmatrix.com',
    siteName: 'CMatrix',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'CMatrix - Learn Smart, Grow Fast',
    description: 'The AI-powered platform reshaping education for students in India and beyond.',
  },
  metadataBase: new URL('https://thecmatrix.com'),
}

export default function HomePage() {
  return (
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
  )
}
