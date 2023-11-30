import React from "react";
import { MdChatBubble } from "../../../node_modules/react-icons/md";

const Card = ({ title, text }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div className=" ml-[40%] mt-[10%]">
          <MdChatBubble size={40} />
        </div>

        <div className=" px-[4%] py-[4%]">
          <div className="font-bold text-center mb-2">{title}</div>
          <p className="text-gray-700 mx-auto text-center flex flex-col justify-center w-full text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
