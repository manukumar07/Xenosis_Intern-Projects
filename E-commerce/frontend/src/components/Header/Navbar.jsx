import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    toast.success("Logged out successfully!", {
      position: "top-center",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Access cart item count
  const { getCartItemCount } = useCart();

  return (
    <>
      <header>
        <p className="flex h-10 items-center justify-center bg-[#2B6CB0] text-sm font-medium text-[#F7FAFC]">
          Get free delivery on orders over ₹500
        </p>
        <nav className="bg-[#2D3748] text-[#F7FAFC] sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Link
              to="/"
              className="text-3xl font-bold text-[#F7FAFC] hover:text-[#F9A825] transition-all"
            >
              ShopEase
            </Link>

            {/* Hamburger Icon */}
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="border-2 rounded" />
              ) : (
                <FaBars />
              )}
            </button>

            {/* Links */}
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-12 left-0 w-full lg:w-auto bg-[#2D3748] lg:bg-transparent text-center sm:text-left sm:flex-row`}
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 px-2 hover:text-[#F9A825] text-[#F7FAFC] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 px-2 hover:text-[#F9A825] text-[#F7FAFC] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="block py-2 px-2 hover:text-[#F9A825] text-[#F7FAFC] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="py-2 px-2 hover:text-[#F9A825] text-[#F7FAFC] flex items-center justify-center sm:justify-start"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaShoppingCart className="mr-2" />
                  Cart ({getCartItemCount()})
                </Link>
              </li>
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
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-5 bg-[#F9A825] text-white text-sm font-semibold rounded-md hover:bg-[#F57F17] transition-all w-full sm:w-auto text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
