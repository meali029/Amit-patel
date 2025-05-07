import React from 'react';
import '../styles/aboutus.css'
import { NavLink } from 'react-router-dom';


const AboutUs = () => {
    return (
        <>
        <section className="aboutus">
        <div className="aboutbox1">
            <div className="context">
                <h1>What to expect</h1>
                <hr/>
                <p>Find out about our team and what will happen when you come and see us</p>
                <div className="list">
                    <p><NavLink to='/request'>Your first visit</NavLink> </p><br/>
                    <p><NavLink to='/aboutme'>Meet our team</NavLink></p><br/>
                    <p><NavLink to='consultation'>Discuss the best option for you</NavLink></p>
                </div>
            </div>
        </div>
        <div className="aboutbox2">
             <div className="contextmid">
            <h1>How we can help you</h1>
            <hr/>
            <p>See some examples of the work we have done and hear from our patients</p>
            <div className="list">
                <p><NavLink to='smile-gallery'>Before and afters</NavLink></p><br/>
                <p><NavLink to="testimonials">Testimonials</NavLink></p>
            </div>
        </div>
    </div>
        <div className="aboutbox3">
            <div className="contextlast">
                <h1>Looking after your braces</h1>
                <hr/>
                <p>Once your appliance is fitted, it's important you follow tips:</p>
                <div className="list">
                    <p><NavLink to='smile-gallery'>Looking after your braces</NavLink></p><br/>
                    <p><NavLink  to='smile-gallery'>Looking after your retainers</NavLink></p><br/>
                    <p><NavLink to='smile-gallery'>Breakages and emergencies</NavLink></p>
                    
                </div>
            </div>
        </div>
    </section>
        </>
    );

};

export default AboutUs;
