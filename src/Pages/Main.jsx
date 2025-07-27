import React from 'react'

function Main() {
  return (
<div className="relative w-full min-h-screen flex items-center justify-center bg-slate-100">
  {/* Background image */}
  <img
    src="sow_background_image.jpg"
    alt="Mobile classroom empowering rural youth"
    className="absolute inset-0 w-full h-full object-cover object-center z-0"
    style={{ filter: 'brightness(0.5)' }} // darken more for better contrast
  />

  {/* Darker overlay for even more readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0099ff11] z-10" />

  {/* Main content: Heading and Tagline */}
  <div className="relative z-20 text-center px-2">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-poppins text-[#1AB471] drop-shadow-lg">
      Empowering Rural Youth Through Mobile Learning &amp; Skills Training
    </h1>
    <p className="text-amber-50 mt-4 text-2xl font-poppins">
      Taking industry-relevant skill training to rural youth at their doorstep, empowering them with practical skills for better livelihoods and a brighter future.
    </p>
    <button
      className="border border-[#1AB471] px-6 py-3 rounded text-[#1AB471] mt-3 font-extrabold text-xl
                 hover:bg-[#1AB471] hover:text-white focus:bg-[#1AB471] focus:text-white transition-colors duration-300 font-poppins"
    >
      Join skills on Wheel Movement
    </button>
  </div>
</div>



  )
}

export default Main
