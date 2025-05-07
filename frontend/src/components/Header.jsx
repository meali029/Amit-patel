import React from 'react';
// import '../styles/responsive.css';
import'../styles/header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className="topHeader">
            <div className='logo'>
                <img src="/imgs/logo dental.png" alt="" />
            </div>

        <div className="top-header">

            <button className="button1" > <NavLink to='/pateintPortal'>Patient Portal</NavLink></button>
            <button className="button2"><NavLink to='/dental-referral'>Dental Referral</NavLink></button>
        </div>
            
        <div class="header-logo">
            <h1>AMIT PATEL</h1>
            <p>SPECIALIST IN PERIODONTICS AND DENTAL IMPLANTS</p>
        </div>
            <div className='phoneNumber'>
                     <p className="phone-number">Call Us: 123 4567 8999</p>

            </div>
    
        </div>
    );
};

export default Header;
