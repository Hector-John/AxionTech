import {
  FaSearch,
  FaMapSigns,
  FaPalette,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

const workSteps = [
  {
    title: "Research & Discovery",
    icon: <FaSearch className="text-white text-4xl" />,
    color: "yellow-500",
    description:
      "Understanding your needs, market trends, and user expectations.",
    points: [
      "Competitor analysis & market research.",
      "Identifying key user pain points & goals.",
    ],
  },
  {
    title: "Strategy & Planning",
    icon: <FaMapSigns className="text-white text-4xl" />,
    color: "blue-500",
    description:
      "Creating a roadmap, selecting tech stack, and defining project scope.",
    points: [
      "Choosing the right technologies & frameworks.",
      "Setting milestones & realistic timelines.",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    icon: <FaPalette className="text-white text-4xl" />,
    color: "green-500",
    description: "Transforming ideas into intuitive designs and wireframes.",
    points: [
      "Building wireframes and interactive prototypes.",
      "Ensuring accessibility and user-friendly experience.",
    ],
  },
  {
    title: "Development & Implementation",
    icon: <FaCode className="text-white text-4xl" />,
    color: "purple-500",
    description: "Bringing designs to life with efficient, scalable code.",
    points: [
      "Frontend & backend development.",
      "API integrations and database structuring.",
    ],
  },
  {
    title: "Testing & Optimization",
    icon: <FaBug className="text-white text-4xl" />,
    color: "orange-500",
    description: "Ensuring flawless performance across devices and use cases.",
    points: [
      "Performance, security, and UX testing.",
      "Optimizing for speed and responsiveness.",
    ],
  },
  {
    title: "Launch & Continuous Support",
    icon: <FaRocket className="text-white text-4xl" />,
    color: "red-500",
    description:
      "Deploying the final product and providing ongoing enhancements.",
    points: [
      "Seamless launch & post-deployment monitoring.",
      "Future updates and feature expansions.",
    ],
  },
];

const OurProcess = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold">Our Process</p>
        <h2 className="text-4xl font-bold text-gray-800">How We Work</h2>
        <p className="text-gray-600 mt-2">
          A step-by-step approach to delivering excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
        {/* First 3 Steps in First Row */}
        <div className="space-y-8">
          {workSteps.slice(0, 3).map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Icon with Line */}
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full bg-${step.color}`}
                >
                  {step.icon}
                </div>
                {index < 2 && <div className="w-1 h-16 bg-gray-300 mt-2"></div>}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <ul className="mt-2">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Last 3 Steps in Second Row */}
        <div className="space-y-8">
          {workSteps.slice(3, 6).map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Icon with Line */}
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full bg-${step.color}`}
                >
                  {step.icon}
                </div>
                {index < 2 && <div className="w-1 h-16 bg-gray-300 mt-2"></div>}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <ul className="mt-2">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
