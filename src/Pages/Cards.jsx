import React from 'react'

function Cards() {
  return (
    <div className='flex justify-around flex-wrap gap-8'>
      <div className="card group bg-base-100 w-96 shadow-sm border-[#eaeaea] transition-shadow duration-300 hover:shadow-[0_8px_24px_0_rgba(0,142,214,0.20)]">
        <figure className='mt-1.5'>
          <img
            src="sow_card.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-[#008ed6] font-poppins">Facilitated Skill Education</h1>
          <p className='text-[#6F4A51] font-poppins'>Lend a Hand India provides skill education in over 500 schools, with the help of dedicated instructors that facilitate our teaching through a combination of theory and practicals. Through the 'Skills on Wheels' initiative, we aim to spread the message of vocational skill education by making it accessible to the interiors of India.</p>
        </div>
      </div>
      <div className="card group bg-base-100 w-96 shadow-sm border-[#eaeaea] transition-shadow duration-300 hover:shadow-[0_8px_24px_0_rgba(0,142,214,0.20)]">
        <figure className='mt-1.5'>
          <img
            src="card(2).png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-[#008ed6] font-poppins">Community Outreach</h1>
          <p className='text-[#6F4A51] font-poppins'>The subjects we cover under skill education essentially are divided into four categories: Basic Engineering, Agriculture and Gardening, Home and Health Science and Energy and Environment. These areas are directly relevant to our communities and provide employment both in rural as well as urban areas.</p>
        </div>
      </div>
      <div className="card group bg-base-100 w-96 shadow-sm border-[#eaeaea] transition-shadow duration-300 hover:shadow-[0_8px_24px_0_rgba(0,142,214,0.20)]">
        <figure className='mt-1.5'>
          <img
            src="card(3).jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-[#008ed6] font-poppins">Improving Public School Infrastructure</h1>
          <p className='text-[#6F4A51] font-poppins'>As knowledge partners, our team of academic experts have worked alongside government schools to solving local challenges. With a dedicated workshop space in every affiliate school, maintained by Lend a Hand India, we strive to ensure proper tools and equipments are provided for to meet the learning outcomes.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards

