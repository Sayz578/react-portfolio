import React from 'react'
import "./Service.css"
import { services } from '../../utils/data'
import SectionTitle from '../SectionTitle'

const Service = ({ number, text, extraClass }) => {
  return (
    <section className="service" id="service">
            <div className="container">
                <SectionTitle number = {number} text={text} extraClass = {extraClass}/>
                <div className="service-wrapper">
                    {services.length ? (
                        services.map((item, idx) => (
                            <div className="service-card" key={idx}>
                                <div className="service-card-img">
                                    {item.icon}
                                </div>
                                <h4 className="service-card-title">{item.title}</h4>
                                <p className="service-card-text">
                                    {item.text}
                                </p>
                            </div>
                        ))
                    ):(
                        <></>
                    )}
                </div>
            </div>
        </section>
  )
}

export default Service