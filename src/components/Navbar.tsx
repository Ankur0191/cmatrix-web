'use client'

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 10,
          left: 10,
          right: 10,
          zIndex: 1300,
          display: 'flex',
          justifyContent: 'center',
          px: '30px', // leave 10px space on both sides
          py: 2.5,
        }}
      >
        <Paper
          elevation={6}
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
            variant="h5"
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1,
              color: 'primary.main',
            }}
          >
            CMatrix
          </Typography>

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button href="/blog" variant="outlined" color="inherit">
                Blogs
              </Button>
              <Button
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

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 220, p: 2 }}>
          <List>
            <ListItem button component="a" href="/blog">
              Blogs
            </ListItem>
            <ListItem button component="a" href="#">
              Download
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
