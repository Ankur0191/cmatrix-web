'use client'

import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme'
import CssBaseline from '@mui/material/CssBaseline'
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
