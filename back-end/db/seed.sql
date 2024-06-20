-- seed.sql

-- Insert users
INSERT INTO users (id, name, email, password, created_at) VALUES
(1, 'John Doe', 'john@example.com', 'password123', NOW()),
(2, 'Jane Smith', 'jane@example.com', 'password123', NOW()),
(3, 'Alice Johnson', 'alice@example.com', 'password123', NOW()),
(4, 'Bob Brown', 'bob@example.com', 'password123', NOW()),
(5, 'Emily Davis', 'emily@example.com', 'password123', NOW()),
(6, 'Michael Wilson', 'michael@example.com', 'password123', NOW()),
(7, 'Sarah Miller', 'sarah@example.com', 'password123', NOW()),
(8, 'David Martinez', 'david@example.com', 'password123', NOW()),
(9, 'Laura Garcia', 'laura@example.com', 'password123', NOW()),
(10, 'Daniel Anderson', 'daniel@example.com', 'password123', NOW());

-- Insert cars
INSERT INTO car (make, model, year, user_id, deleted_flag) VALUES
('Toyota', 'Corolla', 2021, 1, FALSE),
('Honda', 'Civic', 2020, 2, FALSE),
('Ford', 'Mustang', 2019, 3, FALSE),
('Chevrolet', 'Camaro', 2018, 4, FALSE),
('BMW', '3 Series', 2017, 5, FALSE),
('Mercedes-Benz', 'C-Class', 2021, 6, FALSE),
('Audi', 'A4', 2020, 7, FALSE),
('Volkswagen', 'Passat', 2019, 8, FALSE),
('Hyundai', 'Elantra', 2018, 9, FALSE),
('Nissan', 'Altima', 2017, 10, FALSE),
('Kia', 'Optima', 2016, 1, FALSE),
('Subaru', 'Impreza', 2015, 2, FALSE),
('Mazda', '3', 2014, 3, FALSE),
('Tesla', 'Model 3', 2022, 4, FALSE),
('Volvo', 'S60', 2021, 5, FALSE),
('Jaguar', 'XE', 2020, 6, FALSE),
('Lexus', 'IS', 2019, 7, FALSE),
('Acura', 'TLX', 2018, 8, FALSE),
('Infiniti', 'Q50', 2017, 9, FALSE),
('Genesis', 'G70', 2016, 10, FALSE);