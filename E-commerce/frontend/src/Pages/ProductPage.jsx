import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { products } from "../assets/products";
import { toast } from "react-hot-toast";
import { ShoppingCart, Heart } from "lucide-react";

const ProductPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [rating, setRating] = useState(4);
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlist, setIsWishlist] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Handle adding the product to the cart
  const addCart = (product) => {
    addToCart(product);
    toast.success("Item has been added to your cart!", {
      position: "top-center",
    });
  };

  //wishlist
  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);

    if (isWishlist) {
      toast.error("Removed from wishlist", {
        position: "top-center",
        duration: 3000,
      });
    } else {
      toast.success("Added to wishlist", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <section className="bg-[#F7FAFC] rounded-lg shadow-md p-6 m-10 max-w-6xl mx-auto font-sans">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          {/* Product Image */}
          <div className="relative group">
            <div className="transition-transform duration-500 hover:scale-105 border-2 border-gray-300 rounded-md overflow-hidden">
              <img
                src={product.image}
                className="w-full lg:w-full h-80 object-cover rounded-md mb-4 lg:mb-0 lg:mr-8"
                alt={product.name}
              />
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={toggleWishlist}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isWishlist
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Heart
                  className="w-6 h-6"
                  fill={isWishlist ? "white" : "none"}
                />
              </button>
            </div>
          </div>
          {/* Product Details */}
          <div className="flex flex-col justify-start ml-4 mt-4 lg:mt-0">
            <h2 className="text-2xl font-bold mb-2 text-[#2D3748]">
              {product.name}
            </h2>
            <p className="text-lg text-[#4A5568] mb-4">{product.description}</p>
            <p className="text-xl text-[#2B6CB0] mb-4 font-semibold">
              {product.price}
            </p>

            {/* Color Picker */}
            {product.colors && (
              <div className="flex items-center gap-4 mb-4">
                <p className="text-sm font-semibold text-[#1A202C]">Color:</p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? "border-[#2B6CB0] scale-110"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Dropdown */}
            {product.sizes && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#1A202C]">Size:</p>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-md w-full lg:w-32 transition-all duration-300 hover:border-[#2B6CB0]"
                >
                  <option value="" disabled>
                    Select a size
                  </option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* 5-Star Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  fill={index < rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-[#ECC94B] cursor-pointer transition-all duration-300"
                  viewBox="0 0 24 24"
                  onClick={() => setRating(index + 1)}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">{rating} / 5</span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center gap-4 mb-2 mt-2">
              {/* Add to Cart Button */}
              <button
                className="bg-[#2B6CB0] text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#16A085] transition-colors duration-300 transform hover:scale-105 font-semibold"
                onClick={() => addCart(product)}
              >
                <ShoppingCart className="w-6 h-6" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
