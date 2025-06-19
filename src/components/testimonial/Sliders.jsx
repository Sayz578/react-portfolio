import React from 'react'
import { testimonialSlides } from '../../utils/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from './CustomArrow';

const Sliders = () => {
  const settings = {
     infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots:true,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
  };

  return (
    <Slider className="testimonial-slider" {...settings}>
      {testimonialSlides.length && (
        testimonialSlides.map((item, idx) => (
        <div>
            <div className="slider" key={idx}>
                <div className="testimonial-slide">
                    <h2 className="inner-title service-title media-title">
                      <span className="text-orange data-number">04</span> testimonial
                    </h2>
                    <figure><img src={item.image} alt={item.name}/></figure>

                    <div className="testimonial-block">
                        <div className="testimonial-top">
                            <h2 className="inner-title service-title title-desctop"><span
                                    className="text-orange data-number">04</span> testimonial</h2>
                            <ul className="slide-number">
                                <li className="first-number">{String(idx + 1).padStart(2, '0')}</li>
                                <li className="last-number">/ {String(testimonialSlides.length).padStart(2, '0')}</li>
                            </ul>
                        </div>
                        <p className="testimonial-text">{item.text}</p>
                        <ul className="testimonial-list">
                            <li className="title">{item.name}</li>
                            <li className="job">{item.job}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        ))
      )}
      
    </Slider>
  )
}

export default Sliders