
CREATE TABLE organizations (
  organization_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL
);


CREATE TABLE projects (
  project_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  api_key VARCHAR(64) UNIQUE,
  secret VARCHAR(64) UNIQUE,
  organization_id INT,
  FOREIGN KEY (organization_id) REFERENCES organizations(organization_id) ON DELETE CASCADE
);


 CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15),
  mfa_method ENUM('sms', 'email'),
  staff_flag TINYINT DEFAULT 0,
  disable_login_flag TINYINT DEFAULT 0,
  project_id INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
  UNIQUE(project_id, email)
);


CREATE TABLE audits (
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
  project_id INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);


CREATE TABLE refresh_tokens (
  token_id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id INT NOT NULL,
  project_id INT NOT NULL,
  token VARCHAR(255) NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
  UNIQUE(user_id, project_id)
);