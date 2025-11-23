import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allServicesData as servicesData, serviceCategories } from '../data/allServicesData';
import './ServicesPage.css';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || service.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const mostUsedServices = servicesData.filter(s => s.tags.includes('Most Used'));

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Find the service you need from our comprehensive list</p>
      </div>

      <div className="container">
        {/* Search Bar */}
        <div className="search-section">
          <input
            type="text"
            placeholder="🔍 Search for services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="filter-group">
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All Categories</option>
              {serviceCategories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Filter by:</label>
            <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
              <option value="all">All Services</option>
              <option value="Most Used">Most Used</option>
              <option value="Trending">Trending</option>
              <option value="New">New</option>
              <option value="Fast Approval">Fast Approval</option>
            </select>
          </div>
        </div>

        {/* Most Used Services */}
        {searchTerm === '' && selectedCategory === 'all' && selectedTag === 'all' && (
          <section className="most-used-section">
            <h2>Most Used Services</h2>
            <div className="services-grid">
              {mostUsedServices.map(service => (
                <Link key={service.id} to={`/services/${service.id}`} className="service-card">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Services Grid */}
        <section className="all-services-section">
          <h2>
            {searchTerm || selectedCategory !== 'all' || selectedTag !== 'all' 
              ? 'Search Results' 
              : 'All Services'}
          </h2>
          <div className="services-grid">
            {filteredServices.map(service => (
              <Link key={service.id} to={`/services/${service.id}`} className="service-card">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <span className="category-badge">{service.category}</span>
              </Link>
            ))}
          </div>
          {filteredServices.length === 0 && (
            <p className="no-results">No services found. Try different filters.</p>
          )}
        </section>

        {/* Help Section */}
        <section className="help-section">
          <h2>Need Help?</h2>
          <p>Can't find what you're looking for? Contact our support team.</p>
          <div className="help-buttons">
            <button className="btn-primary">Call Us: +91 98765 43210</button>
            <button className="btn-secondary">Chat with Support</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
