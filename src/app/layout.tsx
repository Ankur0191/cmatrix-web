'use client'

import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme'
import CssBaseline from '@mui/material/CssBaseline'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
