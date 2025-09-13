import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { socialLinks } from '../../utils/socialIcons';
import { contactInfo } from '../../utils/data';
import { useLocation } from 'react-router';

const Footer = () => {
    const location = useLocation();
    console.log( location.pathname);
    
    const yaer = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="container">
            {(location.pathname === "/" || location.pathname === "/portfolio") &&  (<div className="footer-top">
                <div className="footer-contact">
                    {location.pathname === "/" ? (
                        <h2 className="inner-title footer-title"><span className="text-orange data-number">05</span> contact</h2>
                    ):(
                        <h2 className="inner-title footer-title"><span className="text-orange data-number">04</span> contact</h2>
                    )}
                    

                    <ul className="contact-list">
                        {contactInfo.length ? (
                            contactInfo.map((contact, idx) => (
                                <li className="contact-phone" key={idx}>
                                    <span className="title">{contact.title}</span>
                                    <span className="descript">{contact.value}</span>
                                </li>
                            ))
                        ):(
                            <></>
                        )}
                    </ul>
                     <div className="footer-social social">
                        {socialLinks.length ? (
                            socialLinks.map((link,idx) => (
                                <a href={link.url} key={idx} className="social-link">
                                    {link.icon}
                                </a> 
                            ))
                            ):(
                            <></>
                        )}
                    </div>
                </div>
                <div className="footer-form">
                    <h3 className="footer-form-title">I’m always open to discussing work <span>product design</span> or
                        partnership</h3>
                    <form action="" className="form">
                        <div className="form-block">
                            <label className="input-name">
                                Your name*
                                <input type="text" placeholder="Enter your name here"/>
                            </label>
                            <label className="input-email">
                                Email Address*
                                <input type="text" placeholder="Enter your email address"/>
                            </label>
                        </div>
                        <label htmlFor="" className="message">
                            Message
                            <textarea placeholder="Write your message here"></textarea>
                        </label>
                        <button className="form-btn btn-orange">send message</button>
                    </form>
                </div>
            </div>)}

        </div>
        <div className="footer-bottom">Copyright  <span className="yaer">{yaer}</span> All Right Reserved</div>
    </footer>
  )
}

export default Footer