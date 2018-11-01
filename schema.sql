DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products(
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(20),
    department_name VARCHAR(20),
    price INTEGER,
    stock_quantity INTEGER,
    PRIMARY KEY(item_id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("apple", "produce", 2, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("banana", "produce", 5, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("eggplant", "produce", 50, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("orange", "produce", 4, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("grapes", "produce", 20, 15);

