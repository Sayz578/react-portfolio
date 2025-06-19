import React from 'react'
import About from '../components/about/About'
import Partners from "../components/partners/Partners"
import Work from '../components/work/Work'
import Service from '../components/service/Service'
import Portfolio from '../components/portfolio/Portfolio'
import Testimonial from '../components/testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <About/>
      <Partners/>
      <Work/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
    </div>
  )
}

export default Home