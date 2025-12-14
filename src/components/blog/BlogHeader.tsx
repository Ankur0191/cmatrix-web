// components/blog/BlogHeader.tsx
"use client";

import { Box, Typography, Button } from "@mui/material";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="flex justify-between items-center mb-6">
        <Box className="flex items-center gap-2">
          <Newspaper size={28} />
          <Typography variant="h4" fontWeight={700}>
            CMatrix Blog
          </Typography>
        </Box>

        <Link href="/">
          <Button variant="contained" color="primary">
            Go to Home
          </Button>
        </Link>
      </Box>
    </motion.div>
  );
}
