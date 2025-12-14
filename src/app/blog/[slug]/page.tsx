// src/app/blog/[slug]/page.tsx

import { client } from "@/sanity/lib/client";
import { getPostBySlugQuery } from "@/sanity/lib/sanity.queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Post } from "@/types/post";
import type { Metadata } from "next";

// ISR config
export const dynamicParams = true;
export const revalidate = 60;

// ---------- SEO METADATA ----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const post: Post | null = await client.fetch(getPostBySlugQuery, {
    slug: decodedSlug,
  });

  if (!post) {
    return {
      title: "Post not found - CMatrix",
    };
  }

  const imageUrl =
    post.mainImage?.asset && "url" in post.mainImage.asset
      ? (post.mainImage.asset as { url: string }).url
      : "https://cmatrix.in/og-banner.jpg";

  return {
    title: post.title,
    description: post.excerpt || "Read this blog post on CMatrix.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      url: `https://cmatrix.in/blog/${decodedSlug}`,
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

// ---------- PAGE ----------
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const post: Post | null = await client.fetch(getPostBySlugQuery, {
    slug: decodedSlug,
  });

  if (!post) return notFound();

  const imageUrl =
    post.mainImage?.asset && "url" in post.mainImage.asset
      ? (post.mainImage.asset as { url: string }).url
      : null;

  // ---------- READING TIME ----------
  const extractText = (blocks: unknown[] = []): string =>
    blocks
      .flatMap((block) => {
        if (
          typeof block === "object" &&
          block !== null &&
          "children" in block &&
          Array.isArray((block as any).children)
        ) {
          return (block as any).children
            .filter(
              (child: unknown) =>
                typeof child === "object" &&
                child !== null &&
                "text" in child &&
                typeof (child as any).text === "string"
            )
            .map((child: any) => child.text as string);
        }
        return [];
      })
      .join(" ");

  const textContent = extractText(post.body || []);
  const wordCount = textContent.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // ---------- RENDER ----------
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-lg mb-8"
          priority
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-sm text-gray-500 mb-6 space-x-4">
        <span>
          🗓{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span>✍️ {post.author?.name || "CMatrix"}</span>
        <span>⏱ {readingTime} min read</span>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* <PortableText value={post.body ?? []} /> */}
      </div>
    </main>
  );
}
