import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pages/periodontics.css";

const Periodontics = () => {
  return (
    <section className="periodontics-page">
      {/* Hero Section */}
      <div className="herop">
        <div className="hero-text">
          <h1>Periodontics</h1>
          <p>
            Restoring gum health and smiles with advanced periodontal care.
            Trust the expertise of Dr. Amit Patel for comprehensive treatment.
          </p>
          <button className="cta-button"><NavLink to='/request'>Schedule Your Visit</NavLink></button>
        </div>
      </div>

      {/* About Periodontics Section */}
      <div className="about-section">
        <h2>What Is Periodontics?</h2>
        <p>
          Periodontics is the branch of dentistry that deals with the
          prevention, diagnosis, and treatment of gum-related conditions and
          diseases. It plays a crucial role in maintaining the foundation of
          oral health—your gums and bone structure.
        </p>
        <img src="https://markmcadamsfamilydentist.com/wp-content/uploads/2023/11/Dr.-Mark-McAdams-D.D.S.-Periodontics.png" alt="Periodontics Care" />
      </div>

      {/* Symptoms of Gum Disease */}
      <div className="symptoms-section">
        <h2>Signs You Might Need Periodontal Care</h2>
        <ul>
          <li>Red, swollen, or bleeding gums.</li>
          <li>Persistent bad breath.</li>
          <li>Gum recession or teeth appearing longer.</li>
          <li>Loose or shifting teeth.</li>
          <li>Discomfort or sensitivity while chewing.</li>
        </ul>
      </div>

      {/* Advanced Treatment Section */}
      <div className="treatments-section">
        <h2>Our Advanced Treatments</h2>
        <div className="treatment-cards">
          <div className="treatment-card">
            <h3>Scaling & Root Planing</h3>
            <p>
              Non-surgical deep cleaning to remove plaque and tartar from below
              the gum line.
            </p>
          </div>
          <div className="treatment-card">
            <h3>Laser Therapy</h3>
            <p>
              Minimally invasive laser treatment for precision gum disease care
              and faster recovery.
            </p>
          </div>
          <div className="treatment-card">
            <h3>Gum Surgery</h3>
            <p>
              Restorative procedures to treat severe periodontitis and rebuild
              gum health.
            </p>
          </div>
          <div className="treatment-card">
            <h3>Bone Grafting</h3>
            <p>
              Reinforcing jawbone density to support dental implants and
              stability.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Patients Say</h2>
        <blockquote>
          "Dr. Patel’s expertise transformed my smile. His personalized care
          and advanced treatments were remarkable." - Sarah T.
        </blockquote>
        <blockquote>
          "I never realized how much healthier gums could impact my confidence.
          Thank you, Dr. Patel!" - John D.
        </blockquote>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Your Smile, Your Health</h2>
        <p>
          Don't wait—healthy gums are the foundation of a confident smile. Book
          your consultation today.
        </p>
        <button className="cta-button"><NavLink to='/contact'>Contact Us</NavLink></button>
      </div>
    </section>
  );
};

export default Periodontics;
