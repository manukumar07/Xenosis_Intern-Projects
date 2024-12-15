import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      setError(error.message);
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#1A2B3C] to-[#263445] font-roboto text-white">
      <div className="bg-[#F4F7FA] p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-center text-3xl text-[#4A90E2] mb-4 font-bold">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
          {/* Username Label and Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-md text-[#4A90E2] mb-2 font-semibold"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
          </div>

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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full p-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#38B2AC] focus:outline-none focus:ring-2 focus:ring-[#607D8B]"
          >
            Sign Up
          </button>
        </form>

        {/* Error message */}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        <p className="text-center text-[#4A90E2] mt-4">
          Already have an account?{" "}
          <a
            href="/"
            className="text-[#38B2AC] hover:text-[#1A2B3C] transition"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
