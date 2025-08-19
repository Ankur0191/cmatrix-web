// blog/[slug]/page.tsx 
import { client } from "@/sanity/lib/client";
import { getPostBySlugQuery } from "@/sanity/lib/sanity.queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Post } from "@/types/post";
import type { Metadata } from "next";

// Static site generation config
export const dynamicParams = true;
export const revalidate = 60;

// SEO Metadata Generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post: Post | null = await client.fetch(getPostBySlugQuery, {
    slug: decodeURIComponent(params.slug),
  });

  if (!post) return { title: "Post not found - CMatrix" };

  const imageRef = post?.mainImage?.asset?._ref;
  const imageUrl = imageRef
    ? imageRef
        .replace("image-", "https://cdn.sanity.io/images/33eaztic/production/")
        .replace("-jpg", ".jpg")
        .replace("-png", ".png")
        .replace("-webp", ".webp")
    : "https://cmatrix.in/og-banner.jpg";

  return {
    title: post.title,
    description: post.excerpt || "Read this blog post on CMatrix.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      url: `https://cmatrix.in/blog/${params.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "",
      images: [imageUrl],
    },
  };
}

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const decodedSlug = decodeURIComponent(params.slug);
  const post: Post | null = await client.fetch(getPostBySlugQuery, {
    slug: decodedSlug,
  });

  if (!post) return notFound();

  const imageRef = post?.mainImage?.asset?._ref;
  const imageUrl = imageRef
    ? imageRef
        .replace("image-", "https://cdn.sanity.io/images/33eaztic/production/")
        .replace("-jpg", ".jpg")
        .replace("-png", ".png")
        .replace("-webp", ".webp")
    : null;

  // Estimate reading time
  const wordCount = post.body
    ? post.body
        .map((block: any) =>
          block.children?.map((child: any) => child.text).join(" ")
        )
        .join(" ").split(" ").length
    : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200)); // 200 wpm

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-lg mb-8"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-sm text-gray-500 mb-6 space-x-4">
        <span>
          🗓 {new Date(post.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span>✍️ {post.author?.name || "CMatrix"}</span>
        <span>⏱ {readingTime} min read</span>
      </div>

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body ?? []} />
      </div>
    </main>
  );
}
