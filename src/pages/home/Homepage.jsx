import React from "react";
import HeroSection from "./Hero";
import HomeServices from "./HomeServices";

const Homepage = () => {
  return (
    <div className="padded">
      <HeroSection />
      <HomeServices />
    </div>
  );
};

export default Homepage;
