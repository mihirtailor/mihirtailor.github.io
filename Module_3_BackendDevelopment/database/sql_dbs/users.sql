-- What are Data and Databases?
-- Data is a collection of facts, such as numbers, words, measurements, observations or even just descriptions of things.
-- A database is an organized collection of data.


-- What are Database Management Systems(DBMS)?
-- A database management system(DBMS) is a software package designed to define, manipulate, retrieve and manage data in a database.
-- There are different types of DBMS, such as: Hierarchical DBMS, Network DBMS, Relational DBMS, Object-oriented DBMS, Object-relational DBMS, etc.

-- What is relational database(RDBMS)?
-- This is essentially when we store data in tables. Each table is made up of rows and columns.

-- What is Hierarchical Database?
-- This is a type of database management system where data is stored in a tree structure.
-- Each node in the tree can have multiple children but only one parent.

-- What is Network Database?
-- This is a type of database management system where data is stored in a graph structure.

-- What is Object-oriented Database?
-- This is when data is stored in a way that is similar to how objects are stored in object-oriented programming.

-- What is NoSQL DMBS?
-- This is a type of database management system that is not relational. It is used to store data that is not structured in a traditional way.

-- What is SQL(Structured Query Language)?
-- This is a programming language used to communicate with a relational database.

-- What makes up a SQL Statement?
-- A SQL statement is made up of clauses, expresssion, predicates, queries and statements.
-- Queries are use to retrieve data from a database. They are made up clauses such as SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, etc.
-- Statements are use to perform actions on a database. They are made up of clauses such as CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, etc.
-- Predicates are used to filter data. They are made up of clauses such as WHERE, HAVING, etc.

-- What is MySQL?
-- This is a relational database management system(RDBMS) that is based on Structured Query Language(SQL).

-- Use a specific database for following queries
-- Data Definiton Language(DDL)
USE my_app_db;

-- Create users table
CREATE TABLE users (
    id INT,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT
);

-- Aleter users table
ALTER TABLE users
ADD password VARCHAR(255);

-- Modifying users table
ALTER TABLE users
MODIFY COLUMN name VARCHAR(255) NOT NULL;

-- Modifying column name in users table
ALTER TABLE users
CHANGE COLUMN name first_name VARCHAR(255);

-- Dropping users table
-- DROP TABLE users;

-- removing all data records from users table
-- TRUNCATE TABLE users;


-- What are the differnet types of data in sql?
-- INT: Integer
-- TINYINT: Tiny integer - like 0 or 1
-- VARCHAR: variable-length character String
-- CHAR: Fixed length string
-- Float and Double: Floating-point number, example 3.14
-- DATE: Format YYYY-MM-DD
-- TIME: Format HH:MM:SS
-- DATETIME: Format YYYY-MM-DD HH:MM:SS


-- Data Manipulation language(DML)
-- Inserting data into users table
INSERT INTO users(id,first_name, email, age, password)
VALUES(1, 'John', 'john@gmail.com', 25, '123456');

-- Inserting multiple data into users table
INSERT INTO users(id,first_name, email, age, password)
VALUES(2, 'Jane', 'jane@gmail.com', 25, '123456'),
      (3, 'Jack', 'jack@gmail.com', 25, '123456'),
      (4, 'Jill', 'jill@gmail.com', 25, '123456');

-- selecting all data from users table
SELECT * FROM users;

-- what is a primary key?
-- A primary key is a column or a set of columns that uniquely identifies each row in a table.

