
## config MySQL connection to VSCode:

mysql -u root -p

CREATE USER 'sqluser'@'%' IDENTIFIED 
WITH mysql_native_password BY 'password' ;

GRANT ALL PRIVILEGES ON *.* TO 'sqluser'@'%' ;

FLUSH PRIVILEGES;


## Create a Database

CREATE DATABASE myrestaurant ;

CREATE TABLE IF NOT EXISTS myrestaurant.users(
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    phone VARCHAR(200),
    address VARCHAR(200),
    password VARCHAR(200) NOT NULL
);

INSERT INTO myrestaurant.users(name,phone,address,password)
VALUES
('Gaurav','123456789','Mumbai,India','pass134'),
('Sakshi','987654321','Chennai,India','pass456');