import { Heart, Eye } from "react-feather";
import { useNavigate } from "react-router-dom";

const VideoCard = ({
  id,
  videoSrc,
  title,
  description,
  likes,
  views,
  thumbnail,
  handleClick,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/videopage/${id}`, {
      state: { id, videoSrc, title, description, likes, views, thumbnail },
    });

    // Call handleClick function if passed
    handleClick({
      id,
      videoSrc,
      title,
      description,
      likes,
      views,
      thumbnail,
    });
  };

  return (
    <div className="w-full max-w-sm bg-[#2D3748] p-6 rounded-lg shadow-lg">
      <div onClick={handleCardClick}>
        <div className="relative">
          {/* Video Thumbnail */}
          <img
            className="w-full h-48 object-cover rounded-xl"
            src={thumbnail || "default-thumbnail.jpg"}
            alt={`Thumbnail for ${title}`}
          />
        </div>
      </div>
      <h2 className="text-lg text-[#38B2AC] mt-2 font-bold ">{title}</h2>
      <p className="text-[#E2E8F0] mt-2 text-md">{description}</p>
      <div className="flex justify-between items-center mt-4 text-[#E2E8F0]">
        <div className="flex items-center">
          <Heart className="w-4 h-4 text-red-500 mr-2" />
          <span>{likes} Likes</span>
        </div>
        <div className="flex items-center">
          <Eye className="w-4 h-4 text-blue-500 mr-2" />
          <span>{views} Views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
