# CSC Database Schema Documentation

## Database: csc_database (MySQL)

### Overview
This database schema is designed for a Common Services Center (CSC) enterprise application that provides government services, documentation, and banking services.

## Core Entities

### 1. **users**
Stores customer and staff user information.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT (PK) | Auto-increment primary key |
| first_name | VARCHAR(100) | User's first name |
| last_name | VARCHAR(100) | User's last name |
| email | VARCHAR(255) UNIQUE | Email address |
| phone | VARCHAR(20) | Phone number |
| password_hash | VARCHAR(255) | Hashed password |
| role | VARCHAR(50) | admin, staff, customer |
| preferred_language | VARCHAR(10) | en, hi, mr |
| created_at | TIMESTAMP | Record creation time |
| updated_at | TIMESTAMP | Last update time |

### 2. **branches**
Physical branch locations.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT (PK) | Auto-increment primary key |
| name | VARCHAR(150) | Branch name |
| address | TEXT | Full address |
| city | VARCHAR(100) | City name |
| state | VARCHAR(100) | State name |
| pincode | VARCHAR(20) | Postal code |
| contact_email | VARCHAR(150) | Branch email |
| contact_phone | VARCHAR(30) | Branch phone |
| gps_latitude | DECIMAL(10,7) | GPS coordinates |
| gps_longitude | DECIMAL(10,7) | GPS coordinates |
| opening_hours | TEXT | JSON string of hours |
| created_at | TIMESTAMP | Record creation time |

### 3. **categories**
Service categories (hierarchical).

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT (PK) | Auto-increment primary key |
| name | VARCHAR(150) | Category name |
| slug | VARCHAR(200) UNIQUE | URL-friendly name |
| description | TEXT | Category description |
| parent_id | BIGINT (FK) | Parent category ID |
| display_order | INT | Display order |
| icon | VARCHAR(50) | Emoji or icon |

### 4. **services**
Individual services offered.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT (PK) | Auto-increment primary key |
| category_id | BIGINT (FK) | Category reference |
| code | VARCHAR(50) UNIQUE | Service code |
| name | VARCHAR(200) | Service name |
| short_description | VARCHAR(500) | Brief description |
| long_description | TEXT | Detailed description |
| estimated_processing_days | INT | Processing time |
| base_fee | DECIMAL(12,2) | Service charge |
| government_fee | DECIMAL(12,2) | Government fee |
| requires_appointment | BOOLEAN | Needs appointment |
| is_active | BOOLEAN | Service active status |
| icon | VARCHAR(50) | Service icon |
| tags | VARCHAR(200) | Comma-separated tags |
| created_at | TIMESTAMP | Record creation time |
| updated_at | TIMESTAMP | Last update time |

### 5. **bookings**
Service bookings/applications.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT (PK) | Auto-increment primary key |
| service_id | BIGINT (FK) | Service reference |
| user_id | BIGINT (FK) | User reference |
| branch_id | BIGINT (FK) | Branch reference |
| reference_no | VARCHAR(100) UNIQUE | Booking reference |
| status | ENUM | PENDING, IN_PROGRESS, COMPLETED, REJECTED, CANCELLED |
| scheduled_at | TIMESTAMP | Appointment time |
| notes | TEXT | Additional notes |
| customer_name | VARCHAR(255) | Customer name |
| customer_email | VARCHAR(255) | Customer email |
| customer_phone | VARCHAR(30) | Customer phone |
| created_at | TIMESTAMP | Record creation time |
| updated_at | TIMESTAMP | Last update time |

### 6. **banks**
Bank master data.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT (PK) | Auto-increment primary key |
| name | VARCHAR(200) | Bank name |
| ifsc_pattern | VARCHAR(50) | IFSC code pattern |
| support_email | VARCHAR(150) | Support email |
| support_phone | VARCHAR(30) | Support phone |
| created_at | TIMESTAMP | Record creation time |

### 7. **bank_account_applications**
Bank account opening applications.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT (PK) | Auto-increment primary key |
| booking_id | BIGINT (FK) | Booking reference |
| bank_id | BIGINT (FK) | Bank reference |
| applicant_name | VARCHAR(255) | Applicant name |
| applicant_phone | VARCHAR(30) | Phone number |
| applicant_email | VARCHAR(255) | Email address |
| account_type | VARCHAR(50) | savings, current, salary |
| aadhaar_number | VARCHAR(20) | Aadhaar number |
| pan_number | VARCHAR(20) | PAN number |
| address | TEXT | Full address |
| external_account_ref | VARCHAR(200) | Bank's reference |
| status | ENUM | INITIATED, DOCUMENTS_PENDING, CREATED, FAILED |
| created_at | TIMESTAMP | Record creation time |
| updated_at | TIMESTAMP | Last update time |

## API Endpoints

### Services API
- `GET /api/services` - Get all active services
- `GET /api/services/{id}` - Get service by ID
- `GET /api/services/code/{code}` - Get service by code
- `GET /api/services/category/{categoryId}` - Get services by category
- `GET /api/services/search?query=` - Search services
- `POST /api/services` - Create new service
- `PUT /api/services/{id}` - Update service
- `DELETE /api/services/{id}` - Delete service

### Bookings API
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/{id}` - Get booking by ID
- `GET /api/bookings/reference/{referenceNo}` - Get by reference
- `GET /api/bookings/email/{email}` - Get by customer email
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/{id}` - Update booking
- `DELETE /api/bookings/{id}` - Delete booking

### Bank Account API
- `POST /api/bank-accounts/apply` - Submit bank account application
- `GET /api/bank-accounts` - Get all applications
- `GET /api/bank-accounts/{id}` - Get application by ID
- `GET /api/bank-accounts/email/{email}` - Get by email

### Branches API
- `GET /api/branches` - Get all branches
- `GET /api/branches/{id}` - Get branch by ID
- `GET /api/branches/city/{city}` - Get branches by city
- `POST /api/branches` - Create new branch
- `PUT /api/branches/{id}` - Update branch
- `DELETE /api/branches/{id}` - Delete branch

## Database Features

### Auto-generated Fields
- **Reference Numbers**: Bookings automatically get unique reference numbers (CSC-XXXXXXXXX)
- **Timestamps**: created_at and updated_at are automatically managed
- **Status Enums**: Type-safe status values for bookings and applications

### Relationships
- Services belong to Categories
- Bookings reference Services, Users, and Branches
- Bank Account Applications reference Bookings and Banks

### Indexes (Auto-created by Hibernate)
- Primary keys on all tables
- Unique indexes on email, reference_no, code, slug
- Foreign key indexes for relationships

## Sample Data Included
- 3 Branches (Mumbai, Pune, Nagpur)
- 8 Categories
- 8 Banks
- 13 Services across different categories

## Configuration
Database connection is configured in `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/csc_database
spring.datasource.username=root
spring.datasource.password=Ahmadraza@#01
spring.jpa.hibernate.ddl-auto=update
```

## Notes
- Hibernate automatically creates/updates tables on application startup
- Sample data is loaded from data.sql
- All timestamps are in server timezone
- Soft delete can be implemented by adding is_deleted column
- Audit logging can be added for compliance
