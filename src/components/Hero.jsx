import React from "react";
import Header from "./Header";
import hero_img from "../assets/hero_image.png";
import hero_img_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="flex justify-between lg:flex-col">
      <div
        className="w-[22rem] h-[30rem] absolute bg-orange-500 bg-opacity-70 rounded-full filter blur-[150px]"
        style={{ zIndex: "-9" }}
      />
      {/* left */}
      <div
        className="flex flex-col gap-[2rem] p-[2rem] pt-[1.5rem] flex-3 md:px-3"
        style={{ flex: 3 }}
      >
        <Header />
        {/* the best ad */}
        <div className="mt-[4rem] bg-strangerDark rounded-[4rem] w-fit px-[20px] py-[13px] uppercase text-white relative flex items-center justify-start lg:self-center">
          <motion.div
            className="absolute z-10 bg-customOrange w-[5.4rem] h-[80%] left-[8px] rounded-[3rem]"
            initial={{ left: "238px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span className="z-20">The best fitness club in the town</span>
        </div>
        <div className="flex flex-col gap-[1.5rem] uppercase text-[4.5rem] font-bold text-white ">
          <div className="sm:text-5xl md:text-6xl lg:self-center">
            <span className="stroke-text ">Shape </span>
            <span>Your</span>
          </div>
          <div className="sm:text-5xl md:text-6xl lg:self-center">
            <span>Ideal body</span>
          </div>
          <div className="text-[1rem] font-medium tracking-[1px] w-[60%] normal-case lg:text-center lg:self-center">
            <span className="">
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="flex gap-[2rem] lg:self-center">
          <div className="flex flex-col text-center">
            <span className="text-white text-[2rem]">+140</span>
            <span className="text-gray uppercase">expert coachs</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-white text-[2rem]">+978</span>
            <span className="text-gray uppercase">members joined</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-white text-[2rem]">+50</span>
            <span className="text-gray uppercase">fitness programs</span>
          </div>
        </div>
        {/* Hero Button */}
        <div className="flex gap-[1rem] font-medium lg:self-center">
          <button className="text-white text-center p-[0.5rem] border-4 border-transparent transition-all duration-300 bg-customOrange w-[8rem]  cursor-pointer">
            Get Started
          </button>
          <button className="text-white text-center w-[8rem] bg-transparent p-[0.5rem] border-2 hover:border-customOrange border-transparent transition-all duration-300  cursor-pointer sm:border-customOrange">
            Learn More
          </button>
        </div>
      </div>
      {/* right */}
      <div className="lg:hidden relative bg-customOrange" style={{ flex: 1 }}>
        <motion.div
          className="flex flex-col w-fit gap-[1rem] bg-darkGrey p-[1rem] items-start justify-center rounded-[5px] absolute right-[4rem] top-[7rem] "
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" className="w-[2rem]" />
          <span className="text-gray">Heart Rate</span>
          <span className="text-white text-[1.5rem]">116 bpm</span>
        </motion.div>
        <img
          src={hero_img}
          alt=""
          className="absolute top-[10rem] right-[10rem] w-[23rem] z-10"
        />
        <motion.img
          src={hero_img_back}
          alt=""
          className="absolute top-[4rem] right-[18rem] w-[15rem]"
          initial={{ right: "11rem" }}
          whileInView={{ right: "18rem" }}
          transition={transition}
        />
        {/* calories */}
        <motion.div
          className="flex gap-[2rem] bg-caloryCard rounded-[5px] p-[1rem] w-[80%] absolute top-[35rem] "
          initial={{ right: "37rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
        >
          <img src={Calories} alt="" className="w-[3rem]" />
          <div className="flex flex-col justify-between ">
            <span className="text-gray">Calories Burned</span>
            <span className="text-3xl text-white">220 kcal</span>
          </div>
        </motion.div>
        <button className="absolute text-black right-[3rem] top-[2rem] p-2 bg-white">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
