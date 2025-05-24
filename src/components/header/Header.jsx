import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
import { FaInstagram,FaFacebookF,FaLinkedinIn,FaDribbble } from "react-icons/fa";
import Nav from '../nav/Nav';
import { navItems } from '../../utils/data';
import { MdOutlineMenu } from "react-icons/md";
import "./header.css"

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
                <div className="header-social">
                    <a href="" className="header-social-link">
                        <FaInstagram/>
                    </a>
                    <a href="" className="header-social-link">
                        <FaFacebookF/>
                    </a>
                    <a href="" className="header-social-link">
                        <FaLinkedinIn/>
                    </a>
                    <a href="" className="header-social-link">
                        <FaDribbble/>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header