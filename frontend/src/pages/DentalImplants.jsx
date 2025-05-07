import React from "react";
import "../styles/pages/dentalimplants.css";
import { NavLink } from "react-router-dom";

const DentalImplants = () => {
  return (
    <section className="dental-implants-page">
      {/* Hero Section */}
      <div className="herod">
        <h1>Dental Implants</h1>
        <p>
          Restoring confidence, functionality, and aesthetics with precision
          and care.
        </p>
      </div>

      {/* What Are Dental Implants Section */}
      <div className="what-are-implants">
        <h2>What Are Dental Implants?</h2>
        <p>
          Dental implants are advanced solutions for replacing missing teeth.
          They consist of a titanium post that integrates with your jawbone,
          providing a sturdy foundation for crowns, bridges, or dentures. With
          their natural look and feel, dental implants are the closest
          alternative to real teeth.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="benefits">
        <h2>Benefits of Dental Implants</h2>
        <ul>
          <li>Restore chewing and speaking abilities</li>
          <li>Preserve jawbone health and prevent bone loss</li>
          <li>Improve overall facial aesthetics</li>
          <li>Provide long-lasting and durable results</li>
          <li>No impact on adjacent teeth like traditional bridges</li>
        </ul>
      </div>

      {/* Procedure Section */}
      <div className="procedure">
        <h2>The Dental Implant Procedure</h2>
        <ol>
          <li>
            <strong>Consultation:</strong> Comprehensive assessment and
            treatment planning.
          </li>
          <li>
            <strong>Implant Placement:</strong> Surgical insertion of the
            titanium post into the jawbone.
          </li>
          <li>
            <strong>Healing Period:</strong> Allowing the implant to fuse with
            the bone (osseointegration).
          </li>
          <li>
            <strong>Final Restoration:</strong> Attaching the crown, bridge, or
            denture for a seamless result.
          </li>
        </ol>
      </div>

      {/* Why Choose Dr. Amit Patel Section */}
      <div className="why-choose">
        <h2>Why Choose Dr. Amit Patel?</h2>
        <p>
          With years of expertise in periodontics and dental implantology, I
          offer personalized care and state-of-the-art techniques to ensure the
          best outcomes. My focus is on restoring not just teeth but confidence
          and quality of life.
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta">
        <h2>Ready to Transform Your Smile?</h2>
        <p>
          Schedule a consultation today and take the first step towards a
          healthier, more confident smile.
        </p>
        <button className="cta-button"><NavLink to='/consultation'>Book a Consultation</NavLink></button>
      </div>
    </section>
  );
};

export default DentalImplants;
