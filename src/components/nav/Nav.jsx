import React from 'react'
import { Link } from 'react-router';

const Nav = ({navItems}) => {
    // console.log(navItems);
    
  return (
    <nav className="nav">
        <div className="menu">
            {navItems.map((item, index) => (
              <Link to={item.link} className='link' key={index}>
                {item.label}
              </Link>
            ))}
            
        </div>
        <Link to="./contact.html" className="contact-link">contact</Link>
    </nav>
  )
}

export default Nav