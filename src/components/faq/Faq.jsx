import React from 'react'
import { useState } from "react";
import { faqData } from "../../utils/data";
import SectionTitle from '../SectionTitle';
import "./faq.css"
import { IoIosArrowUp } from "react-icons/io";

const Faq = ({ number, text, extraClass}) => {
    const [activeId, setActiveId] = useState(null);
    const toggleFaq = (id) => {
    // если нажали на уже активный — закрываем, иначе открываем
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className="faq">
      <div className="container">
        
        <SectionTitle number ={number} text ={text} extraClass={extraClass}/>

        <div className="faq-wrapp">
          <ul className="dropdown">
            {faqData.map((item) => (
              <li key={item.id} className="dropdown-item">
                <h4
                  className={`dropdown-title ${
                    activeId === item.id ? "active" : ""
                  }`}
                  onClick={() => toggleFaq(item.id)}
                >
                  {item.question}
                  <IoIosArrowUp className='dropdown-arrow'/>
                </h4>

                {activeId === item.id && (
                  <div className="dropdown-block active">
                    <p className="dropdown-text">{item.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Faq