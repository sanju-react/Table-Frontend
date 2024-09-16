import React from "react";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";

const Siderbar = () => {
  const boxs = 5;
  return (
    <>
      <div className="ml-5 mt-5 rounded-full h-[85vh] w-[8vh] bg-white  border flex flex-col items-center justify-start ">
        {Array.from({ length: boxs }).map((_, index) => (
          <div
            key={index}
            className="cursor-pointer group hover:bg-[#1A1C33] flex justify-center items-center  border bg-white border-[#1A1C33] w-[5vh] aspect-square mt-5  rounded-full relative group"
          >
            <img
              src={home2}
              alt="home2"
              className="absolute h-[3vh] transition-opacity duration-300"
            />
            <img
              src={home1}
              alt="home1"
              className="absolute h-[3vh] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Siderbar;
