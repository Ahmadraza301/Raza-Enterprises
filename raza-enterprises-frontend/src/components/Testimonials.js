import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      service: 'Passport Service',
      rating: 5,
      comment: 'Excellent service! Got my passport renewed within 2 weeks. Very professional and helpful staff.'
    },
    {
      name: 'Priya Sharma',
      service: 'PAN Card',
      rating: 5,
      comment: 'Quick and hassle-free service. They handled everything from application to delivery.'
    },
    {
      name: 'Amit Patel',
      service: 'Driving License',
      rating: 5,
      comment: 'Best service in town! They made the entire process so easy and smooth.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <p className="section-subtitle">Real experiences from real people</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="comment">"{testimonial.comment}"</p>
              <div className="customer-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
