import React from 'react'

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 relative overflow-hidden bg-black"
      aria-label="Hero section for professional event photography"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-white z-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Professional{" "} <br />
            <span className="text-[rgb(251,146,60)]">
              Event <br /> Photography <br />
            </span> 
            &{" "} <span className="block sm:inline">Cinematic Videography</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg max-w-md mx-auto lg:mx-0 text-[rgb(218,219,223)]">
            Capturing corporate events, conferences, and special occasions with cinematic excellence. 
            From Varanasi to destinations across India, we deliver premium visual storytelling.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#book"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-semibold shadow-md transition"
            >
              Book Your Event
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold shadow-md transition"
            >
              View Portfolio
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold">
            {/* <div className="bg-red-600 rounded-md px-3 py-1 shadow-md">Proud Member of BNI</div> */}
            <div className="bg-opacity-60 rounded-md px-3 py-2 text-center shadow-md min-w-[70px]">
              <span className="text-xl sm:text-2xl font-bold">500+</span>
              <div className='text-[rgb(102,103,106)] text-sm'>Events Covered</div>
            </div>
            <div className=" bg-opacity-60 rounded-md px-3 py-2 text-center shadow-md min-w-[70px]">
              <span className="text-xl sm:text-2xl font-bold">8+</span>
              <div className='text-[rgb(102,103,106)] text-sm ' >Years Exp.</div>
            </div>
            <div className=" bg-opacity-60 rounded-md px-3 py-2 text-center shadow-md min-w-[70px]">
              <span className="text-xl sm:text-2xl font-bold">98%</span>
              <div className='text-[rgb(102,103,106)] text-sm' >Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-lg relative rounded-lg overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <img
            src="./hero-2.jpg"
            alt="Event videography camera in a banquet hall"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Premium Quality badge */}
          <div className="absolute top-0 bg-white bg-opacity-90 rounded-md px-3 py-2  space-x-2 shadow-lg text-gray-800 text-xs font-semibold">
            <span className="text-white  w-9 h-9 rounded-full py-2 px-2  bg-orange-500"><i className="ri-camera-fill text-lg"></i></span>
            <span>Premium Quality</span> 
            <div className=" text-gray-600 font-normal text-[10px] ml-10">
               4K Video + RAW Photos
            </div>
          </div>

          {/* Award Winning badge */}
          <div className="absolute bottom-0 right-0 bg-white bg-opacity-90 rounded-md space-x-2 px-4 py-2 shadow-lg text-gray-800 text-xs font-semibold">
            <span className="text-white w-9 h-9 rounded-full py-2 px-2 " id='award'><i className="ri-award-fill text-lg" ></i></span>
            <span>Award Winning</span>
            <div className="text-gray-600 font-normal text-[10px] ml-10">Photography Team</div>
          </div>

        
        </div>
      </div>
    </section>
  )
}
