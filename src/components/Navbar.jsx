import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`padded fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-14 py-5 h-20 transition-all duration-300 shadow-sm backdrop-blur-lg ${
        isScrolled ? "bg-white/20" : "bg-transparent"
      }`}
    >
      <div className="logo text-2xl font-bold">
        Axion<span className="text-blue-600">Tech</span><span className="text-orange-600">.</span>
      </div>

      <ul className="flex gap-10 font-medium justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
