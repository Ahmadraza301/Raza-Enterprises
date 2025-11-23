import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allServicesData as servicesData } from '../data/allServicesData';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!service) {
    return <div className="container"><h2>Service not found</h2></div>;
  }

  const relatedServices = servicesData.filter(s => service.relatedServices.includes(s.id));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="service-detail-page">
      {/* Header */}
      <div className="service-header">
        <div className="container">
          <div className="service-header-content">
            <div className="service-icon-hero">{service.icon}</div>
            <div>
              <h1>{service.name}</h1>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="service-content">
          {/* Main Content */}
          <div className="main-content">
            {/* Overview */}
            <section className="content-section">
              <h2>📋 Service Overview</h2>
              <p>{service.overview}</p>
            </section>

            {/* Process */}
            <section className="content-section">
              <h2>📝 Step-by-Step Process</h2>
              <ol className="process-list">
                {service.process.map((step, index) => (
                  <li key={index}>
                    <span className="step-number">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            {/* Documents */}
            <section className="content-section">
              <h2>📄 Required Documents</h2>
              <ul className="documents-list">
                {service.documents.map((doc, index) => (
                  <li key={index}>✓ {doc}</li>
                ))}
              </ul>
            </section>

            {/* Eligibility */}
            <section className="content-section">
              <h2>✅ Eligibility Criteria</h2>
              <ul className="eligibility-list">
                {service.eligibility.map((criteria, index) => (
                  <li key={index}>• {criteria}</li>
                ))}
              </ul>
            </section>

            {/* Pricing */}
            <section className="content-section">
              <h2>💰 Pricing & Fees</h2>
              <div className="pricing-table">
                <div className="pricing-row">
                  <span>Government Fee:</span>
                  <span>₹{service.pricing.government}</span>
                </div>
                <div className="pricing-row">
                  <span>Service Charge:</span>
                  <span>₹{service.pricing.service}</span>
                </div>
                <div className="pricing-row total">
                  <span>Total Amount:</span>
                  <span>₹{service.pricing.total}</span>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="content-section">
              <h2>⏱️ Processing Timeline</h2>
              <p className="timeline-info">
                <strong>{service.timeline}</strong> (approximate)
              </p>
            </section>

            {/* Downloadable Forms */}
            <section className="content-section">
              <h2>📥 Downloadable Forms</h2>
              <div className="download-buttons">
                <button className="download-btn">Download Application Form (PDF)</button>
                <button className="download-btn">Download Document Checklist (PDF)</button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Application Form */}
            <div className="sidebar-card">
              <h3>Apply Now</h3>
              <form onSubmit={handleSubmit} className="application-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Additional Information"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                />
                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            </div>

            {/* Quick Info */}
            <div className="sidebar-card">
              <h3>Quick Information</h3>
              <div className="quick-info">
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <div>
                    <strong>Processing Time</strong>
                    <p>{service.timeline}</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">💰</span>
                  <div>
                    <strong>Total Cost</strong>
                    <p>₹{service.pricing.total}</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Support</strong>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="related-services">
            <h2>Related Services</h2>
            <div className="related-grid">
              {relatedServices.map(relService => (
                <Link key={relService.id} to={`/services/${relService.id}`} className="related-card">
                  <div className="related-icon">{relService.icon}</div>
                  <h4>{relService.name}</h4>
                  <p>{relService.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailPage;
