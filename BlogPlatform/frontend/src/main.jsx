import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";
import { PostProvider } from "./context/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostProvider>
      <AuthProvider>
        <Toaster />
        <App />
      </AuthProvider>
    </PostProvider>
  </StrictMode>
);
