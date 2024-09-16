import React from "react";
import boy from "../assets/boy.png";
import notification from "../assets/notification.png";
import search from "../assets/search.png";

const Header = () => {
  return (
    <>
      <div
       
        className="h-[10vh] w-full px-4 sm:px-6 lg:px-8 bg-[#1A1C33]"
      >
        <div className="flex items-center justify-between h-full w-full">
          <div className="flex items-center">
            <span className="rounded  bg-white w-8 h-8 sm:w-10 sm:h-10 text-2xl sm:text-3xl p-1 sm:p-2 font-semibold m-3 sm:m-5 flex justify-center items-center">
              S
            </span>
            <span className="text-white text-xl sm:text-2xl">Dashboard</span>
          </div>

          <div className="h-full w-full sm:w-[70vh] flex gap-3 sm:gap-4 items-center justify-end">
            
            <div className="flex items-center w-[35vh] sm:w-[40vh] bg-slate-600 h-10 sm:h-12 rounded-full border border-white">
              <img
                className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5 m-2 sm:m-3"
                src={search}
                alt="search"
              />
              
             
              <input
                type="text"
                className="bg-transparent text-lg text-white outline-none w-full h-full px-2"
                placeholder="Search for..."
              />
            </div>

            <div className= " border-white border cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center">
              <img
                className="w-4 h-4 sm:w-5 sm:h-5 "
                src={notification}
                alt="Notification"
              />
            </div>

            <div className="cursor-pointer border-white border w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center">
              <img className="w-6 h-6 sm:w-7 sm:h-7" src={boy} alt="User" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
