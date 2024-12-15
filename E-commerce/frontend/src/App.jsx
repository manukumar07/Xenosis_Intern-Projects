import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Cart from "./components/Cart/Cart";
import Login from "./components/Auth/Login";
import Home from "./Pages/Home";
import Signup from "./components/Auth/Signup";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Product/ProductList";
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from "./Pages/CheckoutPage";
import OrderPage from "./Pages/OrderPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
