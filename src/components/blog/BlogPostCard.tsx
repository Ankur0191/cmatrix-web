// components/blog/BlogPostCard.tsx
"use client";

import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Link from "next/link";
import { Post } from "@/types/post";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

function calculateReadTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text?.split(/\s+/).length || 0;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

type Props = {
  post: Post;
};

export default function BlogPostCard({ post }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card sx={{ width: 300, height: '100%', borderRadius: 3, overflow: 'hidden' }}>
        {post.mainImage && (
          <CardMedia
            component="img"
            height="160"
            image={urlFor(post.mainImage).url()}
            alt={post.title}
            loading="lazy"
          />
        )}
        <CardContent>
          <Link href={`/blog/${post.slug.current}`} passHref>
            <Typography variant="h6" fontWeight={600} gutterBottom color="primary">
              {post.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {new Date(post.publishedAt).toLocaleDateString()} • {calculateReadTime(post.excerpt ?? "")}
          </Typography>
          {post.excerpt && (
            <Typography variant="body2" mt={1}>
              {post.excerpt.substring(0, 120)}...
            </Typography>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}