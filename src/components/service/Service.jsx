import React from 'react'
import "./Service.css"
import { services } from '../../utils/data'

const Service = () => {
  return (
    <section className="service" id="service">
            <div className="container">
                <h2 className="inner-title service-title"><span className="text-orange data-number">02</span> my service</h2>
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