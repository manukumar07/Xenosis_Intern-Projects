import logo from "../../assets/heroicon.png";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center bg-[#F7FAFC] py-10">
      <div className="flex flex-col md:flex-row items-center container mx-auto px-6">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-extrabold text-[#2D3748] mb-4">
            Welcome to <span className="border-b-4 border-[#F9A825]">Shop</span>{" "}
            Ease
          </h1>
          <p className="text-2xl text-[#2D3748] mb-6">
            Discover the latest trends in fashion, electronics, and more, all in
            one place.
          </p>
          <button className="bg-[#F9A825] text-white py-3 px-4 rounded-lg hover:bg-[#F57F17] transition-all duration-300 font-bold">
            Shop Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center">
          <img src={logo} alt="ShopEase" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
