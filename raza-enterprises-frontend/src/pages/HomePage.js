import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCategories from '../components/ServiceCategories';
import GovernmentSchemes from '../components/GovernmentSchemes';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import ContactStrip from '../components/ContactStrip';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceCategories />
      <GovernmentSchemes />
      <WhyChooseUs />
      <AboutPreview />
      <Testimonials />
      <ContactStrip />
    </>
  );
};

export default HomePage;
