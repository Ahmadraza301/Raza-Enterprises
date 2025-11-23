import React, { useState } from 'react';
import './FloatingWidget.css';

const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [callbackData, setCallbackData] = useState({ name: '', phone: '', time: '' });
  const [enquiryData, setEnquiryData] = useState({ name: '', phone: '', service: '' });

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    alert(`Callback request received!\nWe will call you at ${callbackData.phone} during ${callbackData.time}`);
    setCallbackData({ name: '', phone: '', time: '' });
    setShowCallbackForm(false);
    setIsOpen(false);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry received for ${enquiryData.service}!\nWe will contact you at ${enquiryData.phone}`);
    setEnquiryData({ name: '', phone: '', service: '' });
    setShowEnquiryForm(false);
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello, I need help with government services', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <>
      {/* Floating Button */}
      <div className={`floating-widget ${isOpen ? 'open' : ''}`}>
        <button 
          className="widget-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle help menu"
        >
          {isOpen ? '✕' : '💬'}
          {!isOpen && <span className="widget-text">Any Query?</span>}
        </button>

        {/* Widget Menu */}
        {isOpen && (
          <div className="widget-menu">
            <div className="widget-header">
              <h3>How can we help you?</h3>
              <p>Choose an option below</p>
            </div>

            <div className="widget-options">
              <button className="widget-option whatsapp" onClick={handleWhatsApp}>
                <span className="option-icon">💬</span>
                <div className="option-text">
                  <strong>WhatsApp Chat</strong>
                  <small>Chat with us instantly</small>
                </div>
              </button>

              <button className="widget-option call" onClick={handleCall}>
                <span className="option-icon">📞</span>
                <div className="option-text">
                  <strong>Call Now</strong>
                  <small>+91 98765 43210</small>
                </div>
              </button>

              <button 
                className="widget-option callback" 
                onClick={() => {
                  setShowCallbackForm(true);
                  setShowEnquiryForm(false);
                }}
              >
                <span className="option-icon">📲</span>
                <div className="option-text">
                  <strong>Request Callback</strong>
                  <small>We'll call you back</small>
                </div>
              </button>

              <button 
                className="widget-option enquiry" 
                onClick={() => {
                  setShowEnquiryForm(true);
                  setShowCallbackForm(false);
                }}
              >
                <span className="option-icon">❓</span>
                <div className="option-text">
                  <strong>Quick Enquiry</strong>
                  <small>Ask about any service</small>
                </div>
              </button>
            </div>

            {/* Callback Form */}
            {showCallbackForm && (
              <div className="widget-form">
                <h4>Request Callback</h4>
                <form onSubmit={handleCallbackSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={callbackData.name}
                    onChange={(e) => setCallbackData({...callbackData, name: e.target.value})}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={callbackData.phone}
                    onChange={(e) => setCallbackData({...callbackData, phone: e.target.value})}
                    required
                  />
                  <select
                    value={callbackData.time}
                    onChange={(e) => setCallbackData({...callbackData, time: e.target.value})}
                    required
                  >
                    <option value="">Preferred Time</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                  </select>
                  <button type="submit" className="form-submit">Submit Request</button>
                  <button 
                    type="button" 
                    className="form-cancel" 
                    onClick={() => setShowCallbackForm(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}

            {/* Enquiry Form */}
            {showEnquiryForm && (
              <div className="widget-form">
                <h4>Quick Service Enquiry</h4>
                <form onSubmit={handleEnquirySubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={enquiryData.name}
                    onChange={(e) => setEnquiryData({...enquiryData, name: e.target.value})}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={enquiryData.phone}
                    onChange={(e) => setEnquiryData({...enquiryData, phone: e.target.value})}
                    required
                  />
                  <select
                    value={enquiryData.service}
                    onChange={(e) => setEnquiryData({...enquiryData, service: e.target.value})}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="PAN Card">PAN Card</option>
                    <option value="Aadhaar Card">Aadhaar Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving License">Driving License</option>
                    <option value="Bank Account">Bank Account Opening</option>
                    <option value="GST Registration">GST Registration</option>
                    <option value="Other">Other Services</option>
                  </select>
                  <button type="submit" className="form-submit">Submit Enquiry</button>
                  <button 
                    type="button" 
                    className="form-cancel" 
                    onClick={() => setShowEnquiryForm(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && <div className="widget-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default FloatingWidget;
