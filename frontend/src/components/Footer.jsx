import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upperpart">
        <div className="fb">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/aboutme">About Us</NavLink><hr /></li>
            <li><NavLink to="/">Home</NavLink><hr /></li>
            <li><NavLink to="/dental">Dental Implants</NavLink><hr /></li>
            <li><NavLink to="/periodontic">Periodontics</NavLink><hr /></li>
            <li><NavLink to="/contact">Contact Us</NavLink><hr /></li>
          </ul>
        </div>
        <div className="fb">
          <h3>Featured Services</h3>
          <ul>
            <li><NavLink to="https://play.google.com/store/apps/details?id=com.denticalc.demo&hl=en" target='blank'>APP</NavLink><hr /></li>
            <li><NavLink to="https://www.bsperio.org.uk/" target='blank'>bsperio</NavLink><hr /></li>
            <li><NavLink to="https://www.efp.org/" target='blank'>efp</NavLink><hr /></li>
            <li><NavLink to="https://oralb.com/" target='blank'>oralb</NavLink><hr /></li>
            <li><NavLink to="https://www.tepe.com/global" target='blank'>tepe</NavLink><hr /></li>
          </ul>
        </div>
        <div className="fb">
          <h3>Support</h3>
          <ul>
            <li><NavLink to="#">Tools</NavLink><hr /></li>
            <li><NavLink to="/faqs">FAQs</NavLink><hr /></li>
            <li><NavLink to="/livechat">Live Chat</NavLink><hr /></li>
            <li><NavLink to="/consultation">Free Consultation</NavLink><hr /></li>
            <li><NavLink to="/site">Sitemap</NavLink><hr /></li>
          </ul>
        </div>
        <div className="contact fb">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <img src="/imgs/location.png" alt="Location" />
            <p>ab illo inventore veritatis Nemo enim ipsam ab illo inventore verit</p>
          </div>
          <div className="contact-item">
            <img src="/imgs/mail.png" alt="Mail" />
            <p>Info@Amitpatel.co.uk</p>
          </div>
          <div className="contact-item">
            <img src="/imgs/contact.png" alt="Contact" />
            <p>02384 786345</p>
          </div>
        </div>
      </div>
      <hr className="hrfooter" />
      <p className="copyright">&copy; 2024 AMIT PATEL.CO.UK ALL RIGHTS RESERVED</p>
    </footer>
  );
};

export default Footer;
