INSERT INTO organizations (email, password, name)
VALUES
('org1@example.com', '$2b$10$e0NRbM2H/5K8xFkTxwEXXOQ93J9Wz7Q3/JXGsm5xLGeF6/Cvxg.', 'Organization One');

INSERT INTO applications (name, organization_id, api_key, secret)
VALUES
('Application One', 1, 'b4c5d6e7f8g9h0a1b2c3d4e5f6a7b8c9', 'e7f8g9h0a1b2c3d4e5f6a7b8c9d0e1f2'),
('Application Two', 1, 'c5d6e7f8g9h0a1b2c3d4e5f6a7b8c9d0', 'f8g9h0a1b2c3d4e5f6a7b8c9d0e1f2a3'),
('Application Three', 1, 'd7e8f9g0a1b2c3d4e5f6a7b8c9d0e1f2', 'g0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5'),
('Application Four', 1, 'e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4', 'h1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6'),
('Application Five', 1, 'f1a2b3c4d5e6f7g8h9a0b1c2d3e4f5g6', 'i2b3c4d5e6f7g8h9a0b1c2d3e4f5g6h7'),
('Application Six', 1, 'g2b3c4d5e6f7g8h9a0b1c2d3e4f5g6h7', 'j3c4d5e6f7g8h9a0b1c2d3e4f5g6h7i8'),
('Application Seven', 1, 'h3c4d5e6f7g8h9a0b1c2d3e4f5g6h7i8', 'k4d5e6f7g8h9a0b1c2d3e4f5g6h7i8j9'),
('Application Eight', 1, 'i4d5e6f7g8h9a0b1c2d3e4f5g6h7i8j9', 'l5e6f7g8h9a0b1c2d3e4f5g6h7i8j9k0'),
('Application Nine', 1, 'j5e6f7g8h9a0b1c2d3e4f5g6h7i8j9k0', 'm6f7g8h9a0b1c2d3e4f5g6h7i8j9k0l1'),
('Application Ten', 1, 'k6f7g8h9a0b1c2d3e4f5g6h7i8j9k0l1', 'n7g8h9a0b1c2d3e4f5g6h7i8j9k0l1m2');

INSERT INTO users (email, password, phone_number, mfa_method, staff_flag, disable_login_flag, application_id)
VALUES
('john.doe@example.com', '$2b$10$e0NRbM2H/5K8xFkTxwEXXOQ93J9Wz7Q3/JXGsm5xLGeF6/Cvxg.', '1234567890', 'sms', 0, 0, 1),
('jane.smith@example.com', '$2b$10$EIX/4iBvwlbcBBVQNTw3/OZOyYQomj1HK3a/ZQp5K1y0N/B9O0mT2', '0987654321', 'email', 1, 0, 3),
('admin@example.com', '$2b$10$S4ZjbW56h/8.fkbE2uK9Eup3lB.C5Pms1EVYzT7Qk0X29Vr/KF.lK', '5551234567', 'sms', 1, 1, 5),
('alice.wonderland@example.com', '$2b$10$Xyz123Abc456Djk789Lmn123Opqr456Tuv789Wx', '3216549870', 'sms', 0, 0, 3),
('bob.builder@example.com', '$2b$10$Aop456Lmn123Def789Ghi456Jkl789Mno123Pqr', '6549873210', 'email', 0, 0, 2),
('charlie.brown@example.com', '$2b$10$UwLmn123Aop456Pqr789Xyz123Def456Ghi789', '9876543210', 'sms', 0, 1, 1),
('dora.explorer@example.com', '$2b$10$Jkl789Abc123Mno456Def789Pqr123Ghi456', '8765432109', 'email', 1, 0, 5),
('ernie.sesame@example.com', '$2b$10$Vwx123YzAop456Lmn789Def123Pqr456Ghi789', '7654321098', 'sms', 1, 1, 7),
('fred.flintstone@example.com', '$2b$10$Abc123Xyz456Ghi789Mno123Pqr456Def789', '6543210987', 'email', 0, 0, 8),
('george.jetson@example.com', '$2b$10$Xyz123Abc456Pqr789Mno123Def456Ghi789', '5432109876', 'sms', 1, 1, 9),
('harry.potter@example.com', '$2b$10$Pqr789Def123Xyz456Mno123Abc456Ghi789', '4321098765', 'email', 0, 0, 10),
('ian.fleming@example.com', '$2b$10$Mno123Abc456Pqr789Xyz456Ghi789Def123', '3210987654', 'sms', 0, 1, 4),
('jack.sparrow@example.com', '$2b$10$Def456Xyz123Pqr789Mno456Abc789Ghi123', '2109876543', 'email', 1, 1, 3),
('katniss.everdeen@example.com', '$2b$10$Pqr789Abc123Xyz456Def789Mno456Ghi123', '1098765432', 'sms', 0, 0, 3),
('luke.skywalker@example.com', '$2b$10$Xyz123Def456Pqr789Mno123Abc456Ghi789', '0987654321', 'email', 0, 1, 4),
('mario.bros@example.com', '$2b$10$Mno123Xyz456Abc789Pqr456Ghi123Def789', '9876543210', 'sms', 1, 0, 1),
('nemo.fish@example.com', '$2b$10$Abc123Xyz456Pqr789Mno456Ghi123Def789', '8765432109', 'email', 1, 1, 2),
('oliver.twist@example.com', '$2b$10$Ghi789Pqr123Mno456Abc789Xyz123Def456', '7654321098', 'sms', 0, 0, 8),
('patrick.star@example.com', '$2b$10$Mno123Xyz456Pqr789Abc123Def456Ghi789', '6543210987', 'email', 0, 1, 10),
('quincy.adams@example.com', '$2b$10$Abc123Xyz456Mno789Pqr456Def123Ghi789', '5432109876', 'sms', 1, 1, 9),
('ron.weasley@example.com', '$2b$10$Pqr789Def123Xyz456Abc789Mno456Ghi123', '4321098765', 'email', 0, 0, 6),
('shrek.ogre@example.com', '$2b$10$Mno123Abc456Pqr789Xyz456Ghi789Def123', '3210987654', 'sms', 0, 1, 7),
('tom.jerry@example.com', '$2b$10$Abc456Xyz789Pqr123Mno456Ghi789Def123', '2109876543', 'email', 1, 1, 3),
('ursula.sea@example.com', '$2b$10$Xyz123Pqr456Mno789Def123Abc456Ghi789', '1098765432', 'sms', 0, 0, 2),
('vader.darth@example.com', '$2b$10$Pqr789Xyz123Def456Mno123Abc456Ghi789', '0987654321', 'email', 1, 1, 1);


