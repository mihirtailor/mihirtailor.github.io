CREATE DATABASE shopping;
USE shopping_database;

-- Create Categories table
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL
);

SELECT * FROM shopping_database.categories;

-- Create Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

SELECT * FROM shopping_database.products;

-- Create Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    quantity INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Insert dummy data
INSERT INTO categories (category_name) VALUES 
('Electronics'),
('Clothing'),
('Books'),
('Home & Kitchen');

INSERT INTO products (product_name, price, category_id) VALUES
('Smartphone', 799.99, 1),
('Laptop', 1299.99, 1),
('T-shirt', 29.99, 2),
('Novel', 19.99, 3),
('Coffee Maker', 89.99, 4),
('Headphones', 199.99, 1),
('Jeans', 59.99, 2),
('Cookbook', 24.99, 3);

INSERT INTO orders (product_id, quantity) VALUES
(1, 2),
(2, 1),
(1, 1),
(3, 3),
(5, 2),
(1, 1),
(6, 4),
(2, 1);

-- Query 1: Get all orders from most recent to oldest
SELECT o.order_id, p.product_name, o.quantity, o.order_date
FROM orders o
JOIN products p ON o.product_id = p.product_id
ORDER BY o.order_date DESC;

-- Query 2: Get all products in a particular category
SELECT p.product_name, p.price
FROM products p
JOIN categories c ON p.category_id = c.category_id
WHERE c.category_name = 'Electronics';

-- Query 3: Get top 3 most expensive products
SELECT product_name, price
FROM products
ORDER BY price DESC
LIMIT 3;

-- Query 4: Get total number of products per category
SELECT c.category_name, COUNT(p.product_id) as product_count
FROM categories c
LEFT JOIN products p ON c.category_id = p.category_id
GROUP BY c.category_name;

-- Query 5: Get top 3 selling products based on number of orders
SELECT p.product_name, COUNT(o.order_id) as order_count
FROM products p
JOIN orders o ON p.product_id = o.product_id
GROUP BY p.product_id, p.product_name
ORDER BY order_count DESC
LIMIT 3;
