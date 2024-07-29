import { motion } from "framer-motion";
import React, { useState } from "react";

const Feature = () => {
  const [a1, a2] = useState(false);
  const [b1, b2] = useState(false);
  const [c1, c2] = useState(false);
  const [d1, d2] = useState(false);

  return (
    <div className='w-full bg-zinc-100 font-["Neue_Montreal"]'>
      <div className="cont relative ">
        <h1 className='text-7xl px-16 pt-36 text-black font-["Neue_Montreal"]'>
          Featured projects
        </h1>
        <div className="border-t-[1px] border-zinc-400 mt-12">
          <div className="cards relative w-full h-[100vh] px-14 flex gap-5">
            <div className="card w-1/2 h-[95vh] overflow-hidden rounded-3xl">
              <motion.div
                className="label absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-semibold tracking-tight text-[#CDEA68]"
                initial={{ opacity: 0 }}
                animate={a1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              >
                FYDE
              </motion.div>
              <div className="pt-28 px-5 flex items-center gap-4">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <h1 className="text-black text-xl">FYDE</h1>
              </div>
              <div  onMouseEnter={() => a2(true)} onMouseLeave={() => a2(false)} className="img-cont w-full mt-5 h-[70vh] bg-zinc-400 overflow-hidden rounded-3xl">
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="FYDE" />
              </div>
              <div className="but mt-4 flex gap-4">
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  AUDIT
                </button>
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  COPYWRITING
                </button>
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  SALES DECK
                </button>
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  SLIDE DESIGN
                </button>
              </div>
            </div>
            <div className="card w-1/2 h-[95vh] overflow-hidden rounded-3xl">
              <motion.div
                className="label absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-semibold tracking-tight text-[#CDEA68]"
                initial={{ opacity: 0 }}
                animate={b1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              >
                VISE
              </motion.div>
              <div className="pt-28 px-5 flex items-center gap-4">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <h1 className="text-black text-xl">VISE</h1>
              </div>
              <div onMouseEnter={() => b2(true)} onMouseLeave={() => b2(false)}  className="img-cont w-full mt-5 h-[70vh] bg-zinc-400 overflow-hidden rounded-3xl">
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="VISE" />
              </div>
              <div className="but mt-4 flex gap-4">
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  AGENCY
                </button>
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  COMPANY PRESENTATION
                </button>
              </div>
            </div>
          </div>
          <div className="cards2 relative w-full h-[100vh] px-14 flex gap-5">
            <div className="card w-1/2 h-[95vh] overflow-hidden rounded-3xl">
              <motion.div
                className="label absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-semibold tracking-tight text-[#CDEA68]"
                initial={{ opacity: 0 }}
                animate={c1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              >
                TRAWA
              </motion.div>
              <div className="pt-10 px-5 flex items-center gap-4">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <h1 className="text-black text-xl">TRAWA</h1>
              </div>
              <div onMouseEnter={() => c2(true)} onMouseLeave={() => c2(false)} className="img-cont w-full mt-5 h-[70vh] bg-zinc-400 overflow-hidden rounded-3xl">
                <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="TRAWA" />
              </div>
              <div className="but mt-4 flex gap-4">
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  BRAND IDENTITY
                </button>
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  DESIGN RESEARCH
                </button>
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  INVESTOR DECK
                </button>
              </div>
            </div>
            <div className="card w-1/2 h-[95vh] overflow-hidden rounded-3xl">
              <motion.div
                className="label absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-semibold tracking-tighter flex text-[#CDEA68]"
                initial={{ opacity: 0 }}
                animate={d1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              >
                PRE. BLEND
              </motion.div>
              
              <div className="pt-10 px-5 flex items-center gap-4">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <h1 className="text-black text-xl">PREMIUM BLEND</h1>
              </div>
              <div onMouseEnter={() => d2(true)} onMouseLeave={() => d2(false)}  className="img-cont w-full mt-5 h-[70vh] bg-zinc-400 overflow-hidden rounded-3xl">
                <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="PREMIUM BLEND" />
              </div>
              <div className="but mt-4 flex gap-4">
                <button className="px-6 py-1 border-[2px] rounded-full text-xl border-zinc-500 text-black">
                  BRANDED TEMPLATE
                </button>
              </div>
            </div>
          </div>
          <div className="btn h-[10vh] flex justify-center items-center">
            <button className="uppercase text-lg flex items-center gap-6 text-white bg-zinc-800 px-10 py-5 rounded-full">
              view all case studies
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="client-details h-[110vh] pt-20">
            <div className="border-t-[1px] border-zinc-400 mt-12">
              <div className="cards gap-5 flex w-full px-20 mt-20">
                <div className="card w-1/2 h-[50vh] rounded-2xl flex justify-center relative items-center bg-[#004D43]">
                  <img className="w-[15vh]" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                  <button className="border-[1px] absolute bottom-8 left-8 text-lg rounded-full px-6 py-[6px] text-[#CDEA68] border-[#CDEA68]">
                    &copy;2019-2022
                  </button>
                </div>
                <div className="card w-1/2 h-[50vh] flex gap-5">
                  <div className="subcard w-1/2 h-full bg-[#212121] flex justify-center relative items-center rounded-2xl">
                    <img className="w-[15vh]" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="border-[1px] absolute bottom-8 left-8 text-lg rounded-full px-6 py-[6px] text-white border-white">
                      RATING 5.0 ON CLUTCH
                    </button>
                  </div>
                  <div className="subcard w-1/2 h-full bg-[#212121] flex justify-center relative items-center rounded-2xl">
                    <img className="w-[15vh]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="border-[1px] absolute bottom-8 left-8 text-lg rounded-full px-6 py-[6px] text-white border-white">
                      BUSINESS BOOTCAMP ALUMNI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
