import React from 'react'
import './partners.css'
import { partners } from '../../utils/data'

const Partners = () => {
  return (
    <div className="partners">
            <div className="container">
                <div className="partners-wrapper">
                  {partners.length && (
                    partners.map((item, idx) => (
                      <img src={item.src} alt={item.alt} key={idx}/>
                    ))
                  )}
                </div>
            </div>
    </div>
  )
}

export default Partners