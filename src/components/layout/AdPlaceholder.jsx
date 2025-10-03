export default function AdPlaceholder({ position, className = "" }) {
  return (
    <div className={`bg-gray-100 text-center p-4 ${className}`}>
      <div className="text-gray-400 text-sm">
        Advertisement {position && `(${position})`}
      </div>
    </div>
  );
}
