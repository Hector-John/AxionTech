import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShoePrints, FaTshirt, FaHandsHelping, FaStar } from "react-icons/fa";
import images from "../../assets/images";

const testimonials = [
  {
    name: "Travis ",
    role: "Owner",
    company: "Trendify",
    icon: <FaShoePrints />,
    image: images.profile1,
    review:
      "AxionTech transformed our online shoe store with a sleek, fast, and user-friendly design. Our customers love the seamless browsing experience.",
    rating: 5,
  },
  {
    name: "Cynthia",
    role: "Manager",
    company: "Blaze na Yonga",
    icon: <FaTshirt />,
    image: images.profile2,
    review:
      "Thanks to AxionTech, our apparel website now looks more modern and engaging. The new design has significantly improved our user engagement and sales.",
    rating: 4,
  },
  {
    name: "Yvonne Dion",
    role: "Coordinator",
    company: "M.Y.T.O",
    icon: <FaHandsHelping />,
    image: images.profile6,
    review:
      "AxionTech helped us build a website that effectively communicates our mission. The platform is intuitive, and we’ve seen an increase in donor engagement.",
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="padded px-8 h-screen flex flex-col justify-center">
      <div>
        <p className="text-blue-600 font-semibold">Our Customer Testimonials</p>
        <h2 className="text-3xl font-bold mt-2 mb-10 text-gray-700 tracking-tight leading-tight">
          Customer's Feedback
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200} 
            className="bg-white rounded-2xl shadow-lg p-6 text-center flex-1"
          >
            <div className="flex gap-4 items-center justify-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s image`}
                className="w-14 rounded-full"
              />
              <div className="text-start">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 font-medium text-sm">
                  {testimonial.role} at{" "}
                  <span className="text-blue-500 font-medium">
                    {testimonial.company}
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-400 leading-6 font-medium">
              "{testimonial.review}"
            </p>
            <hr className="h-1 text-gray-200 mt-6 mb-3" />

            <div className="flex justify-between items-center">
              <div className="mt-4 flex justify-center items-center space-x-1">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <span key={idx} className="text-blue-500">
                    <FaStar size={14} />
                  </span>
                ))}
              </div>
              <div className="mt-2 flex justify-center items-center text-gray-800 text-sm font-medium">
                {testimonial.icon}{" "}
                <span className="ml-2">{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
