# Backend Development – Day 22 Notes

## What is CORS?

CORS (Cross-Origin Resource Sharing) is a mechanism that allows or restricts resources requested from another domain.

## Why CORS is Needed?

Browsers block requests when:
- Frontend and backend run on different ports
- Different domains are used

## Example

Frontend → http://localhost:3000  
Backend → http://localhost:5000  

This causes a CORS error without proper configuration.

## Enabling CORS

Using cors middleware:

app.use(cors());

## Restricting CORS

Allow only specific origin:

origin: "http://localhost:3000"

## Benefits

- Enables frontend-backend communication
- Improves API security
- Prevents unauthorized access

## Learning Outcome

Today I learned how to enable and control CORS in Express applications to allow secure cross-origin communication.