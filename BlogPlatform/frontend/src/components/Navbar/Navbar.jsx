import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("Logout successfully!", {
      position: "top-center",
    });
    navigate("/login");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2C3E50] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          <span className="text-[#1ABC9C] ">Blogify</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes className="border-2 rounded" /> : <FaBars />}
        </button>

        {/* Menu */}
        <ul
          className={`${
            isMenuOpen ? "flex flex-col items-center space-y-4 py-4" : "hidden"
          } absolute top-16 left-0 w-full bg-[#2C3E50] md:static md:w-auto md:flex md:flex-row md:items-center md:space-y-0 md:space-x-4 md:py-0`}
        >
          <li className="w-full text-center md:w-auto">
            <Link
              to="/"
              className="block py-2 px-4 hover:text-[#1ABC9C] font-bold transition-all"
            >
              Home
            </Link>
          </li>
          <li className="w-full text-center md:w-auto">
            <Link
              to="/about"
              className="block py-2 px-4 hover:text-[#1ABC9C] font-bold transition-all"
            >
              About
            </Link>
          </li>
          {isAuthenticated && (
            <li className="w-full text-center md:w-auto">
              <Link
                to="/create"
                className="block py-2 px-4 hover:text-[#1ABC9C] font-bold transition-all"
              >
                Create Post
              </Link>
            </li>
          )}
          {isAuthenticated ? (
            <li className="w-full text-center md:w-auto">
              <button
                onClick={handleLogout}
                className="inline-block py-2 px-4 bg-[#F39C12] text-white font-semibold rounded-lg border-2 border-[#333333] hover:bg-[#D68910] transition-all"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="w-full text-center md:w-auto">
                <Link
                  to="/login"
                  className="inline-block py-2 px-4 bg-[#1ABC9C] text-white font-semibold rounded-lg border-2 border-[#333333] hover:bg-[#16A085] transition-all"
                >
                  Login
                </Link>
              </li>
              <li className="w-full text-center md:w-auto">
                <Link
                  to="/signup"
                  className="inline-block py-2 px-4 bg-[#F39C12] text-white font-semibold rounded-lg border-2 border-[#333333] hover:bg-[#D68910] transition-all"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
