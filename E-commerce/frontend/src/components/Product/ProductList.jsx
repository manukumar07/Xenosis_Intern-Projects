import { useState, useCallback } from "react";
import ProductCard from "./ProductCard";
import CategorySection from "../Category/Category";
import { products } from "../../assets/products";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Men");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <div className="container mx-auto px-6 py-4 bg-[#F7FAFC]">
      {/* Render CategorySection once */}
      <CategorySection onCategorySelect={handleCategorySelect} />

      <h2
        className="text-3xl font-semibold text-center mb-10"
        style={{ color: "#2D3748", fontFamily: "Roboto, sans-serif" }}
      >
        <span className="border-b-4 border-[#F9A825]">Top</span> Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
