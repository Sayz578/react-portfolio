import React from 'react'
import { Link } from 'react-router';
Link

const Nav = ({navItems}) => {
    console.log(navItems);
    
  return (
    <nav className="nav">
        <div className="menu">
            {navItems.map((item, index) => (
              <Link to={item.link} className='link' key={index}>
                {item.label}
              </Link>
            ))}
            {/* <li className="item"><a href="#home" className="link active">home</a></li>
            <li className="item"><a href="./about.html" className="link">about</a></li>
            <li className="item"><a href="./service.html" className="link">service</a></li>
            <li className="item"><a href="./portfolio.html" className="link">portfolio</a></li> */}
        </div>
        <a href="./contact.html" className="contact-link">contact</a>
    </nav>
  )
}

export default Nav