import type { PortableTextBlock } from '@portabletext/types'

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  author?: {
    name: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
}
