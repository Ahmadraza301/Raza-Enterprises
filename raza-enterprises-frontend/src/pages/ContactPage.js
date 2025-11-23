import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you!</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p>+91 98765 43211</p>
                <p className="timing">Mon-Sat: 9 AM - 7 PM</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email Us</h3>
                <p>info@razaenterprises.com</p>
                <p>support@razaenterprises.com</p>
                <p className="timing">24/7 Email Support</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>+91 98765 43210</p>
                <button className="whatsapp-btn">Chat on WhatsApp</button>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Visit Us</h3>
                <p>Shop No. 5, Andheri West</p>
                <p>Mumbai - 400053</p>
                <p className="timing">Mon-Sat: 9 AM - 7 PM</p>
              </div>
            </div>

            <div className="branch-locator">
              <h3>🗺️ Branch Locator</h3>
              <div className="branches">
                <div className="branch-item">
                  <strong>Mumbai Branch</strong>
                  <p>Shop No. 5, Andheri West, Mumbai - 400053</p>
                </div>
                <div className="branch-item">
                  <strong>Pune Branch</strong>
                  <p>Office 12, FC Road, Pune - 411004</p>
                </div>
                <div className="branch-item">
                  <strong>Nagpur Branch</strong>
                  <p>Plot 8, Sitabuldi, Nagpur - 440012</p>
                </div>
              </div>
            </div>

            <div className="map-container">
              <h3>📍 Find Us on Map</h3>
              <div className="map-placeholder">
                <p>🗺️ Google Maps Integration</p>
                <p>Andheri West, Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="service">Service Information</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Type your message here..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>

            <div className="support-section">
              <h3>Need Immediate Help?</h3>
              <div className="support-buttons">
                <button className="support-btn">📞 Call Now</button>
                <button className="support-btn">💬 Live Chat</button>
                <button className="support-btn">📧 Email Support</button>
              </div>
            </div>
          </div>
        </div>

        <section className="working-hours">
          <h2>Working Hours & Holidays</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <h3>Regular Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="hours-card">
              <h3>Public Holidays</h3>
              <p>Closed on all national holidays</p>
              <p>Check our website for holiday calendar</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
