import { useState, useEffect } from "react";
import {
  Home,
  PieChart,
  BarChart,
  LineChart,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../../firebase";
import { toast } from "react-hot-toast";

const Sidebar = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: "User", email: "" });
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserInfo({
        username: user.displayName || "User",
        email: user.email || "",
      });
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error logging out", err);
    }
  };

  const menuItems = [
    {
      icon: <Home className="w-5 h-5" />,
      name: "Dashboard",
      tab: "dashboard",
    },
  ];

  const chartItems = [
    {
      icon: <PieChart className="w-5 h-5" />,
      name: "Pie Chart",
      tab: "pie-chart",
      path: "/pie-chart",
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      name: "Bar Chart",
      tab: "bar-chart",
      path: "/bar-chart",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      name: "Line Chart",
      tab: "line-chart",
      path: "/line-chart",
    },
  ];

  return (
    <div className="w-[240px] h-screen bg-[#263445] text-white fixed top-0 left-0 z-10 flex flex-col items-center shadow-lg py-6">
      {/* User Profile Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="bg-[#1A2B3C] rounded-full p-4 flex justify-center items-center">
          <User color="white" size={40} />
        </div>
        <div className="text-lg mt-2">{userInfo.username}</div>
        <div className="text-sm text-gray-400">{userInfo.email}</div>
      </div>

      {/* Navigation Section */}
      <div className="w-full flex flex-col">
        {/* Dashboard Item */}
        {menuItems.map((item) => (
          <div
            key={item.tab}
            onClick={() => {
              setActiveTab(item.tab);
              navigate(item.path);
            }}
            className={`px-6 py-3 flex items-center gap-4 cursor-pointer transition-all duration-200 
              ${
                activeTab === item.tab
                  ? "bg-[#4A90E2] border-b-4 border-[#4A90E2]"
                  : "hover:bg-[#4A90E2] hover:w-48"
              }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}

        {/* Charts Section */}
        <div className="mt-6">
          <div className="text-lg px-6 py-3 text-gray-400">Charts</div>
          {chartItems.map((item) => (
            <div
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                navigate(item.path);
              }}
              className={`px-6 py-3 flex items-center gap-4 cursor-pointer transition-all duration-200 
                ${
                  activeTab === item.tab
                    ? "bg-[#4A90E2]"
                    : "hover:bg-[#4A90E2] w-48"
                }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Settings and Logout */}
        <div className="mt-auto w-full flex flex-col">
          <div className="border-t border-gray-600 mx-6 my-4"></div>
          <div className="px-6 py-3 flex items-center gap-4 hover:bg-[#4A90E2] w-48 cursor-pointer">
            <Settings color="white" size={20} />
            <span>Settings</span>
          </div>
          <div
            className="px-6 py-3 flex items-center gap-4 hover:bg-[#4A90E2] w-48 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut color="white" size={20} />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
