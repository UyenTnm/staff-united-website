export default function Loading() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-32 space-y-6">
        <div className="h-10 bg-gray-200 animate-pulse rounded w-3/4" />
        <div className="h-6 bg-gray-200 animate-pulse rounded w-1/2" />
        <div className="h-[400px] bg-gray-200 animate-pulse rounded-xl" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6" />
          <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3" />
        </div>
      </section>
    </main>
  );
}
