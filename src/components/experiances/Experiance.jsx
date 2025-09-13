import React from 'react'

const Experiance = ({logo,company,job,description,number,extraClass,period}) => {
    return (
        <div className={`experiance-block ${extraClass}`}>
            <figure><img src={logo} alt={company} /></figure>
            <div className="item">
                <span className="text-orange">{number}</span>
                <ul className="experiance-list">
                    <li className="experiance-job">{job}</li>
                    <li className="experiance-year">{period}</li>
                </ul>
            </div>
            <p className="experiance-text inner-text">{description}</p>
        </div>
    )
}

export default Experiance