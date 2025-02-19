import { useEffect } from "react";
import images from "../../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCreditCard,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";
import ServicesCta from "./ServicesCta";
import OurProcess from "../../components/OurProcess";
import TechStack from "../../components/TechStack";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-3xl text-white" />,
    color: "bg-blue-600",
    description: "Custom web applications built with modern technologies.",
    points: [
      "Responsive & Mobile-Friendly",
      "Performance Optimization",
      "SEO Best Practices",
      "Custom Web Applications",
    ],
  },
  {
    title: "Software Development",
    icon: <FaMobileAlt className="text-3xl text-white" />,
    color: "bg-green-600",
    description: "Scalable and secure software solutions for businesses.",
    points: [
      "Full-Stack Development",
      "Database Management",
      "Cloud-Based Solutions",
      "Custom Business Software",
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler className="text-3xl text-white" />,
    color: "bg-purple-600",
    description: "Creating visually appealing and user-friendly experiences.",
    points: [
      "User Research & Prototyping",
      "Wireframing & Mockups",
      "UI Component Libraries",
      "User Testing & Feedback",
    ],
  },
  {
    title: "Payment Systems",
    icon: <FaCreditCard className="text-3xl text-white" />,
    color: "bg-red-600",
    description: "Seamless online payment integrations for businesses.",
    points: [
      "Payment Gateway Integration",
      "Multi-Currency Support",
      "Secure Transactions",
      "Subscription & Recurring Billing",
    ],
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush className="text-3xl text-white" />,
    color: "bg-yellow-600",
    description: "Creative design solutions for brands and businesses.",
    points: [
      "Logo & Branding Design",
      "Marketing Materials",
      "Social Media Graphics",
      "Illustrations & Custom Artwork",
    ],
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-3xl text-white" />,
    color: "bg-orange-600",
    description: "Helping brands reach their target audience effectively.",
    points: [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Content Marketing",
      "Ad Campaign Management",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative w-full h-[45vh] flex flex-col justify-center items-center text-gray-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.bgimage})` }}
        ></div>
        <div className="relative flex flex-col mt-8 md:flex-row justify-between items-center w-full px-24">
          <h1 className="text-4xl font-semibold">Our Services</h1>
          <div className="text-gray-600 px-6 py-3 rounded-full shadow-md font-medium text-sm bg-gray-100">
            Home / <span className="font-semibold text-black">Our Services</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center my-16">
        <p className="text-blue-600 font-semibold">Our Services</p>
        <h2 className="text-4xl font-bold mt-2 mb-10 text-gray-800 tracking-tight leading-tight">
          Services We Provide
        </h2>
      </div>

      <div className="mb-32 padded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-500"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`${service.color} p-3 rounded-lg`}>{service.icon}</div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 font-medium tracking-tight mb-4">{service.description}</p>

            {/* Bullet Points */}
            <ul className="text-gray-700 font-medium tracking-snub space-y-2">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-gray-500 text-lg">•</span> {point}
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="mt-6">
              <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                Request Quote <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="">
        <ServicesCta />
      </div>
      <div>
<OurProcess/>
      </div>
      <div className="div">
        <TechStack/>
      </div>
    </>
  );
};

export default Services;
