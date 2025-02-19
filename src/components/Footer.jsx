import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="text-2xl font-bold">
            <span className="text-orange-600">Axion</span>
            <span className="text-blue-600">Tech</span>
            <span className="text-orange-600">.</span>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Innovating Tomorrow, Today.
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Future-Ready Solutions, Today.
          </p>
          <div className="mt-4 flex space-x-4">
            <Link to="#" className="hover:text-white text-gray-400 text-xl">
              <FaFacebookF />
            </Link>
            <Link to="#" className="hover:text-white text-gray-400 text-xl">
              <FaTwitter />
            </Link>
            <Link to="#" className="hover:text-white text-gray-400 text-xl">
              <FaLinkedinIn />
            </Link>
            <Link to="#" className="hover:text-white text-gray-400 text-xl">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-white text-gray-400">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white text-gray-400">
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white text-gray-400">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/services/" className="hover:text-white text-gray-400">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white text-gray-400">
                Product Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-white text-gray-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white text-gray-400">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white text-gray-400">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/support" className="hover:text-white text-gray-400">
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-white text-gray-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white text-gray-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 text-center text-sm pt-4">
        <p>&copy; {new Date().getFullYear()} AxionTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
