import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
import Nav from '../nav/Nav';
import { navItems } from '../../utils/data';
import { MdOutlineMenu } from "react-icons/md";
import "./header.css"
import { socialLinks } from '../../utils/socialIcons';

const Header = () => {
  return (
      <header className="header" id="home">
        <div className="header-top">
            <a href="" className="logo">
                <img src={logo} alt="lo+go"/>
            </a>
            <Nav navItems = {navItems} /> 

            <div className="burger">
                <MdOutlineMenu/>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="header-content">
                    <span className="header-sub">Hello,
                        <span>I’m</span>
                    </span>
                    <h1 className="header-title">robert fox</h1>
                    <p className="header-text">Professional Product Designer</p>
                    <a href="" className="header-link btn-orange">let’s talk</a>
                </div>
                <div className="header-social social">
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
        </div>
    </header>
  )
}


export default Header