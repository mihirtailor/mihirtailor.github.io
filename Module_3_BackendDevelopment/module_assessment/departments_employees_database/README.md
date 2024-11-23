# Departments Employees Database

This database manages department and employee information.

## Database Structure

### Departments Table

- ID (Primary Key)
- NAME
- DEPARTMENT_NAME

### Employees Table

- ID (Primary Key)
- NAME
- DEPARTMENT_ID (Foreign Key)
- SALARY

## SQL Operations

The database includes operations for:

- Creating departments and employees tables
- Inserting department and employee records
- Viewing data from both tables
- Deleting records
- Managing relationships between departments and employees

## Usage

To use the database:

1. Connect to MySQL
2. Run the SQL scripts to create and populate tables
3. Execute queries to manage department and employee data

## Files

- `departments.sql` - Contains departments table creation and data manipulation queries
- `employees.sql` - Contains employees table creation and data manipulation queries
