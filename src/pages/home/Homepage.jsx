import React from "react";
import HeroSection from "./Hero";
import HomeServices from "./HomeServices";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Numbers from "./Numbers";
import Cta from "../../components/Cta";
import HomeBlogs from "./HomeBlogs";
import BriefAbout from "./BriefAbout";
import HowWeWork from "./HowWeWork";
import BannerCta from "../../components/BannerCta";

const Homepage = () => {
  return (
    <div>
      <HeroSection  />
      <HomeServices />
      <BriefAbout/>
      <HowWeWork/>
      <WhyChooseUs />
      <Testimonials/>
      <Numbers/>
      <Cta/>
      <HomeBlogs/>
      <BannerCta/>
    </div>
  );
};

export default Homepage;
