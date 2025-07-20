export const getPostsQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt
} | order(publishedAt desc)`;

export const getPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  author->{name, image}
}`;
