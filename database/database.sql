CREATE DATABASE IF NOT EXISTS gamesdb_damc;
       USE gamesdb_damc;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    subtitle VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255),
    favorite BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);