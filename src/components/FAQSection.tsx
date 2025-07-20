'use client'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  // Paper,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: '📚 Is CMatrix free to use?',
    a: 'Absolutely. Students get all core features free — because access shouldn’t cost you peace.',
  },
  {
    q: '👨‍🎓 Can I join as a college dropout?',
    a: 'CMatrix is for rebels, not resumes. Dropouts, misfits, makers — welcome home.',
  },
  {
    q: '🤖 Does it have AI support?',
    a: 'Yes! CMatrix runs on smart AI to make learning feel magical — flashcards, notes, and more.',
  },
]

export default function FAQSection() {
  return (
    <Box
      component="section"
      sx={{
        mt: 16,
        pb: 12,
        background: 'linear-gradient(to bottom, #0f0f0f, #050505)',
        color: '#fff',
      }}
    >
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
            You Asked. We Get It.
          </Typography>

          <Typography
            textAlign="center"
            sx={{ color: 'gray', maxWidth: 600, mx: 'auto', mb: 6 }}
          >
            No jargon. No corporate answers. Just real talk from students like you.
          </Typography>
        </motion.div>

        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Accordion
              sx={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 2,
                mb: 2,
                boxShadow: '0 0 15px rgba(0,216,255,0.05)',
                color: '#f0f0f0',
                '&:hover': {
                  boxShadow: '0 0 24px rgba(0,216,255,0.1)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#00D8FF' }} />}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: '#fff' }}
                >
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'gray.300' }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </Box>
  )
}
