# Backend Development – Day 10 Notes

## What is MVC Architecture?

MVC stands for:

Model – Defines database structure  
View – Represents the UI layer (mostly frontend)  
Controller – Handles application logic  

In backend development, MVC helps organize code into separate components.

## MVC Structure

project-folder

│  
├── models  
│   └── userModel.js  
│  
├── controllers  
│   └── userController.js  
│  
├── routes  
│   └── userRoutes.js  
│  
└── server.js  

## Role of Each Component

### Model
- Defines schema
- Interacts with database

### Controller
- Contains logic for CRUD operations
- Communicates between routes and models

### Routes
- Defines API endpoints
- Connects HTTP requests to controllers

### Server
- Initializes Express
- Connects database
- Uses routes

## Benefits of MVC

- Clean code structure
- Easy debugging
- Reusable components
- Scalable for large applications

## Key Learning Outcome

Today I learned how backend applications are structured in professional environments using MVC architecture. This approach separates responsibilities and makes development more organized and maintainable.