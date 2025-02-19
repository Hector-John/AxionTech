import React, { useState } from "react";
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
  FaMobileAlt,
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

  return (
    <div className="relative bg-gray-50 py-20">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">Tech Stack</p>
        <h2 className="text-4xl font-bold text-gray-800">
          Technologies We Use
        </h2>
        <p className="text-gray-600 mt-2">
          Powering our solutions with modern technologies.
        </p>
      </div>

      {/* Fade Effect on Sides */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-gray-50 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-gray-50 via-transparent to-transparent pointer-events-none"></div>

      {/* Infinite Marquee */}
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="flex space-x-16 animate-marquee hover:pause-marquee"
          onMouseEnter={(e) => e.currentTarget.classList.add("paused")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("paused")}
        >
          {[...techStacks, ...techStacks].map((tech, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center w-24 cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Icon */}
              <span
                className={`text-6xl text-gray-400 transition-colors duration-300 ${
                  hoveredTech === tech.name ? tech.color : ""
                }`}
              >
                {tech.icon}
              </span>

              {/* Tooltip */}
              {hoveredTech === tech.name && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-14 bg-black text-white text-sm font-semibold py-2 px-3 rounded-md shadow-md whitespace-nowrap">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
            will-change: transform;
          }
          .paused {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default TechStack;
