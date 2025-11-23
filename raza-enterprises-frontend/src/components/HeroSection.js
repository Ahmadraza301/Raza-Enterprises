import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/raza-enter-prises-logo.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to Raza Enterprises</h1>
          <p className="hero-subtitle">Your Trusted Partner for Government Services & Documentation</p>
          <p className="hero-description">
            We provide fast, reliable, and hassle-free services for all your government documentation needs.
            From PAN cards to passports, we've got you covered!
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get Started</a>
            <Link to="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Raza Enterprises" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
