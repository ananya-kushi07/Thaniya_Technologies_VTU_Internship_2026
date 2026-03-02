# Backend Development – Day 3 Notes

## What is Middleware?

Middleware is a function that executes during the request-response cycle in Express.js.

It has access to:

- Request object (req)
- Response object (res)
- Next middleware function (next)

Middleware can:

- Modify requests
- Execute code
- End the request-response cycle
- Call the next middleware

## Types of Middleware

Application-level middleware  
Router-level middleware  
Built-in middleware  
Error-handling middleware

## Example Middleware
app.use((req, res, next) => {
console.log("Request received");
next();
});


This logs every incoming request before the route handler runs.

## Why Middleware is Important

- Logging requests
- Authentication
- Data validation
- Error handling

## Key Learnings

- Understanding request flow in Express
- Creating custom middleware
- Using middleware to process requests before responses