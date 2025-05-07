import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/pages/usefullinks.css";

const UsefulLinks = () => {
    const links = [
        {
          title: "About Us",
          description: "Get to know our story and what drives us to provide the best dental care.",
          path: "/aboutme",
        },
        {
          title: "Dental Implants",
          description: "Discover the benefits of dental implants and how they can restore your smile.",
          path: "/dental",
        },
        {
          title: "Periodontics",
          description: "Learn about periodontal treatments to maintain healthy gums and prevent disease.",
          path: "/periodontic",
        },
        {
          title: "FAQs",
          description: "Find answers to commonly asked questions about our services and treatments.",
          path: "/faqs",
        },
        {
            title: "Contact Us",
            description: "Reach out to us for any inquiries or to schedule a consultation.",
            path: "/contact",
        },
        {
            title: "Blog",
            description: "Stay up to date with the latest news, tips, and advice on dental health.",
            path: "/blog",
        },
        {
            title: "Patient Testimonials",
            description: "Read about real experiences from our patients and their journey with us.",
            path: "/testimonials",
        },
        // {
        //     title: "Dental Care Tips",
        //     description: "Learn essential tips for maintaining your dental health at home.",
        //     path: "/dental-care-tips",
        // },
        // {
        //     title: "New Patient Registration",
        //     description: "Easily sign up as a new patient and join our dental care family.",
        //     path: "/new-patient-registration",
        // },
        {
            title: "Book an Appointment",
            description: "Schedule your next dental consultation or procedure with us today.",
            path: "/request",
        },
        // {
        //     title: "Our Team",
        //     description: "Meet the experienced professionals who provide exceptional dental care.",
        //     path: "/our-team",
        // },
        // {
        //     title: "Insurance & Payment Options",
        //     description: "Learn about the insurance plans we accept and our payment options.",
        //     path: "/insurance-payment-options",
        // },
        // {
        //     title: "Privacy Policy",
        //     description: "Read our privacy policy to understand how we protect your personal information.",
        //     path: "/privacy-policy",
        // },
        // {
        //     title: "Terms & Conditions",
        //     description: "Review the terms and conditions that apply to our services.",
        //     path: "/terms-conditions",
        // },
    ];
    

  return (
    <section className="useful-links-section">
      <div className="useful-links-header">
        <h1>Explore Our Services</h1>
        <p>Access helpful resources and discover how we can assist you in your dental journey.</p>
      </div>

      <div className="links-container">
        {links.map((link, index) => (
          <div className="link-card" key={index}>
            <div className="card-header">
              <h3 className="link-title">{link.title}</h3>
            </div>
            <div className="card-body">
              <p className="link-description">{link.description}</p>
            </div>
            <div className="card-footer">
              <NavLink to={link.path} className="link-button">
                Learn More
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsefulLinks;
