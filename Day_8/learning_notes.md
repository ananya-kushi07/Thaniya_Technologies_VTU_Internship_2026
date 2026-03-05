# Backend Development – Day 8 Notes

## What is MongoDB?
MongoDB is a NoSQL database that stores data in JSON-like documents.

### Key Features
- Flexible schema
- High scalability
- Document-based storage
- Suitable for modern web applications

## MongoDB Data Structure

Database  
   └── Collection  
           └── Document  

Example:

Users (Collection)

{
  "name": "Srishti",
  "email": "srishti@email.com",
  "role": "admin"
}

## What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library for Node.js that provides a structured way to interact with MongoDB.

### Benefits of Mongoose
- Schema validation
- Easy CRUD operations
- Middleware support
- Cleaner code structure

## Schema vs Model

Schema → Defines structure of the document  
Model → Interface used to interact with the collection  

Example Flow:

Schema → Model → Database Collection

## Basic Operations Learned
- Connecting Node.js to MongoDB
- Creating Schema
- Creating Model
- Saving data to database
- Retrieving data

## Key Learning Outcome

Today’s learning helped me understand how backend applications store and manage data using databases. I also understood how Mongoose simplifies database operations and ensures structured data management.