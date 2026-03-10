# Backend Development – Day 13 Notes

## What is MVC Architecture?

MVC stands for:

Model – Represents the data structure  
View – Represents the user interface (usually frontend)  
Controller – Handles the business logic and processes requests  

In backend development, MVC helps organize code into separate layers.

## MVC Structure Used

project-folder

│
├── controllers
│   └── studentController.js
│
├── routes
│   └── studentRoutes.js
│
└── server.js

## Role of Each Component

Controller
- Contains logic for handling requests
- Processes data before sending response

Routes
- Defines API endpoints
- Connects HTTP requests to controller functions

Server
- Initializes Express application
- Uses routes and middleware

## API Endpoints Implemented

GET /students  
Retrieve all student records.

POST /students  
Add a new student.

DELETE /students/:id  
Delete a student using ID.

## Key Learning Outcome

Today I learned how to structure a backend API using the MVC approach and separate application logic into controllers and routes. This helps in building scalable and maintainable backend applications.