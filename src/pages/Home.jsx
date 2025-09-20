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
      <Service number = "02" text="my service" extraClass = "service-title"/>
      <Portfolio number = "03" text="portfolio" extraClass = ""/>
      <Testimonial number = "04" text="testimonial" extraClass = "service-title" nextClass ="media-title"/>
    </div>
  )
}

export default Home