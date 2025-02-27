import React, { useState } from "react";
import Slider from "react-slick";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
  SiAdobexd,
  SiReact,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const techStacks = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-900" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-700" },
  { name: "MongoDB", icon: <FaDatabase />, color: "text-green-700" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-pink-700" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Flutter", icon: <SiFlutter />, color: "text-blue-500" },
  { name: "React Native", icon: <SiReact />, color: "text-blue-400" },
  { name: "Java", icon: <FaJava />, color: "text-red-600" },
  { name: "Python", icon: <FaPython />, color: "text-crimson-500" },
  { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 7 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="relative overflow-hidden py-10 lg:py-16">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">Tech Stack</p>
        <h2 className="text-4xl font-bold text-gray-800">Technologies We Use</h2>
        <p className="text-gray-600 mt-2">
          Powering our solutions with modern technologies.
        </p>
      </div>

      <div className="px-8 py-6 lg:px-20">
        <Slider {...settings}>
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center "
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="flex flex-col items-center ">

              <div
                className={`text-6xl text-gray-400 transition-colors duration-300 cursor-pointer ${
                  hoveredTech === tech.name ? tech.color : ""
                }`}
              >
                {tech.icon}
              </div>
              <p className="mt-2 text-center text-gray-700 font-medium">{tech.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechStack;
