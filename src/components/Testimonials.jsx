import React, { useState } from "react";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [ind, setInd] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="flex gap-5 px-[2rem]">
      <div className="flex flex-1 gap-[2rem] flex-col uppercase">
        <span className="text-customOrange font-bold">Testimonials</span>
        <span className="stroke-text text-[3rem] font-bold text-white">
          What they
        </span>
        <span className="text-[3rem] font-bold text-white">say about us</span>
        <motion.span
          key={ind}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          className="normal-case tracking-normal leading-10 text-white"
        >
          {testimonialsData[ind].review}
        </motion.span>
        <span className="text-customOrange text-justify ">
          <span>{testimonialsData[ind].name}</span>-{" "}
          {testimonialsData[ind].status}
        </span>
      </div>
      <div className="flex-1 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-64 h-80 border border-solid border-customOrange bg-transparent right-40 top-4"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-64 h-80  bg-customOrange right-28 top-14"
        ></motion.div>
        <motion.img
          key={ind}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          className="absolute w-[17rem] h-[20rem] object-cover right-32 top-8 "
          src={testimonialsData[ind].image}
          alt=""
        />
        <div className="flex absolute gap-4 bottom-4 left-12">
          <img
            className="w-6 cursor-pointer"
            onClick={() => {
              ind === 0 ? setInd(tLength - 1) : setInd((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              ind === tLength - 1 ? setInd(0) : setInd((prev) => prev + 1);
            }}
            className="w-6 cursor-pointer"
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
