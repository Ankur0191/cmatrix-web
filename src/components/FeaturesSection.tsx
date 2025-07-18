'use client'

import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import SchoolIcon from '@mui/icons-material/School'
import NotesIcon from '@mui/icons-material/Notes'
import GroupIcon from '@mui/icons-material/Group'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

const features = [
  {
    title: 'AI Notes Enhancer',
    description:
      'Summarize lectures or PDFs into crisp flashcards, mind maps, and bullet points — instantly.',
    icon: <NotesIcon fontSize="large" sx={{ color: '#00FFC6' }} />,
  },
  {
    title: 'Live + Recorded Lectures',
    description:
      'Study like a pro. Attend elite lectures with real-time doubt-solving.',
    icon: <SchoolIcon fontSize="large" sx={{ color: '#33B7FF' }} />,
  },
  {
    title: 'Community + Leaderboard',
    description:
      'Build your tribe. Compete, grow, and vibe with peers nationwide.',
    icon: <GroupIcon fontSize="large" sx={{ color: '#FF69B4' }} />,
  },
  {
    title: 'Internships + Hackathons',
    description:
      'From resume to reality — launch your career with verified real-world projects.',
    icon: <EmojiEventsIcon fontSize="large" sx={{ color: '#FFBD33' }} />,
  },
]

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
}

export default function FeaturesSection() {
  const theme = useTheme()

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'radial-gradient(circle at top, #111 0%, #0a0a0a 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
              background: 'linear-gradient(90deg, #00FFC6, #33B7FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            🚀 Why Students Love CMatrix
          </Typography>

          <Typography
            textAlign="center"
            maxWidth="600px"
            mx="auto"
            color="gray"
            fontSize="1rem"
            sx={{ mb: 6 }}
          >
            More than tools — a rebellion. These are the features making
            CMatrix the heart of student-powered learning.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    ...glassStyle,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 0 24px ${theme.palette.primary.main}`,
                      transform: 'translateY(-6px)',
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box mr={2}>{feature.icon}</Box>
                    <Typography variant="h6" fontWeight={600}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="gray">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
