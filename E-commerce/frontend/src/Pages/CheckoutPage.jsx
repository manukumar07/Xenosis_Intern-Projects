import { useState, useEffect } from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, calculateTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    if ((name === "fullName" || name === "city") && /[^a-zA-Z\s]/.test(value)) {
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "address",
      "city",
      "postalCode",
    ];
    const isValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isValid) {
      alert("Please fill in all required fields");
      return;
    }

    if (!isAuthenticated) {
      alert("You must be logged in to proceed to payment.");
      return;
    }

    const currentDate = new Date();
    console.log("Order completed on:", currentDate);

    navigate(`/order?data=${encodeURIComponent(JSON.stringify(formData))}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#E2E8F0] flex items-center justify-center p-4">
      <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl flex">
        {/* Order Summary on Left */}
        <div className="w-1/3 p-8">
          <h3 className="text-2xl font-semibold mb-6 text-[#1A202C]">
            Order Summary
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[#2D3748]">Subtotal</p>
              <p className="font-bold text-[#2D3748]">${calculateTotal()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#2D3748]">Shipping</p>
              <p className="font-bold text-[#2D3748]">Free</p>
            </div>
            <div className="flex justify-between mt-4 border-t pt-4">
              <p className="text-[#2D3748]">Total</p>
              <p className="font-bold text-[#2D3748]">${calculateTotal()}</p>
            </div>
          </div>
        </div>

        {/* Form Details on Right */}
        <div className="w-2/3 p-8">
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ECC94B] to-[#2B6CB0] text-center mb-2">
            Ready to Complete Your Order?{" "}
            <span className="text-[#2B6CB0]">Let's Make It Fast and Easy!</span>
          </h1>
          <p className="text-center text-[#2D3748] mb-4 font-semibold">
            Please fill in your details below to proceed with the checkout.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-[#2D3748] mb-2">
                  <User className="mr-2 w-4 h-4" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border-2 border-[#E2E8F0] focus:border-[#2B6CB0] focus:ring-2 focus:ring-[#E2E8F0] px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="flex items-center text-[#2D3748] mb-2">
                  <Mail className="mr-2 w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border-2 border-[#E2E8F0] focus:border-[#2B6CB0] focus:ring-2 focus:ring-[#E2E8F0] px-4 py-2 rounded-md"
                  required
                />
              </div>
            </div>

            {/* Other fields like phone, city, address, and postal code go here */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-[#2D3748] mb-2">
                  <Phone className="mr-2 w-4 h-4" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  className="w-full border-2 border-[#E2E8F0] focus:border-[#2B6CB0] focus:ring-2 focus:ring-[#E2E8F0] px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="flex items-center text-[#2D3748] mb-2">
                  <MapPin className="mr-2 w-4 h-4" />
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="New York"
                  className="w-full border-2 border-[#E2E8F0] focus:border-[#2B6CB0] focus:ring-2 focus:ring-[#E2E8F0] px-4 py-2 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-[#2D3748] mb-2">
                <MapPin className="mr-2 w-4 h-4" />
                Street Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="# 123 Main Street"
                className="w-full border-2 border-[#E2E8F0] focus:border-[#2B6CB0] focus:ring-2 focus:ring-[#E2E8F0] px-4 py-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-[#2D3748] mb-2">
                <MapPin className="mr-2 w-4 h-4" />
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="10001"
                className="w-full border-2 border-[#E2E8F0] focus:border-[#2B6CB0] focus:ring-2 focus:ring-[#E2E8F0] px-4 py-2 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#2B6CB0] hover:bg-[#1A4F7B] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