INSERT INTO audits (audit_type, ip_address, user_id, application_id, created_at)
VALUES
('login_successful', '192.168.1.1', 1, 1, '2024-03-25 08:00:00'),
('login_failed', '192.168.1.2', 2, 3, '2024-03-26 09:15:00'),
('login_successful', '192.168.1.3', 1, 5, '2024-03-27 10:30:00'),
('login_successful', '192.168.1.4', 3, 7, '2024-03-28 11:45:00'),
('login_failed', '192.168.1.5', 4, 6, '2024-03-29 12:00:00'),
('login_successful', '192.168.1.6', 5, 4, '2024-03-30 13:30:00'),
('login_successful', '192.168.1.7', 1, 8, '2024-04-01 14:45:00'),
('login_failed', '192.168.1.8', 2, 9, '2024-04-02 16:00:00'),
('login_successful', '192.168.1.9', 1, 10, '2024-04-03 17:30:00'),
('login_successful', '192.168.1.10', 4, 9, '2024-04-04 18:45:00'),
('login_failed', '192.168.1.11', 5, 1, '2024-04-05 20:00:00'),
('login_successful', '192.168.1.12', 1, 2, '2024-04-06 21:15:00'),
('login_successful', '192.168.1.13', 2, 3, '2024-04-07 22:30:00'),
('login_failed', '192.168.1.14', 3, 4, '2024-04-08 23:45:00'),
('login_successful', '192.168.1.15', 4, 6, '2024-04-09 08:00:00'),
('login_successful', '192.168.1.16', 5, 7, '2024-04-10 09:15:00'),
('login_failed', '192.168.1.17', 1, 6, '2024-04-11 10:30:00'),
('login_successful', '192.168.1.18', 8, 1, '2024-04-12 11:45:00'),
('login_successful', '192.168.1.19', 3, 9, '2024-04-13 12:00:00'),
('login_failed', '192.168.1.20', 4, 5, '2024-04-14 13:30:00'),
('login_successful', '192.168.1.21', 5, 4, '2024-04-15 14:45:00'),
('login_successful', '192.168.1.22', 1, 4, '2024-04-16 16:00:00'),
('login_failed', '192.168.1.23', 2, 3, '2024-04-17 17:30:00'),
('login_successful', '192.168.1.24', 3, 7, '2024-04-18 18:45:00'),
('login_successful', '192.168.1.25', 4, 8, '2024-04-19 20:00:00'),
('login_failed', '192.168.1.26', 5, 9, '2024-04-20 21:15:00'),
('login_successful', '192.168.1.27', 1, 10, '2024-04-21 22:30:00'),
('login_successful', '192.168.1.28', 2, 1, '2024-04-22 23:45:00'),
('login_failed', '192.168.1.29', 3, 2, '2024-04-23 08:00:00')