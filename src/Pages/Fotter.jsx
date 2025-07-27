import React from 'react'

function Fotter() {
  return (
    <footer className="bg-[#6F4A51] text-white py-6 px-4 mt-12">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="text-center md:text-left">
      <p className="font-poppins text-lg">
        Write to: <a href="mailto:info@sow.org.in" className="underline hover:text-amber-200">info@sow.org.in</a>
      </p>
      <p className="font-poppins text-lg mt-2">
        Call <span className="font-bold">Gaurav Gaikwad</span>: <a href="tel:+919552579546" className="underline hover:text-amber-200">+91 95525 79546</a>
      </p>
      <p className="font-poppins text-lg mt-2">
        Visit us at <a href="http://www.lend-a-hand-india.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-200">www.lend-a-hand-india.org</a>
      </p>
    </div>
    <div className="mt-4 md:mt-0 text-sm font-poppins text-right md:text-left">
      &copy; {new Date().getFullYear()} Skills on Wheels. All rights reserved.
    </div>
  </div>
</footer>

  )
}

export default Fotter
