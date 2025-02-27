import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import Form from "./Form";

const Cta = () => {
  return (
    <div className="padded my-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-white lg:p-16 p-6 md:p-6  rounded-lg shadow-md">
        {/* Left Section - Contact Details */}
        <div className="flex flex-col justify-center">
          <p className="text-blue-600 font-semibold uppercase">Get in Touch</p>
          <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-700 leading-snug">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-600 mb-6">
            At AxionTech, we create digital solutions that drive impact. Whether
            you have a project idea or need guidance, we're here to help. Reach
            out, and let's discuss how we can turn your vision into reality.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-6">
              <div className="bg-blue-600 p-4 rounded-lg">
                <FaEnvelope size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Email Us Anytime:</p>
                <a
                  href="mailto:axiontech@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  axiontech@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6">
              <div className="bg-blue-600 p-4 rounded-lg">
                <FaPhoneVolume size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  For Urgent Assistance:
                </p>
                <a
                  href="tel:+254769403162"
                  className="text-blue-600 hover:underline"
                >
                  +254 769 403 162
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Cta;
