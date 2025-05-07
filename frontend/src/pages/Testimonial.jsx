import React from "react";
import "../styles/pages/testimonials.css";
import { NavLink } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      feedback:
        "Dr. Amit Patel’s expertise transformed my smile. I was nervous about the procedure, but his professionalism and care made the experience amazing.",
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/bZh1Cg7aFIt99CZNRSQQIOOK1PK.jpg",
      location: "London, UK",
    },
    {
      name: "James Bennett",
      feedback:
        "I never realized how much healthier gums could boost my confidence. The personalized treatment plan exceeded my expectations!",
      image: "https://static01.nyt.com/images/2020/03/25/reader-center/author-james-bennett/author-james-bennett-superJumbo.png",
      location: "Birmingham, UK",
    },
    {
      name: "Emily Carter",
      feedback:
        "From consultation to treatment, every step was handled with care and precision. Highly recommend Dr. Patel for anyone seeking the best dental care.",
      image: "https://engineering.princeton.edu/wp-content/uploads/2022/01/emily-carter.png",
      location: "Manchester, UK",
    },
  ];
  return (
    <section className="testimonials-section">
      <div className="header">
        <h1>What Our Patients Say</h1>
        <p>We’re proud to have helped so many patients achieve their dream smiles!</p>
      </div>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image-container">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s feedback`}
                className="testimonial-image"
              />
            </div>
            <blockquote>{testimonial.feedback}</blockquote>
            <h3>{testimonial.name}</h3>
            <p className="location">{testimonial.location}</p>
          </div>
        ))}
      </div>

      <div className="cta">
        <h2>Your Journey to a Healthier Smile Starts Here!</h2>
        <p>
          Ready for your own transformation? Book your consultation with Dr. Amit
          Patel and take the first step toward a brighter, healthier smile today.
        </p>
        <button className="cta-button"><NavLink to='/request'>Book Your Appointment</NavLink></button>
      </div>
    </section>
  );
};

export default Testimonials;
