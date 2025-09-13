import React from 'react'
import SectionTitle from '../SectionTitle'
import { partnersImg } from '../../utils/data'
import "./mypartners.css"

const MyPartners = ({ number, text, extraClass }) => {
    return (
        <section className="mypartners">
            <div className="container">
                <SectionTitle number={number} text={text} extraClass={extraClass} />
                <div className="mypartners-wrapper">
                    {partnersImg && (
                        partnersImg.map(item => (
                            <img src={item.image} alt={item.name} key={item.id} />
                        ))
                    )}
                </div>
                <div className="work-wrapper">
                    <h2>let’s work together on Your Next Project</h2>
                    <a href="" className="btn-orange work-link">HIRE ME NOW</a>
                    <a href="" className="work-download">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default MyPartners