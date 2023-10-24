import React from "react";
import background2 from "../../imgs/background-2 (2).jpg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Image2 from "../../imgs/team-2.jpg";
import {
  FaMapMarker,
  FaUniversity,
  FaCheck,
} from "react-icons/fa";
import Line from "../Line";

const Profile = () => {
  return (
    <div className="profile">
      <Link to="/profile">
        <Navbar />
      </Link>
      <img
        className="bg2 bg-contain md:bg-contain w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background2})`,
          backgroundSize: "cover ",
        }}
        alt="/"
      />
      <div className="relative  h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={Image2}
            className=" h-40 w-40  mt-[-300%] rounded-full  "
            alt="/"
          />
        </div>
        <div className="max-w-[1200px] md:flex p-8  border rounded-lg mx-56 bg-white mt-[130px] w-full h-[90%] justify-center">
          <div className="absolute   mr-[60%]   transform -translate-x-1/2">
            <div className="font-bold text-xl">20</div>
          </div>
          <div className="absolute   mr-[47%]   transform -translate-x-1/2">
            <div className="font-bold text-xl">10</div>
          </div>
          <div className="absolute   mr-[35%]   transform -translate-x-1/2">
            <div className="font-bold text-xl">100</div>
          </div>
          <ul className="text-xl p-8 space-x-10 hidden  mr-[60%] md:flex">
            <li className=" text-slate-400">Friends</li>
            <li className=" text-slate-400">Photo</li>
            <li className=" text-slate-400">Coments</li>
          </ul>
          <div className="flex py-3">
            <button className="bg-blue-700 mt-2 font-bold text-white h-10 mr-4 py-2 px-4 rounded-md hover:bg-blue-600">
              Contact
            </button>
          </div>
          <div className="absolute transform -translate-x-1/2 text-center mt-[10%] ml-[30%]">
            <h1 className="font-bold text-4xl mr-10">Jenna Stones</h1>
            <span className="flex ml-5">
              <FaMapMarker className="mt-[5%] ml-5" />
              <p className="text-gray-600 text-xl mx-4 py-2">
                Los Angeles, California
              </p>
            </span>
            <div className="py-[30%]">
              <span className=" text-gray-600 text-xl flex">
                <FaCheck className="mt-[2%] " />
                <p className="mx-3">Solution Manager - Creative Tim Officer</p>
              </span>
              <span className=" text-gray-600 text-xl flex">
                <FaUniversity className="mt-[4%] ml-3" />
                <p className="py-2 mx-4 ">University of Computer Science</p>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[70%] ml-[49%] transform -translate-x-1/2 -translate-y-1/2">
          <Line />
          <p className=" text-center text-gray-500  text-xl py-4">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
        </div>
        <button className="absolute top-[85%] ml-[49%] uppercase transform -translate-x-1/2 -translate-y-1/2  mt-2 font-bold text-blue-700 h-10 mr-4 py-2 px-4 rounded-md hover:bg-slate-200">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Profile;
