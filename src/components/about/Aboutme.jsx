import React from 'react'
import "./about.css"
const Aboutme = () => {
  return (
     <section className="aboutme" id="about">
            <div className="container container-aboutme">
                <div className="about-block">
                    <img src="./images/man-about.png" alt="about-img"/>
                </div>
                <div className="about-content">
                    <h2 className="inner-title"><span className="text-orange data-number">01</span> about me</h2>
                    <h3 className="aboutme-title">
                        I'm Professional Designer and Front-End Web Developer That Solve Your Problems
                    </h3>
                    <p className="about-descript">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p className="about-descript">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit.
                    </p>
                    <div className="about-item">

                        <div className="about-info">
                            <span className="about-number text-orange data-number">8</span>
                            <span className="about-text">Year of experience</span>
                        </div>
                        <div className="about-info">
                            <span className="about-number text-orange data-number">25</span>
                            <span className="about-text">Saticfied Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Aboutme