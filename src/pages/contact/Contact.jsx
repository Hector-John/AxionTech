import { useEffect } from "react";
import images from "../../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";
import Cta from "../../components/Cta";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="">
      <div className="relative w-full lg:h-[45vh] h-[40vh] flex flex-col text-center lg:text-start justify-center items-center text-gray-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.bgimage})` }}
        ></div>
        <div className="relative flex flex-col mt-8 md:flex-row justify-between items-center w-full px-24">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <div className="text-gray-600 px-6 py-3 hidden md:flex rounded-full shadow-md font-medium text-sm bg-gray-100">
            Home /{" "}
            <span className="pl-1 font-semibold text-black" data-aos="fade-up">
              Get in touch
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <Cta />

        {/* Google Maps Embed */}
        <div className="mt-10">
          <h2 className="text-3xl mb-12 font-bold tracking-tight text-center text-blue-600">
            Our Location
          </h2>
          <div className="w-full h-96 mt-4 rounded-lg overflow-hidden">
            <iframe
              title="Google Maps Location"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.043668599784!2d36.89741889390584!3d-1.2894081999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f133bf07f7805%3A0xb9f9f69af1d5a8a6!2sUmoja%202%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1709023406792"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
