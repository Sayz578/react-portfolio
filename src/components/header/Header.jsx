import React,{useEffect, useState} from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
import Nav from '../nav/Nav';
import { navItems } from '../../utils/data';
import { MdOutlineMenu } from "react-icons/md";
import "./header.css"
import { socialLinks } from '../../utils/socialIcons';
import { useLocation } from 'react-router';


const headerClasses = {
  "/": "header",
  "/about": "header__about",
  "/service": "header__service",
  "/portfolio": "header__portfolio",
};

const Header = () => {
    const location = useLocation(); 
    const headerClass = headerClasses[location.pathname] || "header";

    const [isActive, setIsActive] = useState(false)
     const handleScroll = () => {
      if (window.scrollY >= 5) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    useEffect(() => {
       window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    
  return (
      <header className={headerClass} id="home">
        <div className={`header-top ${isActive ? "active" : ""}`}>
            <a href="" className="logo">
                <img src={logo} alt="lo+go"/>
            </a>
            <Nav navItems = {navItems} /> 

            <div className="burger">
                <MdOutlineMenu/>
            </div>
        </div>
        <div className="header-bottom">
{/* 
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
             */}
        </div>
    </header>
  )
}


export default Header