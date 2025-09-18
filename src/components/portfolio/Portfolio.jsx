import React, { useState } from 'react'
import "./portfolio.css"
import { portfolioFilters } from '../../utils/data';
import Sliders from './Sliders';
import SectionTitle from '../SectionTitle';

const Portfolio = ({ number, text, extraClass, nextClass }) => {
const [activeFilter, setActiveFilter] = useState('all');
const handleFilterClick = (id) => {
setActiveFilter(id);
// можно добавить логику фильтрации слайдов по категориям
};
return (
<section className="portfolio" id="portfolio">
    <div className="container">
        <div className="portfolio-wrapper">
            <SectionTitle number = {number} text={text} extraClass = {extraClass}/>
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
        <Sliders className="portfolio-slider"/>
    </div>
</section>
)
}

export default Portfolio