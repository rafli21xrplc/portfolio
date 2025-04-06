export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-1 w-full bg-gray-200 overflow-hidden">
        <div className="animate-progress h-full bg-blue-600"></div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading</div>
      </div>
    </div>
  );
}
