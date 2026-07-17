interface SelectionProgressProps {
  selectedCount: number;
  total: number;
}

export default function SelectionProgress({
  selectedCount,
  total,
}: SelectionProgressProps) {
  const progress = (selectedCount / total) * 100;

  return (
    <div className="mt-8">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-secondary">
          Selected Services
        </span>

        <span className="text-sm font-semibold text-primary">
          {selectedCount} / {total}
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
