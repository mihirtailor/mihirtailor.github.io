# Student API

A simple REST API for managing student records.

## Endpoints

- `GET /students` - Get all students
- `GET /students/:id` - Get student by ID
- `GET /students/section/:section` - Get students by section
- `POST /students/add_student` - Create new student
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

## Student Data Structure

```json
{
  "id": 1,
  "name": "John Doe",
  "section": "A",
  "gpa": 3.8,
  "nationality": "American"
}
```
