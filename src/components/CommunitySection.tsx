'use client'

import { Container, Typography, Box, Avatar, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import CodeIcon from '@mui/icons-material/Code'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

const avatars = [
  { label: 'Coders', icon: <CodeIcon />, color: '#00D8FF' },
  { label: 'Thinkers', icon: <EmojiObjectsIcon />, color: '#6E7FF3' },
  { label: 'Dreamers', icon: <AutoStoriesIcon />, color: '#FF69B4' },
  { label: 'Collaborators', icon: <Diversity3Icon />, color: '#FFC107' },
]

export default function CommunitySection() {
  return (
    <Box
      component="section"
      sx={{
        mt: 16,
        py: 10,
        background: 'radial-gradient(circle at center, #0f0f0f 0%, #050505 100%)',
        color: '#fff',
      }}
    >
      <Container maxWidth="md">
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
              background: 'linear-gradient(90deg, #00D8FF, #6E7FF3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Join the Movement
          </Typography>

          <Typography
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto', mb: 6, color: 'gray' }}
          >
            Thousands of students are already reshaping how we learn — together. Whether
            you code, create, question, or build — CMatrix is where the next generation meets.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {avatars.map((item, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: item.color,
                      width: 64,
                      height: 64,
                      boxShadow: `0 0 15px ${item.color}55`,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="subtitle1">{item.label}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <Paper
            elevation={0}
            sx={{
              mt: 10,
              mx: 'auto',
              p: 4,
              maxWidth: 600,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(14px)',
              color: '#f0f0f0',
              textAlign: 'center',
              fontSize: '1.15rem',
              fontWeight: 500,
              boxShadow: '0 0 25px rgba(0,216,255,0.1)',
            }}
          >
            <em>
              "I joined for the tools. I stayed for the tribe."
              <br />
              <br />
              CMatrix isn’t an app. It’s your crew, your revolution, your digital
              campus.
            </em>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}
