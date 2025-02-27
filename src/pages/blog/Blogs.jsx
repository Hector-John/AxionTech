import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosSearch } from "react-icons/io";
import Button from "../../components/Button";

const categories = [
  { name: "Technology", icon: "💻" },
  { name: "Design", icon: "🎨" },
  { name: "Development", icon: "🛠️" },
  { name: "Marketing", icon: "📢" },
  { name: "Business", icon: "📈" },
  { name: "Health & Wellness", icon: "💪" },
  { name: "Finance", icon: "💰" },
  { name: "Education", icon: "📚" },
  { name: "AI & Machine Learning", icon: "🤖" },
];

const allBlogs = [
  {
    id: 1,
    title: "The Future of Tech",
    category: "Technology",
    image: images.future_tech,
    description:
      "Explore emerging technologies shaping the future, from AI advancements to quantum computing and beyond...",
  },
  {
    id: 2,
    title: "Design Trends 2025",
    category: "Design",
    image: images.hero_design,
    description:
      "Discover the latest UI/UX design trends that will dominate in 2025, enhancing user experience and aesthetics...",
  },
  {
    id: 3,
    title: "Why UX Matters",
    category: "UI/UX",
    image: images.ux,
    description:
      "User experience is at the core of successful digital products. Learn how UX impacts engagement and conversions...",
  },
  {
    id: 4,
    title: "Web Performance Best Practices",
    category: "Development",
    image: images.design_trends,
    description:
      "Optimize your website’s speed and performance with proven techniques, from lazy loading to efficient coding...",
  },
  {
    id: 5,
    title: "AI and the Future",
    category: "AI & Machine Learning",
    image: images.ai,
    description:
      "AI is transforming industries. See how machine learning, automation, and deep learning will impact the future...",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    category: "Marketing",
    image: images.smm,
    description:
      "Maximize brand reach and engagement with effective social media marketing strategies for 2025 and beyond...",
  },
  {
    id: 7,
    title: "Investment Strategies",
    category: "Finance",
    image: images.investment,
    description:
      "Navigate the financial markets with smart investment strategies, risk management, and wealth-building insights...",
  },
  {
    id: 8,
    title: "Effective Business Models",
    category: "Business",
    image: images.business_model,
    description:
      "Discover innovative business models that drive success in today’s competitive market and changing economy...",
  },
  {
    id: 9,
    title: "Wellness in Tech",
    category: "Health & Wellness",
    image: images.wellness,
    description:
      "Balancing productivity and wellness in the tech industry—how to maintain health while excelling in your career...",
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const filteredBlogs =
    activeCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-transparent">
      {/* Header Section */}
      <div className="relative w-full lg:h-[45vh] h-[40vh] flex flex-col justify-center items-center text-gray-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.bgimage})` }}
        ></div>
        <div className="relative flex flex-col mt-8 md:flex-row justify-between items-center w-full px-24">
          <h1 className="text-4xl font-semibold">Our Blogs</h1>
          <div className="text-gray-600 px-6 py-3 rounded-full shadow-md font-medium text-sm bg-gray-100">
            Home /{" "}
            <span className="font-semibold text-black" data-aos="fade-up">
              Blogs
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row padded my-20 gap-6">
  {/* Sidebar Categories */}
  <aside className="w-full lg:w-1/4">
    <div className="bg-white p-4 rounded-lg space-y-1 shadow">
      <h2 className="text-xl font-semibold text-gray-800 my-4">Categories</h2>

      <div className="my-4 flex items-center border border-gray-300 shadow-sm gap-2 rounded-lg px-3 py-2 focus-within:ring-1 focus-within:ring-blue-300 transition duration-300">
        <IoIosSearch className="text-gray-500 w-5 h-5" />
        <input
          type="search"
          name="search"
          placeholder="Search for a blog..."
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 "
        />
      </div>

      <button
        className={`w-full text-left px-4 py-2 rounded-lg ${
          activeCategory === "All"
            ? "font-semibold text-blue-600"
            : "text-gray-500 font-medium  hover:bg-blue-50"
        }`}
        onClick={() => setActiveCategory("All")}
      >
        All
      </button>
      {categories.map((category, index) => (
        <motion.button
          key={category.name}
          className={`w-full text-left px-4 py-2 rounded-lg ${
            activeCategory === category.name
              ? "text-blue-600 font-semibold"
              : "text-gray-500 font-medium hover:bg-blue-50"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          onClick={() => setActiveCategory(category.name)}
        >
          {category.icon} {category.name}
        </motion.button>
      ))}
    </div>

    {/* Newsletter */}
    <div className="mt-6 p-4 bg-white rounded-lg shadow text-center">
      <h3 className="text-lg font-semibold text-gray-800">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-sm text-gray-600">Stay updated with our latest blogs</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-4 p-2 border rounded w-full text-gray-800 focus:ring-1 focus:ring-blue-300 outline-none"
      />
      <button className="mt-3 w-full px-4 py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-600 transition duration-300">
        Subscribe
      </button>
    </div>
  </aside>

  {/* Blog List */}
  <div className="flex-1">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
            <img
              alt={blog.title}
              src={blog.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {blog.description}
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </motion.div>
      ))}
    </div>

    {/* View More Button */}
    {visibleBlogs < filteredBlogs.length && (
      <div className="text-center mt-6">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          onClick={() => setVisibleBlogs(visibleBlogs + 3)}
        >
          View More
        </button>
      </div>
    )}
  </div>
</div>

    </div>
  );
};

export default Blogs;
