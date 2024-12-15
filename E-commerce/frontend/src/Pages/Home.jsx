import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection";
import ProductList from "../components/Product/ProductList";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductList />
      <InfoSection />
    </div>
  );
};

export default Home;
