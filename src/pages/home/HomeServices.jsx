import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPencilRuler, 
  FaCreditCard, 
  FaPaintBrush, 
  FaBullhorn, 
  FaArrowRight
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    description: "Crafting responsive, high-performance websites tailored to your needs.",
  },
  {
    title: "Software Development",
    icon: <FaMobileAlt className="text-4xl text-green-600" />,
    description: "Building scalable and robust software solutions for businesses.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler className="text-4xl text-purple-600" />,
    description: "Creating intuitive and visually appealing user experiences.",
  },
  {
    title: "Payment Systems",
    icon: <FaCreditCard className="text-4xl text-red-600" />,
    description: "Secure and seamless online payment integrations.",
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush className="text-4xl text-yellow-600" />,
    description: "Designing eye-catching visuals and brand elements.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-4xl text-orange-600" />,
    description: "Helping brands reach their audience with effective strategies.",
  },
];

const HomeServices = () => {
  return (
    <div className="py-12 px-6 padded">
      <h1 className="text-4xl tracking-tight font-bold text-center mb-10">
        Our <span className="text-blue-600">Services</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>

            <motion.div
              className="mt-4 flex items-center justify-center gap-2 text-blue-600 font-medium"
            >
        

            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
