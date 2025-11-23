import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Raza Enterprises</h3>
          <p>Your trusted partner for all government services and documentation needs since 2014.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">📺 YouTube</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/bank-account">Bank Account Opening</Link>
        </div>

        <div className="footer-section">
          <h4>Popular Services</h4>
          <Link to="/services/pan-card">PAN Card</Link>
          <Link to="/services/aadhaar-card">Aadhaar Card</Link>
          <Link to="/services/passport">Passport</Link>
          <Link to="/services/driving-license">Driving License</Link>
          <Link to="/services/gst-registration">GST Registration</Link>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📧 Email: info@razaenterprises.com</p>
          <p>📍 Mumbai | Pune | Nagpur</p>
          <p>🕒 Mon-Sat: 9 AM - 7 PM</p>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <a href="#faq">FAQ</a>
          <a href="#help">Help Center</a>
          <a href="#ticket">Raise Ticket</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Raza Enterprises. All rights reserved. | Designed with ❤️ for the people</p>
      </div>
    </footer>
  );
};

export default Footer;
