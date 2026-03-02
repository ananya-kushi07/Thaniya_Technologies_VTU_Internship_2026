# Backend Development – Day 4 Notes

## Data Handling in Backend

Backend applications are responsible for processing and storing data received from the client. This data is usually stored in databases such as MongoDB, MySQL, or PostgreSQL.

Before storing or processing data, the backend must ensure that the data is valid.

## What is Validation?

Validation is the process of checking whether the input data meets the required conditions.

Example checks:
- Required fields are present
- Email format is correct
- Data type is valid

Validation helps prevent incorrect or harmful data from entering the system.

## HTTP Status Codes

Status codes are used to indicate the result of a request.

Common status codes:

200 – Request successful  
201 – Resource created successfully  
400 – Bad request (invalid input)  
404 – Resource not found  
500 – Server error  

Using proper status codes helps frontend applications understand what happened during the request.

## Example Flow

Client → Sends user data  
Server → Validates the data  
Server → Stores the data  
Server → Sends response with appropriate status code

## Key Learnings

- Handling user data in backend applications
- Importance of validating input data
- Using HTTP status codes to communicate request results