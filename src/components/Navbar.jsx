import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Button from "./Button";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <nav
        className={`padded fixed top-0 left-0 w-full z-50 grid grid-cols-2 md:grid-cols-4 items-center px-10 h-18 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? "bg-white/20" : "bg-transparent"
        }`}
      >
        <div className="col-span-1 flex items-center">
          <div className="logo text-2xl text-orange-600 font-bold">
            Axion<span className="text-blue-600">Tech</span>
            <span className="text-orange-600">.</span>
          </div>
        </div>

        <div className="col-span-1 md:hidden flex justify-end">
          <button onClick={() => setIsOpen(true)}>
            <FiMenu size={28} className="text-gray-700" />
          </button>
        </div>

        <div className="hidden md:flex col-span-2 justify-center">
          <ul className="flex gap-10 font-semibold">
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
          </ul>
        </div>

        <div className="hidden md:flex col-span-1 justify-end">
          <Button text="Contact Us" to="/contact" className="py-2.5 px-3" />
        </div>
      </nav>

      {/* Side Menu Component */}
      <SideMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;