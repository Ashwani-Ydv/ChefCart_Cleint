import "../../app.css";

const Shimmer = () => {
  return (
    <div className="animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-full w-full">
      <div className="flex items-center space-x-6">
        <div className="bg-gray-300 rounded-full w-32 h-32"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
