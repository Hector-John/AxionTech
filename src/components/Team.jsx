import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Team = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); 
      }
    }, 10000);

    return () => clearInterval(interval); 
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, 
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    { name: "Alice Johnson", role: "Frontend Developer", image: "#", facebook: "#", twitter: "#", linkedin: "#" },
    { name: "Bob Smith", role: "Backend Developer", image: "#", facebook: "#", twitter: "#", linkedin: "#" },
    { name: "Charlie Lee", role: "UI/UX Designer", image: "#", facebook: "#", twitter: "#", linkedin: "#" },
    { name: "Diana Clark", role: "Project Manager", image: "#", facebook: "#", twitter: "#", linkedin: "#" },
    { name: "Ethan Wright", role: "Software Engineer", image: "#", facebook: "#", twitter: "#", linkedin: "#" },
  ];

  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold text-blue-600">Meet Our Team</h2>
      <p className="text-gray-600 mb-6">Our talented team is dedicated to excellence and innovation.</p>
     
      <div className="px-6 my-12">
        <Slider ref={sliderRef} {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2">
              <div className="bg-white shadow-lg rounded-lg mb-5 p-5 text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                <h3 className="text-xl font-semibold text-blue-600 mt-4">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">
                    <FaFacebook size={20} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">
                    <FaTwitter size={20} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
