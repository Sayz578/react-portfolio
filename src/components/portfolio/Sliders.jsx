import React from 'react'
import { portfolioSlides } from '../../utils/data'

const Sliders = () => {
  return (
    <div className="portfolio-slider">
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
      
    </div>
  )
}

export default Sliders