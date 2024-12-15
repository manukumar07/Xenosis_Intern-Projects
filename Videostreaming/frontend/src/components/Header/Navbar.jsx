import { Search as SearchIcon, LogOut as LogOutIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error logging out", err);
    }
  };

  return (
    <div className="bg-[#1A202C] text-white flex items-center justify-between p-4">
      <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full w-80">
        <SearchIcon size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white placeholder-gray-300 outline-none flex-grow"
        />
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
          title="Logout"
        >
          <LogOutIcon size={23} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
