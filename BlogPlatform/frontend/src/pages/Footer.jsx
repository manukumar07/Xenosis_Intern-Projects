import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50]  py-6">
      <div className="container mx-auto text-center">
        <h1
          className="text-2xl font-bold mb-4 text-white"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Blogify
        </h1>

        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <Link
              to="/"
              className="text-lg text-[#F5F5F5] hover:text-[#1ABC9C]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg text-[#F5F5F5] hover:text-[#1ABC9C]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-lg text-[#F5F5F5] hover:text-[#1ABC9C]"
            >
              Posts
            </Link>
          </li>
        </ul>

        {/* Footer Bottom Text */}
        <p className="text-[#7F8C8D] text-md font-bold">
          Created By Manu Kumar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
