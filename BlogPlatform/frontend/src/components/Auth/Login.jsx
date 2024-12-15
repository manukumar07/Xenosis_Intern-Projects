import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      login();
      toast.success("Login successful!", { position: "top-center" });
      setTimeout(() => navigate("/"), 1000);
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4 font-body">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-heading font-bold text-[#2C3E50] mb-6 text-center">
          Welcome Back!
        </h2>
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[#333333] font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg text-[#333333] placeholder-[#7F8C8D] focus:ring-2 focus:ring-[#1ABC9C] outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#333333] font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-lg text-[#333333] placeholder-[#7F8C8D] focus:ring-2 focus:ring-[#1ABC9C] outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1ABC9C] text-white py-3 rounded-lg hover:bg-[#16a085] transition duration-300 font-bold text-lg"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-[#7F8C8D]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#1ABC9C] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
