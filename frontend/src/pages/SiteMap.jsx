import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/sitemap.css';

const Sitemap = () => {
    return (
        <div className="sitemap-container">
            <h1>Sitemap</h1>
            <p>Explore the main sections of our website:</p>
            <div className="sitemap-list">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/faqs">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </li>
                    <li>
                        <Link to="/request">Schedule a Visit</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sitemap;
