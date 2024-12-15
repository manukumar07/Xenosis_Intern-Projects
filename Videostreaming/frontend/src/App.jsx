import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import UploadVideo from "./pages/UploadVideo";
import VideoDetailPage from "./pages/VideoDetailPage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import ViewHistory from "./pages/ViewHistory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/videopage/:id" element={<VideoDetailPage />} />
        <Route path="/view-history" element={<ViewHistory />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
