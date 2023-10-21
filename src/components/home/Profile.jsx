import React from 'react'
import background2 from "../../imgs/background-2 (2).jpg"

const Profile = () => {
  return (
    <div className='Profile'>
      <img className="bg2 bg-contain md:bg-contain"  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background2})`,
    backgroundSize: 'cover',}} alt="/" />
      <div  className='max-w-[1000px] border rounded-lg mx-40 bg-white mt-[130px] w-full h-screen justify-center'>
      <ul className='container mx-auto text-2xl p-4 space-x-10 hidden md:flex'>
        <li>Friends</li>
        <li>Photo</li>
        <li>Coments</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile