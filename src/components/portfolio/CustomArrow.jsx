import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const NextArrow = ({className, onClick}) => {
  return (
    <div className={`slick-next slider-right ${className}`} onClick={onClick}>
        <FaArrowRight/>
    </div>
  )
}

export const PrevArrow = ({className, onClick}) => {
  return (
    <div className={`slick-prev slider-left ${className}`} onClick={onClick}>
        <FaArrowLeft/>
    </div>
  )
}
