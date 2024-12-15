import {
  Home as HomeIcon,
  User as UserIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  MessageCircle as FeedbackIcon,
  Compass as CompassIcon,
  Music as MusicIcon,
  TrendingUp as TrendingUpIcon,
  Upload,
  History,
  Trophy,
  Clapperboard,
} from "lucide-react";
import { SiYoutubegaming } from "react-icons/si";
import { useNavigate } from "react-router-dom";

// NavIcon Component
const NavIcon = ({ icon: Icon, name, active, onClick }) => {
  return (
    <div
      className={`flex items-center cursor-pointer space-x-2 py-2 px-2 rounded-lg ${
        active
          ? "text-accent bg-gray-700"
          : "text-gray-400 hover:text-white hover:bg-[#6B46C1]"
      }`}
      onClick={onClick}
    >
      <Icon size={20} />
      <span className="text-md">{name}</span>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ activeTab }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle tab click and navigate to the upload route
  const handleTabClick = (tab) => {
    if (tab === "upload") {
      navigate("/upload"); // Navigating to the upload route
    }
    if (tab === "viewhistory") {
      navigate("/view-history"); // Navigating to the upload route
    }
  };
  return (
    <div className="w-60 h-screen bg-[#1A202C] text-white font-roboto flex flex-col p-4">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-extrabold text-[#38B2AC] drop-shadow-md">
          <span className="text-[#F687B3]">Streamify! 🎬</span>
        </h1>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-1">
        <NavIcon icon={HomeIcon} name="Home" active={activeTab === "home"} />
        <NavIcon
          icon={History} // Use the Lucide History icon here
          name="History"
          active={activeTab === "history"}
          onClick={() => handleTabClick("viewhistory")}
        />

        <NavIcon
          icon={CompassIcon}
          name="Explore"
          active={activeTab === "explore"}
        />

        {/* Categories under Explore */}
        <div className="flex flex-col space-y-1 pl-6 mt-4">
          <NavIcon
            icon={TrendingUpIcon}
            name="Trending"
            active={activeTab === "trending"}
          />
          <NavIcon
            icon={MusicIcon}
            name="Music"
            active={activeTab === "music"}
          />
          <NavIcon
            icon={SiYoutubegaming}
            name="Gaming"
            active={activeTab === "gaming"}
          />
          <NavIcon
            icon={Trophy}
            name="Sports"
            active={activeTab === "sports"}
          />
          <NavIcon
            icon={Clapperboard} // Adding the Movie category
            name="Movies"
            active={activeTab === "movies"}
          />
        </div>

        {/* Horizontal line after Movies */}
        <hr className="border-gray-700 my-1" />

        {/* Library Section */}
        <NavIcon
          icon={Upload}
          name="Upload"
          active={activeTab === "upload"}
          onClick={() => handleTabClick("upload")}
        />
        <NavIcon
          icon={UserIcon}
          name="Library"
          active={activeTab === "library"}
        />
      </div>

      {/* Horizontal line after Library */}
      <hr className="border-gray-600 my-1" />

      {/* Footer Section */}
      <div className="mt-auto text-sm text-gray-800 space-y-0">
        <div className="space-y-0">
          <NavIcon icon={SettingsIcon} name="Settings" />
          <NavIcon icon={InfoIcon} name="Help" />
          <NavIcon
            icon={FeedbackIcon}
            name="Send Feedback"
            active={activeTab === "feedback"}
          />
        </div>
      </div>

      <div className="space-y-1 mt-2">
        <p className="text-md pl-8">&copy; 2024 Streamify</p>
        <p className="text-xs pl-12">Created by Manu.</p>
      </div>
    </div>
  );
};

export default Sidebar;
