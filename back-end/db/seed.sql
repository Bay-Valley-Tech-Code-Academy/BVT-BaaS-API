INSERT INTO organizations (email, password, name, api_key, secret)
VALUES
('org1@example.com', '$2b$10$e0NRbM2H/5K8xFkTxwEXXOQ93J9Wz7Q3/JXGsm5xLGeF6/Cvxg.', 'Organization One', 'a3b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6', 'd4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9');



INSERT INTO users (email, password, phone_number, mfa_method, staff_flag, disable_login_flag, organization_id)
VALUES
('john.doe@example.com', '$2b$10$e0NRbM2H/5K8xFkTxwEXXOQ93J9Wz7Q3/JXGsm5xLGeF6/Cvxg.', '1234567890', 'sms', 0, 0, 1),
('jane.smith@example.com', '$2b$10$EIX/4iBvwlbcBBVQNTw3/OZOyYQomj1HK3a/ZQp5K1y0N/B9O0mT2', '0987654321', 'email', 1, 0, 1),
('admin@example.com', '$2b$10$S4ZjbW56h/8.fkbE2uK9Eup3lB.C5Pms1EVYzT7Qk0X29Vr/KF.lK', '5551234567', 'sms', 1, 1, 1),
('alice.wonderland@example.com', '$2b$10$Xyz123Abc456Djk789Lmn123Opqr456Tuv789Wx', '3216549870', 'sms', 0, 0, 1),
('bob.builder@example.com', '$2b$10$Aop456Lmn123Def789Ghi456Jkl789Mno123Pqr', '6549873210', 'email', 0, 0, 1);


INSERT INTO audit (audit_type, ip_address, user_id, created_at)
VALUES
('login_successful', '192.168.1.1', 1, '2024-03-25 08:00:00'),
('login_failed', '192.168.1.2', 2, '2024-03-26 09:15:00'),
('login_successful', '192.168.1.3', 1, '2024-03-27 10:30:00'),
('login_successful', '192.168.1.4', 3, '2024-03-28 11:45:00'),
('login_failed', '192.168.1.5', 4, '2024-03-29 12:00:00'),
('login_successful', '192.168.1.6', 5, '2024-03-30 13:30:00'),
('login_successful', '192.168.1.7', 1, '2024-04-01 14:45:00'),
('login_failed', '192.168.1.8', 2, '2024-04-02 16:00:00'),
('login_successful', '192.168.1.9', 3, '2024-04-03 17:30:00'),
('login_successful', '192.168.1.10', 4, '2024-04-04 18:45:00'),
('login_failed', '192.168.1.11', 5, '2024-04-05 20:00:00'),
('login_successful', '192.168.1.12', 1, '2024-04-06 21:15:00'),
('login_successful', '192.168.1.13', 2, '2024-04-07 22:30:00'),
('login_failed', '192.168.1.14', 3, '2024-04-08 23:45:00'),
('login_successful', '192.168.1.15', 4, '2024-04-09 08:00:00'),
('login_successful', '192.168.1.16', 5, '2024-04-10 09:15:00'),
('login_failed', '192.168.1.17', 1, '2024-04-11 10:30:00'),
('login_successful', '192.168.1.18', 2, '2024-04-12 11:45:00'),
('login_successful', '192.168.1.19', 3, '2024-04-13 12:00:00'),
('login_failed', '192.168.1.20', 4, '2024-04-14 13:30:00'),
('login_successful', '192.168.1.21', 5, '2024-04-15 14:45:00'),
('login_successful', '192.168.1.22', 1, '2024-04-16 16:00:00'),
('login_failed', '192.168.1.23', 2, '2024-04-17 17:30:00'),
('login_successful', '192.168.1.24', 3, '2024-04-18 18:45:00'),
('login_successful', '192.168.1.25', 4, '2024-04-19 20:00:00'),
('login_failed', '192.168.1.26', 5, '2024-04-20 21:15:00'),
('login_successful', '192.168.1.27', 1, '2024-04-21 22:30:00'),
('login_successful', '192.168.1.28', 2, '2024-04-22 23:45:00'),
('login_failed', '192.168.1.29', 3, '2024-04-23 08:00:00'),
('login_successful', '192.168.1.30', 4, '2024-04-24 09:15:00');
