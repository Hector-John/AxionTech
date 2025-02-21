import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold text-[#00bcd4]">Meet Our Team</h2>
      <p className="text-gray-600 mb-6">Our talented team is dedicated to excellence and innovation.</p>
      <Slider {...settings} className="px-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
            <h3 className="text-xl font-semibold text-[#00bcd4] mt-4">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-[#00bcd4] hover:text-[#008c9e]">
                <FaFacebook size={20} />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-[#00bcd4] hover:text-[#008c9e]">
                <FaTwitter size={20} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#00bcd4] hover:text-[#008c9e]">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
