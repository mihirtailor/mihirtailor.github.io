CREATE database angular_node_auth;
use angular_node_auth;

CREATE TABLE `angular_node_auth`.`new_table` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

RENAME TABLE angular_node_auth.new_table TO angular_node_auth.users;

ALTER TABLE angular_node_auth.users
MODIFY first_name VARCHAR(100) NOT NULL,
MODIFY last_name VARCHAR(100) NULL,
MODIFY email VARCHAR(100) NOT NULL,
MODIFY password VARCHAR(255) NOT NULL;


SELECT * FROM angular_node_auth.users;
