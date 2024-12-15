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
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#1A202C] to-[#2D3748] font-roboto text-white">
      {/* Welcome Message */}
      <h1 className="text-4xl font-extrabold text-[#38B2AC] mb-16 drop-shadow-md">
        Welcome to <span className="text-[#F687B3]">Streamify!</span>
      </h1>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-black">
        <h2 className="text-center text-3xl text-[#6B46C1] mb-4 font-bold">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Label and Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-md text-[#6B46C1] mb-2 font-semibold"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
            />
          </div>

          {/* Password Label and Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-md text-[#6B46C1] mb-2 font-semibold"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-2 bg-[#6B46C1] text-white rounded-md hover:bg-[#38B2AC] focus:outline-none focus:ring-2 focus:ring-[#F687B3]"
          >
            Login
          </button>
        </form>

        {/* Error message */}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {/* Sign Up Link */}
        <p className="text-center text-[#6B46C1] mt-4">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-[#38B2AC] hover:text-[#6B46C1] transition"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
