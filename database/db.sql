ALTER USER 'root'@'containers-us-west-93.railway.app' IDENTIFIED WITH mysql_native_password BY 'B6iGRiGx5oBT6LDGj3wM';
flush privileges;

CREATE DATABASE crudgot;

use crudgot;

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

SHOW TABLES;

describe customer;
