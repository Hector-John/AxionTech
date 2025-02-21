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
    <div className=' ' >
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
           about AxionTech
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800 tracking-tight leading-snug">
            FutureTech Solutions-Ready Tech Solutions
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed font-medium tracking-tight">
            At AxionTech, we craft{" "}
              innovative, high-performance digital solutions
        
            designed to accelerate growth and efficiency. From cutting-edge web
            development to seamless UI/UX experiences, we transform ideas into
            technology that makes an impact.   Whether you're a startup shaping your digital presence or an
            established business scaling operations, we provide{" "}
              tailored technology solutions
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed font-medium tracking-tight">
            Whether you're a startup shaping your digital presence or an
            established business scaling operations, we provide{" "}
              tailored technology solutions
            that align with your goals—empowering you to stay ahead in a rapidly
            evolving digital landscape. 
            that align with your goals—empowering you to stay ahead in a rapidly
            evolving digital landscape.
          </p>


       
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mx-auto ">
        <div className="misson">
mission
        </div>

        <div className="vision">
vision
        </div>

        <div className="motto">
motto/slogan
        </div>
      </div>

      {/* <HowWeWork/> */}
      <OurProcess />
      <BannerCta/>
<Team/>
      <Testimonials/>
<Faq/>

      
        </div>
  )
}

export default About