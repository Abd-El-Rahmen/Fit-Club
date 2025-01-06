import React from "react";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState();
  useEffect(() => {
    setIsOpen(false);
  }, []);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between ">
      <img className="w-[10rem] h-[3rem]" src={Logo} alt="" />
      <ul className="lg:hidden list-none flex gap-[2rem] text-white">
        <li className="cursor-pointer hover:text-customOrange">Home</li>
        <li className="cursor-pointer hover:text-customOrange">Programs</li>
        <li className="cursor-pointer hover:text-customOrange">Why us</li>
        <li className="cursor-pointer hover:text-customOrange">Plans</li>
        <li className="cursor-pointer hover:text-customOrange">Testimonials</li>
      </ul>

      <div className="hidden lg:flex">
        <button
          className=" flex flex-col justify-center items-center mr-4"
          onClick={handleClick}
        >
          <span
            className={`bg-black block h-0.5 w-6 transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 " : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-black block h-0.5 w-6 rounded-sm transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black block h-0.5 w-6 transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`hidden lg:${
          isOpen
            ? "flex absolute right-1 top-24 m-0  bg-transparent dark:bg-dark  flex-col items-center justify-center z-50 p-8  border border-dark  dark:border-light"
            : ""
        }`}
        style={{
          maxWidth: "50%",
          maxHeight: "100%",
          margin: "auto",
          borderRadius: "8px",
        }}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li className="cursor-pointer hover:text-customOrange">Home</li>
          <li className="cursor-pointer hover:text-customOrange">Programs</li>
          <li className="cursor-pointer hover:text-customOrange">Why us</li>
          <li className="cursor-pointer hover:text-customOrange">Plans</li>
          <li className="cursor-pointer hover:text-customOrange">
            Testimonials
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
