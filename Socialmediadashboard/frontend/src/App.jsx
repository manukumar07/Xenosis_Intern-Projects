import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import PieChartComponent from "./Charts/PieChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pie-chart" element={<PieChartComponent />} />
        <Route path="/bar-chart" element={<BarChart />} />
        <Route path="/line-chart" element={<LineChart />} />
      </Routes>
    </Router>
  );
}

export default App;
