-- Sample data for CSC Database

-- Insert Branches
INSERT INTO branches (name, address, city, state, pincode, contact_email, contact_phone, opening_hours, created_at) VALUES
('Mumbai Branch', 'Shop No. 5, Andheri West', 'Mumbai', 'Maharashtra', '400053', 'mumbai@razaenterprises.com', '+91 98765 43210', '{"mon":"09:00-19:00","tue":"09:00-19:00","wed":"09:00-19:00","thu":"09:00-19:00","fri":"09:00-19:00","sat":"09:00-19:00","sun":"Closed"}', NOW()),
('Pune Branch', 'Office 12, FC Road', 'Pune', 'Maharashtra', '411004', 'pune@razaenterprises.com', '+91 98765 43211', '{"mon":"09:00-19:00","tue":"09:00-19:00","wed":"09:00-19:00","thu":"09:00-19:00","fri":"09:00-19:00","sat":"09:00-19:00","sun":"Closed"}', NOW()),
('Nagpur Branch', 'Plot 8, Sitabuldi', 'Nagpur', 'Maharashtra', '440012', 'nagpur@razaenterprises.com', '+91 98765 43212', '{"mon":"09:00-19:00","tue":"09:00-19:00","wed":"09:00-19:00","thu":"09:00-19:00","fri":"09:00-19:00","sat":"09:00-19:00","sun":"Closed"}', NOW());

-- Insert Categories
INSERT INTO categories (name, slug, description, parent_id, display_order, icon) VALUES
('Banking & Finance', 'banking-finance', 'Banking and financial services', NULL, 1, '🏦'),
('Identity & Legal', 'identity-legal', 'Identity documents and legal services', NULL, 2, '🆔'),
('Government Schemes', 'government-schemes', 'Government welfare schemes', NULL, 3, '🏛️'),
('Education Services', 'education-services', 'Education related services', NULL, 4, '🎓'),
('Transport Services', 'transport-services', 'Vehicle and transport services', NULL, 5, '🚗'),
('Business Services', 'business-services', 'Business registration and services', NULL, 6, '💼'),
('Civil Documents', 'civil-documents', 'Birth, death, marriage certificates', NULL, 7, '📋'),
('Digital Services', 'digital-services', 'Online recharge and digital services', NULL, 8, '📱');

-- Insert Banks
INSERT INTO banks (name, ifsc_pattern, support_email, support_phone, created_at) VALUES
('State Bank of India', 'SBIN%', 'support@sbi.co.in', '1800 1234', NOW()),
('HDFC Bank', 'HDFC%', 'support@hdfcbank.com', '1800 2222', NOW()),
('ICICI Bank', 'ICIC%', 'support@icicibank.com', '1800 3333', NOW()),
('Axis Bank', 'UTIB%', 'support@axisbank.com', '1800 4444', NOW()),
('Punjab National Bank', 'PUNB%', 'support@pnb.co.in', '1800 5555', NOW()),
('Bank of Baroda', 'BARB%', 'support@bankofbaroda.com', '1800 6666', NOW()),
('Canara Bank', 'CNRB%', 'support@canarabank.com', '1800 7777', NOW()),
('Union Bank', 'UBIN%', 'support@unionbankofindia.co.in', '1800 8888', NOW());

-- Insert Services
INSERT INTO services (category_id, code, name, short_description, long_description, estimated_processing_days, base_fee, government_fee, requires_appointment, is_active, icon, tags, created_at, updated_at) VALUES
-- Banking Services
(1, 'BANK_ACC', 'Bank Account Opening', 'Savings & Current account opening', 'We help you open bank accounts with all major banks with minimal documentation.', 3, 300.00, 0.00, true, true, '🏦', 'Most Used,Fast Approval', NOW(), NOW()),
(1, 'KYC_UPDATE', 'KYC Update', 'Update your bank KYC details', 'Keep your bank KYC updated to avoid account restrictions.', 5, 200.00, 0.00, false, true, '🔄', 'Fast Approval', NOW(), NOW()),
(1, 'CREDIT_CARD', 'Credit Card Application', 'Apply for credit cards', 'Get credit cards with best offers and rewards.', 15, 500.00, 0.00, false, true, '💳', 'Trending', NOW(), NOW()),

