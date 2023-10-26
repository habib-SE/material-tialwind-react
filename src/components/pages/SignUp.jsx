import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import background3 from "../../imgs/background-3.jpg";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
    // Add your form submission logic here
  };

  return (
    <div className=" relative">
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

      {/* Sign Up form */}
      <div className="min-h-screen pb-52 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
          <h2 className="text-2xl font-bold mb-4 border bg-blue-700 text-white text-center rounded-md p-3 ">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md"
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border rounded-md"
                id="email"
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border rounded-md"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-700 text-sm">
                  I agree to the terms and conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full"
            >
              Sign Up
            </button>
          </form>
          <div className="flex py-4 mx-5 w-full">
              <p>Don't have an account?</p>
              <Link > <button className=" text-blue-700 hover:text-blue-600 font-bold mx-1">Sign In</button></Link>
             
            </div>
        </div>
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

export default SignUp;
