import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "../../node_modules/react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white-600 p-4 imageWrapper  ">
        <div className="container mx-auto  items-center justify-between hidden md:flex">
          {/* <!-- Logo on the left --> */}
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-semibold">
              Material Tailwind React
            </a>
          </div>

          {/* <!-- Centered navigation links --> */}
          <ul className="flex space-x-8 ">
            <li className="nav-item">
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="text-white hover:text-gray-300">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="text-white hover:text-gray-300">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="text-white hover:text-gray-300">
                Sign up
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="text-white hover:text-gray-300">
                Docs
              </a>
            </li>
          </ul>

          {/* <!-- Buttons on the right --> */}
          <div className="flex space-x-4">
            <a
              href="/"
              className="py-2 text-white px-4 rounded-full font-bold hover:bg-blue-200"
            >
              PRO VERSION
            </a>
            <a
              href="/"
              className=" bg-blue-700 font-bold text-white py-2 px-4 rounded-full hover:bg-blue-600"
            >
              FREE DOWNLOAD
            </a>
          </div>
          <div className=" group block md:hidden  justify-between ">
            <AiOutlineClose size={20} color="white" />
            <AiOutlineMenu size={20} color="white" />
          </div>
        </div>

        {/* Centered navigation links */}
        <div className="md:hidden">
          <div className="flex items-center mb-3">
            <a href="/" className="text-white text-xl font-semibold">
              Material Tailwind React
            </a>
          </div>
          <ul className=" justify-between space-x-4 items-center sm:flex-col w-[600px] h-[350px] border rounded-lg p-8 bg-white ">
            <li></li>
            <li className="nav-item p-2">
              <a href="/" className="text-black ">
                Home
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="/" className="text-black ">
                Profile
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="/" className="text-black ">
                Sign in
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="/" className="text-black ">
                Sign up
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="/" className="text-black ">
                Docs
              </a>
            </li>
            {/* Buttons on the right */}
            <div className="w-[100%] mt-4 grid">
              <button className="py-2 text-blue-700 px-4 rounded-md font-bold hover:bg-blue-200">
                PRO VERSION
              </button>
              <button className=" bg-blue-700 mt-2 font-bold text-white py-2 px-2 rounded-md hover:bg-blue-600">
                FREE DOWNDLOAD
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
