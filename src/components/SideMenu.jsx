import React from "react";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Button from "./Button";

const SideMenu = ({ isOpen, closeMenu }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <div className="logo text-2xl text-orange-600 font-bold">
            Axion<span className="text-blue-600">Tech</span>
            <span className="">.</span>
          </div>
          <button onClick={closeMenu}>
            <FiX size={28} className="text-gray-700" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-5 font-semibold">
          <li>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600 block"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="text-gray-700 hover:text-blue-600 block"
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-gray-700 hover:text-blue-600 block"
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className="text-gray-700 hover:text-blue-600 block"
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
              <Button text="Contact Us" to="/contact" className=" py-3 px-3" 
              onClick={closeMenu}
              />
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default SideMenu;
