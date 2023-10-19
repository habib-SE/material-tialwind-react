import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "../../node_modules/react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white-600 p-4 imageWrapper  ">
        <div className="container mx-auto flex items-center justify-between hidden md:flex">
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
         
        </div>
        <div className="block md:hidden  mx-[650px] ">
            <AiOutlineClose size={20}  color="white"/>
            <AiOutlineMenu size={20}  color="white"/>
          </div>
        {/* Centered navigation links */}

        <ul
          className={"md:space-x-6 justify-between items-center sm:flex-col"}
        >
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-semibold">
              Material Tailwind React
            </a>
          </div>
          <li></li>
          <li className="nav-item">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="text-white hover:text-gray-300">
              Service
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="text-white hover:text-gray-300">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="text-white hover:text-gray-300">
              Docs
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
          
        </ul>
         {/* Buttons on the right */}
         <div className="w-full grid grid-cols text-right flex-col space-x-4">
         <button className="py-2 text-white px-4 rounded-full font-bold hover:bg-blue-200">PRO VERSION</button>
         <button className=" bg-blue-700 font-bold text-white py-2 px-4 rounded-full hover:bg-blue-600">FREE DOWNDLOAD</button>
        </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
