import { client } from "@/sanity/lib/client";
import { getPostBySlugQuery } from "@/sanity/lib/sanity.queries";
import { notFound } from "next/navigation";
import BlogPageClient from "./BlogPageClient";

export const revalidate = 60;

export default async function Page({ params }: any) {
  const { slug } = await params;
  const post = await client.fetch(getPostBySlugQuery, { slug });

  if (!post) return notFound();

  // Reading time
  const extractText = (blocks: any[]) =>
    blocks
      .flatMap((block) =>
        block.children?.map((child: any) => child.text) || []
      )
      .join(" ");

  const readingTime = Math.ceil(extractText(post.body).split(" ").length / 200);

  return <BlogPageClient post={post} readingTime={readingTime} />;
}
