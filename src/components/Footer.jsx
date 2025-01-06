import React from "react";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="relative ">
      <hr className="border-4 border-white" />
      <div className="py-4 px-8 flex flex-col gap-16 items-center justify-center h-[20rem]">
        <div className="flex gap-16">
          <img className="w-8 h-8 cursor-pointer" src={Github} alt="" />
          <img className="w-8 h-8 cursor-pointer" src={Instagram} alt="" />
          <img className="w-8 h-8 cursor-pointer" src={Linkedin} alt="" />
        </div>
        <div>
          <img className="w-40" src={Logo} alt="" />
        </div>
      </div>
      <div className="w-[26rem] h-[12rem]  bottom-0 right-[15%] absolute bg-red bg-opacity-70 rounded-full filter blur-[200px]" style={{zIndex: '-9'}}/>
      <div className="w-[26rem] h-[12rem]  bottom-0 left-[15%] absolute bg-orange-500 bg-opacity-70 rounded-full filter blur-[200px]" style={{zIndex: '-9'}}/>
    </div>
  );
};

export default Footer;
