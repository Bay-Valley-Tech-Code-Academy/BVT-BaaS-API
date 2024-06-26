-- Seed data for the organization table
INSERT INTO organization (email, password, name)
VALUES
('org1@example.com', '$2b$10$e0NRbM2H/5K8xFkTxwEXXOQ93J9Wz7Q3/JXGsm5xLGeF6/Cvxg.', 'Organization One');

-- Seed data for the users table
INSERT INTO users (email, password, phone_number, mfa_method, staff_flag, disable_login_flag, organization_id)
VALUES
('john.doe@example.com', '$2b$10$e0NRbM2H/5K8xFkTxwEXXOQ93J9Wz7Q3/JXGsm5xLGeF6/Cvxg.', '1234567890', 'sms', 0, 0, 1),
('jane.smith@example.com', '$2b$10$EIX/4iBvwlbcBBVQNTw3/OZOyYQomj1HK3a/ZQp5K1y0N/B9O0mT2', '0987654321', 'email', 1, 0, 1),
('admin@example.com', '$2b$10$S4ZjbW56h/8.fkbE2uK9Eup3lB.C5Pms1EVYzT7Qk0X29Vr/KF.lK', '5551234567', 'sms', 1, 1, 1),
('alice.wonderland@example.com', '$2b$10$Xyz123Abc456Djk789Lmn123Opqr456Tuv789Wx', '3216549870', 'sms', 0, 0, 1),
('bob.builder@example.com', '$2b$10$Aop456Lmn123Def789Ghi456Jkl789Mno123Pqr', '6549873210', 'email', 0, 0, 1);