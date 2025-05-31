import React from 'react'
import "./about.css"
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"

const About = () => {
  return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-block">
                    <div className="about-item">
                        <figure className="about-img">
                            <img src={about1} alt="about-img"/>
                        </figure>
                        <div className="about-info">
                            <span className="about-number text-orange data-number">25</span>
                            <span className="about-text">Saticfied Customers</span>
                        </div>
                    </div>
                    <div className="about-item">
                        <figure className="about-img">
                            <img src={about2} alt="about-img"/>
                        </figure>
                        <div className="about-info">
                            <span className="about-number text-orange data-number">8</span>
                            <span className="about-text">Year of experience</span>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="inner-title"><span className="text-orange data-number">01</span> about me</h2>
                    <p className="about-descript">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p className="about-descript">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit.
                    </p>
                </div>
            </div>
        </section>
  )
}

export default About