import React from 'react'
import "./testimonial.css"
import Sliders from './Sliders'

const Testimonial = ({ number, text, extraClass, nextClass }) => {
  return (
    <section className="testimonial">
            <div className="container">
                <Sliders number={number} text={text} extraClass={extraClass} nextClass={nextClass}/>
            </div>
        </section>
  )
}

export default Testimonial