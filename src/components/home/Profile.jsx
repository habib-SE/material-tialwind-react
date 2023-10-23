import React from "react";
import background2 from "../../imgs/background-2 (2).jpg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Image2 from "../../imgs/team-2.jpg";
const Profile = () => {
  return (
    <div className="profile">
      <Link to="/profile">
        <Navbar />
      </Link>
      <img
        className="bg2 bg-contain md:bg-contain h-full w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background2})`,
          backgroundSize: "cover ",

        }}
        alt="/"
      />
      <div className="relative  h-screen">
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img src={Image2} className=" h-40 w-40 mx-[20%] mt-[-300%] rounded-full  " alt="/" />
        </div>
        <div className="max-w-[1200px] md:flex  border rounded-lg mx-56 bg-white mt-[130px] w-full h-[90%] justify-center">
          <div className="absolute   mr-[60%]   transform -translate-x-1/2">
            <div className="font-bold text-xl">20</div>
          </div>
          <div className="absolute   mr-[47%]   transform -translate-x-1/2">
            <div className="font-bold text-xl">10</div>
          </div>
          <div className="absolute   mr-[35%]   transform -translate-x-1/2">
            <div className="font-bold text-xl">100</div>
          </div>
          <ul className="text-xl p-8 space-x-10 hidden mr-[60%] md:flex">
            <li className=" text-slate-400">Friends</li>
            <li className=" text-slate-400">Photo</li>
            <li className=" text-slate-400">Coments</li>
          </ul>
          <div className="flex py-3">
            <button className="bg-blue-700 mt-2 font-bold text-white h-10 mr-4 py-2 px-4 rounded-md hover:bg-blue-600">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
