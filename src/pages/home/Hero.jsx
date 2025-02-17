import React from "react";
import Button from "../../components/Button";
import hero_design from '../../assets/hero_design.webp'

const HeroSection = () => {
  return (
    <div className="mt-[8rem] mb-18 grid grid-cols-1 md:grid-cols-2 items-center padded ">
      <div className="">
        <h2 className="leading-14 mb-4 font-bold text-gray-700 sm:text-3xl md:text-5xl">
          <span className="">Smart, </span>
          <span className="text-orange-600">Scalable,</span> and
          <span className="text-blue-600 "> Future</span>-
          <span className="text-blue-600 ">ready</span> solutions.
        </h2>

        <p className="text-lg leading-8 font-medium text-gray-600">
          From custom websites and high-performance applications to seamless
          digital experiences, we help businesses, entrepreneurs, and
          individuals thrive in the modern tech landscape.
        </p>

        <div className="flex gap-4 mt-8">
          <Button text="Learn more" to="/about" className="px-8 py-4" variant='outline' />
          <Button text="Get in touch" to="/contact" className="px-8 py-4" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={hero_design}alt="hero_image" />
      </div>

      
    </div>
  );
};

export default HeroSection;
