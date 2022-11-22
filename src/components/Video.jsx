import React from "react";

const Video = () => {
  return (
    <div className='overflow-hidden scroll-smooth"'>
      <div className="h-auto w-auto z-auto bg-white">
        <div>
          <iframe
            className="xl:w-64 xl:h-60 lg:w-52 lg:h-52 md:w-44 md:h-44 sm:w-28 sm:h-28 rounded-lg mt-10"
            controls
            src="https://www.youtube.com/embed/1UZbI-GZ-Bg"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div>
            <h5 className="font-semibold xl:text-lg md:text-base">
              Neha Kakkar, Rohan Preet <br /> Barish Mein Tum
            </h5>
            <span className="text-red-600 mt-1 xl:text-base md:text-sm">
              Today at 10:00 PM
            </span>
            <div className="flex">
              <img
                src="img/character.jpg"
                className="flex cursor-pointer xl:h-10 xl:w-10 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-4 sm:w-4 rounded-full mt-2"
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
