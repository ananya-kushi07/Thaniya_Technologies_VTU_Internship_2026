# Backend Development – Day 12 Notes

## What is Middleware?

Middleware is a function that executes between the request and response cycle in an Express application.

Request → Middleware → Route Handler → Response

## Uses of Middleware

- Logging requests  
- Authentication and authorization  
- Data validation  
- Error handling  

## Types of Middleware

### Application Middleware
Used across the entire application.

### Router Middleware
Applied to specific routes.

### Built-in Middleware
Example: express.json()

### Third-party Middleware
Example: morgan, cors, body-parser

## Example Middleware

A logging middleware prints request method and URL whenever an API is called.

## Learning Outcome

Today I learned how middleware functions control the request flow in backend applications and help maintain organized and secure API handling.