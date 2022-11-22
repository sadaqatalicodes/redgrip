import React  from 'react'
import { BsHouse, BsPeople, BsChat, BsBell, BsPerson, BsCompass, BsGear } from "react-icons/bs";


const Sidebar = () => {
  return (

 <div>
  <div className="flex fixed">
      <div
        className="xl:w-52 lg:w-48 duration-300 h-screen p-5 pt-8 bg-white mt-14 relative">
        <div className="flex gap-x-4 items-center cursor-pointer p-2 hover:bg-gray-200 rounded-md">
          <BsHouse
            className="w-6 h-6 rounded duration-500"
           
          />
          <h1
            className="origin-left cursor-pointer font-medium duration-300"
          >
            Home
          </h1>
        </div>
        <div className="flex gap-x-4 cursor-pointer items-center mt-6 p-2 hover:bg-gray-400 rounded-md">
          <BsPeople
            className="w-6 h-6 rounded duration-500"           
          />
          <h1
            className="origin-left font-medium duration-300"
          >
            Community
          </h1>
        </div>
        <div className="flex gap-x-4 items-center mt-6 cursor-pointer p-2 hover:bg-gray-400 rounded-md">
          <BsChat
            className="w-6 h-6 rounded duration-500"
           
          />
          <h1
            className="origin-left font-medium duration-300"
          >
            Messages
          </h1>
        </div>
        <div className="flex gap-x-4 items-center mt-6 cursor-pointer p-2 hover:bg-gray-400 rounded-md">
          <BsBell
            className="w-6 h-6 rounded duration-500"
            
          />
          <h1
            className="origin-left font-medium duration-300"
          >
            Notification
          </h1>
        </div>
        <div className="flex gap-x-4 items-center mt-6 cursor-pointer p-2 hover:bg-gray-400 rounded-md">
          <BsCompass
            className="w-6 h-6 rounded duration-500"
            
          />
          <h1
            className="origin-left font-medium duration-300"
          >
            Explore
          </h1>
        </div>
        <div className="flex gap-x-4 items-center mt-6 cursor-pointer p-2 hover:bg-gray-400 rounded-md">
          <BsPerson
            className="w-6 h-6 rounded duration-500"
          
          />
          <h1
            className="origin-left font-medium duration-300"
          >
            Profile
          </h1>
        </div>
        <div className="flex gap-x-4 items-center mt-6 cursor-pointer p-2 hover:bg-gray-400 rounded-md">
          <BsGear
            className="w-6 h-6 rounded duration-500"
            
          />
          <h1
            className="origin-left font-medium duration-300"
          >
            Setting
          </h1>
        </div>
          <h1 className='font-bold text-sm mt-8'>Follow For More <br />&copy; 2022 Redgrip</h1>
      </div>
    </div>
 </div>
  )
}

export default Sidebar