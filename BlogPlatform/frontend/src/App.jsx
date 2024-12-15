import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import PostForm from "./pages/PostForm";
import PostDetail from "./pages/PostDetail";
import EditPostForm from "./pages/EditPostForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/edit/:id" element={<EditPostForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
