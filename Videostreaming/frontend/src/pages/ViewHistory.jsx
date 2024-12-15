import VideoCard from "../components/Video/VideoCard";

const ViewHistory = ({ viewHistory = [], setViewHistory }) => {
  const clearHistory = () => {
    setViewHistory([]);
    localStorage.removeItem("viewHistory");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white pt-8">View History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {viewHistory.length === 0 ? (
          <p className="text-white">No videos in history</p>
        ) : (
          viewHistory.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              description={video.description}
              likes={video.likes}
              views={video.views}
              thumbnail={video.thumbnail}
            />
          ))
        )}
      </div>

      {/* Button to clear the view history */}
      {viewHistory.length > 0 && (
        <button
          onClick={clearHistory}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Clear History
        </button>
      )}
    </div>
  );
};

export default ViewHistory;
