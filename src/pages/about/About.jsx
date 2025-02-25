import Button from "../../components/Button";
import OurProcess from "../../components/OurProcess";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../assets/images";
import { motion } from "framer-motion";
import HowWeWork from "../home/HowWeWork";
import BannerCta from "../../components/BannerCta";
import Testimonials from "../home/Testimonials";
import Team from "../../components/Team";
import Faq from "../../components/Faq";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className=" ">
      {/* HEADER  */}
      <div className="relative w-full h-[45vh] flex flex-col justify-center items-center text-gray-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.bgimage})` }}
        ></div>
        <div className="relative flex flex-col mt-8 md:flex-row justify-between items-center w-full px-24">
          <h1 className="text-4xl font-semibold">About us</h1>
          <div className="text-gray-600 px-6 py-3 rounded-full shadow-md font-medium text-sm bg-gray-100">
            Home /{" "}
            <span className="font-semibold text-black" data-aos="fade-up">
              About Us
            </span>
          </div>
        </div>
      </div>

      {/* contemt */}
      <div className=" padded my-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
            Who are we?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800 tracking-tight leading-snug">
            Innovating Tomorrow, Building Today
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed font-medium tracking-tight">
            AxionTech is more than a technology company, we are a team of
            innovators, problem-solvers, and creators dedicated to shaping the
            future through cutting-edge digital solutions. We believe in the
            power of technology to transform businesses and enhance user
            experiences. By merging technical expertise with strategic thinking,
            we craft solutions that are not only functional but also
            forward-thinking.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed font-medium tracking-tight">
            Specializing in web development, UI/UX design, and software
            solutions, we turn ideas into scalable, high-performance products
            tailored to the unique needs of startups and established enterprises
            alike. Our future-focused approach ensures that every solution we
            build is designed for longevity, adaptability, and maximum impact.
            At AxionTech, we don’t just develop technology, we create seamless
            digital experiences that drive growth, efficiency, and innovation in
            an ever-evolving digital landscape.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center padded my-16 ">
        <div className="mission text-center p-6 bg-gray-100 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Mission</h2>
          <p className="text-gray-700">
            Empower businesses and individuals through innovative, efficient,
            and future-ready technology solutions that drive growth and
            transformation.
          </p>
        </div>

        <div className="vision text-center p-6 bg-gray-100 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Vision</h2>
          <p className="text-gray-700">
            To be at the forefront of technological innovation, shaping a world
            where seamless digital experiences unlock new possibilities for
            everyone.
          </p>
        </div>

        <div className="core-values text-center p-6 bg-gray-100 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Core Values
          </h2>
          <p className="text-gray-700">
            Innovation, Efficiency, Future-Focused, Collaboration, and
            Excellence—driving everything we create and deliver.
          </p>
        </div>
      </div>

      {/* <HowWeWork/> */}
      <OurProcess />
      <BannerCta />
      <Team />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default About;
