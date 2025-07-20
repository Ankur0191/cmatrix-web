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
        "@type": "WebApplication",
        "name": "CMatrix",
        "operatingSystem": "Android, iOS, Web",
        "applicationCategory": "DeveloperTool",
        "description": "CMatrix is your AI-powered coding assistant designed for students. Get instant help with debugging, writing code, and enhancing productivity.",
        "url": "https://www.thecmatrix.com",
        "screenshot": "https://www.thecmatrix.com/phone-mock.png"
    }

    return (
        <>
            <Head>
                <title>CMatrix – AI Coding Assistant for Students & Developers</title>
                <meta name="description" content="CMatrix is an AI-powered coding companion built for students. Debug code, get instant coding help, and learn faster. Try the app now!" />
                <meta name="keywords" content="AI coding assistant, student coding tool, debug with AI, CMatrix app, coding productivity" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="CMatrix – AI Coding Assistant for Students" />
                <meta property="og:description" content="Boost your coding productivity with CMatrix – your personal AI companion built for students." />
                <meta property="og:image" content="https://www.thecmatrix.com/phone-mock.png" />
                <meta property="og:url" content="https://www.thecmatrix.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
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
                    py: { xs: 8, md: 12 },
                }}
            >
                {/* Background Decorations */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: 300,
                        height: 300,
                        background: 'radial-gradient(circle, rgba(100,181,246,0.3), transparent)',
                        filter: 'blur(100px)',
                        top: '30%',
                        right: '10%',
                        zIndex: 0,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        left: '-5%',
                        top: '10%',
                        width: '100%',
                        height: '100%',
                        opacity: 0.05,
                        backgroundImage: 'url(/ai-pattern.svg)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'contain',
                        zIndex: 0,
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column-reverse', md: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        gap={6}
                    >
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: 1 }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
                                    lineHeight: 1.2,
                                    mb: 2,
                                }}
                            >
                                AI-Powered Coding Help for Students
                            </Typography>

                            <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
                                <ReactTyped
                                    strings={[
                                        'AI debugging in seconds.',
                                        'Learn to code faster.',
                                        'Built for students like you.',
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={30}
                                    loop
                                />
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'gray',
                                    fontSize: '1.05rem',
                                    mb: 4,
                                    maxWidth: '90%',
                                }}
                            >
                                CMatrix is your smart AI coding companion – solve bugs instantly, write code faster, and boost learning with personalized support.
                            </Typography>

                            <Box display="flex" gap={2} flexWrap="wrap">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        startIcon={<FaDownload />}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            borderRadius: '12px',
                                            backgroundColor: '#4ECCA3',
                                            '&:hover': {
                                                backgroundColor: '#3CBF94',
                                            },
                                        }}
                                    >
                                        Download App
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        startIcon={<MdInfoOutline />}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            borderRadius: '12px',
                                            color: '#4ECCA3',
                                            borderColor: '#4ECCA3',
                                            '&:hover': {
                                                backgroundColor: 'rgba(78, 204, 163, 0.1)',
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
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-30px',
                                    left: '-20px',
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: '#4ECCA3',
                                    animation: 'pulse 2s infinite',
                                    zIndex: 1,
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    right: '-20px',
                                    width: 30,
                                    height: 30,
                                    borderRadius: '50%',
                                    backgroundColor: '#6E7FF3',
                                    animation: 'pulse 3s infinite',
                                    zIndex: 1,
                                }}
                            />

                            <Image
                                src="/phone-mock.png"
                                alt="Preview of the CMatrix AI Coding App"
                                width={300}
                                height={600}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '24px',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
                                    zIndex: 2,
                                }}
                            />
                        </motion.div>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
