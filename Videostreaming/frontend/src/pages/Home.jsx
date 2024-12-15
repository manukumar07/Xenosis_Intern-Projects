import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import VideoList from "../components/Video/VideoList";

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="h-screen w-64 fixed left-0 top-0">
        <Sidebar activeTab="home" />
      </div>
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Navbar */}
        <Navbar />
        <hr className="border-gray-600" />
        {/* Right Content */}
        <div className="flex-1 bg-[#1A202C] text-[#E2E8F0] p-3 font-roboto overflow-y-auto">
          <h1 className="text-3xl font-extrabold text-[#38B2AC]">👋 Welcome</h1>
          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
