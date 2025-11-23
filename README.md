# Raza Enterprises - Complete CSC Management System

A full-stack enterprise application for Common Services Center (CSC) providing government services, documentation, and banking services.

## 🚀 Features

### Frontend (React)
- **Homepage** with hero section, services showcase, and testimonials
- **50+ Government Services** across 13 categories
- **User Registration & Authentication**
- **Admin Dashboard** for managing requests
- **Bank Account Opening System**
- **Service Booking System**
- **Floating Help Widget** (WhatsApp, Call, Callback, Enquiry)
- **Responsive Design** - Mobile, Tablet, Desktop
- **Multi-language Support** (English, Hindi, Marathi)

### Backend (Spring Boot)
- **RESTful APIs** for all operations
- **MySQL Database** with Hibernate ORM
- **User Authentication** (Login/Register)
- **Role-based Access Control** (Admin/Customer)
- **CRUD Operations** for all entities
- **Auto-generated Booking References**

### Database
- **9 Core Tables** (Users, Services, Bookings, Branches, etc.)
- **Sample Data** included
- **Foreign Key Relationships**
- **Auto-timestamps**

## 📋 Services Offered

### Categories
- 🏦 Banking & Finance
- 🆔 Identity & Legal Documents
- 🏛️ Government Schemes
- 🎓 Education Services
- 🚗 Transport Services
- 💼 Business Services
- 📋 Civil Documents
- 📱 Digital Services

## 🛠️ Tech Stack

### Frontend
- React 19.2.0
- React Router DOM
- CSS3 with modern animations
- Responsive design

### Backend
- Spring Boot 4.0.0
- Java 21
- Hibernate 7.1.8
- MySQL 8.0

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- Java 21
- MySQL 8.0
- Gradle

### Frontend Setup
```bash
cd raza-enterprises-frontend
npm install
npm start
```
Frontend runs on: http://localhost:3000

### Backend Setup
```bash
cd raza-enterprises-backend/demo
.\gradlew.bat bootRun
```
Backend runs on: http://localhost:8081

### Database Setup
1. Create MySQL database:
```sql
CREATE DATABASE csc_database;
```

2. Update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/csc_database
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
```

3. Sample data will be loaded automatically on first run

## 🔐 Default Credentials

### Admin Account
- Email: `admin@razaenterprises.com`
- Password: `admin123`

### Test Customer Account
- Email: `customer@test.com`
- Password: `test123`

## 📱 Pages

### Public Pages
- `/` - Homepage
- `/services` - All Services
- `/services/:id` - Service Details
- `/bank-account` - Bank Account Opening
- `/about` - About Us
- `/contact` - Contact Us
- `/register` - User Registration
- `/login` - User Login

### Admin Pages
- `/admin` - Admin Dashboard (requires admin login)

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/users` - Get all users

### Services
- `GET /api/services` - Get all services
- `GET /api/services/{id}` - Get service by ID
- `GET /api/services/search?query=` - Search services

### Bookings
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/reference/{ref}` - Get by reference

### Bank Accounts
- `POST /api/bank-accounts/apply` - Submit application
- `GET /api/bank-accounts` - Get all applications

### Branches
- `GET /api/branches` - Get all branches
- `GET /api/branches/city/{city}` - Get by city

### Health Check
- `GET /api/health/db-status` - Database connection status

## 📊 Database Schema

### Main Tables
- `users` - User accounts
- `branches` - Physical locations
- `categories` - Service categories
- `services` - Individual services
- `bookings` - Service bookings
- `banks` - Bank master data
- `bank_account_applications` - Bank applications

See `DATABASE_SCHEMA.md` for complete schema documentation.

## 🎨 Features Highlights

### User Features
- ✅ Register and create account
- ✅ Login with credentials
- ✅ Browse 50+ services
- ✅ Book services online
- ✅ Track booking status
- ✅ Apply for bank accounts
- ✅ Get instant support via floating widget

### Admin Features
- ✅ View all bookings
- ✅ Manage bank applications
- ✅ View registered users
- ✅ Track statistics
- ✅ Monitor pending requests

## 🌟 UI Features
- Beautiful gradient purple theme
- Smooth animations and transitions
- Floating help widget on all pages
- Status badges for tracking
- Responsive tables
- Mobile-friendly design

## 📝 License
This project is private and proprietary.

## 👨‍💻 Developer
**Ahmad Raza**
- GitHub: [@Ahmadraza301](https://github.com/Ahmadraza301)

## 📞 Support
For support, email: info@razaenterprises.com or call +91 98765 43210

---

**© 2025 Raza Enterprises. All rights reserved.**
