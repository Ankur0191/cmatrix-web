"use client";

import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  Container,
  Box,
  Paper,
  Typography,
  Divider,
} from "@mui/material";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

import BlogNavbar from "@/components/blog/BlogNavbar";
import ShareButtons from "@/components/blog/ShareButtons";

export default function BlogPageClient({ post, readingTime }: any) {
  const [dark, setDark] = useState(true);

  const theme = createTheme({
    palette: { mode: dark ? "dark" : "light" },
    typography: { fontFamily: "Inter, sans-serif" },
  });

  return (
    <ThemeProvider theme={theme}>
      <BlogNavbar onToggleTheme={() => setDark(!dark)} />

      <Container maxWidth="md" sx={{ py: 6 }}>

        {/* Title */}
        <Typography variant="h3" fontWeight={800} gutterBottom>
          {post.title}
        </Typography>

        {/* Hero Image */}
        {post.mainImage?.asset?.url && (
          <Paper elevation={3} sx={{ borderRadius: 4, overflow: "hidden", mb: 4 }}>
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt}
              width={1200}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        )}

        {/* Meta */}
        <Typography variant="body2" color="text.secondary" mb={1}>
          {new Date(post.publishedAt).toLocaleDateString("en-IN")} • {readingTime} min read
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Body */}
        <Box sx={{ typography: "body1", lineHeight: 1.8 }}>
          <PortableText value={post.body} />
        </Box>

        <Divider sx={{ mt: 6, mb: 3 }} />

        <ShareButtons />
      </Container>
    </ThemeProvider>
  );
}
