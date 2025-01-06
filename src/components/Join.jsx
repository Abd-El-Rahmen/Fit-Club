import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm("", "", form.current, "").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="flex px-8 gap-40">
      <div className="text-white text-5xl font-bold uppercase relative">
        <div className="flex gap-4 ">
          <hr className="absolute w-[10.5rem] border border-solid border-customOrange rounded-[20%]" />
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>

        <div className="flex gap-4 ">
          <div>
            <span>YOUR BODY </span>
            <span className="stroke-text">WITH US</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-end">
        <form className="flex gap-12 bg-gray py-4 px-8" action="" onSubmit={sendEmail}>
          <input
            className="bg-transparent border-none outline-none text-lightgray placeholder-lightgray"
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button className="text-white text-center bg-customOrange w-[8rem]  p-[0.5rem] ">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
