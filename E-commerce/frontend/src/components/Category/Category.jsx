import React from "react";
import {
  UserIcon,
  ShoppingBagIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    id: 1,
    name: "Men",
    icon: <UserIcon className="h-8 w-8 text-[#1A202C]" />,
  },
  {
    id: 2,
    name: "Women",
    icon: <UserIcon className="h-8 w-8 text-[#1A202C]" />,
  },
  {
    id: 3,
    name: "Kids",
    icon: <ShoppingBagIcon className="h-8 w-8 text-[#1A202C]" />,
  },
  {
    id: 4,
    name: "Electronics",
    icon: <ComputerDesktopIcon className="h-8 w-8 text-[#1A202C]" />,
  },
  {
    id: 5,
    name: "Mobiles",
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-[#1A202C]" />,
  },
  {
    id: 6,
    name: "Beauty",
    icon: <PaintBrushIcon className="h-8 w-8 text-[#1A202C]" />,
  },
];

const CategorySection = ({ onCategorySelect }) => {
  return (
    <section className="py-16" style={{ backgroundColor: "#F7FAFC" }}>
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-semibold text-center mb-10"
          style={{ color: "#2D3748" }}
        >
          <span className="border-b-4 border-[#F9A825]">Explore</span>{" "}
          Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.name)}
              className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-[#EDF2F7] hover:shadow-lg hover:scale-105 p-6 rounded-lg"
            >
              <div className="mb-4 p-6 rounded-full border-4 border-[#2B6CB0] flex justify-center items-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2D3748] mt-2">
                {category.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
