import Button  from "../../components/Button";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import images from "../../assets/images";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    { id: 1, title: "E-Commerce Platform", category: "Web Apps", tech: ["React", "Node.js"], img: images.project1, link: "/projects/1" },
    { id: 2, title: "Mobile Banking App", category: "Mobile Apps", tech: ["Flutter", "Firebase"], img: images.project2, link: "/projects/2" },
    { id: 3, title: "SaaS Dashboard", category: "Web Apps", tech: ["Next.js", "Tailwind"], img: images.project3, link: "/projects/3" },
    { id: 4, title: "Real Estate UI Design", category: "UI/UX", tech: ["Figma", "Adobe XD"], img: images.project4, link: "/projects/4" },
    { id: 5, title: "AI-Powered Chatbot", category: "Web Apps", tech: ["Python", "Django"], img: images.project5, link: "/projects/5" },
    { id: 6, title: "Crypto Wallet App", category: "Mobile Apps", tech: ["React Native", "Redux"], img: images.project6, link: "/projects/6" },
  ];

  const filteredProjects = activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  const tabs = ["All", "Web Apps", "Mobile Apps", "UI/UX"];

  const caseStudies = [
    { id: 1, title: "Revolutionizing E-Commerce", description: "How we helped an online store scale and improve UX.", img: images.caseStudy1, link: "/case-studies/1" },
    { id: 2, title: "Scaling FinTech Apps", description: "Our role in building secure and scalable mobile banking solutions.", img: images.caseStudy2, link: "/case-studies/2" },
  ];

  const clients = [images.client1, images.client2, images.client3, images.client4, images.client5];

  return (
    <div className="text-gray-900">
      {/* HEADER (Unchanged) */}
      <div className="relative w-full h-[45vh] flex flex-col justify-center items-center text-gray-700">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${images.bgimage})` }}></div>
        <div className="relative flex flex-col mt-8 md:flex-row justify-between items-center w-full px-24">
          <h1 className="text-4xl font-semibold">Our Portfolio</h1>
          <div className="text-gray-600 px-6 py-3 rounded-full shadow-md font-medium text-sm bg-gray-100">
            Home / <span className="font-semibold text-black" data-aos="fade-up">Portfolio</span>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center space-x-4 py-8">
        {tabs.map((tab) => (
          <button 
            key={tab} 
            className={`px-5 py-2 text-lg rounded-lg ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <section className="px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-6 shadow-lg rounded-xl bg-white" data-aos="fade-up">
              <img src={project.img} alt={project.title} className="rounded-lg w-full h-56 object-cover" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">A brief overview of the project, highlighting key features.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md">{tech}</span>
                ))}
              </div>
              <Button text="View Project" to={project.link} className="mt-4 px-6 py-2 text-lg" />
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-6 md:px-16 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">Case Studies</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="flex items-center gap-6 bg-white shadow-lg p-6 rounded-xl" data-aos="fade-up">
              <img src={caseStudy.img} alt={caseStudy.title} className="w-1/3 rounded-lg" />
              <div>
                <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                <p className="text-gray-600 mt-2">{caseStudy.description}</p>
                <Button text="Read More" to={caseStudy.link} className="mt-3 text-blue-600" variant="link" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT LOGO CAROUSEL */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">Trusted by Leading Brands</h2>
        <Slider 
          className="mt-8" 
          dots={false} 
          infinite={true} 
          speed={500} 
          slidesToShow={4} 
          slidesToScroll={1} 
          autoplay={true} 
          autoplaySpeed={2000}
        >
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img src={client} alt={`Client ${index + 1}`} className="h-16" />
            </div>
          ))}
        </Slider>
      </section>

    </div>
  );
};

export default Portfolio;
