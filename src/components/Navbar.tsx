'use client'

import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#community' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleCloseDrawer = () => {
    setDrawerOpen(false)
  }

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        bgcolor: 'rgba(18, 18, 18, 0.7)',
        color: '#fff',
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        CMatrix
      </Typography>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleCloseDrawer}
              sx={{ borderRadius: 2 }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemButton
            component={Link}
            href="#"
            onClick={handleCloseDrawer}
            sx={{
              borderRadius: 10,
              bgcolor: 'primary.main',
              color: '#fff',
              textAlign: 'center',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            <ListItemText primary="Download" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <header>
      <Box
        sx={{
          position: 'fixed',
          top: 10,
          left: 10,
          right: 10,
          zIndex: 1300,
          display: 'flex',
          justifyContent: 'center',
          px: '30px',
          py: 2.5,
        }}
      >
        <Paper
          elevation={6}
          component="nav"
          role="navigation"
          sx={{
            width: '100%',
            maxWidth: '100%',
            borderRadius: '20px',
            bgcolor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            py: 1,
          }}
        >
          <Typography
            component={Link}
            href="/"
            variant="h5"
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            CMatrix
          </Typography>

          {isMobile ? (
            <IconButton
              aria-label="Open navigation menu"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  variant="text"
                  color="inherit"
                  sx={{ color: '#fff', textTransform: 'none' }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={Link}
                href="#"
                variant="contained"
                color="primary"
                sx={{ borderRadius: '20px', px: 3 }}
              >
                Download
              </Button>
            </Box>
          )}
        </Paper>
      </Box>

      <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={handleCloseDrawer}
  PaperProps={{
    sx: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      color: '#fff',
      borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
      width: 240,
      mt: '65px', // aligns below navbar
      borderRadius: '20px 0 0 20px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },
  }}
>
  <Box sx={{ p: 2 }}>
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            component={Link}
            href={item.href}
            onClick={handleCloseDrawer}
            sx={{
              borderRadius: 2,
              px: 2,
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}

      <ListItem disablePadding sx={{ mt: 2 }}>
        <ListItemButton
          component={Link}
          href="#"
          onClick={handleCloseDrawer}
          sx={{
            borderRadius: 10,
            bgcolor: 'primary.main',
            color: '#fff',
            justifyContent: 'center',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <ListItemText primary="Download" />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
</Drawer>

    </header>
  )
}
