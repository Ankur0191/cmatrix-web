export const getPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage{
    asset->{
      _id,
      url
    }
  },
  publishedAt,
  excerpt
}`;

export const getPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  body,
  "mainImage": mainImage{
    asset->{
      _id,
      url
    }
  },
  publishedAt,
  excerpt,
  author->{
    name,
    image{
      asset->{
        url
      }
    }
  }
}`;
