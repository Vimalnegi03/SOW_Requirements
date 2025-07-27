import React from 'react'
import AttendancePieChart from './Charts'
import MaharashtraSchoolsMap from './Maps'

function Holder() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-stretch mt-8 gap-6 md:gap-8">
      {/* Pie Chart Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-between h-[400px] ">
        <h1 className="text-blue-500 text-3xl mb-4 text-center">Attendees-:</h1>
        <div className="flex-grow flex items-center justify-center">
          <AttendancePieChart />
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-between h-[400px] ">
        <h1 className="text-blue-500 text-3xl mb-4 text-center">Past Performance -:</h1>
        <div className="flex-grow flex items-center justify-center">
          <img src="Sow_covered_schools.png" alt="" className="h-[300px] w-auto mx-auto" />
        </div>
      </div>
      {/* Maharashtra Map Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-between h-[400px] ">
        <h1 className="text-blue-500 text-3xl mb-4 text-center">Areas Covered-:</h1>
        <div className="flex-grow flex items-center justify-center">
          <MaharashtraSchoolsMap />
        </div>
      </div>
    </div>
  )
}

export default Holder
