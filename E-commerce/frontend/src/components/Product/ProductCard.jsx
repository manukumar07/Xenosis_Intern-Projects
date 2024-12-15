import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Item has been added to your cart!", {
      position: "top-center",
    });
  };

  return (
    <div className="bg-[#F7FAFC] rounded-lg shadow-md p-2 flex flex-col items-start w-96 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out font-sans">
      <div className="no-underline">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[230px]  object-cover mb-1"
        />
        <div className="flex flex-col items-start w-full">
          <h4 className="text-md font-semibold mb-1 text-[#2D3748]">
            {product.name}
          </h4>
          <p className="text-md mb-1 text-[#2D3748]">{product.description}</p>
          <p className="text-md text-[#2B6CB0] font-semibold">
            ${product.price}
          </p>
        </div>
      </div>

      {/* Buttons Row */}
      <div className="flex justify-between w-full mt-3">
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-[#ECC94B] text-[#1A202C] py-2 px-4 rounded-lg hover:bg-[#2B6CB0] hover:text-white transition-colors font-bold"
        >
          Add to Cart
        </button>
        <button
          className="bg-[#2B6CB0] text-white py-2 px-4 rounded-lg hover:bg-[#2B6CB0] transition-colors font-bold"
          onClick={() => navigate(`/productpage/${product.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
