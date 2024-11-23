use departments_employees_database;

CREATE TABLE departments (
    ID INT PRIMARY KEY,
    NAME VARCHAR(255),
    DEPARTMENT_NAME VARCHAR(255)
);

SELECT * FROM departments_employees_database.departments;

INSERT INTO departments (ID, NAME, DEPARTMENT_NAME) VALUES (1, 'Engineering', 'Software Development');
INSERT INTO departments (ID, NAME, DEPARTMENT_NAME) VALUES (2, 'Marketing', 'Digital Marketing');
INSERT INTO departments (ID, NAME, DEPARTMENT_NAME) VALUES (3, 'Finance', 'Accounting');

DELETE FROM departments WHERE ID = 1;