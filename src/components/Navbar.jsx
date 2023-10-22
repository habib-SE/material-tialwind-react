import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiOutlineProfile,
  AiOutlineMobile,
  AiOutlineUserAdd,
  AiOutlinePaperClip,
} from "../../node_modules/react-icons/ai";
import background from '../imgs/background1.jpeg'
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  

  return (
    <div >
       <img className="imageWrapper bg-contain md:bg-contain" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
    backgroundSize: 'cover',
  }} alt="/" />
      <nav className= "bg-white-600 p-4 ">
       
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
              <a href="/home" className="text-white flex  hover:text-gray-300">
                <AiFillHome className="mr-2" />
                <Link to='/home'>
            Home
          </Link>
              </a>
            </li>

            <li className="nav-item">
              <a href="/profile" className="text-white flex hover:text-gray-300">
                <AiOutlineProfile className="mr-2" />
                <Link to='/profile'>
            Profile
          </Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="/sign in" className="text-white flex hover:text-gray-300">
                <AiOutlineMobile className="mr-2" />
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a href="/sign up" className="text-white flex hover:text-gray-300">
                <AiOutlineUserAdd className="mr-2" /> Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a href="/docs" className="text-white flex hover:text-gray-300">
                <AiOutlinePaperClip className="mr-2" /> Docs
              </a>
            </li>
          </ul>

          {/* <!-- Buttons on the right --> */}
          <div className="flex space-x-4">
            <a
              href="/proversion"
              className="py-2 text-white px-4 rounded-full font-bold hover:bg-blue-200"
            >
              PRO VERSION
            </a>
            <a
              href="/fredownload"
              className=" bg-blue-700 font-bold text-white py-2 px-4 rounded-full hover:bg-blue-600"
            >
              FREE DOWNLOAD
            </a>
          </div>
        </div>

        {/* Hamburgur menu */}
        <a href="/#">
          <div
            onClick={handleClick}
            className="md:hidden block  mx-[94%] mt-6 z-10"
          >
            {!nav ? (
              <AiOutlineMenu size={20} color="white" />
            ) : (
              <AiOutlineClose size={20} color="white" />
            )}
          </div>
        </a>

        {/* Centered navigation links */}
        <div className="md:hidden relative top-[-1%]">
          <div className="flex items-center mb-5">
            <a href="/" className="text-white text-xl font-semibold">
              Material Tailwind React
            </a>
          </div>
          <ul
            className={
              !nav
                ? "hidden"
                : " justify-between space-x-4 items-center sm:flex-col w-[500px] h-[360px] border rounded-lg p-6 bg-white "
            }
          >
            <li></li>
            <div>
              <li className="nav-item p-2 ">
                <a href="/home" className="text-black flex ">
                  <AiFillHome className="mr-2" />
                  Home
                </a>
              </li>
            </div>

            <li className="nav-item p-2">
              <a href="/profile" className="text-black flex ">
                <AiOutlineProfile className="mr-2" /> Profile
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="/sign in" className="text-black flex ">
                <AiOutlineMobile className="mr-2" />
                Sign In
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="/sign up" className="text-black flex ">
                <AiOutlineUserAdd className="mr-2" /> Sign Up
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="/docs" className="text-black flex ">
                <AiOutlinePaperClip className="mr-2" /> Docs
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
