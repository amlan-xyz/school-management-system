
# [School Management System](https://school-management-system-by-amlan.vercel.app)

## [Replit](https://replit.com/@theweird0ne/reduxtoolkit-student-management) (School Management API)
The School Management web application is a tool to help administrators to manage their students and teachers.

## Features
1. Student View: Displays a list of all students.
2. Class View : Displays a list of studenst based on the selected filters.
3. Teachers View : Displays a list of all the teachers.
4. School View : Displays the school stats.

## API Endpoints
The application also exposes the following API endpoints:

1. /students
- POST: Adds a new student.
- GET : Gets all students.
2. /students/:id
- PUT : Update student details
- DELETE : Deletes a student 
3. /teachers
- POST: Adds a new teacher.
- GET : Gets all teachers.
4. /teachers/:id
- PUT : Update teacher details
- DELETE : Deletes a teacher 

## Getting Started
To get started with the School Management web application, you can clone this repository and install the dependencies:
```
git clone https://github.com/theweird0ne/school-management-system.git
cd school-management-system
npm install
```
Then, you can start the development server:

```
npm start
```
The application will be running at http://localhost:3000

Contributing
Contributions are welcome! Please read the contribution guidelines: CONTRIBUTING.md for more information.

License
The Inventory Management web application is licensed under the MIT License.
