import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/raza-enter-prises-logo.png';
import './Header.css';

const Header = () => {
  const [language, setLanguage] = useState('EN');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Raza Enterprises" />
          <span>Raza Enterprises</span>
        </Link>
        
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {user && user.role === 'admin' && (
            <Link to="/admin">Admin</Link>
          )}
        </nav>

        <div className="header-actions">
          <select 
            className="language-switch" 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="EN">English</option>
            <option value="HI">हिंदी</option>
            <option value="MR">मराठी</option>
          </select>
          
          {user ? (
            <div className="user-menu">
              <span className="user-name">👤 {user.firstName}</span>
              <button onClick={handleLogout} className="logout-btn-header">Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn-header">Login</Link>
              <Link to="/register" className="register-btn-header">Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
