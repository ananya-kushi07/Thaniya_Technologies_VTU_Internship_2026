# Backend Development – Day 2 Notes

## What is Routing?

Routing refers to defining how a server responds to different client requests based on the URL and HTTP method.

Example:
- /users
- /products
- /login

Each route performs a specific task.

## Express Routing

Express provides simple methods to handle routes.

Common routing methods:

- app.get() → Retrieve data
- app.post() → Send data
- app.put() → Update data
- app.delete() → Delete data

Example:

app.get("/users", (req, res) => {
  res.send("User data fetched");
});

## What is an API?

API stands for Application Programming Interface.

APIs allow communication between:

Frontend ↔ Backend  
Backend ↔ Database

Most modern applications use **REST APIs**.

## REST API Basics

REST APIs use HTTP methods:

GET – Fetch data  
POST – Create new data  
PUT – Update existing data  
DELETE – Remove data

## Key Learnings

- How Express routing works
- How APIs handle requests and responses
- Importance of organized backend routes
- Understanding REST API structure