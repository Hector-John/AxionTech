import React from "react";
import HeroSection from "./Hero";
import HomeServices from "./HomeServices";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Numbers from "./Numbers";
import Cta from "./Cta";
import HomeBlogs from "./HomeBlogs";

const Homepage = () => {
  return (
    <div>
      <HeroSection  />
      <HomeServices />
      <WhyChooseUs />
      <Testimonials/>
      <Numbers/>
      <HomeBlogs/>
      <Cta/>
    </div>
  );
};

export default Homepage;
