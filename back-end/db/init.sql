<<<<<<< HEAD
CREATE TABLE organization (
organization_id INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
api_key VARCHAR(64) UNIQUE NOT NULL,
secret VARCHAR(64) UNIQUE NOT NULL
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


=======
  CREATE TABLE organizations (
  organization_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  api_key VARCHAR(64) UNIQUE,
  secret VARCHAR(64) UNIQUE,
);


  CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15),
  mfa_method ENUM('sms', 'email'),
  staff_flag TINYINT DEFAULT 0,
  disable_login_flag TINYINT DEFAULT 0,
  organization_id INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (organization_id) REFERENCES organizations(organization_id)
);


CREATE TABLE audit (
  audit_id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  audit_type ENUM(
    'login_failed',
    'login_successful',
    'password_reset_requested',
    'password_reset_requested_user_account_not_found',
    'password_reset_confirmation_failed',
    'password_reset_confirmation_successful'
  ) NOT NULL,
  ip_address VARCHAR(45),
  user_id INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
)


>>>>>>> main
