import React from "react";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="flex flex-col gap-[2rem] py-[2rem]">
      <div className="flex gap-[5rem] font-bold text-[3rem] justify-center text-white uppercase italic lg:flex-col lg:text-center lg:gap-10">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="flex p-4 gap-[1rem] md:flex-col">
        {programsData.map((program) => (
          <div className="flex flex-col bg-gray p-[2rem] text-white justify-between gap-[1rem] bg-planCard">
            {program.image}
            <span className="text-[1rem] font-bold">{program.heading}</span>
            <span  className="text-[0.9rem] leading-[25px] ">{program.details}</span>
            <div className="flex items-center gap-[2rem]">
              <span >Join Now</span> <img src={RightArrow} className="w-[1.5rem]" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
