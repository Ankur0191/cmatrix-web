// sanity/lib/sanity.queries.ts

export const getPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage{
    asset->{
      url
    },
    alt
  }
}`;

export const getPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  publishedAt,
  mainImage{
    asset->{
      url
    },
    alt
  },
  author->{
    name,
    image{
      asset->{
        url
      }
    }
  }
}`;
