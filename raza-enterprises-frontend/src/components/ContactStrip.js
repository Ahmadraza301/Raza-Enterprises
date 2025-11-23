import React from 'react';
import './ContactStrip.css';

const ContactStrip = () => {
  return (
    <section className="contact-strip">
      <div className="container">
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <div>
              <h4>Email Us</h4>
              <p>info@razaenterprises.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <div>
              <h4>Visit Us</h4>
              <p>Your City, State - 123456</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">🕒</span>
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat: 9 AM - 7 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
