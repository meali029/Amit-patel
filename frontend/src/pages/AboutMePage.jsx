import React from "react";
import '../styles/pages/aboutmepage.css';
import { NavLink } from "react-router-dom";

const AboutMePage = () => {
  return (
    <section className="about-me-page">
      {/* Hero Section */}
      <div className="heroa">
        <h1>About Me</h1>
        <h2>Dr. Amit Patel</h2>
        <p>
          Specialist in Periodontics and Dental Implants, dedicated to restoring
          and enhancing smiles with precision, care, and a personal touch.
        </p>
      </div>

      {/* Biography Section */}
      <div className="biography">
        <h2>My Journey</h2>
        <p>
          With over a decade of experience in periodontics and dental implants,
          I have made it my mission to provide exceptional dental care.
          Throughout my career, I have embraced advanced techniques and
          cutting-edge technology to deliver optimal results for my patients.
        </p>
        <p>
          After graduating from a prestigious dental school, I pursued
          specialized training in periodontics. My passion lies in transforming
          lives by addressing complex dental issues and restoring confidence
          through tailored treatment plans.
        </p>
      </div>

      {/* Expertise Section */}
      <div className="expertise">
        <h2>Areas of Expertise</h2>
        <ul>
          <li>Advanced Periodontal Therapy</li>
          <li>Dental Implantology</li>
          <li>Minimally Invasive Surgery</li>
          <li>Smile Aesthetics</li>
          <li>Patient-Centered Care</li>
        </ul>
      </div>

      {/* Philosophy Section */}
      <div className="philosophy">
        <h2>My Philosophy</h2>
        <p>
          I believe in creating a comfortable and reassuring environment for my
          patients. My approach combines technical expertise with compassion,
          ensuring that every patient receives personalized care tailored to
          their unique needs and goals.
        </p>
      </div>

      {/* Contact Section */}
      <div className="contactme">
        <h2>Let’s Connect</h2>
        <p>
          If you’re seeking expert care for periodontal issues or dental
          implants, I’d love to help you. Schedule a consultation today and
          take the first step towards your best smile.
        </p>
        <button className="contact-button" ><NavLink to='/contact'>Contact Us</NavLink></button>
      </div>
    </section>
  );
};

export default AboutMePage;
