import React from 'react'
import { Link } from 'react-router-dom'
function Headers() {
  return (
    <>
       <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src="Lahi_Logo.png" alt="" className="h-8" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/stars" className="text-[#6F4A51] text-2xl font-semibold">Stars</Link>
            </li>
            <li>
              <details>
                <summary className="text-[#6F4A51] text-2xl font-semibold cursor-pointer">
                  Visits
                </summary>
               <ul className="bg-base-100 rounded-t-none p-2 absolute z-50">
  <li><Link to='/schools'>School</Link></li>
  <li><a>Training of Trainers</a></li>
</ul>

              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Headers
