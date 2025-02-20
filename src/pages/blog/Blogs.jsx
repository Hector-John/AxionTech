import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosSearch } from "react-icons/io";

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
  { id: 1, title: "The Future of Tech", category: "Technology", image: images.tech },
  { id: 2, title: "Design Trends 2025", category: "Design", image: images.design },
  { id: 3, title: "Why UX Matters", category: "UI/UX", image: images.ux },
  { id: 4, title: "Web Performance Best Practices", category: "Development", image: images.dev },
  { id: 5, title: "AI and the Future", category: "AI & Machine Learning", image: images.ai },
  { id: 6, title: "Social Media Marketing", category: "Marketing", image: images.marketing },
  { id: 7, title: "Investment Strategies", category: "Finance", image: images.finance },
  { id: 8, title: "Effective Business Models", category: "Business", image: images.business },
  { id: 9, title: "Wellness in Tech", category: "Health & Wellness", image: images.health },
];

const Blogs = () => {

    useEffect(() => {
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const filteredBlogs = activeCategory === "All" ? allBlogs : allBlogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="">
      {/* Header Section */}
      <div className="relative w-full h-[45vh] flex flex-col justify-center items-center text-gray-700">
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

      <div className="flex padded my-20 gap-6">
        {/* Sidebar Categories */}
        <aside className="w-1/4">
          <div className="bg-white p-4 rounded-lg space-y-1 shadow">
            <h2 className="text-xl font-semibold text-gray-800 my-4">Categories</h2>

            <div className="my-4 flex items-center border border-gray-300 shadow-sm gap-2 rounded-lg px-3 py-2 focus-within:ring-1 focus-within:ring-blue-300 transition duration-300">
  <IoIosSearch className="text-gray-500 w-5 h-5" />
  <input 
    type="search" 
    name="search" 
    placeholder="Search for a blog..." 
    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500"
  />
</div>



            <button
              className={`w-full text-left px-4 py-2 rounded-lg ${activeCategory === "All" ? "font-semibold text-blue-600" : "text-gray-500 font-medium  hover:bg-blue-50"}`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            {categories.map((category, index) => (
  <motion.button
    key={category.name}
    className={`w-full text-left px-4 py-2 rounded-lg ${activeCategory === category.name ? "text-blue-600 font-semibold" : "text-gray-500 font-medium hover:bg-blue-50"}`}
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
            <h3 className="text-lg font-semibold text-gray-800">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-600">Stay updated with our latest blogs</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-2 border rounded w-full text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
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
                <div className="rounded-lg overflow-hidden shadow-lg border bg-white hover:shadow-xl transition duration-300">
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="text-sm font-medium text-blue-600">{blog.category}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900">{blog.title}</h3>
                    <p className="text-gray-600 text-sm">Explore more about {blog.category} and stay ahead in the industry.</p>
                    <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                      Read More
                    </button>
                  </div>
                </div>
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
}

export default Blogs