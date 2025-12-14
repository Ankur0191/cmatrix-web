import type { PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  title: string;
  slug: string; // ✅ FIXED
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  publishedAt: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  author?: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
}
