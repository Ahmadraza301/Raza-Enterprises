import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    { icon: '✅', title: 'Trusted Service', description: '10+ years of experience serving thousands of satisfied customers' },
    { icon: '⚡', title: 'Fast Processing', description: 'Quick turnaround time for all documentation services' },
    { icon: '💬', title: '24/7 Support', description: 'Always available to answer your queries and concerns' },
    { icon: '🔒', title: 'Secure & Safe', description: 'Your documents and data are completely secure with us' }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose Us?</h2>
        <p className="section-subtitle">Your satisfaction is our priority</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
