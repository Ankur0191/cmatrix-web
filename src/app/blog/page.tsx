// app/blog/page.tsx
import { client } from "@/sanity/lib/client";
import { getPostsQuery } from "@/sanity/lib/sanity.queries";
import { Post } from "@/types/post";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogGrid from "@/components/blog/BlogGrid";

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(getPostsQuery);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
      <BlogHeader />
      <BlogGrid posts={posts} />
    </main>
  );
}