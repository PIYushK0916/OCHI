import React from 'react'
import { useEffect, useState } from 'react';

const Ready = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180 );
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.15" className='w-full h-[120vh]  bg-[#CDEA68] flex flex-col rounded-3xl justify-center items-center'>
        <div className='text-[18rem] font-["Test_Founders_Grotesk_X_Condensed"] font-semibold leading-[13rem] text-zinc-900 flex flex-col justify-center items-center '>
            <h1>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT !!</h1>
        </div>
        <div data-scroll data-scroll-section data-scroll-speed = ".35" className="cont absolute flex h-[30vh] gap-10">
                    <div className="w-circle w-[24vh] h-[24vh] rounded-full relative bg-white">
                        <div className="b-circle w-[14vh] h-[14vh] bg-zinc-800 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute flex justify-center items-center rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full h-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 absolute'>
                                <div className="w-5 h-5 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-circle w-[24vh] h-[24vh] rounded-full relative bg-white">
                        <div className="b-circle w-[14vh] h-[14vh] bg-zinc-800 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute flex justify-center items-center rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full h-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 absolute'>
                                <div className="w-5 h-5 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
        </div>
        <div className="btn h-[10vh] flex flex-col font-['Neue_Montreal'] mt-36 justify-center items-center">
            <button className="uppercase text-lg flex items-center gap-6 text-white bg-zinc-800 px-10 py-5 rounded-full">view all case studies 
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </button>
            <h1 className='text-zinc-900 mt-5 text-xl '>OR</h1>
            <button className="uppercase mt-5 text-lg flex items-center gap-6 text-zinc-900 border-[1px] border-zinc-900 px-10 py-5 rounded-full">hello@ochi.design 
                <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
            </button>
          </div>
    </div>
  )
}

export default Ready