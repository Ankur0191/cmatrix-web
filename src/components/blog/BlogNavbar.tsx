"use client";

import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogNavbar({ onToggleTheme }: { onToggleTheme: () => void }) {
  const router = useRouter();
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark(!dark);
    onToggleTheme(); // Tell parent to toggle theme
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left side */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={() => router.push("/blog")} color="inherit">
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="h6" fontWeight={600}>
            CMatrix Blog
          </Typography>
        </Box>

        {/* Right side */}
        <IconButton onClick={handleToggle} color="inherit">
          {dark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}
