import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import '../styles/responsive.css';
import '../styles/navbar.css'
// import Aboutme from '../pages/AboutMePage';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/weather">Weather</NavLink></li>
                    <li><NavLink to='/aboutme'>About Me</NavLink></li>
                    <li><NavLink to="/dental">Dental Implants</NavLink></li>
                    <li><NavLink to="/periodontic">Periodontics</NavLink></li>
                    <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                    <li><NavLink to="/links">Useful Links</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </nav>
            
        </>
    );
};

export default Navbar;
