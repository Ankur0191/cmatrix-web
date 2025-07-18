'use client'

import { Box, Typography, Stack, Link as MuiLink } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Diversity3Icon from '@mui/icons-material/Diversity3'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        mt: 16,
        pt: 6,
        pb: 4,
        background: 'linear-gradient(to right, #0d0d0d, #111111)',
        color: '#ccc',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            color: '#00D8FF',
            fontSize: '1.2rem',
          }}
        >
          CMatrix — Where Students Code the Future
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'gray.400', maxWidth: 500, px: 2 }}
        >
          This isn’t just an app. It’s a campus. A crew. A cause. <br />
          We’re building the future, one late night and bold idea at a time.
        </Typography>

        <Stack direction="row" spacing={3} alignItems="center">
          <MuiLink
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{
              color: '#888',
              '&:hover': { color: '#00D8FF' },
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <GitHubIcon fontSize="small" /> GitHub
          </MuiLink>
          <MuiLink
            href="/community"
            underline="none"
            sx={{
              color: '#888',
              '&:hover': { color: '#6E7FF3' },
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Diversity3Icon fontSize="small" /> Community
          </MuiLink>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: 'gray.500',
            mt: 2,
          }}
        >
          © {year} CMatrix. Made with{' '}
          <FavoriteIcon
            fontSize="small"
            sx={{ color: '#FF69B4', verticalAlign: 'middle' }}
          />{' '}
          by student dreamers.
        </Typography>
      </Stack>
    </Box>
  )
}
