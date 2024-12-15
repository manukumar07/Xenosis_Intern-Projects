const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5] text-[#34495E] font-sans">
      <div
        className="max-w-4xl w-full p-8 bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl rounded-lg"
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-[#2C3E50]">
          About Us
        </h1>

        {/* Introduction */}
        <p className="text-lg text-center mb-4 text-[#1ABC9C]">
          Welcome to Blogify! Our mission is to provide a platform for
          passionate writers and readers to share knowledge, ideas, and stories.
        </p>

        {/* Points Section */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start">
            <p className="text-lg text-[#333333]">
              ✍️ <strong>Empowering Writers:</strong> Share your ideas and
              stories with a global audience.
            </p>
          </div>
          <div className="flex items-start">
            <p className="text-lg text-[#333333]">
              🌍 <strong>Building a Community:</strong> Connect with like-minded
              individuals who share your passion for writing.
            </p>
          </div>
          <div className="flex items-start">
            <p className="text-lg text-[#333333]">
              🚀 <strong>Inspiring Growth:</strong> Access tools and resources
              to enhance your writing skills.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 rounded-lg text-white bg-[#F39C12] transition-colors duration-300 hover:bg-[#1ABC9C]"
            onClick={() =>
              alert("Learn more about contributing to our platform!")
            }
          >
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
