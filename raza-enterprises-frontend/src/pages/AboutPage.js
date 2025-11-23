import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const team = [
    { name: 'Ahmad Raza', role: 'Founder & CEO', icon: '👨‍💼' },
    { name: 'Priya Sharma', role: 'Operations Head', icon: '👩‍💼' },
    { name: 'Rajesh Kumar', role: 'Customer Relations', icon: '👨‍💻' },
    { name: 'Sneha Patel', role: 'Documentation Expert', icon: '👩‍💻' }
  ];

  const branches = [
    { city: 'Mumbai', address: 'Shop No. 5, Andheri West, Mumbai - 400053', phone: '+91 98765 43210' },
    { city: 'Pune', address: 'Office 12, FC Road, Pune - 411004', phone: '+91 98765 43211' },
    { city: 'Nagpur', address: 'Plot 8, Sitabuldi, Nagpur - 440012', phone: '+91 98765 43212' }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Raza Enterprises</h1>
          <p>Your Trusted Partner Since 2014</p>
        </div>
      </div>

      <div className="container">
        <section className="company-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2014, Raza Enterprises has been serving the community with dedication and excellence for over 10 years.
            What started as a small documentation service center has now grown into a comprehensive government services provider,
            helping thousands of citizens access various government schemes and services.
          </p>
          <p>
            Our mission is to simplify the complex process of government documentation and make it accessible to everyone.
            We believe that every citizen deserves hassle-free access to government services, and we work tirelessly to make that a reality.
          </p>
        </section>

        <section className="mission-vision">
          <div className="mv-card">
            <h3>🎯 Our Mission</h3>
            <p>To provide fast, reliable, and transparent government documentation services to every citizen, making their lives easier and stress-free.</p>
          </div>
          <div className="mv-card">
            <h3>👁️ Our Vision</h3>
            <p>To become the most trusted and preferred government services provider in Maharashtra, known for our integrity and customer satisfaction.</p>
          </div>
        </section>

        <section className="leadership-team">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{member.icon}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements">
          <h2>Our Achievements</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Services Offered</p>
            </div>
            <div className="stat-box">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h3>3</h3>
              <p>Branch Locations</p>
            </div>
          </div>
        </section>

        <section className="branch-network">
          <h2>Our Branch Network</h2>
          <div className="branches-grid">
            {branches.map((branch, index) => (
              <div key={index} className="branch-card">
                <h3>📍 {branch.city}</h3>
                <p>{branch.address}</p>
                <p>📞 {branch.phone}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="certifications">
          <h2>Certifications & Partnerships</h2>
          <div className="cert-grid">
            <div className="cert-card">✅ ISO 9001:2015 Certified</div>
            <div className="cert-card">🤝 Authorized CSC Partner</div>
            <div className="cert-card">🏛️ Government Approved</div>
            <div className="cert-card">🔒 Data Security Compliant</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
