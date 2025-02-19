import images from "../assets/images";

const BannerCta = () => {
  return (
    <div
      className="mt-20 relative bg-cover bg-center py-20 px-6 flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url(${images.ctabg})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-orange-600 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <p className="text-lg md:text-xl mb-4">Let’s work together</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a successful project?</h2>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-100 transition duration-300">
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default BannerCta;
