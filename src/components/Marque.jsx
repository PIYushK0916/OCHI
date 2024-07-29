import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
  return (
    
    <div  data-scroll data-scroll-section data-scroll-speed = "-.009"  className="w-full py-20 bg-[#004D43] rounded-t-3xl">
        <div className="text flex border-t-2 border-b-2 border-zinc-300 whitespace-nowrap overflow-hidden ">
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{  repeat: Infinity,ease:"linear", duration:5}} className='text-[26vw] leading-none font-founders-grotesk font-semibold -mt-20 -mb-7 uppercase pr-20'>We Are Ochi </motion.h1>
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{  repeat: Infinity,ease:"linear", duration:5}} className='text-[26vw] leading-none font-founders-grotesk font-semibold -mt-20 -mb-7 uppercase pr-20'>We Are Ochi </motion.h1>
        </div>
    </div>
  )
}

export default Marque