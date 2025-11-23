import React from 'react';
import './GovernmentSchemes.css';

const GovernmentSchemes = () => {
  const schemes = [
    { name: 'PM Kisan Samman Nidhi', benefit: '₹6000/year for farmers', category: 'Agriculture' },
    { name: 'Ayushman Bharat', benefit: '₹5 Lakh health insurance', category: 'Healthcare' },
    { name: 'PM Awas Yojana', benefit: 'Housing for all', category: 'Housing' },
    { name: 'Mudra Loan Scheme', benefit: 'Business loans up to ₹10 Lakh', category: 'Business' }
  ];

  return (
    <section className="schemes" id="schemes">
      <div className="container">
        <h2>Government Schemes</h2>
        <p className="section-subtitle">We help you access government benefits</p>
        
        <div className="schemes-grid">
          {schemes.map((scheme, index) => (
            <div key={index} className="scheme-card">
              <span className="scheme-category">{scheme.category}</span>
              <h3>{scheme.name}</h3>
              <p>{scheme.benefit}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentSchemes;
