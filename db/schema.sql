DROP DATABASE IF EXISTS characters_db;

CREATE DATABASE characters_db;

USE characters_db;

CREATE TABLE characters (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    race VARCHAR(15) NOT NULL,
	class VARCHAR(15) NOT NULL,
	level INT,
	hp INT,
	-- Idk what else to put...ability scores, by type??
);