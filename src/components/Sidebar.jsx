import React  from 'react'
import { BsHouse, BsPeople, BsChat, BsBell, BsPerson, BsCompass, BsGear } from "react-icons/bs";


const Sidebar = () => {
  return (

 <div>
  <div className="flex fixed h-screen">
    
      <div className="xl:w-52 lg:w-48 p-5 pt-6 bg-slate-100 border-r relative">
           <a href="/" className="flex">
            <img src="img/Redgrip.png" className="w-28 " alt="" />
          </a>
          
        <div className="flex gap-x-4 items-center cursor-pointer mt-8 p-2 hover:bg-gray-200 rounded-md hover:scale-105 delay-75">
          <BsHouse
            className="w-6 h-6 rounded"
           
          />
          <h1
            className="cursor-pointer font-medium"
          >
            Home
          </h1>
        </div>
        <div className="flex gap-x-4 cursor-pointer items-center mt-4 p-2 hover:bg-gray-200 rounded-md hover:scale-105 delay-75">
          <BsPeople
            className="w-6 h-6 rounded"           
          />
          <h1
            className="font-medium"
          >
            Community
          </h1>
        </div>
        <div className="flex gap-x-4 items-center cursor-pointer mt-4 p-2 hover:bg-gray-200 rounded-md hover:scale-105 delay-75">
          <BsChat
            className="w-6 h-6 rounded"
           
          />
          <h1
            className="font-medium"
          >
            Messages
          </h1>
        </div>
        <div className="flex gap-x-4 items-center cursor-pointer mt-4 p-2 hover:bg-gray-200 rounded-md hover:scale-105 delay-75">
          <BsBell
            className="w-6 h-6 rounded"
            
          />
          <h1
            className="font-medium"
          >
            Notification
          </h1>
        </div>
        <div className="flex gap-x-4 items-center cursor-pointer mt-4 p-2 hover:bg-gray-200 rounded-md hover:scale-105 delay-75">
          <BsCompass
            className="w-6 h-6 rounded"
            
          />
          <h1
            className="font-medium"
          >
            Explore
          </h1>
        </div>
        <div className="flex gap-x-4 items-center cursor-pointer mt-4 p-2 hover:bg-gray-200 rounded-md hover:scale-105 delay-75">
          <BsPerson
            className="w-6 h-6 rounded"
          
          />
          <h1
            className="font-medium"
          >
            Profile
          </h1>
        </div>
        <div className="flex gap-x-4 items-center cursor-pointer mt-4 p-2 hover:bg-gray-200 rounded-md hover:scale-105 delay-100">
          <BsGear
            className="w-6 h-6 rounded"
            
          />
          <h1
            className="font-medium"
          >
            Setting
          </h1>
        </div>
        <div className="flex md:order-2 p-1 mt-6 gap-x-3 rounded-md cursor-pointer hover:bg-gray-200 hover:scale-105 delay-75">
            <img
              className="w-8 h-8 rounded-full"
              src="img/character.jpg"
              alt="Rounded avatar"
            />
            <h1 className="font-medium mt-1">Profile</h1>
          </div>
          <h1 className='text-xs mt-16 ml-2'>Follow For More <br />&copy; 2022 Redgrip</h1>
      </div>
    </div>
 </div>
  )
}

export default Sidebar