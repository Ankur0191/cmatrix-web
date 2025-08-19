'use client'

import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import { MdInfoOutline } from 'react-icons/md'
import { ReactTyped } from 'react-typed'
import Image from 'next/image'
import Head from 'next/head'

export default function HeroSection() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CMatrix – AI Coding Assistant",
    "operatingSystem": "Android, iOS, Web",
    "applicationCategory": "EducationalApplication",
    "description": "CMatrix is an AI-powered coding assistant for students and developers. Debug code instantly, get personalized coding help, and boost productivity.",
    "url": "https://www.thecmatrix.com",
    "screenshot": "https://www.thecmatrix.com/phone-mock.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return (
    <>
      <Head>
        <title>CMatrix – AI Coding Assistant for Students & Developers</title>
        <meta
          name="description"
          content="CMatrix is your AI-powered coding companion for students and developers. Debug code instantly, learn faster, and write smarter with AI."
        />
        <meta
          name="keywords"
          content="AI coding assistant, debug with AI, student coding app, code productivity, learn programming faster"
        />

        {/* Open Graph */}
        <meta property="og:title" content="CMatrix – AI Coding Assistant for Students" />
        <meta property="og:description" content="Boost your coding productivity with CMatrix – your personal AI companion." />
        <meta property="og:image" content="https://www.thecmatrix.com/phone-mock.png" />
        <meta property="og:url" content="https://www.thecmatrix.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CMatrix – AI Coding Assistant" />
        <meta name="twitter:description" content="Your personal AI-powered coding assistant made for students." />
        <meta name="twitter:image" content="https://www.thecmatrix.com/phone-mock.png" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      </Head>

      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          background: 'linear-gradient(135deg, #0f172a, #1e293b, #0f172a)',
        }}
      >
        {/* Animated gradient blobs */}
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(78,204,163,0.5), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            top: '20%',
            left: '-10%',
            animation: 'pulse 6s infinite alternate',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(110,127,243,0.4), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(120px)',
            bottom: '-10%',
            right: '-10%',
            animation: 'pulse 8s infinite alternate',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column-reverse', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            gap={8}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ flex: 1 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '3.7rem' },
                  lineHeight: 1.2,
                  mb: 2,
                  background: 'linear-gradient(90deg,#4ECCA3,#6E7FF3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your AI Coding Assistant
              </Typography>

              <Typography variant="h6" sx={{ fontSize: '1.3rem', mb: 3 }}>
                <ReactTyped
                  strings={[
                    'Debug code in seconds ⚡',
                    'Learn programming faster 🚀',
                    'Built for students like you 🎓',
                  ]}
                  typeSpeed={40}
                  backSpeed={30}
                  loop
                />
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1.1rem',
                  mb: 4,
                  maxWidth: '90%',
                }}
              >
                CMatrix is your AI-powered coding companion – solve bugs instantly, accelerate learning,
                and write smarter code with intelligent guidance designed for students and developers.
              </Typography>

              <Box display="flex" gap={3} flexWrap="wrap">
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<FaDownload />}
                    sx={{
                      px: 5,
                      py: 1.8,
                      fontSize: '1.05rem',
                      borderRadius: '14px',
                      background: 'linear-gradient(90deg,#4ECCA3,#6E7FF3)',
                      boxShadow: '0px 4px 20px rgba(78,204,163,0.5)',
                      '&:hover': {
                        background: 'linear-gradient(90deg,#3CBF94,#5A6CE8)',
                        boxShadow: '0px 6px 25px rgba(78,204,163,0.7)',
                      },
                    }}
                  >
                    Download App
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<MdInfoOutline />}
                    sx={{
                      px: 5,
                      py: 1.8,
                      fontSize: '1.05rem',
                      borderRadius: '14px',
                      color: '#4ECCA3',
                      borderColor: '#4ECCA3',
                      '&:hover': {
                        backgroundColor: 'rgba(78,204,163,0.1)',
                        borderColor: '#3CBF94',
                        color: '#3CBF94',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <Image
                src="/phone-mock.png"
                alt="CMatrix AI Coding Assistant App Preview"
                width={320}
                height={620}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '28px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  )
}
