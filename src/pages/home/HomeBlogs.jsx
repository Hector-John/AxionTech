import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import images from '../../assets/images';

const HomeBlogs = () => {
  return (
    <div className="p-8 ">
        <p className="text-blue-600 font-semibold text-center">
        Latest Post
        </p>
        <h2 className="text-3xl text-center font-bold mt-2 mb-6 text-gray-700 tracking-tight leading-tight">
          Latest Blog Posts
        </h2>

      <div className="grid grid-cols-3 gap-10">
        {/* Blog 1 */}
        <Link to="/blogs" className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col gap-6">
            <img
              src={images.profile7}
              alt="Blog Image"
              className="transition-transform transform hover:scale-110 duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                The Future of Web Development
              </h2>
              <p className="text-gray-500 mb-4">
                Explore the trends that are shaping the future of web development. From AI-driven designs to the rise of no-code tools, discover what’s next for developers.
              </p>

              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt size={14} />
                  <span>Feb 18, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaUserAlt size={14} />
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Blog 2 */}
        <Link to="/blogs" className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col gap-6">
            <img
              src={images.profile7}
              alt="Blog Image"
              className="transition-transform transform hover:scale-110 duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                How to Optimize Your Website’s Performance
              </h2>
              <p className="text-gray-500 mb-4">
                Learn the best strategies for optimizing website performance, improving load times, and enhancing the user experience on your site.
              </p>

              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt size={14} />
                  <span>Feb 12, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaUserAlt size={14} />
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Blog 3 */}
        <Link to="/blogs" className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col gap-6">
            <img
              src={images.profile7}
              alt="Blog Image"
              className="transition-transform transform hover:scale-110 duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                The Importance of User Experience in Design
              </h2>
              <p className="text-gray-500 mb-4">
                User experience is key to creating successful websites. In this post, we’ll discuss the importance of UX and tips for designing intuitive and engaging experiences.
              </p>

              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt size={14} />
                  <span>Feb 10, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaUserAlt size={14} />
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogs;
