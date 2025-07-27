import React from 'react'

function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around md:items-center mt-8 border-black border-solid px-4 py-6">
      <div className="w-full md:w-[40%] mt-6 md:mt-2">
        <h1 className="text-[#6F4A51] text-3xl font-poppins font-extrabold">
          About Lend a Hand India
        </h1>
        <p className="text-[#6F4A51] text-lg font-poppins mt-4">
          Lend A Hand India, a Pune based NGO working in the field of vocational education in secondary schools for last 10 years in 10 states across India in partnership with Governments of Maharashtra, Gujarat, Andhra Pradesh, Telangana, NCT of Delhi, Odisha, Madhya Pradesh, Haryana, UT Of Diu and Daman. Our goal is to promote multi skill vocational education as part of secondary school curriculum across India.
        </p>
      </div>
      <div className="w-full md:w-auto flex justify-center items-center mb-6 md:mb-0">
        <img src="about_image.png" alt="" className="max-w-[320px] w-full h-auto rounded-lg" />
      </div>
    </div>
  )
}


export default About

