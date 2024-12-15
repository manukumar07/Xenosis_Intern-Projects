import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Header/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";

const Home = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Main Content Area */}
      <div className="ml-64 w-full">
        <Navbar />
        <div className="mt-16 p-6">
          {activeTab === "dashboard" && <Dashboard />}
        </div>
      </div>
    </div>
  );
};

export default Home;
