import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import VideoCard from "./VideoCard";

const VideoList = ({ setViewHistory }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from Firestore
    const fetchVideos = async () => {
      const db = getFirestore();
      const videoCollection = collection(db, "videos");
      const videoSnapshot = await getDocs(videoCollection);
      const videoList = videoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videoList);
    };

    fetchVideos();
  }, []);

  // Handle click on video card
  const handleVideoClick = (video) => {
    // Add video to the history and limit to 10
    setViewHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, video];
      if (updatedHistory.length > 10) {
        updatedHistory.shift;
      }
      localStorage.setItem("viewHistory", JSON.stringify(updatedHistory));
    });
  };

  return (
    <div className="bg-[#1A202C] text-[#E2E8F0] p-2 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white pt-4">
        Trending Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            videoSrc={video.videoUrl}
            title={video.title}
            description={video.description}
            likes={video.likes}
            views={video.views}
            thumbnail={video.thumbnail || "default-thumbnail.jpg"}
            handleClick={handleVideoClick}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
