import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* <!-- Logo on the left --> */}
        <div className="flex items-center">
          <a href="/" className="text-white text-xl font-semibold">
            Material Tailwind React
          </a>
        </div>

        {/* <!-- Centered navigation links --> */}
        <ul className="flex space-x-8">
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
            className="bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-blue-200"
          >
            Pro version
          </a>
          <a
            href="/"
            className="bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-blue-200"
          >
            Free downdload
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
