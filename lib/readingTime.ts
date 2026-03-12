export function calculateReadingTime(html: string) {
  const text = html.replace(/<[^>]+>/g, ""); // remove HTML tags
  const words = text.trim().split(/\s+/).length;

  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}