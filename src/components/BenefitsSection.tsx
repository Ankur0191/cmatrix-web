'use client'

import {
  Container,
  Typography,
  Box,
  Avatar,
  Stack,
} from '@mui/material'
import { motion } from 'framer-motion'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'

const benefits = [
  {
    title: 'Smarter Learning',
    description: 'AI that adapts to your learning style — flashcards, summaries, mind maps, all in seconds.',
    icon: <EmojiObjectsIcon fontSize="large" />,
    color: '#00D8FF',
  },
  {
    title: 'Built-in Community',
    description: 'You’re never alone. Find your crew, vibe in study rooms, win on leaderboards.',
    icon: <Diversity3Icon fontSize="large" />,
    color: '#6E7FF3',
  },
  {
    title: 'Mental Clarity',
    description: 'Break cycles of burnout. Find calm, connection, and purpose in how you learn.',
    icon: <PsychologyAltIcon fontSize="large" />,
    color: '#FF69B4',
  },
  {
    title: 'Real-World Outcomes',
    description: 'Internships, hackathons, real projects. No fluff — just future.',
    icon: <ElectricBoltIcon fontSize="large" />,
    color: '#FFC107',
  },
]

export default function BenefitsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 16 }, position: 'relative' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            gutterBottom
            sx={{
              background: 'linear-gradient(90deg, #00D8FF, #6E7FF3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Not Just Learning. A Movement.
          </Typography>

          <Typography
            textAlign="center"
            color="gray"
            maxWidth="600px"
            mx="auto"
            sx={{ mb: 8 }}
          >
            These aren&rsquo;t features. They&rsquo;re tools for transformation — mental, academic, and emotional.
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 'calc(50% - 2px)',
              width: '4px',
              background: 'linear-gradient(to bottom, #00D8FF, #6E7FF3)',
              zIndex: 0,
              borderRadius: '2px',
            },
          }}
        >
          <Stack spacing={6}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: 360,
                      p: 3,
                      borderRadius: 3,
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid rgba(255,255,255,0.08)`,
                      boxShadow: `0 0 18px ${benefit.color}30`,
                      textAlign: 'left',
                      position: 'relative',
                      color: '#fff',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: benefit.color,
                        width: 48,
                        height: 48,
                        mb: 1,
                      }}
                    >
                      {benefit.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={700}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'gray.300' }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
