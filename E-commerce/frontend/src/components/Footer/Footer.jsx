import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D3748] text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-3xl font-semibold mb-4 text-[#F9A825]">
              ShopEase
            </h3>
            <p className="text-md text-white">
              Your one-stop shop for the best deals, trendy products, and
              unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-1xl font-semibold mb-2 text-center text-[#F9A825]">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-[#2B6CB0] text-sm">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-[#2B6CB0] text-sm">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-[#2B6CB0] text-sm">
                  About-us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-[#2B6CB0] text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-1xl font-semibold mb-4 text-center text-[#F9A825]">
              Customer Service
            </h3>
            <ul className="flex flex-col items-center">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-[#2B6CB0] text-sm">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-[#2B6CB0] text-sm">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-[#2B6CB0] text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-1xl font-semibold mb-4 text-center text-[#F9A825]">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-white hover:text-[#2B6CB0] text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-[#2B6CB0] text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-[#2B6CB0] text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-[#2B6CB0] text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2D3748] pt-6 text-center text-sm">
          <p className="text-white">&copy; 2024 ShopEase.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
