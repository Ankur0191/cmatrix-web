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
      transition={{ duration: 0.6 }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box display="flex" alignItems="center" gap={1}>
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