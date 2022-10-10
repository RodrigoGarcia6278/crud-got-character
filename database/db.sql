CREATE DATABASE crudgot;

use crudgot;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'spyXfam_11';
flush privileges;

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

SHOW TABLES;

describe customer;
