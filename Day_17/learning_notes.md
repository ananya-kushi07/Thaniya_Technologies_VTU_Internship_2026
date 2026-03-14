# Backend Development – Day 17 Notes

## CRUD Operations in MongoDB

CRUD stands for:

Create – Insert new data  
Read – Retrieve existing data  
Update – Modify existing data  
Delete – Remove data from the database

## MongoDB with Mongoose

Mongoose is an ODM (Object Data Modeling) library used with MongoDB in Node.js applications.

It helps:
- Define schemas
- Create models
- Perform database operations easily

## Common Mongoose Methods

save() – Insert new document  
find() – Retrieve documents  
findByIdAndUpdate() – Update document  
findByIdAndDelete() – Delete document

## API Endpoints Practiced

POST /products → Create product  
GET /products → Get all products  
PUT /products/:id → Update product  
DELETE /products/:id → Delete product

## Learning Outcome

Today I practiced implementing full CRUD operations using MongoDB and Express.js. This helped me understand how backend APIs interact with databases to store, retrieve, update, and delete application data.