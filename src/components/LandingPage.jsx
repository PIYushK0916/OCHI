import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {

  return (

    <div data-scroll data-scroll-section data-scroll-speed = "-.3" className="w-full min-h-screen text-white bg-zinc-900 pt-1 font-neue-montreal">
      <div className="textstructure mt-44 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate = {{width: '9vw'}} transition={{ease:[0.76, 0, 0.24, 1], duration:"1"}} className="mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[0.2vw] relative bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"></motion.div>
                )}
                <div className="font-founders-grotesk font-semibold leading-[7vw] text-[8.5vw] uppercase">
                  <h1>{item}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-36 py-4 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => {
          return (
            <p className="text-xl leading-none py-5 px-20 tracking-normal font-light" key={index}>
              {items}
            </p>
          );
        })}
        <div className="start flex justify-center gap-3 items-center px-16">
          <button className="text-lg uppercase font-extralight rounded-full px-7 py-2 border-[1px] border-zinc-400">
            Start The Project
          </button>
          <div className="rounded-full border-[1px] border-zinc-400 justify-center flex items-center w-10 h-10">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
