import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Sign up successful! Please log in.", {
          position: "top-center",
        });
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4 font-body"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2
          className="text-2xl font-semibold text-[#2C3E50] mb-6 text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Sign Up
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full p-3 border rounded-lg text-[#333333] placeholder-[#7F8C8D] focus:ring-2 focus:ring-[#1ABC9C] outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
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
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border rounded-lg text-[#333333] placeholder-[#7F8C8D] focus:ring-2 focus:ring-[#1ABC9C] outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#F39C12] text-white font-bold text-lg py-2 rounded-lg hover:bg-[#E67E22] transition duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-[#7F8C8D]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#1ABC9C] hover:text-[#3498DB] underline"
          >
            Login
          </Link>
        </p>
        <Toaster />
      </div>
    </div>
  );
};

export default SignUp;
