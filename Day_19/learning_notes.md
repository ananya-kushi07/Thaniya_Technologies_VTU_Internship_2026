# Backend Development – Day 19 Notes

## What is Error Handling?

Error handling is the process of detecting and managing errors in an application.

## Why is it Important?

- Prevents server crashes
- Sends meaningful responses to clients
- Helps in debugging

## HTTP Status Codes

400 – Bad Request  
404 – Not Found  
500 – Internal Server Error  

## Error Handling in Express

Errors are handled using middleware with 4 parameters:

(err, req, res, next)

## Flow

Request → Route → Error → Error Middleware → Response

## Learning Outcome

Today I learned how to implement structured error handling in Express applications using middleware and HTTP status codes.