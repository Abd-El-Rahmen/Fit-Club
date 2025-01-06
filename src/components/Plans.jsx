import React from "react";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";
import { motion } from "framer-motion";
const Plans = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="flex flex-col relative  gap-14 py-[2rem]">
      <div
        className="w-[32rem] h-[23rem]  left-0 absolute bg-orange-500 bg-opacity-70 rounded-full filter blur-[150px]"
        style={{ zIndex: "-9" }}
      />
      <div
        className="w-[32rem] h-[23rem]  right-0 top-40 absolute bg-orange-500 bg-opacity-70 rounded-full filter blur-[150px]"
        style={{ zIndex: "-9" }}
      />
      <div className="flex items-center gap-[3rem] font-bold text-[3rem] justify-center text-white uppercase italic lg:flex-col lg:text-center lg:gap-10">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with</span>
      </div>
      <div className="flex justify-center p-4 gap-36 lg:flex-col ">
        {plansData.map((planData, index) => (
          <motion.div
            initial={index !== 1 ? { opacity: 0, y: -100 } : { opacity: 0, y: 100 }}
            whileInView={index !== 1 ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 ,scale:1.2}}
            transition={transition}
            key={index}
            className={`flex flex-col p-[1.5rem] text-white justify-between gap-8 bg-planCard ${
              index === 1
                ? "bg-customOrange transform "
                : "bg-caloryCard"
            } lg:w-[75%] lg:self-center lg:transform-none`}
          >
            {planData.icon}
            <span className="text-[1rem] font-bold">{planData.name}</span>
            <span className="text-6xl font-bold leading-[25px] mb-3">
              {planData.price}$
            </span>
            <div className="flex flex-col gap-4">
              {planData.features.map((feature, featureIndex) => (
                <div className="flex gap-5 items-center" key={featureIndex}>
                  <img src={whiteTick} className="w-[1.5rem] h-fit align-middle" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>{"See more benefits ->"}</span>
            </div>
            <div className="w-full flex justify-center">
              <button
                className={`w-[90%] bg-white font-semibold text-md p-2 ${
                  index === 1 ? "text-customOrange" : "text-black"
                }`}
              >
                Join Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
