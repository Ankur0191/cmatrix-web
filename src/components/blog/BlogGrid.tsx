// components/blog/BlogGrid.tsx
"use client";

import { Box } from "@mui/material";
import { Post } from "@/types/post";
import BlogPostCard from "./BlogPostCard";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
};

export default function BlogGrid({ posts }: Props) {
  return (
    <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
      {posts.map((post, index) => (
        <motion.div
          key={post._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <BlogPostCard post={post} />
        </motion.div>
      ))}
    </Box>
  );
}
