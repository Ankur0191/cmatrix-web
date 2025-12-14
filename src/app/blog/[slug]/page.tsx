// src/app/blog/[slug]/page.tsx

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { getPostBySlugQuery } from "@/sanity/lib/sanity.queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Post } from "@/types/post";

// ISR
export const revalidate = 60;
export const dynamicParams = true;

// ---------- PORTABLE TEXT COMPONENTS ----------
const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={value.asset.url}
        alt={value.alt || "Blog Image"}
        width={800}
        height={500}
        className="rounded-lg my-6 w-full h-auto"
      />
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),
  },
};

// ---------- SEO ----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(getPostBySlugQuery, { slug });

  if (!post)
    return {
      title: "Post Not Found • CMatrix",
    };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.mainImage?.asset?.url || "",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.mainImage?.asset?.url || ""],
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
  const post: Post | null = await client.fetch(getPostBySlugQuery, { slug });

  if (!post) return notFound();

  // Reading time
  const extractText = (blocks: any[] = []) =>
    blocks
      .flatMap(block =>
        block.children?.map((child: any) => child.text) || ""
      )
      .join(" ");
  const readingTime =
    Math.max(1, Math.ceil(extractText(post.body).split(" ").length / 200));

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt}
          width={1200}
          height={630}
          className="rounded-lg w-full h-auto mb-8"
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

      <article className="prose prose-lg max-w-none">
        <PortableText value={post.body} components={ptComponents} />
      </article>
    </main>
  );
}
