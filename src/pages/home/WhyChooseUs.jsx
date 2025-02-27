import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import images from "../../assets/images";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Innovative Solutions",
      description:
        "We develop advanced digital solutions designed to enhance growth and efficiency.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We implement the latest advancements to ensure seamless, high-performance solutions.",
    },
    {
      title: "Scalable & Secure",
      description:
        "Our solutions are built for growth with enterprise-level security measures.",
    },
    {
      title: "Seamless Integration",
      description:
        "Our solutions effortlessly connect with existing systems for enhanced functionality.",
    },
    {
      title: "Future-Ready Approach",
      description:
        "Our strategic foresight keeps your business ahead with cutting-edge innovations.",
    },
    {
      title: "24/7 Support & Maintenance",
      description:
        "Round-the-clock assistance to ensure smooth operations and peace of mind.",
    },
  ];

  return (
    <section className="padded relative py-16 text-gray-700 flex items-center justify-center  ">
      {/* Background SVG (Covers Whole Section) */}
      <div className="absolute top-0 left-0 w-full ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#155DFC"
            fill-opacity="0.1"
            d="M0,320L21.8,272C43.6,224,87,128,131,117.3C174.5,107,218,181,262,218.7C305.5,256,349,256,393,224C436.4,192,480,128,524,85.3C567.3,43,611,21,655,21.3C698.2,21,742,43,785,64C829.1,85,873,107,916,106.7C960,107,1004,85,1047,74.7C1090.9,64,1135,64,1178,96C1221.8,128,1265,192,1309,213.3C1352.7,235,1396,213,1418,202.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Section - Image Placeholder */}
        <div className="relative flex justify-center items-center ">
          <img
            src={images.choose}
            className="h-96 bg-white rounded-2xl flex items-center justify-center text-sm border border-gray-300 shadow-lg"
          />

          <motion.div
            className="absolute bottom-4 left-4 bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg text-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            98% Client Satisfaction
          </motion.div>
        </div>

        {/* Right Section - Features */}
        <div className="md:w-full">
          <motion.h2
            className="text-4xl font-bold mb-6 tracking-tight text-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="text-orange-500">AxionTech?</span>
          </motion.h2>
          <p className="text-lg font-medium max-w-xl mb-6 opacity-90 leading-relaxed tracking-wide">
            At AxionTech, we blend innovation, efficiency, and cutting-edge
            technology to deliver solutions that empower businesses and
            individuals alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FaCheckCircle className="text-blue-600 w-12 h-12" />
                <div>
                  <h3 className="text-lg font-semibold  leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700 opacity-80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
