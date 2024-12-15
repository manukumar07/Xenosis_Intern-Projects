import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        toast.success("Sign up successful! Please log in.");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to connect to the server.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F7FAFC]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-[#2D3748] mb-6">
          Signup Here!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-[#2D3748] font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2B6CB0] focus:outline-none"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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
              className="w-full p-2 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2B6CB0] focus:outline-none"
              placeholder="Enter your email address"
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
              className="w-full p-2 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2B6CB0] focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-[#2c5282] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] font-bold"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-[#2D3748] text-md">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#ECC94B] hover:text-[#D69E2E] transition duration-300 font-bold"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
