import React, { useState } from "react";
import background3 from "../../imgs/background-3.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic 
  };
  return (
    <div className="relative">
      <Link>
        <Navbar />
      </Link>
      <img
        className="bg3 bg-contain md:bg-contain w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background3})`,
          backgroundSize: "cover ",
        }}
        alt="/"
      />
      {/* Header of button */}
      <div className=" bg-blue-700  text-white font-bold p-4 sm:p-2 sm:w-[10%] sm:text-xl w-[30%] text-2xl text-center absolute transform -translate-x-1/2 mt-[10%] ml-[50%] rounded-md">
        <button>Sign In</button>
      </div>
      

      {/* Sign In form */}
      <div className="w-2/1 h-3/1 py-[14%] max-w-sm mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-gray-700 text-sm">Remember me</span>
            </label>
          </div>
          <div className="flex items-center py-3 justify-between">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
           
          </div>
          <div className="flex py-3 mx-5 w-full">
              <p>Don't have an account?</p>
              <button className=" text-blue-700 hover:text-blue-600 font-bold mx-1">Sign Up</button>
            </div>
        </form>
      </div>
       {/* Sign up footer */}
       <div className=" text-white flex justify-between ">
        <p className=" w-full mb-10 ml-5">
          © 2023, made with by Creative Tim for a better web.
        </p>
        <ul className="flex mb-10 space-x-12 w-full ml-[40%] ">
          <a href="https://www.creative-tim.com/?_ga=2.121443400.1512150645.1698038522-1444195519.1697136884">
            <li>Creative Tim</li>
          </a>
          <a href="https://www.creative-tim.com/presentation?_ga=2.55891435.1512150645.1698038522-1444195519.1697136884">
            <li>About Us</li>
          </a>
          <a href="https://www.creative-tim.com/blog?_ga=2.89464283.1512150645.1698038522-1444195519.1697136884">
            {" "}
            <li>Blog</li>
          </a>
          <a href="https://www.creative-tim.com/license?_ga=2.121557448.1512150645.1698038522-1444195519.1697136884">
            <li>icense</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SignIn;
