export async function getPosts(page = 1, category?: number) {
  const url = category
    ? `https://orange-squid-688299.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=6&page=${page}&categories=${category}`
    : `https://orange-squid-688299.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=6&page=${page}`;

  const res = await fetch(url, { next: { revalidate: 60 } });

  const totalPages = res.headers.get("X-WP-TotalPages");

  const posts = await res.json();

  return {
    posts,
    totalPages: Number(totalPages),
  };
}

export async function getCategories() {
  const res = await fetch(
    "https://orange-squid-688299.hostingersite.com/wp-json/wp/v2/categories",
    { next: { revalidate: 60 } },
  );

  return res.json();
}
