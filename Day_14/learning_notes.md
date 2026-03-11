# Backend Development – Day 14 Notes

## What is Error Handling?

Error handling is the process of detecting, managing, and responding to errors that occur in an application.

Proper error handling ensures:
- Server stability
- Clear responses to clients
- Easier debugging

## Types of Errors

### Operational Errors
Examples:
- Invalid input
- Database connection failure

### Programming Errors
Examples:
- Syntax errors
- Undefined variables

## Error Handling in Express

Express provides a special middleware for handling errors.

Structure:

function (err, req, res, next)

This middleware catches errors and sends a proper response.

## Example Flow

Client Request → Route → Error Occurs → Error Middleware → Response Sent

## HTTP Status Codes for Errors

400 – Bad Request  
401 – Unauthorized  
404 – Not Found  
500 – Internal Server Error

## Learning Outcome

Today I learned how backend applications handle errors gracefully using Express middleware. This helps maintain application reliability and provides meaningful feedback to the frontend.