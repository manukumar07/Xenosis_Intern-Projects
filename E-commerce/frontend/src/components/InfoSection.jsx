import { FaShippingFast, FaHeadset, FaLock } from "react-icons/fa";

const InfoSection = () => {
  return (
    <div className="container mx-auto px-6 py-8 bg-[#F7FAFC]">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#1A202C]">
        <span className="border-b-4 border-[#F9A825]">Why</span> Shop With Us?
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center max-w-[350px] bg-[#F7FAFC] p-6 rounded-lg shadow-md group hover:bg-[#2B6CB0] hover:text-white transition-all">
          <FaShippingFast className="text-4xl text-[#2B6CB0] mb-4 group-hover:text-white transition-all" />
          <h3 className="text-xl font-semibold text-[#1A202C]">
            Free Shipping
          </h3>
          <p className="text-md text-gray-600 pt-2">
            Enjoy free shipping on all orders, no minimum required.
          </p>
        </div>

        {/* Support 24/7 */}
        <div className="flex flex-col items-center text-center max-w-[350px] bg-[#F7FAFC] p-6 rounded-lg shadow-md group hover:bg-[#ECC94B] hover:text-white transition-all">
          <FaHeadset className="text-4xl text-[#ECC94B] mb-4 group-hover:text-white transition-all" />
          <h3 className="text-xl font-semibold text-[#1A202C]">Support 24/7</h3>
          <p className="text-md text-gray-600 pt-2">
            We are here for you anytime, any day, 24/7 customer support.
          </p>
        </div>

        {/* Payment Secure */}
        <div className="flex flex-col items-center text-center max-w-[350px] bg-[#F7FAFC] p-6 rounded-lg shadow-md group hover:bg-[#F56565] hover:text-white transition-all">
          <FaLock className="text-4xl text-[#F56565] mb-4 group-hover:text-white transition-all" />
          <h3 className="text-xl font-semibold text-[#1A202C]">
            Payment Secure
          </h3>
          <p className="text-md text-gray-600 pt-2">
            Your payments are safe with us, using top-notch security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
