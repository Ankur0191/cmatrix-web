import { client } from "@/sanity/lib/client";
import { getPostBySlugQuery } from "@/sanity/lib/sanity.queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Post } from "@/types/post";

export const dynamicParams = true;
export const revalidate = 60;

// Define PageProps with params as a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  // Resolve the params Promise to get the slug
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post: Post | null = await client.fetch(getPostBySlugQuery, {
    slug: decodedSlug,
  });

  if (!post) return notFound();

  let imageUrl: string | null = null;
  const imageRef = post?.mainImage?.asset?._ref;

  if (imageRef) {
    imageUrl = imageRef
      .replace("image-", "https://cdn.sanity.io/images/33eaztic/production/")
      .replace("-jpg", ".jpg")
      .replace("-png", ".png")
      .replace("-webp", ".webp");
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        Published on {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="rounded mb-6"
        />
      )}

      {post.body && <PortableText value={post.body} />}
    </main>
  );
}