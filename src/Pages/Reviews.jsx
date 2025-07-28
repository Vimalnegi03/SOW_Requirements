import React from 'react'
import HomePage from './HomePage'
import Headers from './Headers'
import ThreeDiv from './ThreeDiv'
import Holder from './Holder'
import Fotter from './Fotter'
function Reviews() {
  return (
    <div className='bg-white'>
      <Headers />
      <h1 className="text-[#6F4A51] text-center text-4xl md:text-5xl font-extrabold mb-6 mt-4 ">
        Empowering Through Your Stories: Student Feedback Hub
      </h1>
      <div className="flex flex-wrap justify-center gap-8 bg-white">
        {/* Card 1 */}
        <div className="card  w-96 shadow-sm bg-white">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/14075587/pexels-photo-14075587.jpeg"
              alt="Rahul Sharma"
              className="rounded-xl w-72 h-48 object-cover mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-black">Saniya</h2>
            <p className=' text-black'> 
              The Skills on Wheels program has empowered me with practical skills in carpentry and helped me gain confidence to start small projects in my village.
            </p>
            <p>
              <span className="font-bold  text-black">Govt. High School, Rajasthan</span>
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card bg-white w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/31864391/pexels-photo-31864391.jpeg"
              alt="Anjali Singh"
              className="rounded-xl w-72 h-48 object-cover mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black">Anjali Singh</h2>
            <p className=' text-black'>
              I learned tailoring and embroidery, which not only improved my skills but also opened up opportunities for self-employment.
            </p>
            <p>
              <span className="font-bold  text-black">Central School, Uttar Pradesh</span>
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card bg-white w-96 shadow-sm ">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/6936400/pexels-photo-6936400.jpeg"
              alt="Vikram Patel"
              className="rounded-xl w-72 h-48 object-cover mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black">Vinny Patel</h2>
            <p className=' text-black'>
              The mobile learning sessions helped me understand basic electrical work and safety, which is very useful in my daily life.
            </p>
            <p>
              <span className="font-bold  text-black">Zilla Parishad School, Gujarat</span>
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card bg-white w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/374872/pexels-photo-374872.jpeg"
              alt="Sneha Reddy"
              className="rounded-xl w-72 h-48 object-cover mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black">Sneha Reddy</h2>
            <p className=' text-black'>
              Skills on Wheels gave me the confidence to learn computer basics and improved my chances of higher education.
            </p>
            <p>
              <span className="font-bold  text-black">District High School, Telangana</span>
            </p>
          </div>
        </div>
      </div>
    <div className="flex justify-center mt-8">
  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-success btn-outline">
    ReadMore
  </button>
 
</div>
<ThreeDiv/>
<Holder/>
    </div>
  )
}

export default Reviews
