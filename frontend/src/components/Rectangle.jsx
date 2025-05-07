import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../styles/responsive.css';
import '../styles/rectangle.css'


const Rectangle = () => {
    return (
        <div className="rectangle">
            <NavLink to='/'><img src="/imgs/meet.png" alt="Meet the Doctor" /></NavLink>
            <NavLink to="/testimonials"><img src="/imgs/reviews.png" alt="Reviews" /></NavLink>
            <NavLink to='/smile-gallery'> <img src="/imgs/gallery.png" alt="Gallery" /></NavLink>
            <NavLink to='/request'><img src="/imgs/request.png" alt="Request" /></NavLink>
        </div>
    );
};

export default Rectangle;