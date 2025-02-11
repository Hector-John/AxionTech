import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

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
      className={`padded fixed top-0 left-0 w-full z-100 grid grid-cols-3 items-center px-10 h-18 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-white/20" : "bg-transparent"
      }`}
    >
      <div className="logo text-2xl text-orange-600 font-bold">
        Axion<span className="text-blue-600">Tech</span>
        <span className="text-orange-600">.</span>
      </div>

      <ul className="flex gap-10 justify-center font-semibold ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`
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
              `${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            Blog
          </NavLink>
        </li>
        <li></li>
      </ul>

      <div className="flex justify-end">
        <Button text="Contact Us" to="/contact" className="py-2.5 px-3" />
      </div>
    </nav>
  );
};

export default Navbar;
