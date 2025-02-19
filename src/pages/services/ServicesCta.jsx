import images from "../../assets/images";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const ServicesCta = () => {
  return (
    <div
      className="w-full relative bg-cover bg-center py-20 px-6 md:px-16 lg:px-24 flex items-center justify-center"
      style={{ backgroundImage: `url(${images.servicesCta})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full max-w-6xl">
        {/* Left Side: Text */}
        <div className="text-white text-left">
          <p className="text-lg md:text-xl mb-2 text-blue-400 font-medium">
            Simple, Easy, Quick Steps
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Do you have a project in mind?
          </h2>
          <p className="text-gray-300">
            Let’s bring your vision to life. Get in touch today and let’s create
            something amazing together.
          </p>
        </div>

        {/* Right Side: Contact Details */}
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-900 p-5 rounded-lg shadow-lg">
            <div className="bg-blue-600 p-4 rounded-lg">
              <FaEnvelope size={24} className="text-white" />
            </div>
            <div>
              <p className="text-gray-300 font-semibold">Email Us Anytime:</p>
              <a
                href="mailto:axiontech@gmail.com"
                className="text-blue-400 hover:text-orange-500"
              >
                axiontech@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-gray-900 p-5 rounded-lg shadow-lg">
            <div className="bg-blue-600 p-4 rounded-lg">
              <FaPhoneVolume size={24} className="text-white" />
            </div>
            <div>
              <p className="text-gray-300 font-semibold">
                For Urgent Assistance:
              </p>
              <a
                href="tel:+254769403162"
                className="text-blue-400 hover:text-orange-500"
              >
                +254 769 403 162
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCta;
