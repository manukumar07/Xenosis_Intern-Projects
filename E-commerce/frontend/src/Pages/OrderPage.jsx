import { useLocation, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse the form data from the query string
  const queryParams = new URLSearchParams(location.search);
  const formData = queryParams.get("data")
    ? JSON.parse(decodeURIComponent(queryParams.get("data")))
    : null;

  const handleReturnHome = () => {
    navigate("/");
  };

  // Check if formData is null, undefined, or no order is placed
  if (!formData || formData.orders?.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#E2E8F0] flex items-center justify-center p-4">
        <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ECC94B] to-[#2B6CB0]"></div>
          <div className="p-10">
            <div className="text-center text-[#2D3748] mb-4 font-sans font-semibold">
              <p>You have not placed any orders. Please place an order.</p>
            </div>
            <button
              onClick={handleReturnHome}
              className="w-full py-3 bg-[#2B6CB0] hover:bg-[#1A4F7B] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#E2E8F0] flex items-center justify-center p-4">
      <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ECC94B] to-[#2B6CB0]"></div>

        <div className="p-10">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ECC94B] to-[#2B6CB0] text-center mb-2">
            Order Confirmation
          </h1>

          <div className="text-center text-[#2D3748] mb-4 font-sans font-semibold">
            <p>Thank you for your order! Here are your confirmation details:</p>
          </div>

          <div className="space-y-4">
            <div>
              <strong>Full Name:</strong> {formData.fullName}
            </div>
            <div>
              <strong>Email:</strong> {formData.email}
            </div>
            <div>
              <strong>Phone:</strong> {formData.phone}
            </div>
            <div>
              <strong>Address:</strong> {formData.address}
            </div>
            <div>
              <strong>City:</strong> {formData.city}
            </div>
            <div>
              <strong>Postal Code:</strong> {formData.postalCode}
            </div>
          </div>

          <div className="mt-6 text-center text-lg font-semibold">
            <p>
              Your order has been successfully placed. We will process it soon.
            </p>
            <p>Thank you for shopping with us!</p>
          </div>

          <button
            onClick={handleReturnHome}
            className="w-full py-3 bg-[#2B6CB0] hover:bg-[#1A4F7B] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
