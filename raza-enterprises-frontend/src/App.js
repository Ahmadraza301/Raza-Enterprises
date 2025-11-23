import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BankAccountPage from './pages/BankAccountPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes with Header/Footer */}
          <Route path="/" element={<><Header /><HomePage /><Footer /><FloatingWidget /></>} />
          <Route path="/services" element={<><Header /><ServicesPage /><Footer /><FloatingWidget /></>} />
          <Route path="/services/:serviceId" element={<><Header /><ServiceDetailPage /><Footer /><FloatingWidget /></>} />
          <Route path="/bank-account" element={<><Header /><BankAccountPage /><Footer /><FloatingWidget /></>} />
          <Route path="/about" element={<><Header /><AboutPage /><Footer /><FloatingWidget /></>} />
          <Route path="/contact" element={<><Header /><ContactPage /><Footer /><FloatingWidget /></>} />
          
          {/* Auth routes without Header/Footer */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Admin route without Header/Footer */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
