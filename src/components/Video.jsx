import React from "react";

const Video = () => {
  return (
    <div className='overflow-hidden scroll-smooth"'>
      <div className="h-auto w-auto bg-white">
        <div>
          <img src="img/cover.jfif" className="xl:w-64 xl:h-44 lg:w-72 lg:h-44 md:w-72 md:h-44 sm:w-96 sm:h-52 x rounded-lg mt-6" alt="" />
            <div className="xl:w-64 lg:w-72 md:w-72 sm:w-96">
            <h5 className="font-medium lg:text-base md:text-lg ">
              Neha Kakkar, Rohan Preet Barish Mein Tum
            </h5>
            <span className="text-red-600 mt-1 xl:text-base md:text-sm">
              Today at 10:00 PM
            </span>
            <div className="flex">
              <img
                src="img/character.jpg"
                className="flex cursor-pointer h-8 w-8  rounded-full mt-2"
                alt=""
                />
              <h3 className="flex ml-2 mt-3 font-medium xl:text-base md:text-sm">
                Sara Bareilles
              </h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
