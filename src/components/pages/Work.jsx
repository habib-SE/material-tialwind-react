import React from "react";
import Card from "./Card";

const Work = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Column 1 */}
      <div className="work mt-[40%] w-full ml-[10%]">
        <h1 className="text-2xl font-bold">Working with us is a pleasure</h1>
        <p className=" w-full">
          Don't let your users guess by attaching tooltips and popovers to any
          element. Just make sure you enable them first via JavaScript. The kit
          comes with three pre-built pages to help you get started faster. You
          can change the text and images, and you're good to go. Just make sure
          you enable them first via JavaScript.
        </p>
        <div>
          <button className="bg-black mt-2 font-bold text-white h-10 mr-4 py-2 px-4 rounded-md">Read More</button>
        </div>
      </div>

      {/* Column 2 */}
      <div className="card-wrapper mt-[40%] w-full ml-[30%]">
        <Card
          
          title="Verified Company"
          text="Write a few lines about each one. A paragraph describing a feature will be enough. Keep your user engaged!"
        />
        {/* Add another Card component here or any other content for the second column */}
      </div>
    </div>
  );
};

export default Work;
