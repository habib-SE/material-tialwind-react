import React from 'react'


const Home = () => {
 
  return (
    <div>

       {/* Home text */}
       <div className="text-white py-6 ">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
              Your story starts with us.
            </h1>
            <p className="md:text-2xl text-xl font-bold text-gray-300">
              his is a simple example of a Landing Page you can build using
              Material Tailwind. It features multiple components based on the
              Tailwind CSS and Material Design by Google.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Home;