// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMatrix - Learn. Build. Rise.",
  description: "We are not the top rankers. We are the last bench builders.",
  keywords: ["CMatrix", "student community", "edtech", "AI mentor", "notes", "hackathons"],
  openGraph: {
    title: "CMatrix - Learn. Build. Rise.",
    description: "Empowering students through a peer-driven, AI-enhanced learning ecosystem.",
    url: "https://cmatrix.in",
    siteName: "CMatrix",
    images: [
      {
        url: "https://cmatrix.in/og-banner.png", // Replace with your actual banner image
        width: 1200,
        height: 630,
        alt: "CMatrix - The Last Bench Builders",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMatrix - Learn. Build. Rise.",
    description: "We are not the top rankers. We are the last bench builders.",
    images: ["https://cmatrix.in/og-banner.png"],
  },
};
