# Department Employees API

A RESTful API built with Express.js and Sequelize ORM to manage departments and employees.

## Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- MySQL2

## Setup

1. Install dependencies:

````bash
npm install

2. Configure your database connection in `connection.js`

3. Start the server:
```bash
npm start

## API Endpoints

### Departments
- GET `/departments` - Get all departments
- GET `/departments/:id` - Get department by ID
- POST `/departments` - Create new department
- PUT `/departments/:id` - Update department
- DELETE `/departments/:id` - Delete department

### Employees
- GET `/employees` - Get all employees
- GET `/employees/:id` - Get employee by ID
- POST `/employees` - Create new employee
- PUT `/employees/:id` - Update employee
- DELETE `/employees/:id` - Delete employee

## Database Relations

The project uses a one-to-many relationship between Departments and Employees:
- One Department can have many Employees
- Each Employee belongs to one Department

## Project Structure

````
