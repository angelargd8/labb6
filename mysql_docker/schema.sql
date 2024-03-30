-- Create the database
CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_db.* TO 'blog_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL, 
    imagen MEDIUMTEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS funciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    funcion VARCHAR(255) NOT NULL,
    informacion TEXT NOT NULL,
);