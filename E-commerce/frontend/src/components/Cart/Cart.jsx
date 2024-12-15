import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/carticon.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, calculateTotal, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate("/checkoutpage");
  };

  return (
    <div className="container mx-auto px-6 py-4 bg-[#F7FAFC]">
      <h2 className="text-3xl font-semibold mb-4 text-center text-[#1A202C]">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <img src={logo} alt="Empty Cart" className="mx-auto w-70 h-70" />
          <p className="text-1xl mt-2 text-[#2D3748]">
            Your cart is empty. Please adding items!
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-2/3 lg:w-2/3 mb-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="relative flex items-center mb-2 border-b pb-4 bg-white shadow-md rounded-lg mr-8 pl-6 pt-2"
              >
                {/* Remove button on top-right */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-4 right-4 text-red-600 hover:text-red-800"
                  title="Remove item"
                >
                  <FaTrash size={20} />
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-6"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#1A202C]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#2D3748] mb-2">
                    {item.description}
                  </p>
                  <p className="text-lg font-bold text-[#2D3748]">
                    ${item.price}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, "decrement")}
                      disabled={item.quantity <= 1}
                      className="text-lg text-[#2D3748] hover:text-[#1A202C]"
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increment")}
                      className="text-lg text-[#2D3748] hover:text-[#1A202C]"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Order summary */}
          <div className="w-full md:w-1/3 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg max-h-[300px] max-w-[800px] overflow-auto">
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
            <button
              onClick={handleProceedClick}
              className="w-full mt-6 py-3 bg-[#2B6CB0] text-white font-semibold rounded-lg hover:bg-[#2B6CB0] "
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
