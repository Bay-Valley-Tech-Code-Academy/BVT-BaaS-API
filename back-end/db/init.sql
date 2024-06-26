CREATE TABLE organization (
organization_id INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
api_key VARCHAR(64) UNIQUE,
secret VARCHAR(64) UNIQUE
);

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15) NOT NULL,
  mfa_method ENUM('sms', 'email'),
  staff_flag TINYINT DEFAULT 0,
  disable_login_flag TINYINT DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  organization_id INT,
  FOREIGN KEY (organization_id) REFERENCES organization(organization_id)
);


