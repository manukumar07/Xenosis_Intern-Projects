import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      navigate("/");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F7FAFC]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-80 lg:w-96">
        <h2 className="text-center text-2xl font-bold text-[#2D3748] mb-6">
          Welcome Back
        </h2>
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-[#2D3748] font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2B6CB0] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-[#2D3748] font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2B6CB0] focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-[#2c5282] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] transition duration-300 "
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-[#2D3748] text-md">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[#ECC94B] hover:text-[#D69E2E] transition duration-300 font-bold"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
