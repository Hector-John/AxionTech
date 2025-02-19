import Button from "../../components/Button";
import { motion } from "framer-motion";
import images from "../../assets/images";

const BriefAbout = () => {
  return (
    <section className="padded bg-gray-50 py-16  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          className="relative w-full h-72 md:h-[400px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={images.hero_design}
            alt="About AxionTech"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            More about AxionTech
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800 tracking-tight leading-snug">
            Future-Ready Tech Solutions
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed tracking-wide">
            At AxionTech, we craft{" "}
            <span className="font-semibold text-black">
              innovative, high-performance digital solutions
            </span>{" "}
            designed to accelerate growth and efficiency. From cutting-edge web
            development to seamless UI/UX experiences, we transform ideas into
            technology that makes an impact.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed tracking-wide">
            Whether you're a startup shaping your digital presence or an
            established business scaling operations, we provide{" "}
            <span className="font-semibold text-black">
              tailored technology solutions
            </span>{" "}
            that align with your goals—empowering you to stay ahead in a rapidly
            evolving digital landscape.
          </p>

          <Button
            text="More About Us"
            to="/about"
            className="px-8 py-4"
            variant="outline"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BriefAbout;
