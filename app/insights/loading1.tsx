export default function Loading() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-32 space-y-10">
        {/* header */}
        <div className="text-center space-y-4">
          <div className="h-10 w-40 mx-auto bg-gray-200 animate-pulse rounded" />
          <div className="h-5 w-64 mx-auto bg-gray-200 animate-pulse rounded" />
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-[220px] bg-gray-200 animate-pulse rounded-xl" />
              <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4" />
              <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
