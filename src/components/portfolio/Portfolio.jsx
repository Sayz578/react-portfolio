import React, { useState } from 'react'
import "./portfolio.css"
import { portfolioFilters } from '../../utils/data';
import Sliders from './Sliders';

const Portfolio = () => {
const [activeFilter, setActiveFilter] = useState('all');
const handleFilterClick = (id) => {
setActiveFilter(id);
// можно добавить логику фильтрации слайдов по категориям
};
return (
<section className="portfolio" id="portfolio">
    <div className="container">
        <div className="portfolio-wrapper">
            <h2 className="inner-title service-title"><span className="text-orange data-number">03</span> portfolio</h2>
            <ul className="portfolio-list">
                {portfolioFilters.length ? (
                    portfolioFilters.map((item, idx) => (
                        <li className={`portfolio-item ${item.id === activeFilter ? "active" : ""}`}
                            key={idx}
                            onClick={() => handleFilterClick(item.id)}
                        >{item.label}</li>
                    ))
                ):(
                    <></>
                )}
            </ul>
            <div className="portfolio-btn">
            </div>
        </div>
        <Sliders/>
    </div>
</section>
)
}

export default Portfolio