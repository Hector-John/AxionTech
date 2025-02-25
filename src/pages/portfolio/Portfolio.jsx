import Button from "../../components/Button";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const getRandomDate = () => {
    const start = new Date(2023, 3, 1); 
    const end = new Date(); 
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
  
    return randomDate.toISOString().split("T")[0]; 
  };

  const [activeTab, setActiveTab] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      id: 1,
      title: "East Side Street Wear",
      category: "Web Apps",
      tech: ["React", "Node.js", "MongoDb"],
      img: images.east,
      link: "/projects/1",
      description:
        "An e-commerce platform for streetwear enthusiasts, featuring a sleek design, user-friendly navigation, and secure payment options. Built with React for a responsive UI and Node.js for robust backend services.",
    },
    {
      id: 2,
      title: "Let's Stay",
      category: "Mobile Apps",
      tech: ["React Native", "Firebase"],
      img: images.lets_stay,
      link: "/projects/2",
      description:
        "A mobile application that helps users find and book accommodations easily. It integrates Firebase for real-time data synchronization and user authentication, ensuring a seamless experience.",
    },
    {
      id: 3,
      title: "Trendify",
      category: "Web Apps",
      tech: ["Next.js"],
      img: images.trendify,
      link: "/projects/3",
      description:
        "A modern web application that showcases the latest fashion trends. Built with Next.js for server-side rendering, it provides fast load times and an engaging user experience.",
    },
    {
      id: 4,
      title: "Acorn UI Design",
      category: "UI/UX",
      tech: ["Figma"],
      img: images.project4,
      link: "/projects/4",
      description:
        "A UI/UX design project focused on creating intuitive interfaces for mobile applications. The design process involved user research, wireframing, and prototyping using Figma.",
    },
    {
      id: 5,
      title: "MERN Authentication",
      category: "Web Apps",
      tech: ["M.E.R.N"],
      img: images.project5,
      link: "/projects/5",
      description:
        "A full-stack application demonstrating user authentication using the MERN stack (MongoDB, Express, React, Node.js). It features secure login, registration, and user profile management.",
    },
    {
      id: 6,
      title: "Crypto Wallet App",
      category: "Mobile Apps",
      tech: ["React Native", "Redux"],
      img: images.phone_hero,
      link: "/projects/6",
      description:
        "A mobile wallet application for managing cryptocurrencies. Built with React Native and Redux, it allows users to send, receive, and track their crypto assets securely.",
    },
    {
      id: 7,
      title: "New Project",
      category: "Web Apps",
      tech: ["React", "Node.js"],
      img: images.east,
      link: "/projects/7",
      description:
        "An innovative web application designed to streamline project management. It features task tracking, team collaboration tools, and real-time updates, all powered by React and Node.js.",
    },
    {
      id: 8,
      title: "Another Project",
      category: "Mobile Apps",
      tech: ["React Native"],
      img: images.lets_stay,
      link: "/projects/8",
      description:
        "A mobile app that connects users with local events and activities. Built with React Native, it offers personalized recommendations and easy event booking.",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const tabs = ["All", "Web Apps", "Mobile Apps", "UI/UX"];

  const caseStudies = [
    {
      id: 1,
      title: "Revolutionizing E-Commerce",
      description: "How we helped an online store scale and improve UX.",
      img: images.ecommerce,
      link: "/case-studies/1",
    },
    {
      id: 2,
      title: "Scaling FinTech Apps",
      description:
        "Our role in building secure and scalable mobile banking solutions.",
      img: images.fintech,
      link: "/case-studies/2",
    },
  ];

  const clients = [
    images.profile2,
    images.profile1,
    images.profile3,
    images.profile4,
    images.profile6,
  ];

  return (
    <div className=" ">
      {/* HEADER  */}
      <div className="relative w-full h-[45vh] flex flex-col justify-center items-center text-gray-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.bgimage})` }}
        ></div>
        <div className="relative flex flex-col mt-8 md:flex-row justify-between items-center w-full px-24">
          <h1 className="text-4xl font-semibold">Our Portfolio</h1>
          <div className="text-gray-600 px-6 py-3 rounded-full shadow-md font-medium text-sm bg-gray-100">
            Home /{" "}
            <span className="font-semibold text-black" data-aos="fade-up">
              Portfolio
            </span>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center space-x-4 py-8  ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-md rounded-full tracking-tight font-medium ${
              activeTab === tab
                ? "bg-blue-200 text-blue-600   "
                : "bg-blue-50 text-gray-700   hover:bg-blue-100 transition-colors "
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <section className="px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="p-6 shadow-lg rounded-xl bg-white transition-transform transform "
              data-aos="fade-up"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg w-full h-56 object-cover hover:scale-85 transition-transform transform duration-300 "
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                text="View Project"
                to={project.link}
                className="mt-4 px-6 py-2 text-lg"
              />
            </div>
          ))}
        </div>
        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-6">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
              onClick={() => setVisibleProjects(visibleProjects + 3)}
            >
              Load More Projects
            </button>
          </div>
        )}
      </section>

      {/* CASE STUDIES */}
      <section className="px-6 md:px-16 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Case Studies
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              data-aos="fade-up"
            >
         <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
  <img
    src={caseStudy.img}
    alt={caseStudy.title}
    loading="lazy"
   class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
     <time dateTime={getRandomDate()} className="block text-xs text-white/90 mb-2">
  {getRandomDate()}
</time>

      <h3 className="text-xl text-white font-semibold">{caseStudy.title}</h3>
      <p className="text-white mt-2">{caseStudy.description}</p>
      <Button text="Read More " to={caseStudy.link} className="py-2.5 px-3 mt-4 " />

    </div>
  </div>
</article>



            </div>




          ))}
        </div>
      </section>





      {/* CLIENT LOGO CAROUSEL */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold pb-12 text-center">
          Trusted by Leading Brands
        </h2>
        <Slider
      className="my-12 relative"
      dots={false}
      infinite={true}
      speed={500}
      slidesToShow={5}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
    >
      {clients.map((client, index) => (
        <div key={index} className="flex justify-center mx-4"> 
          <img src={client}  className="h-16 mx-auto" /> 
        </div>
      ))}
    </Slider>
      </section>
    </div>
  );
};

export default Portfolio;
