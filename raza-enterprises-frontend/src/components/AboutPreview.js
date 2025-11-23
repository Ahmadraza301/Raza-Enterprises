import React from 'react';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="about-preview" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Raza Enterprises</h2>
            <p>
              With over 10 years of experience, Raza Enterprises has been serving the community 
              with dedication and excellence. We specialize in providing hassle-free government 
              documentation services and helping citizens access various government schemes.
            </p>
            <p>
              Our team of experienced professionals ensures that your work is completed accurately 
              and on time. We pride ourselves on our customer-first approach and transparent processes.
            </p>
            <button className="learn-more-btn">Learn More About Us</button>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Services Offered</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
