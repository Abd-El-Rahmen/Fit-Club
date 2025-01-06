import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import nb from '../assets/nb.png'
import adidas from '../assets/adidas.png'
import nike from '../assets/nike.png'




const Reasons = () => {
  return (
    <div className="px-5 py-[2rem] flex gap-[2rem] md:flex-col md:px-2">
      <div
        className="grid gap-[1rem] grid-cols-3 flex-1"
        style={{ gridAutoRows: "1fr" }}
      >
        <img
          className="bg-cover w-[12rem] h-[28rem] row-span-2 sm:hidden"
          src={image1}
          alt=""
        />
        <img
          className="bg-cover col-start-2 col-end-4 w-auto h-[16rem] sm:col-start-1"
          src={image2}
          alt=""
        />
        <img
          className="bg-cover row-start-2 col-start-2 col-end-3  w-[14rem] sm:col-start-1 "
          src={image3}
          alt=""
        />
        <img
          className="bg-cover row-start-2 col-start-3 col-end-4 w-[10rem]"
          src={image4}
          alt=""
        />
      </div>
      <div className="flex-1 uppercase gap-[1rem] flex flex-col md:self-center ">
        <span className="font-bold text-customOrange md:self-center">some reasons</span>
        <div className="text-white text-[3rem] font-bold md:text-center ">
          <span className="stroke-text ">why </span>
          <span>choose us?</span>
        </div>
        <div className="flex flex-col gap-6 uppercase md:self-center">
          <div className="flex items-center gap-3">
            <img src={tick} className="w-8" alt=""></img>
            <span className="text-white text-[1rem] font-bold">
              over 140+ expert coachs
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} className="w-8" alt="" />
            <span className="text-white text-[1rem] font-bold">
              train smarter and faster than before
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} className="w-8" alt="" />
            <span className="text-white text-[1rem] font-bold">
              1 free program for new member
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} className="w-8" alt="" />
            <span className="text-white text-[1rem] font-bold">
              reliable partners
            </span>
          </div>
        </div>
        <span className="text-gray font-normal md:self-center">OUR PARTNERS</span>
        <div className="flex gap-3  md:self-center">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
