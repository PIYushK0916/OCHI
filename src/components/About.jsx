import React from 'react'

const About = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed = "-.015" className='w-full bg-[#CDEA68] rounded-t-3xl text-zinc-900 font-neue-montreal tracking-tight'>
      <div className='py-20'></div>
        <p className='px-20 text-[7.2vh] leading-[4.5rem]'>Ochi is a strategic partner for fast-grow­ing tech <br /> businesses that need to <span className='border-b-[3px] border-zinc-900'>raise funds</span>, <span className='border-b-[3px] border-zinc-900'>sell prod­ucts</span>, <br /> <span className='border-b-[3px] border-zinc-900'>ex­plain com­plex ideas</span>, and <span className='border-b-[3px] border-zinc-900'>hire great peo­ple</span>.</p>
        <div className='border-t-[1px] mt-20 border-[#95a55b]'>
          <div className="sections flex  py-5 px-20 text-[1.3rem]">
            <div className="section w-1/2 ">
              <h1>What you can expect:</h1>
            </div>
            <div className="section w-1/2">
              <p>We create tailored presentations to help <br /> you persuade your colleagues, clients, or <br /> investors. Whether it’s live or digital,<br /> delivered for one or a hundred people.</p>
              <p className='mt-20'>We believe the mix of strategy and <br /> design (with a bit of coffee) is what <br /> makes your message clear, convincing, and captivating.</p>
            </div>
          </div>

        </div>
        <div className='border-t-[1px] mt-20 border-[#95a55b]'>
          <div className="sections flex px-20 py-5">
            <div className="left w-1/2">
              <h1 className='text-6xl'>Our approach:</h1>
              <button className='px-[3rem] text-xl mt-6 flex gap-6 items-center py-4 bg-black rounded-full text-white'>Read More
                <div className='w-3 h-3 bg-white rounded-full'></div>
              </button>
            </div>
            <div className="right w-1/2 pb-14">
              <div data-scroll data-scroll-section data-scroll-speed = ".07" className='w-full h-[60vh] rounded-2xl bg-[#748441] overflow-hidden'>
                <img   src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default About