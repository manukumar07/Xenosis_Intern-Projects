import { Search, Bell } from "lucide-react";
import { useState } from "react";
import ApiFormDialog from "../Form/ApiForm";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="fixed top-0 left-64 right-0 z-50 h-16 bg-[#F4F7FA] border-b shadow-sm flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 w-full">
        <div className="relative flex-grow max-w-72">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#607D8B] font-bold" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="w-5 h-5 text-[#607D8B]" />
          <span className="absolute -top-2 -right-2 bg-[#4A90E2] text-white rounded-full px-1 text-xs">
            3
          </span>
        </button>
        <button
          onClick={handleOpenDialog}
          className="bg-[#1A2B3C] text-white px-6 py-2 rounded-lg hover:bg-[#263445] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50 font-semibold"
        >
          ApiKey
        </button>
        <ApiFormDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
      </div>
    </div>
  );
};

export default Navbar;
