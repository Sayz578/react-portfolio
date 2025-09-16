import React from 'react'
import { portfolioSlides } from '../../utils/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from './CustomArrow';
// import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 451,
        settings: {
          prevArrow: null,
          nextArrow: null,
        }
      }
    ]
  };

  return (
    <Slider className="portfolio-slider" {...settings}>
      {portfolioSlides.length && (
        portfolioSlides.map((item, idx) => (
          <div className="slider-block" key={idx}>
            <div className="slide">
              <img src={item.image} alt="portfolio" />
              <ul className="slider-list">
                <li className="slider-title">{item.title}</li>
                <li className="slider-text">{item.subtitle}</li>
              </ul>
            </div>

          </div>
        ))
      )}

    </Slider>
  )
}

export default Sliders