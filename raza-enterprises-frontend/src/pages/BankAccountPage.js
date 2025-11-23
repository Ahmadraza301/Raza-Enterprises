import React, { useState } from 'react';
import './BankAccountPage.css';

const BankAccountPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bank: '',
    accountType: 'savings',
    appointmentDate: '',
    appointmentTime: '',
    aadhaar: '',
    pan: '',
    address: ''
  });

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank',
    'Punjab National Bank', 'Bank of Baroda', 'Canara Bank', 'Union Bank'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked successfully!\n\nBank: ${formData.bank}\nDate: ${formData.appointmentDate}\nTime: ${formData.appointmentTime}\n\nConfirmation email sent to ${formData.email}`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bank-account-page">
      <div className="bank-hero">
        <div className="container">
          <h1>🏦 Bank Account Opening</h1>
          <p>Open your bank account hassle-free with our assistance</p>
        </div>
      </div>

      <div className="container">
        <div className="bank-content">
          <div className="bank-info">
            <h2>Why Open Account With Us?</h2>
            <div className="benefits">
              <div className="benefit-card">
                <span className="benefit-icon">✅</span>
                <h3>Expert Guidance</h3>
                <p>Our team helps you choose the right bank and account type</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">⚡</span>
                <h3>Quick Process</h3>
                <p>Account opened within 1-3 days</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">📄</span>
                <h3>Document Assistance</h3>
                <p>We help you prepare all required documents</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">🔒</span>
                <h3>Secure & Safe</h3>
                <p>Your data is completely secure with us</p>
              </div>
            </div>

            <div className="required-docs">
              <h3>📋 Required Documents</h3>
              <ul>
                <li>✓ Aadhaar Card (Original + Photocopy)</li>
                <li>✓ PAN Card (Original + Photocopy)</li>
                <li>✓ Address Proof (Electricity Bill/Rent Agreement)</li>
                <li>✓ 2 Passport Size Photographs</li>
                <li>✓ Initial Deposit (As per bank requirement)</li>
              </ul>
            </div>

            <div className="account-types">
              <h3>💳 Account Types Available</h3>
              <div className="types-grid">
                <div className="type-card">
                  <h4>Savings Account</h4>
                  <p>For individuals to save money with interest</p>
                </div>
                <div className="type-card">
                  <h4>Current Account</h4>
                  <p>For businesses with unlimited transactions</p>
                </div>
                <div className="type-card">
                  <h4>Salary Account</h4>
                  <p>For salaried employees with zero balance</p>
                </div>
                <div className="type-card">
                  <h4>Fixed Deposit</h4>
                  <p>Lock money for fixed period with higher interest</p>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-container">
            <h2>📅 Book Your Appointment</h2>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
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
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Select Bank *</label>
                <select name="bank" value={formData.bank} onChange={handleChange} required>
                  <option value="">Choose a bank</option>
                  {banks.map(bank => (
                    <option key={bank} value={bank}>{bank}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Account Type *</label>
                <select name="accountType" value={formData.accountType} onChange={handleChange} required>
                  <option value="savings">Savings Account</option>
                  <option value="current">Current Account</option>
                  <option value="salary">Salary Account</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Time *</label>
                  <input
                    type="time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Aadhaar Number *</label>
                  <input
                    type="text"
                    name="aadhaar"
                    value={formData.aadhaar}
                    onChange={handleChange}
                    required
                    placeholder="XXXX XXXX XXXX"
                    maxLength="12"
                  />
                </div>
                <div className="form-group">
                  <label>PAN Number *</label>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    required
                    placeholder="ABCDE1234F"
                    maxLength="10"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Enter your complete address"
                />
              </div>

              <button type="submit" className="submit-btn">
                📅 Book Appointment
              </button>

              <p className="form-note">
                * You will receive a confirmation email with appointment details
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountPage;
