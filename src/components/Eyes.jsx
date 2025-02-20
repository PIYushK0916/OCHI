import React, { useEffect, useState } from 'react';

const Eyes = () => {
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
        <div className='w-full h-screen overflow-hidden'>
            
            <div  data-scroll data-scroll-section data-scroll-speed = "-.7"  className="eyes w-full flex justify-center items-center h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                <div data-scroll data-scroll-section data-scroll-speed = ".15" className="cont flex h-[30vh] gap-10">
                    <div className="w-circle w-[30vh] h-[30vh] rounded-full relative bg-white">
                        <div className="b-circle w-[18vh] h-[18vh] bg-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute flex justify-center items-center rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}  className='w-full h-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 absolute'>
                                <div className="w-10 h-10 bg-white rounded-full"></div>
                            </div>
                            <button className='text-white text-2xl absolute text-center tracking-wider'>PLAY</button>
                        </div>
                    </div>
                    <div className="w-circle w-[30vh] h-[30vh] rounded-full relative bg-white">
                        <div className="b-circle w-[18vh] h-[18vh] bg-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute flex justify-center items-center rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full h-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 absolute'>
                                <div className="w-10 h-10 bg-white rounded-full"></div>
                            </div>
                            <button className='text-white text-2xl absolute text-center tracking-wider'>PLAY</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full bg-cover'>
                <video className=' w-full opacity-0 items-center flex justify-center' src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"></video>
            </div>
        </div>
    )
}

export default Eyes;
