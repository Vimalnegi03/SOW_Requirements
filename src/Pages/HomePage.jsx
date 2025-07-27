import React from 'react'
import Main from './Main'
import Mission from './Mission'
import Cards from './Cards'
import About from './About'
import Fotter from './Fotter'
import { Link } from 'react-router-dom'
import Headers from './Headers'
function HomePage() {
  return (
    <>
      <Headers/>
      <Main/>
      <Mission/>
      <Cards/>
      <About/>
      <Fotter/>
    </>
  )
}

export default HomePage
