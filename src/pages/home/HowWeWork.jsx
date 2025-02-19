import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCogs, FaRocket, FaHandshake } from "react-icons/fa";

const workSteps = [
  {
    id: 1,
    title: "Ideation & Strategy",
    description:
      "We start by understanding your vision, goals, and requirements to create a tailored strategy.",
    icon: <FaLightbulb className="text-white text-5xl" />,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Our UI/UX experts craft intuitive designs and interactive prototypes to visualize the user experience.",
    icon: <FaCogs className="text-white text-5xl" />,
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    title: "Development & Testing",
    description:
      "We bring designs to life with clean, scalable code, ensuring seamless functionality across devices.",
    icon: <FaRocket className="text-white text-5xl" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Launch & Support",
    description:
      "After rigorous testing, we deploy your solution and provide ongoing support for continuous improvement.",
    icon: <FaHandshake className="text-white text-5xl" />,
    gradient: "from-orange-500 to-red-500",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute bottom-0 left-0 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#155DFC" fill-opacity="0.1" d="M0,160L12.6,138.7C25.3,117,51,75,76,58.7C101.1,43,126,53,152,58.7C176.8,64,202,64,227,74.7C252.6,85,278,107,303,138.7C328.4,171,354,213,379,234.7C404.2,256,429,256,455,229.3C480,203,505,149,531,144C555.8,139,581,181,606,176C631.6,171,657,117,682,106.7C707.4,96,733,128,758,144C783.2,160,808,160,834,149.3C858.9,139,884,117,909,128C934.7,139,960,181,985,186.7C1010.5,192,1036,160,1061,138.7C1086.3,117,1112,107,1137,138.7C1162.1,171,1187,245,1213,234.7C1237.9,224,1263,128,1288,112C1313.7,96,1339,160,1364,165.3C1389.5,171,1415,117,1427,90.7L1440,64L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path></svg>
      </div>
    
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 tracking-tight leading-8 ">
          How We Work
        </h2>
        <p className="text-[#121212] font-medium mt-2">
          A structured approach to turn your ideas into reality.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {workSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`relative p-6 rounded-lg shadow-lg bg-gradient-to-r ${step.gradient} text-white flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Decorative Shape */}
            <div className="absolute inset-0 rounded-lg bg-white opacity-10 blur-lg"></div>

            {/* Icon */}
            <div className="mb-4">{step.icon}</div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-sm mt-2">{step.description}</p>

            {/* Floating Effect */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg transition-opacity duration-500 opacity-0 hover:opacity-10 bg-white"></div>
          </motion.div>
        ))}
      </div>

     

    </section>
  );
};

export default HowWeWork;
