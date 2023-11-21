// Home.js

import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Link to="/">
        <Navbar />
      </Link>

      {/* Upper Section */}
      <div className="text-white py-6 relative">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
            Your story starts with us.
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-300">
            This is a simple example of a Landing Page you can build using
            Material Tailwind. It features multiple components based on the
            Tailwind CSS and Material Design by Google.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mx-auto absolute top-[90%] inset-0 flex items-center justify-center z-10">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex">
            <Card title="Awarded Agency" text="Divide details about your product or agency work into parts. A paragraph describing a feature will be enough." />
          </div>
          <div className="flex">
            <Card title="Free Revisions" text="
          Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious." />
          </div>
          <div className="flex">
            <Card title="Verified Company" text="Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
