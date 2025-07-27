import React from 'react'
function ThreeDiv() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 p-10 bg-gradient-to-r from-[#d1f7e7] to-[#bde7fa] rounded-xl mt-8">
        {/* Schools */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full md:w-40 hover:bg-blue-300 transition-colors duration-300">
          <div className="text-3xl font-extrabold text-[#1AB471]">100+</div>
          <div className="text-lg font-semibold text-gray-600">Schools</div>
        </div>
        {/* States */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full md:w-40 hover:bg-blue-300 transition-colors duration-300">
          <div className="text-3xl font-extrabold text-[#1AB471]">12+</div>
          <div className="text-lg font-semibold text-gray-600">States</div>
        </div>
        {/* Students */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full md:w-40 hover:bg-blue-300 transition-colors duration-300">
          <div className="text-3xl font-extrabold text-[#1AB471]">1000+</div>
          <div className="text-lg font-semibold text-gray-600">students</div>
        </div>
      </div>
    </>
  )
}


export default ThreeDiv
