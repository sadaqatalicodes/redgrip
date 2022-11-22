import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav className="px-2 sm:px-4 py-2.5 bg-white fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img src="img/Redgrip.png" className="w-36 h-10" alt="" />
          </a>
          <div className="flex md:order-2">
            <img
              className="w-10 h-10 rounded-md cursor-pointer"
              src="img/character.jpg"
              alt="Rounded avatar"
            />
            <h1 className="font-semibold ml-2 mt-1">pawelgrzesik</h1>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <form className="flex bg-slate-900 items-center ">
              <input
                type="text"
                placeholder="Search"
                className="border border-slate-400 h-10 w-60 px-4 outline-none rounded-sm"
              />
              <button className="h-10 w-10 flex items-center justify-center text-white">
                <BsSearch className="h-10" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
