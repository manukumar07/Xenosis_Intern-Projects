const NotFound = () => {
  return (
    <div className="h-screen bg-[#1A202C] flex flex-col items-center justify-center text-center text-[#E2E8F0] font-roboto">
      <h1 className="text-6xl font-bold text-[#6B46C1]">404</h1>
      <p className="text-2xl mt-4 text-[#38B2AC]">Oops! Page Not Found</p>
      <p className="mt-4 text-lg text-[#F687B3]">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/home"
        className="mt-6 px-4 py-2 bg-[#6B46C1] text-white rounded-lg hover:bg-[#38B2AC] transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
