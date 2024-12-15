import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/home");
    } catch {
      setError("Failed to log in");
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#1A2B3C] to-[#263445] font-roboto text-white">
      {/* Welcome Message */}
      <h1 className="text-4xl font-extrabold text-[#4A90E2] mb-16 drop-shadow-md">
        Welcome to{" "}
        <span className="text-[#F4F7FA]">Social Media Dashboard!</span>
      </h1>

      {/* Login Card */}
      <div className="bg-[#F4F7FA] p-8 rounded-lg shadow-lg max-w-sm w-full text-[#2C3E50]">
        <h2 className="text-center text-3xl text-[#4A90E2] mb-4 font-bold">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Label and Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-md text-[#4A90E2] mb-2 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
          </div>

          {/* Password Label and Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-md text-[#4A90E2] mb-2 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#38B2AC] focus:outline-none focus:ring-2 focus:ring-[#F4F7FA] "
          >
            Login
          </button>
        </form>

        {/* Error message */}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {/* Sign Up Link */}
        <p className="text-center text-[#4A90E2] mt-4 ">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-[#38B2AC] hover:text-[#1A2B3C] transition "
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
