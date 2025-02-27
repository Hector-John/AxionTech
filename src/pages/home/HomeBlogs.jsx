import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import images from "../../assets/images";

const HomeBlogs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const blogPosts = [
    {
      title: "The Future of Web Development",
      description:
        "Explore the trends that are shaping the future of web development. From AI-driven designs to the rise of no-code tools, discover what’s next for developers.",
      date: "Feb 18, 2025",
      author: "Admin",
      image: images.blog1,
    },
    {
      title: "How to Optimize Your Website’s Performance",
      description:
        "Learn the best strategies for optimizing website performance, improving load times, and enhancing the user experience on your site.",
      date: "Feb 12, 2025",
      author: "Admin",
      image: images.blog2,
    },
    {
      title: "The Importance of User Experience in Design",
      description:
        "User experience is key to creating successful websites. In this post, we’ll discuss the importance of UX and tips for designing intuitive and engaging experiences.",
      date: "Feb 10, 2025",
      author: "Admin",
      image: images.blog3,
    },
  ];

  return (
    <div className=" padded my-[6rem] ">
      {/* Section Heading */}
      <p className="text-blue-600 font-semibold text-center">Latest Post</p>
      <h2 className="text-3xl text-center font-bold mt-2 mb-10 text-gray-700 tracking-tight leading-tight">
        Latest Blog Posts
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-4  lg:gap-6   ">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="flex flex-col">
              <div className="p-4">
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt="Blog Image"
                    className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-6">{post.description}</p>

                <hr className="border-t border-gray-300 my-4" />

                <div className="mb-4">
                  <Link
                    to="/blogs"
                    className="inline-flex items-center text-blue-400 font-semibold hover:underline hover:text-blue-600 "
                  >
                    Read Blog
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>

                {/* Author & Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt size={16} className="text-blue-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserAlt size={16} className="text-blue-600" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
