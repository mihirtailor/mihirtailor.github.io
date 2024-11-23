

-- To select a particular database
use bootcamp_database;

-- to create a database
CREATE database bootcamp_database;

-- to create a table
CREATE TABLE bootcamp_database.employees(
	employee_id INT NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NULL,
    status tinyint(1) DEFAULT 1
);
-- to select specific columns
select employee_id, first_name from bootcamp_database.employees;

-- to select everything from a column
SELECT * FROM bootcamp_database.employees;

-- insert query to insert data without column names
-- in this case we need to provide value for all the columns
INSERT INTO bootcamp_database.employees VALUES (2, "mihir", "tailor", 1);

-- insert data into specific column
INSERT INTO bootcamp_database.employees(employee_id, first_name, last_name) VALUES(2, "test", "user");

-- it's not case sensitivie 
INSERT INTO bootcamp_database.employees(employee_id, first_name, LAST_NAME) VALUES(3, "another", "testuser");


-- since first name can't be null this below query will not work
INSERT INTO bootcamp_database.employees(employee_id, LAST_NAME) VALUES(4, "balboa");

-- show multi insert
INSERT INTO bootcamp_database.employees(employee_id, first_name)
VALUES (5, "Mihir"), (6,"deepika"),(7, "faraneh"),(8, "darcey"),(9, "judith");

-- write a select statement that shows first name and last name from emoloyee table
select first_name, last_name from bootcamp_database.employees;

-- to arrane the result in a specific order
-- ascending/descending by id
select * from  employees
order by employee_id asc;

select * from  employees
order by employee_id desc;

-- ascending/descending by name
-- asc does it by default you dont' need to write
select * from  employees
order by first_name;

-- filteration of data by using where clause
select * from employees
where first_name = "faraneh";

-- where first name start with f
select * from employees
where first_name like "f%";

-- task 1 select all the employees whos name contain a letter "a"
select * from employees
where first_name like "a%";

select * from employees
where first_name like "%a%" or last_name like "%a%";

-- task 2 is to select all the employees whos last_name is empty
select * from employees
where last_name is null;

-- task 3 is select employees whos employee_id greater than 3 and last_name is empty
select * from employees
where employee_id > 3 and last_name is null;

-- update the last name where employee id is 5
set sql_safe_updates = 0;
update employees
set first_name = "william", last_name = "shakespeare", status=0
where employee_id = 5;
set sql_safe_updates=1;

-- update the last name for employees and set status to be 0
set sql_safe_updates = 0;
update employees
set first_name = "william", last_name = "shakespeare", status=0
where employee_id = 5;
set sql_safe_updates=1;

-- delete query
-- delete employee id with 6
set sql_safe_updates = 0;
delete from employees where employee_id = 6;
set sql_safe_updates=1;

-- delete employee whoes' status is 0
set sql_safe_updates = 0;
delete from employees where status=0;
set sql_safe_updates=1;

-- show how to add primary key, foreign key, auto increment
-- alter query
-- add column, drop column, modify column
-- inner join, left/right join
-- delete query

INSERT INTO bootcamp_database.employees (employee_id, first_name, last_name, status, salary, age)
VALUES 
(1, 'John', 'Doe', 1, 50000, 30),
(2, 'Jane', 'Smith', 1, 55000, 28),
(3, 'Mike', 'Johnson', 1, 52000, 35),
(4, 'Emily', 'Brown', 1, 48000, 26),
(5, 'David', 'Wilson', 1, 60000, 40);

select * from employees;

ALTER TABLE bootcamp_database.employees
ADD COLUMN department_id INT;

set sql_safe_updates = 0;
UPDATE bootcamp_database.employees
SET department_id = FLOOR(1 + RAND() * 3);
set sql_safe_updates=1;

SHOW CREATE TABLE bootcamp_database.employees;

DESCRIBE bootcamp_database.employees;










