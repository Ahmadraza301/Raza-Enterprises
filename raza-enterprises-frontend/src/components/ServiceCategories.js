import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCategories.css';

const ServiceCategories = () => {
  const services = [
    { id: 'pan-card', icon: '🆔', name: 'PAN Card', description: 'Apply & Update' },
    { id: 'passport', icon: '🛂', name: 'Passport', description: 'New & Renewal' },
    { id: 'driving-license', icon: '🚗', name: 'Driving License', description: 'All Types' },
    { id: 'aadhaar-card', icon: '📜', name: 'Aadhaar Card', description: 'Update & Print' },
    { id: 'voter-id', icon: '🗳️', name: 'Voter ID', description: 'New Registration' },
    { id: 'ration-card', icon: '🍚', name: 'Ration Card', description: 'Apply & Update' },
    { id: 'birth-certificate', icon: '👶', name: 'Birth Certificate', description: 'Registration' },
    { id: 'marriage-certificate', icon: '💑', name: 'Marriage Certificate', description: 'Registration' }
  ];

  return (
    <section className="service-categories" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Quick access to our most popular services</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/services" className="view-all-btn">View All Services →</Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
