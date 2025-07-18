'use client'

import { Box, Typography, Button } from '@mui/material'

export default function NewsletterSection() {
  return (
    <Box mt={12} textAlign="center">
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        📩 Want to stay updated?
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        Subscribe to our newsletter or join our student community.
      </Typography>
      <Button variant="outlined" href="/contact">
        Contact / Join
      </Button>
    </Box>
  )
}