-- Identity Services
(2, 'PAN_CARD', 'PAN Card', 'Apply for new PAN or update', 'Permanent Account Number for tax purposes.', 20, 200.00, 110.00, false, true, '🆔', 'Most Used,Fast Approval', NOW(), NOW()),
(2, 'AADHAAR', 'Aadhaar Services', 'Aadhaar enrollment & updates', '12-digit unique identification number.', 90, 150.00, 0.00, true, true, '📜', 'Most Used', NOW(), NOW()),
(2, 'PASSPORT', 'Passport Services', 'New passport & renewal', 'International travel document.', 45, 500.00, 1500.00, true, true, '🛂', 'Trending', NOW(), NOW()),

-- Transport Services
(5, 'DRIVING_LICENSE', 'Driving License', 'Learner & permanent DL', 'License to drive motor vehicles.', 30, 300.00, 200.00, true, true, '🚗', 'Most Used', NOW(), NOW()),
(5, 'VEHICLE_RC', 'Vehicle RC Services', 'RC transfer & renewal', 'Vehicle registration certificate services.', 15, 500.00, 300.00, false, true, '🚗', 'Fast Approval', NOW(), NOW()),

-- Business Services
(6, 'GST_REG', 'GST Registration', 'GST number registration', 'Goods and Services Tax registration.', 10, 1000.00, 0.00, false, true, '💼', 'Most Used,Fast Approval', NOW(), NOW()),
(6, 'UDYAM_REG', 'Udyam Registration', 'MSME registration', 'Micro, Small and Medium Enterprises registration.', 2, 500.00, 0.00, false, true, '🏭', 'New,Fast Approval', NOW(), NOW()),

-- Civil Documents
(7, 'BIRTH_CERT', 'Birth Certificate', 'Birth registration', 'Official birth record.', 15, 150.00, 0.00, false, true, '👶', 'Fast Approval', NOW(), NOW()),
(7, 'MARRIAGE_CERT', 'Marriage Certificate', 'Marriage registration', 'Legal proof of marriage.', 30, 200.00, 100.00, false, true, '💑', 'Trending', NOW(), NOW()),
(7, 'INCOME_CERT', 'Income Certificate', 'Annual income certificate', 'Certify annual income.', 20, 150.00, 50.00, false, true, '💵', 'Most Used', NOW(), NOW());


-- Insert default admin user
INSERT INTO users (first_name, last_name, email, phone, password_hash, role, preferred_language, created_at, updated_at) VALUES
('Admin', 'User', 'admin@razaenterprises.com', '+91 98765 43210', 'admin123', 'admin', 'en', NOW(), NOW()),
('Test', 'Customer', 'customer@test.com', '+91 98765 43211', 'test123', 'customer', 'en', NOW(), NOW());

-- Insert sample bookings
INSERT INTO bookings (service_id, user_id, branch_id, reference_no, status, customer_name, customer_email, customer_phone, notes, created_at, updated_at) VALUES
(1, 2, 1, 'CSC-100001', 'PENDING', 'Rajesh Kumar', 'rajesh@example.com', '+91 98765 11111', 'Need PAN card urgently', NOW(), NOW()),
(2, 2, 1, 'CSC-100002', 'IN_PROGRESS', 'Priya Sharma', 'priya@example.com', '+91 98765 22222', 'Aadhaar update required', NOW(), NOW()),
(3, 2, 2, 'CSC-100003', 'COMPLETED', 'Amit Patel', 'amit@example.com', '+91 98765 33333', 'Passport renewal done', NOW(), NOW());
