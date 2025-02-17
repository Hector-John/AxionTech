import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
      {
          "title": "Innovative Solutions",
          "description": "We develop advanced digital solutions designed to enhance growth and efficiency."
        },
    {
      title: 'Cutting-Edge Technology',
      description: 'We implement the latest advancements to ensure seamless, high-performance solutions.',
    },
    {
      title: 'Scalable & Secure',
      description: 'Our solutions are built for growth with enterprise-level security measures.',
    },
    {
        "title": "Seamless Integration",
        "description": "Our solutions effortlessly connect with existing systems for enhanced functionality."
      },
    {
        "title": "Future-Ready Approach",
        "description": "Our strategic foresight keeps your business ahead with cutting-edge innovations."
      },
    {
      title: '24/7 Support & Maintenance',
      description: 'Round-the-clock assistance to ensure smooth operations and peace of mind.',
    },
  ];

  return (
    <section className="padded py-24 text-gray-700 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative">
          <div className="h-96 rounded-2xl flex items-center justify-center text-sm border border-gray-300">
            Placeholder for an image showcasing modern technology and innovation.
          </div>
          <motion.div 
            className="absolute bottom-4 left-4 bg-white text-blue-500 font-bold py-2 px-6 rounded-lg shadow-lg text-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            98% Client Satisfaction
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.h2 
            className="text-3xl font-bold mb-6 tracking-tight "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose AxionTech?
          </motion.h2>
          <p className="text-lg font-medium max-w-xl mb-6 opacity-80">
            At AxionTech, we blend innovation, efficiency, and cutting-edge technology to deliver solutions that empower businesses and individuals alike.
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
                <FaCheckCircle className="text-cyan-500 w-12 h-12" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-700 opacity-80">{feature.description}</p>
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
